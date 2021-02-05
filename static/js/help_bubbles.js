'use strict';

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content += require('ep_etherpad-lite/node/eejs/')
      .require('ep_help_bubbles/static/js/Bubble.js');
  args.content += require('ep_etherpad-lite/node/eejs/')
      .require('ep_help_bubbles/static/js/jquery.grumble.js');
  args.content += require('ep_etherpad-lite/node/eejs/')
      .require('ep_help_bubbles/static/js/help_bubbles_function.js');
  cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  args.content += require('ep_etherpad-lite/node/eejs/')
      .require('ep_help_bubbles/static/css/help_bubbles.css');
  cb();
};

exports.eejsBlock_editbarMenuRight = (hookName, args, cb) => {
  args.content = require('ep_etherpad-lite/node/eejs/')
      .require('ep_help_bubbles/templates/help_bubbles.ejs') + args.content;
  cb();
};
