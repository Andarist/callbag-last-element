import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import pkg from './package.json'

const loose = true

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.exports.module.browser,
      format: 'esm',
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              '@babel/preset-env',
              {
                loose,
                // this doesn't reflect the intention ideally
                // but is a good estimation of it for the time being
                targets: { esmodules: true },
                bugfixes: true,
              },
            ],
          ],
        }),
      ],
    },
    {
      file: pkg.exports.import,
      format: 'esm',
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              '@babel/preset-env',
              {
                loose,
                targets: { node: 12 },
              },
            ],
          ],
        }),
      ],
    },
    {
      file: pkg.exports.default,
      format: 'cjs',
      exports: 'named',
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              '@babel/preset-env',
              {
                loose,
                targets: { node: 12 },
              },
            ],
          ],
        }),
      ],
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              '@babel/preset-env',
              {
                loose,
              },
            ],
          ],
        }),
      ],
    },
    {
      file: pkg.module,
      format: 'esm',
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              '@babel/preset-env',
              {
                loose,
              },
            ],
          ],
        }),
      ],
    },
  ],
}
