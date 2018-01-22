/* eslint-disable */
module.exports = function (wallaby) {

  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!src/**/*.test.js?(x)'
    ],

    tests: [
        '__tests__/*.test.js?(x)' ,
        '__tests__/**/*.test.js?(x)' ,
        'src/**/*.test.js?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: [
          'react-native',
          'react-native-stage-0/decorator-support',
        ],
        plugins: [
          'transform-flow-strip-types',
          'transform-object-rest-spread',
          'transform-async-to-generator',
        ],
      }),
    },
    reportConsoleErrorAsError: true,


    setup: wallaby => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },

    testFramework: 'jest'
  };
};
