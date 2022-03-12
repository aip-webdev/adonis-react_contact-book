export const indexTemplate = (children, scripts) => ` 
<!DOCTYPE html>
<html lang="en">
        <head>
                <meta charSet="utf-8"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/resources/apple-touch-icon.png">
                <link rel="icon" type="image/png" sizes="32x32" href="/resources/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="/resources/favicon-16x16.png">
                <link rel="manifest" href="/resources/site.webmanifest">
           
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0"/>
                <meta name="theme-color" content="#000000"/>
                <title>Contacts</title>
        </head>
        <body>
                <div id="root">${children}</div>
                <div id="modal"></div>
                ${scripts}
        </body>
</html>
`;
