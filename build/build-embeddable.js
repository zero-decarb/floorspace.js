const { readFileSync, writeFileSync } = require('fs');
const distPath = './dist';
const srcPath = './src';

const webpack_output = readFileSync(distPath + '/index.html', { encoding: 'utf-8' });

const scripts = webpack_output.split('src=').slice(1).map(scriptChunk => {
  const jsPath = scriptChunk.split('></script>')[0];
  console.log(`Loading scripts from: ${jsPath}\n\n`);
  return readFileSync(distPath + jsPath, { encoding: 'utf-8' });
}).join('\n\t');

const css = webpack_output.split('<link href=').slice(1).map(linkChunk => {
  const cssPath = linkChunk.split(' rel=stylesheet>')[0];
  console.log(`loading styles from: ${cssPath}\n\n`);
  return readFileSync(distPath + cssPath, { encoding: 'utf-8' });
}).join('\n\n');

const baseHtml =
`<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>Floorspace JS</title>
        <style>
            ${css}
        </style>
    </head>

    <body>
        <div id=app></div>
`;
const standaloneHtml = baseHtml + `
    <script>${scripts}</script>
    </body>
</html>`

writeFileSync(distPath + '/standalone_geometry_editor.html', standaloneHtml);
console.log(`Loading floorspace.js API script from: ${srcPath + '/api.js'}\n\n`);
const apiScripts = readFileSync(srcPath + '/api.js', { encoding: 'utf-8' });

console.log(`Loading messaging.js API script from: ${srcPath + '/messaging.js'}\n\n`);
const messagingScripts = readFileSync(srcPath + '/messaging.js', { encoding: 'utf-8' });

const lodash = readFileSync('./node_modules/lodash/lodash.min.js', { encoding: 'utf-8' });

const embeddableHtml = baseHtml + `
    <script id="lodash">
        ${lodash}
    </script>
    <script id="startApp">
      window.startApp = function() {
        ${scripts}
      }
    </script>
    <script id="api"> ${apiScripts} </script>
    <script id="messaging"> ${messagingScripts} </script>
    </body>
</html>`;

writeFileSync(distPath + '/embeddable_geometry_editor.html', embeddableHtml);
