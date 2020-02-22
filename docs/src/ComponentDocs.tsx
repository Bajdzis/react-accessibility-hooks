import { MDXProvider, ComponentsProps } from '@mdx-js/react';
import * as React from 'react';

interface ComponentDocsProps {
    children: React.FC<{[key: string]: any}>;
}

const H1 = ({children}: ComponentsProps) => <h1>{children}</h1>;
const H2 = ({children}: ComponentsProps) => <h2>{children}</h2>;
const H3 = ({children}: ComponentsProps) => <h3>{children}</h3>;
const H4 = ({children}: ComponentsProps) => <h4>{children}</h4>;
const Div = ({children}: ComponentsProps) => <div>{children}</div>;

export const ComponentDocs: React.FC<ComponentDocsProps> = ({children}:ComponentDocsProps): React.ReactElement => {
    const Component = children;
    const components = {
        pre: Div,
        code: Div,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        wrapper: Div,
    };

    return (
        <div>
            <MDXProvider components={components}>
                <Component components={components} />
            </MDXProvider>
        </div>
    );
};
