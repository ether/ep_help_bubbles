exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content += require('ep_etherpad-lite/node/eejs/').require('ep_help_bubbles/static/js/Bubble.js');
  args.content += require('ep_etherpad-lite/node/eejs/').require('ep_help_bubbles/static/js/jquery.grumble.js');
  args.content += require('ep_etherpad-lite/node/eejs/').require('ep_help_bubbles/static/js/help_bubbles_function.js');
};

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content += require('ep_etherpad-lite/node/eejs/').require('ep_help_bubbles/static/css/help_bubbles.css');
};

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  args.content = require('ep_etherpad-lite/node/eejs/').require('ep_help_bubbles/templates/help_bubbles.ejs') + args.content;
};
