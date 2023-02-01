<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterFactorialsSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a sequence of [factorials][oeis-a000142].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [factorial][factorial-function] function may be defined as the product

<!-- <equation class="equation" label="eq:factorial_function" align="center" raw="n! = \prod_{k=1}^n k" alt="Factorial function definition"> -->

<div class="equation" align="center" data-raw-text="n! = \prod_{k=1}^n k" data-equation="eq:factorial_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/factorials/docs/img/equation_factorial_function.svg" alt="Factorial function definition">
    <br>
</div>

<!-- </equation> -->

or according to the recurrence relation

<!-- <equation class="equation" label="eq:factorial_recurrence_relation" align="center" raw="n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}" alt="Factorial function recurrence relation"> -->

<div class="equation" align="center" data-raw-text="n! = \begin{cases}1 &amp; \textrm{if } n = 0,\\(n-1)! \times n &amp; \textrm{if } n &gt; 1\end{cases}" data-equation="eq:factorial_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/factorials/docs/img/equation_factorial_recurrence_relation.svg" alt="Factorial function recurrence relation">
    <br>
</div>

<!-- </equation> -->

Following the convention for an [empty product][empty-product], in all definitions,

<!-- <equation class="equation" label="eq:zero_factorial" align="center" raw="0! = 1" alt="Zero factorial"> -->

<div class="equation" align="center" data-raw-text="0! = 1" data-equation="eq:zero_factorial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/factorials/docs/img/equation_zero_factorial.svg" alt="Zero factorial">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
iterFactorialsSeq = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-factorials@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var iterFactorialsSeq = require( 'path/to/vendor/umd/math-iter-sequences-factorials/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-factorials@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.iterFactorialsSeq;
})();
</script>
```

#### iterFactorialsSeq( \[options] )

Returns an iterator which generates a sequence of factorials.

```javascript
var it = iterFactorialsSeq();
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 6

v = it.next().value;
// returns 24

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterFactorialsSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-factorials@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterFactorialsSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/iter/special/factorial`][@stdlib/math/iter/special/factorial]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the factorial function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-factorials.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-factorials

[test-image]: https://github.com/stdlib-js/math-iter-sequences-factorials/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-sequences-factorials/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-factorials/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-factorials?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-factorials.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-factorials/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-factorials/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-factorials/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-factorials/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-sequences-factorials/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-factorials/main/LICENSE

[oeis-a000142]: https://oeis.org/A000142

[factorial-function]: https://en.wikipedia.org/wiki/Factorial

[empty-product]: https://en.wikipedia.org/wiki/Empty_product

<!-- <related-links> -->

[@stdlib/math/iter/special/factorial]: https://github.com/stdlib-js/math-iter-special-factorial/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
