import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'umd',
      sourcemap: true
    },
    {
      file: pkg.main.replace('.js', '.min.js'),
      name: pkg.name,
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true
    }),
    sourceMaps(),
    terser({
      include: [/^.+\.min\.js$/]
    })
  ]
};
