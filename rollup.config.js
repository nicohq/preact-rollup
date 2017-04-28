// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js-harmony';

const isProd = process.env.NODE_ENV === 'prod';

export default {
    entry: 'app/app.js',
    format: 'iife',
    plugins: [
        resolve({
            browser: true,
            modulesOnly: true,
            jsnext: true
        }),
        babel({
            babelrc: false,
            sourceMap: !isProd,
            exclude: 'node_modules/**', // only transpile our source code
            presets: [
                ["latest", { "es2015": { "modules": false } }]
            ],
            plugins: [
                ['transform-react-jsx', { pragma:'h' }]
            ]
        }),
        (isProd ? uglify({}, minify) : '')
    ],
    dest: 'dist/bundle.js',
    sourceMap: !isProd
};