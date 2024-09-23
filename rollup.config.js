import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/artsoven.js',
            format: 'cjs',
        },
        {
            file: 'dist/artsoven.esm.js',
            format: 'es',
        },
    ],
    plugins: [
        resolve(),
        postcss({
            plugins: [
                require('tailwindcss'),
                autoprefixer(),
                cssnano(),
            ],
            extract: 'dist/artsoven-ui.css', // Extract CSS to a file
            minimize: true, // Minify the CSS
        }),
    ],
};
