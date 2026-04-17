![Publish Status](https://github.com/ether/ep_help_bubbles/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_help_bubbles/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_help_bubbles/actions/workflows/test-and-release.yml)

See Useful help tips in the pad

![Screen shot](http://i.imgur.com/lvnKG7f.png)

Click the ? button to get tips about what button does what.

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_help_bubbles` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_help_bubbles
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
