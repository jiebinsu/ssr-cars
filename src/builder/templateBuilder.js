import serialize from "serialize-javascript";

const templateBuilder = ({ metaTitle, hydrateId, css, js, jsx, serverData }) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>${metaTitle}</title>
        <link rel="SHORTCUT ICON" href="https://cdn2.rcstatic.com/images/rclogo/blue/logomark-rclogo_32x32.png" type="image/x-icon">
        ${css}
      </head>
      <body>
        <div id="${hydrateId}">${jsx}</div>
        ${
          serverData &&
          `<script>window.__SERVER_DATA__ = ${serialize(serverData, { isJSON: true })}</script>`
        }
        ${js}
      </body>
    </html>`;

export default templateBuilder;
