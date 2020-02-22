import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import { ComponentDocs } from './src/ComponentDocs';
import { Html } from './src/Html';
// import { mdx } from '@mdx-js/react';
const mdx = require('@mdx-js/mdx');
const rootPath = path.resolve('./src/');

function fromDir(startPath: string, find: string[] = []){

    if (!fs.existsSync(startPath)){
        return find;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename, find); 
        }
        else if (filename.match(/\.([a-z]{2,2}).md$/) !== null) {
            find.push(filename);
        }
    }
    return find;
}

const markdownFiles = fromDir(rootPath);


// console.log({rootPath,markdownFiles});

markdownFiles.forEach(async (filepath) => {
    const content = fs.readFileSync(filepath).toString();
    const componentText: string = await mdx(content, {
        filepath,
    });
    const DEFAULT_RENDERER = `
    import * as React from 'react';
    import { MDXProviderProps, ComponentType } from '@mdx-js/react';
    
    interface MDXTagProps extends MDXProviderProps {
        name: ComponentType;
        parentName?: string;
        props?: {
            [key: string]: any
        }
    }
    
    const MDXTag = ({components, name, children}: MDXTagProps) => {
        const Component = components[name];
        if(!Component){
            return <></>;
        }
        return <Component>{children}</Component>;
    };
    
    `;
    fs.writeFileSync(filepath + '.tsx', 
    `${DEFAULT_RENDERER}\n${componentText}`.replace('export default ', 'export const Component: React.FC<MDXProviderProps> =').replace(', ...props}', ', ...props}:MDXProviderProps'));

    const { Component } = await import(filepath + '.tsx');

    console.log(filepath);
    console.log(Component);
    
    const html = renderToString(<Html lang="pl" markdown={content} title={"tile"}>
        <ComponentDocs>{Component}</ComponentDocs>
    </Html>);

    console.log(html);
    fs.writeFileSync(filepath + '.html', html);

});



