import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import html from '@rollup/plugin-html'
import json from '@rollup/plugin-json'

const htmlTemplate = ({ attributes, bundle, files, publicPath, title, links, metas, scripts }) => {
  return `
  <!DOCTYPE html>
    <html ${attributes}>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <script type='module' src='bundle.js'></script>
        <div id="root" style="width:600px;height:250px;"></div>
      </body>
    </html>
  `
}


export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [html({template: htmlTemplate}), resolve(), commonjs(), json(), babel({ babelHelpers: 'bundled' }), serve({ contentBase: 'dist', open: true })]
};