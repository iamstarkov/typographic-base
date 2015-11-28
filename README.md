# typographic-base

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> typography set for fixing common issues

This packages handles for you:

* quotes, apostrophes, ellipses, and spaces as well as dashes
* plus arrows, copyright, trademark, math and currency symbols

Can be used as [textr](https://github.com/shuvalov-anton/textr) plugin too.

## Install

    npm install --save typographic-base

## Usage

```js
import typographicBase from 'typographic-base';

typographicBase(`Hello -> "world"`, { locale: 'en-us' }); // Hello → “world”
```

## API

### typographicBase(input, options)

#### input

*Required*  
Type: `String`

Your text.

#### options

Type: `Object`  
Default: `{}`

Mainly because of `options.locale` importance. You know better which locale you text belongs to.

## Batteries included

This packages handles for you:

| Package           | Description                     | Example              |
| :---------------- | :------------------------------ | :------------------- |
| [`typographic-apostrophes`][apostrophes] | Apostrophes in contractions and for possessive case. | `rock'n'roll` → `rock’n’roll` |
| [`typographic-quotes`][quotes] |  Quotes for your text with respect to locale. | `"qoutes"` → `“qoutes”` |
| [`typographic-apostrophes-for-possessive-plurals`][plurals] | Apostrophes for possessive plurals. | `sisters'` → `sisters’` |
| [`typographic-arrows`][arrows] | Use real arrows. | `a <- b` → `a ← b` |
| [`typographic-copyright`][copyright] | Use real copyright symbol. | `(C)` → `©` |
| [`typographic-currency`][currency] | Use the correct symbol of currency. | `1usd` → `1$` |
| [`typographic-ellipses`][ellipses] | Avoid using periods and spaces. | `...` → `…` |
| [`typographic-em-dashes`][em] | Replaces `--` to em dash. | `--` → `—` |
| [`typographic-en-dashes`][en] | Safely replacing hyphens in a range of values with en dashes only. | `(1967-1994)` → `(1967–1994)` |
| [`typographic-math-symbols`][math] | Replaces alphabetic math symbols to real symbols. | `3 =< 2` → `3 ≤ 2` |
| [`typographic-registered-trademark`][registered] | Replaces alphabetic registered trademark to real symbol. | `(R)` → `®` |
| [`typographic-single-spaces`][spaces] | Replace many spaces to one space. | `one    two` → `one two` |
| [`typographic-trademark`][trademark] | Replaces alphabetic trademark to real symbol. | `(TM)` → `™` |

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)


[apostrophes]: https://github.com/iamstarkov/typographic-apostrophes
[quotes]: https://github.com/iamstarkov/typographic-quotes
[plurals]: https://github.com/iamstarkov/typographic-apostrophes-for-possessive-plurals
[arrows]: https://github.com/andrepolischuk/typographic-arrows
[copyright]: https://github.com/iamstarkov/typographic-copyright
[currency]: https://github.com/talgautb/typographic-currency
[ellipses]: https://github.com/iamstarkov/typographic-ellipses
[em]: https://github.com/iamstarkov/typographic-em-dashes
[en]: https://github.com/iamstarkov/typographic-en-dashes
[math]: https://github.com/iamstarkov/typographic-math-symbols
[registered]: https://github.com/iamstarkov/typographic-registered-trademark
[spaces]: https://github.com/iamstarkov/typographic-single-spaces
[trademark]: https://www.npmjs.com/package/typographic-trademark

[npm-url]: https://npmjs.org/package/typographic-base
[npm-image]: https://img.shields.io/npm/v/typographic-base.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/typographic-base
[travis-image]: https://img.shields.io/travis/iamstarkov/typographic-base.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/typographic-base
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/typographic-base.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/typographic-base
[depstat-image]: https://david-dm.org/iamstarkov/typographic-base.svg?style=flat-square
