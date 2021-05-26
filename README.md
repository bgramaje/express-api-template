## 🚀 Node.js Express API Template
> Basic template to get your project started from scratch! .


👨🏻‍💻 Hey coder! In this repository you will find a basic schema structure to start your own REST API. 
This schema is made by some best practices I encountered and think they are pretty usefull to make your code nicer and organized.👨🏻‍💻

### Built with 🛠️

_The following dependecies are used in this schema_

_Dependencies:_
* [cors](https://www.npmjs.com/package/cors) - Node.js CORS middleware
* [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from .env file
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework
* [helmet](https://www.npmjs.com/package/helmet) - Help secure Express/Connect apps with various HTTP headers
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token implementation (symmetric and asymmet
* [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js

_Developer dependencies:_
* [eslint](https://www.npmjs.com/package/eslint) - An AST-based pattern checker for JavaScript.
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) - Airbnb's base JS ESLint config, following our styleguide
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - Import with sanity.
* [mocha](https://www.npmjs.com/package/mocha) - Simple, flexible, fun test framework
* [nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during development of a node.js app.
* [supertest](https://www.npmjs.com/package/supertest) - SuperAgent driven library for testing HTTP servers
### Installation
1. Clone the repository
```sh
git clone https://github.com/boralbgra/express-api-template.git
```
2. Install dependecies
```sh
npm install
```
3. Run it!
```sh
npm run dev
```
### Folder structure

 .
    ├── ...
    ├── test                    # Test files (alternatively `spec` or `tests`)
    │   ├── benchmarks          # Load and stress tests
    │   ├── integration         # End-to-end, integration tests (alternatively `e2e`)
    │   └── unit                # Unit tests
    └── ...

_For more examples and usage, please refer to the [Wiki][wiki]._

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki