# typography-base

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

    npm install --save typography-base

## Usage

```js
import typographyBase from 'typography-base';

typographyBase(`Hello -> "world"`, { locale: 'en-us' }); // Hello → “world”
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

[npm-url]: https://npmjs.org/package/typography-base
[npm-image]: https://img.shields.io/npm/v/typography-base.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/typography-base
[travis-image]: https://img.shields.io/travis/iamstarkov/typography-base.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/typography-base
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/typography-base.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/typography-base
[depstat-image]: https://david-dm.org/iamstarkov/typography-base.svg?style=flat-square
