import etherpad from 'eslint-config-etherpad/flat/plugin.js';

export default [
  {
    // Third-party code, not linted (formerly .eslintignore).
    ignores: [
      'static/js/Bubble.js',
      'static/js/jquery.grumble.js',
      'static/js/help_bubbles_function.js',
    ],
  },
  ...etherpad,
];
