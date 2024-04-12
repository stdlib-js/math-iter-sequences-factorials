"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(F,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return x(r)?y(r,"iter")&&(e.iter=r.iter,!O(r.iter))?new TypeError(o('0a12t',"iter",r.iter)):null:new TypeError(o('0a12V',r));}s.exports=h
});var g=v(function(I,d){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=require('@stdlib/math-base-special-factorial/dist'),E=f(),P=1e308;function c(e){var r,t,u,n,i;if(r={iter:P},arguments.length&&(n=E(r,e),n))throw n;return i=-1,t={},a(t,"next",m),a(t,"return",q),l&&a(t,l,p),t;function m(){return i+=1,u||i>=r.iter?{done:!0}:{value:w(i),done:!1}}function q(b){return u=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}d.exports=c
});var T=g();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
