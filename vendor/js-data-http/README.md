<img src="https://raw.githubusercontent.com/js-data/js-data/master/js-data.png" alt="js-data logo" title="js-data" align="right" width="64" height="64" />

## js-data-http [![bower version](https://img.shields.io/bower/v/js-data-http.svg?style=flat-square)](https://www.npmjs.org/package/js-data-http) [![npm version](https://img.shields.io/npm/v/js-data-http.svg?style=flat-square)](https://www.npmjs.org/package/js-data-http) [![Circle CI](https://img.shields.io/circleci/project/js-data/js-data-http/master.svg?style=flat-square)](https://circleci.com/gh/js-data/js-data-http/tree/master) [![npm downloads](https://img.shields.io/npm/dm/js-data-http.svg?style=flat-square)](https://www.npmjs.org/package/js-data-http) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/js-data/js-data-http/blob/master/LICENSE)


http adapter for [js-data](http://www.js-data.io/).

### API Documentation
[DSHttpAdapter](http://www.js-data.io/docs/dshttpadapter)

__Latest Release:__ [![Latest Release](https://img.shields.io/github/release/js-data/js-data-http.svg?style=flat-square)](https://github.com/js-data/js-data-http/releases)

__Status:__

[![Coverage Status](https://img.shields.io/coveralls/js-data/js-data-http/master.svg?style=flat-square)](https://coveralls.io/r/js-data/js-data-http?branch=master) [![Codacity](https://img.shields.io/codacy/3931bbd8d838463297f70640aa78251b.svg?style=flat-square)](https://www.codacy.com/public/jasondobry/js-data-http/dashboard)

__Supported Platforms:__

[![node version](https://img.shields.io/badge/Node-0.10%2B-green.svg?style=flat-square)](https://github.com/js-data/js-data) [![browsers](https://img.shields.io/badge/Browser-Chrome%2CFirefox%2CSafari%2COpera%2CIE%209%2B%2CiOS%20Safari%207.1%2B%2CAndroid%20Browser%202.3%2B-green.svg?style=flat-square)](https://github.com/js-data/js-data)

### Quick Start
`bower install --save js-data js-data-http` or `npm install --save js-data js-data-http`.

Load `js-data-http.js` after `js-data.js`.

```js
var adapter = new DSHttpAdapter();

var store = new JSData.DS();
store.registerAdapter('http', adapter, { default: true });

// "store" will now use the http adapter for all async operations
```

### Changelog
[CHANGELOG.md](https://github.com/js-data/js-data-http/blob/master/CHANGELOG.md)

### Community
- [Gitter Channel](https://gitter.im/js-data/js-data) - Better than IRC!
- [Announcements](http://www.js-data.io/blog)
- [Mailing List](https://groups.io/org/groupsio/jsdata) - Ask your questions!
- [Issues](https://github.com/js-data/js-data-http/issues) - Found a bug? Feature request? Submit an issue!
- [GitHub](https://github.com/js-data/js-data-http) - View the source code for js-data.
- [Contributing Guide](https://github.com/js-data/js-data-http/blob/master/CONTRIBUTING.md)

### Contributing

First, support is handled via the [Gitter Channel](https://gitter.im/js-data/js-data) and the [Mailing List](https://groups.io/org/groupsio/jsdata). Ask your questions there.

When submitting issues on GitHub, please include as much detail as possible to make debugging quick and easy.

- good - Your versions of js-data, js-data-http, etc., relevant console logs/error, code examples that revealed the issue
- better - A [plnkr](http://plnkr.co/), [fiddle](http://jsfiddle.net/), or [bin](http://jsbin.com/?html,output) that demonstrates the issue
- best - A Pull Request that fixes the issue, including test coverage for the issue and the fix

[Github Issues](https://github.com/js-data/js-data-http/issues).

#### Submitting Pull Requests

1. Contribute to the issue/discussion that is the reason you'll be developing in the first place
1. Fork js-data-http
1. `git clone git@github.com:<you>/js-data-http.git`
1. `cd js-data-http; npm install; bower install;`
1. Write your code, including relevant documentation and tests
1. Run `grunt test` (build and test)
1. Your code will be linted and checked for formatting, the tests will be run
1. The `dist/` folder & files will be generated, do NOT commit `dist/*`! They will be committed when a release is cut.
1. Submit your PR and we'll review!
1. Thanks!

### License

The MIT License (MIT)

Copyright (c) 2014-2015 Jason Dobry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

