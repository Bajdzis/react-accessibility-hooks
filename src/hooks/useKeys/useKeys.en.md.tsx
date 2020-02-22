
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
    
    


export const Component: React.FC<MDXProviderProps> =({components, ...props}:MDXProviderProps) => <MDXTag name="wrapper"  components={components}><MDXTag name="h1" components={components}>{`useKeys`}</MDXTag>
<MDXTag name="p" components={components}>{`hooks for handler keyboard events.`}</MDXTag>
<MDXTag name="h2" components={components}>{`usage`}</MDXTag>
<MDXTag name="pre" components={components}><MDXTag name="code" components={components} parentName="pre" props={{"className":"language-jsx","metaString":""}}>{`const ESC_KEY = 27;

const HandleEscComponent= ({onEscPress}) => {
    useKeys([ESC_KEY], () => {
        console.log('Esc pressed!');
    });
    return <div>...</div>;
};
`}</MDXTag></MDXTag></MDXTag>