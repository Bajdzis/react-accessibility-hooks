declare module '@mdx-js/react' {
    import * as React from 'react';
    export type ComponentType =
        | 'a'
        | 'blockquote'
        | 'code'
        | 'delete'
        | 'em'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'hr'
        | 'img'
        | 'inlineCode'
        | 'li'
        | 'ol'
        | 'p'
        | 'pre'
        | 'strong'
        | 'sup'
        | 'table'
        | 'td'
        | 'thematicBreak'
        | 'tr'
        | 'ul'
        | 'wrapper';
    export type ComponentsProps = {
        children: React.ReactNode
    };
    export type Components = {
        [key in ComponentType]?: React.FC<ComponentsProps>
    }
    export interface MDXProviderProps {
        children: React.ReactNode
        components: Components
    }
    export class MDXProvider extends React.Component<MDXProviderProps> {}
    export function mdx (content: string, option: {
        [key: string]: any
    }): Promise<React.ReactNode>;

}