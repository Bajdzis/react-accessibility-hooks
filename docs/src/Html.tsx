import * as React from 'react';

interface HtmlProps {
    lang: string;
    children: React.ReactNode;
    title: string;
    markdown: string;
}

export const Html: React.FC<HtmlProps> = ({lang, title, children, markdown}: HtmlProps): React.ReactElement => (
    <html lang={lang}>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
            <title>{title}</title>
            <template id="markdown">
                {markdown}
            </template>
        </head>
        <body>
            <div id="app">
                {children}
            </div>
        </body>
    </html>
);
