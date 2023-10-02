// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(o):t(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,t,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(t=(-u).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=u.toString(r),u||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===a.call(e.specifier)?a.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,h,"$1e"),t=p.call(t,w,"e"),t=p.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),e.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===s.call(e.specifier)?s.call(t):l.call(t)}function j(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function A(e,r,n){var t=r-e.length;return t<0?e:e=n?e+j(t):j(t)+e}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,n,t,o,a,c,l,s,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,s=0;s<e.length;s++)if(f(t=e[s]))c+=t;else{if(r=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(a)?String(t.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,n,t,i;for(n=[],i=0,t=U.exec(e);t;)(r=e.slice(i,U.lastIndex-t[0].length)).length&&n.push(r),n.push(I(t)),i=U.lastIndex,t=U.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function F(e){return"string"==typeof e}function k(e){var r,n,t;if(!F(e))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=x(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var T,P=Object.prototype,V=P.toString,G=P.__defineGetter__,C=P.__defineSetter__,L=P.__lookupGetter__,$=P.__lookupSetter__;T=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(e,r)||$.call(e,r)?(t=e.__proto__,e.__proto__=P,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,n.get),a&&C&&C.call(e,r,n.set),e};var H=T;function M(e,r,n){H(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var R=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&R.call(e,r)}var B="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof B&&"symbol"==typeof B("foo")&&W(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;function X(e){return e!=e}var Y=Math.floor;function q(e){return Y(e)===e}var z=Number,D=z.NEGATIVE_INFINITY;function J(e){return Math.abs(e)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var ee=Object.prototype.toString;var re="function"==typeof B?B.toStringTag:"";var ne=Q()?function(e){var r,n,t;if(null==e)return ee.call(e);n=e[re],r=W(e,re);try{e[re]=void 0}catch(r){return ee.call(e)}return t=ee.call(e),r?e[re]=n:delete e[re],t}:function(e){return ee.call(e)},te="function"==typeof Uint32Array;var ie="function"==typeof Uint32Array?Uint32Array:null;var oe,ae="function"==typeof Uint32Array?Uint32Array:void 0;oe=function(){var e,r,n;if("function"!=typeof ie)return!1;try{r=new ie(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(te&&n instanceof Uint32Array||"[object Uint32Array]"===ne(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ae:function(){throw new Error("not implemented")};var ue=oe,fe="function"==typeof Float64Array;var ce="function"==typeof Float64Array?Float64Array:null;var le,se="function"==typeof Float64Array?Float64Array:void 0;le=function(){var e,r,n;if("function"!=typeof ce)return!1;try{r=new ce([1,3.14,-3.14,NaN]),n=r,e=(fe&&n instanceof Float64Array||"[object Float64Array]"===ne(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")};var pe=le,ve="function"==typeof Uint8Array;var ye="function"==typeof Uint8Array?Uint8Array:null;var ge,be="function"==typeof Uint8Array?Uint8Array:void 0;ge=function(){var e,r,n;if("function"!=typeof ye)return!1;try{r=new ye(r=[1,3.14,-3.14,256,257]),n=r,e=(ve&&n instanceof Uint8Array||"[object Uint8Array]"===ne(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")};var de=ge,we="function"==typeof Uint16Array;var he="function"==typeof Uint16Array?Uint16Array:null;var me,je="function"==typeof Uint16Array?Uint16Array:void 0;me=function(){var e,r,n;if("function"!=typeof he)return!1;try{r=new he(r=[1,3.14,-3.14,65536,65537]),n=r,e=(we&&n instanceof Uint16Array||"[object Uint16Array]"===ne(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?je:function(){throw new Error("not implemented")};var Ae,_e={uint16:me,uint8:de};(Ae=new _e.uint16(1))[0]=4660;var Ee=52===new _e.uint8(Ae.buffer)[0],Oe=!0===Ee?1:0,Ne=new pe(1),Se=new ue(Ne.buffer);function Ue(e){return Ne[0]=e,Se[Oe]}function Ie(e,r){var n,t,i,o;return i=(o=e*e)*o,t=o*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(o),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-e*r))}var xe=-.16666666666666632;function Fe(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(xe+i*n):e-(i*(.5*r-t*n)-r-t*xe)}var ke,Te,Pe=!0===Ee?0:1,Ve=new pe(1),Ge=new ue(Ve.buffer);!0===Ee?(ke=1,Te=0):(ke=0,Te=1);var Ce={HIGH:ke,LOW:Te},Le=new pe(1),$e=new ue(Le.buffer),He=Ce.HIGH,Me=Ce.LOW;function Re(e,r){return $e[He]=e,$e[Me]=r,Le[0]}var We=Number.POSITIVE_INFINITY;function Be(e){return e===We||e===D}var Ze,Xe;!0===Ee?(Ze=1,Xe=0):(Ze=0,Xe=1);var Ye={HIGH:Ze,LOW:Xe},qe=new pe(1),ze=new ue(qe.buffer),De=Ye.HIGH,Je=Ye.LOW;function Ke(e,r,n,t){return qe[0]=e,r[t]=ze[De],r[t+n]=ze[Je],r}function Qe(e){return Ke(e,[0,0],1,0)}M(Qe,"assign",Ke);var er=[0,0];function rr(e,r){var n,t;return Qe.assign(e,er,1,0),n=er[0],n&=2147483647,t=Ue(r),Re(n|=t&=2147483648,er[1])}function nr(e,r,n,t){return X(e)||Be(e)?(r[t]=e,r[t+n]=0,r):0!==e&&J(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}M((function(e){return nr(e,[0,0],1,0)}),"assign",nr);var tr=[0,0],ir=[0,0];function or(e,r){var n,t;return 0===r||0===e||X(e)||Be(e)?e:(nr(e,tr,1,0),r+=tr[1],r+=function(e){var r=Ue(e);return(r=(2146435072&r)>>>20)-1023|0}(e=tr[0]),r<-1074?rr(0,e):r>1023?e<0?D:We:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,Qe.assign(e,ir,1,0),n=ir[0],n&=2148532223,t*Re(n|=r+1023<<20,ir[1])))}function ar(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],cr=5.960464477539063e-8,lr=ar(20),sr=ar(20),pr=ar(20),vr=ar(20);function yr(e,r,n,t,i,o,a,u,f){var c,l,s,p,v,y,g,b,d;for(p=o,d=t[n],b=n,v=0;b>0;v++)l=cr*d|0,vr[v]=d-16777216*l|0,d=t[b-1]+l,b-=1;if(d=or(d,i),d-=8*Y(.125*d),d-=g=0|d,s=0,i>0?(g+=v=vr[n-1]>>24-i,vr[n-1]-=v<<24-i,s=vr[n-1]>>23-i):0===i?s=vr[n-1]>>23:d>=.5&&(s=2),s>0){for(g+=1,c=0,v=0;v<n;v++)b=vr[v],0===c?0!==b&&(c=1,vr[v]=16777216-b):vr[v]=16777215-b;if(i>0)switch(i){case 1:vr[n-1]&=8388607;break;case 2:vr[n-1]&=4194303}2===s&&(d=1-d,0!==c&&(d-=or(1,i)))}if(0===d){for(b=0,v=n-1;v>=o;v--)b|=vr[v];if(0===b){for(y=1;0===vr[o-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=ur[a+v],l=0,b=0;b<=u;b++)l+=e[b]*f[u+(v-b)];t[v]=l}return yr(e,r,n+=y,t,i,o,a,u,f)}}if(0===d)for(n-=1,i-=24;0===vr[n];)n-=1,i-=24;else(d=or(d,-i))>=16777216?(l=cr*d|0,vr[n]=d-16777216*l|0,i+=24,vr[n+=1]=l):vr[n]=0|d;for(l=or(1,i),v=n;v>=0;v--)t[v]=l*vr[v],l*=cr;for(v=n;v>=0;v--){for(l=0,y=0;y<=p&&y<=n-v;y++)l+=fr[y]*t[v+y];pr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=pr[v];for(r[0]=0===s?l:-l,l=pr[0]-l,v=1;v<=n;v++)l+=pr[v];return r[1]=0===s?l:-l,7&g}function gr(e,r,n,t){var i,o,a,u,f,c,l;for(4,(o=(n-3)/24|0)<0&&(o=0),u=n-24*(o+1),c=o-(a=t-1),l=a+4,f=0;f<=l;f++)lr[f]=c<0?0:ur[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=e[c]*lr[a+(f-c)];sr[f]=i}return 4,yr(e,r,4,sr,u,4,o,a,lr)}var br=Math.round;function dr(e,r,n){var t,i,o,a,u;return o=e-1.5707963267341256*(t=br(.6366197723675814*e)),a=6077100506506192e-26*t,u=r>>20|0,n[0]=o-a,u-(Ue(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=o)-(o=i-(a=6077100506303966e-26*t))-a),n[0]=o-a,u-(Ue(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=o)-(o=i-(a=20222662487111665e-37*t))-a),n[0]=o-a)),n[1]=o-n[0]-a,t}var wr=1.5707963267341256,hr=6077100506506192e-26,mr=2*hr,jr=4*hr,Ar=[0,0,0],_r=[0,0];function Er(e,r){var n,t,i,o,a,u,f;if((i=2147483647&Ue(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?dr(e,i,r):i<=1073928572?e>0?(f=e-wr,r[0]=f-hr,r[1]=f-r[0]-hr,1):(f=e+wr,r[0]=f+hr,r[1]=f-r[0]+hr,-1):e>0?(f=e-2*wr,r[0]=f-mr,r[1]=f-r[0]-mr,2):(f=e+2*wr,r[0]=f+mr,r[1]=f-r[0]+mr,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?dr(e,i,r):e>0?(f=e-3*wr,r[0]=f-1.8231301519518578e-10,r[1]=f-r[0]-1.8231301519518578e-10,3):(f=e+3*wr,r[0]=f+1.8231301519518578e-10,r[1]=f-r[0]+1.8231301519518578e-10,-3):1075388923===i?dr(e,i,r):e>0?(f=e-4*wr,r[0]=f-jr,r[1]=f-r[0]-jr,4):(f=e+4*wr,r[0]=f+jr,r[1]=f-r[0]+jr,-4);if(i<1094263291)return dr(e,i,r);if(i>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Ve[0]=e,Ge[Pe]}(e),f=Re(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)Ar[a]=0|f,f=16777216*(f-Ar[a]);for(Ar[2]=f,o=3;0===Ar[o-1];)o-=1;return u=gr(Ar,_r,t,o),e<0?(r[0]=-_r[0],r[1]=-_r[1],-u):(r[0]=_r[0],r[1]=_r[1],u)}var Or=[0,0];var Nr=3.141592653589793;function Sr(e){return q(e/2)}function Ur(e){return Sr(e>0?e-1:e+1)}var Ir=Math.sqrt,xr=!0===Ee?0:1,Fr=new pe(1),kr=new ue(Fr.buffer);function Tr(e,r){return Fr[0]=e,kr[xr]=r>>>0,Fr[0]}function Pr(e){return 0|e}var Vr=!0===Ee?1:0,Gr=new pe(1),Cr=new ue(Gr.buffer);function Lr(e,r){return Gr[0]=e,Cr[Vr]=r>>>0,Gr[0]}var $r=[1,1.5],Hr=[0,.5849624872207642],Mr=[0,1.350039202129749e-8];var Rr=1e300,Wr=1e-300,Br=[0,0],Zr=[0,0];function Xr(e,r){var n,t,i,o,a,u,f,c,l,s,p,v,y,g;if(X(e)||X(r))return NaN;if(Qe.assign(r,Br,1,0),a=Br[0],0===Br[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Ir(e);if(-.5===r)return 1/Ir(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(Be(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:J(e)<1==(r===We)?0:We}(e,r)}if(Qe.assign(e,Br,1,0),o=Br[0],0===Br[1]){if(0===o)return function(e,r){return r===D?We:r===We?0:r>0?Ur(r)?e:0:Ur(r)?rr(We,e):We}(e,r);if(1===e)return 1;if(-1===e&&Ur(r))return-1;if(Be(e))return e===D?Xr(-0,-r):r<0?0:We}if(e<0&&!1===q(r))return(e-e)/(e-e);if(i=J(e),n=2147483647&o|0,t=2147483647&a|0,f=a>>>31|0,u=(u=o>>>31|0)&&Ur(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(2147483647&Ue(e))<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===f?u*Rr*Rr:u*Wr*Wr;if(n>1072693248)return 0===f?u*Rr*Rr:u*Wr*Wr;p=function(e,r){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=r-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Tr(t=(o=1.4426950216293335*i)+a,0))-o),e[0]=t,e[1]=n,e}(Zr,i)}else p=function(e,r,n){var t,i,o,a,u,f,c,l,s,p,v,y,g,b,d,w,h,m,j,A,_;return m=0,n<1048576&&(m-=53,n=Ue(r*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=1048576),a=Tr(i=(w=(r=Lr(r,n))-(c=$r[A]))*(h=1/(r+c)),0),t=524288+(n>>1|536870912),f=Lr(0,t+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Tr(f=3+(o=a*a)+(d+=(u=h*(w-a*f-a*(r-(f-c))))*(a+i)),0),g=(v=-7.028461650952758e-9*(s=Tr(s=(w=a*f)+(h=u*f+(d-(f-3-o))*i),0))+.9617966939259756*(h-(s-w))+Mr[A])-((y=Tr(y=(p=.9617967009544373*s)+v+(l=Hr[A])+(b=m),0))-b-l-p),e[0]=y,e[1]=g,e}(Zr,i,n);if(v=(s=(r-(c=Tr(r,0)))*p[0]+r*p[1])+(l=c*p[0]),Qe.assign(v,Br,1,0),y=Pr(Br[0]),g=Pr(Br[1]),y>=1083179008){if(0!=(y-1083179008|g))return u*Rr*Rr;if(s+8008566259537294e-32>v-l)return u*Rr*Rr}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|g))return u*Wr*Wr;if(s<=v-l)return u*Wr*Wr}return v=function(e,r,n){var t,i,o,a,u,f,c,l,s,p,v;return p=((s=2147483647&e|0)>>20)-1023|0,l=0,s>1071644672&&(t=((l=e+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,e<0&&(l=-l),r-=o=Lr(0,t)),e=Pr(e=Ue(c=1-((c=(a=.6931471824645996*(o=Tr(o=n+r,0)))+(u=.6931471805599453*(n-(o-r))+-1.904654299957768e-9*o))*(i=c-(o=c*c)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-a))+c*f)-c))),(e+=l<<20>>>0)>>20<=0?or(c,l):Lr(c,e)}(y,l,s),u*v}var Yr=Math.ceil;function qr(e){return e<0?Yr(e):Y(e)}function zr(e){var r;return X(e)||e===We?e:e===D?0:e>709.782712893384?We:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(e,r,n){var t,i,o,a;return or(1-(r-(t=e-r)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-e),n)}(e-.6931471803691238*(r=qr(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*r,r)}function Dr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=zr(e),2.5066282746310007*(n=e>143.01608?(t=Xr(e,.5*e-.25))*(t/n):Xr(e,e-.5)/n)*r}function Jr(e,r){return r/((1+.5772156649015329*e)*e)}function Kr(e){var r,n,t,i;if(q(e)&&e<0||e===D||X(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===D}(e)?D:We;if(e>171.61447887182297)return We;if(e<-170.5674972726612)return 0;if((n=J(e))>33)return e>=0?Dr(e):(r=0==(1&(t=Y(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(e){var r;if(r=Ue(e),(r&=2147483647)<=1072243195)return r<1045430272?e:Fe(e,0);if(r>=2146435072)return NaN;switch(3&Er(e,Or)){case 0:return Fe(Or[0],Or[1]);case 1:return Ie(Or[0],Or[1]);case 2:return-Fe(Or[0],Or[1]);default:return-Ie(Or[0],Or[1])}}(Nr*i),r*Nr/(J(i)*Dr(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return Jr(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return Jr(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var Qr=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function en(e){return X(e)?NaN:q(e)?e<0?NaN:e<=170?Qr[e]:We:Kr(e+1)}var rn=Array.isArray?Array.isArray:function(e){return"[object Array]"===ne(e)};var nn=/./;function tn(e){return"boolean"==typeof e}var on=Boolean,an=Boolean.prototype.toString;var un=Q();function fn(e){return"object"==typeof e&&(e instanceof on||(un?function(e){try{return an.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ne(e)))}function cn(e){return tn(e)||fn(e)}function ln(){return new Function("return this;")()}M(cn,"isPrimitive",tn),M(cn,"isObject",fn);var sn="object"==typeof self?self:null,pn="object"==typeof window?window:null,vn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yn="object"==typeof vn?vn:null,gn="object"==typeof globalThis?globalThis:null;var bn=function(e){if(arguments.length){if(!tn(e))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ln()}if(gn)return gn;if(sn)return sn;if(pn)return pn;if(yn)return yn;throw new Error("unexpected error. Unable to resolve global object.")}(),dn=bn.document&&bn.document.childNodes,wn=Int8Array;function hn(){return/^\s*function\s*([^(]*)/i}var mn=/^\s*function\s*([^(]*)/i;function jn(e){return null!==e&&"object"==typeof e}function An(e){var r,n,t,i;if(("Object"===(n=ne(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=mn.exec(t.toString()))return r[1]}return jn(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}M(hn,"REGEXP",mn),M(jn,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,t;if(!rn(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(jn));var _n="function"==typeof nn||"object"==typeof wn||"function"==typeof dn?function(e){return An(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?An(e).toLowerCase():r};function En(e){return"function"===_n(e)}var On,Nn=Object,Sn=Object.getPrototypeOf;On=En(Object.getPrototypeOf)?Sn:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===ne(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Un=On;var In=Object.prototype;function xn(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!rn(e)}(e)&&(r=function(e){return null==e?null:(e=Nn(e),Un(e))}(e),!r||!W(e,"constructor")&&W(r,"constructor")&&En(r.constructor)&&"[object Function]"===ne(r.constructor)&&W(r,"isPrototypeOf")&&En(r.isPrototypeOf)&&(r===In||function(e){var r;for(r in e)if(!W(e,r))return!1;return!0}(e)))}function Fn(e){return"number"==typeof e}var kn=z.prototype.toString;var Tn=Q();function Pn(e){return"object"==typeof e&&(e instanceof z||(Tn?function(e){try{return kn.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ne(e)))}function Vn(e){return Fn(e)||Pn(e)}function Gn(e){return e<We&&e>D&&q(e)}function Cn(e){return Fn(e)&&Gn(e)}function Ln(e){return Pn(e)&&Gn(e.valueOf())}function $n(e){return Cn(e)||Ln(e)}function Hn(e){return Cn(e)&&e>=0}function Mn(e){return Ln(e)&&e.valueOf()>=0}function Rn(e){return Hn(e)||Mn(e)}function Wn(){var e,r=arguments,n=r[0],t="https://stdlib.io/e/"+n+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function Bn(e,r){return xn(r)?W(r,"iter")&&(e.iter=r.iter,!Hn(r.iter))?new TypeError(Wn("0a12t,G9","iter",r.iter)):null:new TypeError(Wn("0a12V,FD",r))}M(Vn,"isPrimitive",Fn),M(Vn,"isObject",Pn),M($n,"isPrimitive",Cn),M($n,"isObject",Ln),M(Rn,"isPrimitive",Hn),M(Rn,"isObject",Mn);var Zn=1e308;function Xn(e){var r,n,t,i,o;if(r={iter:Zn},arguments.length&&(i=Bn(r,e)))throw i;return o=-1,M(n={},"next",a),M(n,"return",u),Z&&M(n,Z,f),n;function a(){return o+=1,t||o>=r.iter?{done:!0}:{value:en(o),done:!1}}function u(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return Xn(r)}}export{Xn as default};
//# sourceMappingURL=mod.js.map
