import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';


export default {
    input: 'hw2/scripts/script.ts',
    output: { file: 'dist/bundle.js' },
    plugins: [
        typescript(),
        nodeResolve({ browser: true }),
        commonjs(),
        terser()
    ]
}
