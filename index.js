/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel')
const Rollup = require('broccoli-rollup');
const path = require('path');

module.exports = {
  name: 'ember-a-frame',

  // postprocessTree(type, tree) {
  //   if (type === 'all') {
  //     console.log(path.dirname(require.resolve('aframe')));
  //     let aframeTree = new Rollup(this.treeGenerator(path.dirname(require.resolve('aframe'))), {
  //       inputFiles: '**/*.js',
  //       rollup: {
  //         entry: 'index.js',
  //         dest: 'aframe.js'
  //       }
  //     });
  //     return mergeTrees([aframeTree, tree], { overwrite: true });
  //   }

  //   return tree;
  // }
};
