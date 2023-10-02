// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0a12t,G9","iter",t.iter)):null:new TypeError(o("0a12V,FD",t))}var m=1e308;function l(n){var s,i,o,p,a;if(s={iter:m},arguments.length&&(p=d(s,n)))throw p;return a=-1,e(i={},"next",j),e(i,"return",h),t&&e(i,t,v),i;function j(){return a+=1,o||a>=s.iter?{done:!0}:{value:r(a),done:!1}}function h(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return l(s)}}export{l as default};
//# sourceMappingURL=index.mjs.map