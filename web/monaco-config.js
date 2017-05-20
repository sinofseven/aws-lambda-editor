let editor;
const rulers = [];
const ruler_step = 4;
const ruler_num = 100;
for(let i = 0; i < ruler_num; i++){
  const num = ruler_step * (i + 1);
  rulers.push(num);
}
const tmpHeight = window.innerHeight - 160 - 56;
const height = tmpHeight <= 0? 600: tmpHeight;
const frame = document.getElementById('editor');
frame.setAttribute("style", `height: ${height}px`);

require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
  editor = monaco.editor.create(document.getElementById('editor'), {
    value: [
      "'use strict';",
      "",
      "exports.handler = (event, context, callback) => {",
      '    callback(null, "Hello World");',
      '};'
    ].join('\n'),
    language: 'javascript',
    theme: "vs-dark",
    scrollBeyondLastLine: false,
    useTabStops: false,
    rulers: rulers,
    renderWhitespace: 'boundary'
  });
});
