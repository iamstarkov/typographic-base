# typographic-base

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> typography set for fixing common issues

This packages handles for you:

* quotes, apostrophes, ellipses, and spaces as well as dashes
* plus arrows, copyright, trademark, math and currency symbols

Can be used as [textr][https://github.com/shuvalov-anton/textr] plugin too.

## Install

    npm install --save typographic-base

## Usage

```js
import typographicBase from 'typographic-base';

typographicBase(`Hello -> "world"`, { locale: 'en-us' }); // Hello → “world”
```

## API

### typographyBase(input, options)

#### input

*Required*  
Type: `String`

Your text.

#### options

Type: `Object`  
Default: `{}`

Mainly because of `options.locale` importance. You know better which locale you text belongs to.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/typographic-base
[npm-image]: https://img.shields.io/npm/v/typographic-base.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/typographic-base
[travis-image]: https://img.shields.io/travis/iamstarkov/typographic-base.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/typographic-base
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/typographic-base.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/typographic-base
[depstat-image]: https://david-dm.org/iamstarkov/typographic-base.svg?style=flat-square
