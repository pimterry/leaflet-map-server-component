/**
 * This module exports a wrapped version of Leaflet. The export value is a function
 * which takes a window and document, and returns an instance of Leaflet for that
 * environment.
 */

var SandboxedModule = require('sandboxed-module');
module.exports = SandboxedModule.require('leaflet', {
  sourceTransformers: {
      wrapToInjectGlobals: function (source) {
        return `
        module.exports = function (window, document) {
          var navigator = window.navigator;

          ${source}

          return window.L.noConflict();
        }`;
      }
  }
});
