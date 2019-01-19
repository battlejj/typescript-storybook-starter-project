import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import rimraf from 'rimraf'
import path from 'path'

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: './dist/index.js',
      format: 'cjs',
    },
    name: 'My Library',
    external: ['react', 'react-proptypes'],
    plugins: [
      cleanDirectoriesPlugin({
        directories: ['./dist/', './build'],
      }),
      typescript(),
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs(),
    ],
  },
]

/*
All of this can be ignored, it's just a quick rollup plugin
for cleaning up our directories when we build
*/
const removeDirectory = directory => {
  try {
    const normalizedPath = path.normalize(directory)
    console.log('Attemping to clean path: ', directory)
    rimraf.sync(normalizedPath)
    console.log('Successfully cleaned path: ', directory)
  } catch (e) {
    console.log('Unable to remove path', normalizedPath)
    console.log('ERROR:', e)
  }
}

const cleanDirectories = (directories = []) => {
  if (Array.isArray(directories)) {
    directories.forEach(directory => removeDirectory(directory))
  }

  if (typeof directories === 'string') {
    removeDirectory(directories)
  }
}

function cleanDirectoriesPlugin(options = {}) {
  const directories =
    options &&
    options.directories &&
    (Array.isArray(options.directories) || Array.isArray(options.directories))
      ? options.directories
      : []
  return {
    name: 'cleanDirectories',
    generateBundle: () => cleanDirectories(directories),
  }
}
