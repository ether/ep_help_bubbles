'use strict';

const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_embedPopup = (hookName, args, cb) => {
  args.content += eejs.require('ep_help_bubbles/templates/embedButtons.html');
  cb();
};

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content += eejs.require('ep_help_bubbles/templates/scripts.html', {}, module);
  cb();
};
