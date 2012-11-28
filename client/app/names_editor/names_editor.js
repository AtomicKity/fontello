/*global $, ko, N*/


'use strict';


var render = require('@/lib/render/client');


module.exports.init = function () {
  N.once('fonts_ready', function (fontsList) {
    $(function () {
      var $view = $(render('app.names_editor')).appendTo('#names-editor');

      //
      // Bind model and view
      //

      ko.applyBindings(fontsList, $view.get(0));
    });
  });
};
