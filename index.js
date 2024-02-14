// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFactorialsSeq=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(o):t(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(e){var r,t,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,a=parseInt(t,10),!isFinite(a)){if(!n(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(t=(-a).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=a.toString(r),a||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,h,"e"),t=p.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),e.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)}function j(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function A(e,r,n){var t=r-e.length;return t<0?e:e=n?e+j(t):j(t)+e}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,n,t,o,u,c,s,l,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,l=0;l<e.length;l++)if(f(t=e[l]))c+=t;else{if(r=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=a(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(u)?String(t.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,n,t,i;for(n=[],i=0,t=U.exec(e);t;)(r=e.slice(i,U.lastIndex-t[0].length)).length&&n.push(r),n.push(x(t)),i=U.lastIndex,t=U.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function I(e){return"string"==typeof e}function T(e){var r,n;if(!I(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return S.apply(null,r)}var k,P=Object.prototype,V=P.toString,G=P.__defineGetter__,L=P.__defineSetter__,$=P.__lookupGetter__,C=P.__lookupSetter__;k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,o,u;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(e,r)||C.call(e,r)?(t=e.__proto__,e.__proto__=P,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,n.get),u&&L&&L.call(e,r,n.set),e};var H=k;function M(e,r,n){H(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Object.prototype.hasOwnProperty;function B(e,r){return null!=e&&W.call(e,r)}var R="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof R&&"symbol"==typeof R("foo")&&B(R,"iterator")&&"symbol"==typeof R.iterator?Symbol.iterator:null;var X=Math.floor;function q(e){return X(e)===e}var Y=Number,z=Y.NEGATIVE_INFINITY;function D(e){return Math.abs(e)}var J=2147483647,K=2146435072;var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ee(){return Q&&"symbol"==typeof Symbol.toStringTag}var re=Object.prototype.toString;var ne="function"==typeof R?R.toStringTag:"";var te=ee()?function(e){var r,n,t;if(null==e)return re.call(e);n=e[ne],r=B(e,ne);try{e[ne]=void 0}catch(r){return re.call(e)}return t=re.call(e),r?e[ne]=n:delete e[ne],t}:function(e){return re.call(e)},ie="function"==typeof Uint32Array;var oe="function"==typeof Uint32Array?Uint32Array:null;var ue,ae="function"==typeof Uint32Array?Uint32Array:void 0;ue=function(){var e,r,n;if("function"!=typeof oe)return!1;try{r=new oe(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(ie&&n instanceof Uint32Array||"[object Uint32Array]"===te(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ae:function(){throw new Error("not implemented")};var fe=ue,ce="function"==typeof Float64Array;var se="function"==typeof Float64Array?Float64Array:null;var le,pe="function"==typeof Float64Array?Float64Array:void 0;le=function(){var e,r,n;if("function"!=typeof se)return!1;try{r=new se([1,3.14,-3.14,NaN]),n=r,e=(ce&&n instanceof Float64Array||"[object Float64Array]"===te(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")};var ve=le,ye="function"==typeof Uint8Array;var ge="function"==typeof Uint8Array?Uint8Array:null;var be,de="function"==typeof Uint8Array?Uint8Array:void 0;be=function(){var e,r,n;if("function"!=typeof ge)return!1;try{r=new ge(r=[1,3.14,-3.14,256,257]),n=r,e=(ye&&n instanceof Uint8Array||"[object Uint8Array]"===te(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};var he=be,we="function"==typeof Uint16Array;var me="function"==typeof Uint16Array?Uint16Array:null;var je,Ae="function"==typeof Uint16Array?Uint16Array:void 0;je=function(){var e,r,n;if("function"!=typeof me)return!1;try{r=new me(r=[1,3.14,-3.14,65536,65537]),n=r,e=(we&&n instanceof Uint16Array||"[object Uint16Array]"===te(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")};var _e,Ee={uint16:je,uint8:he};(_e=new Ee.uint16(1))[0]=4660;var Oe=52===new Ee.uint8(_e.buffer)[0],Ne=!0===Oe?1:0,Se=new ve(1),Ue=new fe(Se.buffer);function xe(e){return Se[0]=e,Ue[Ne]}function Fe(e,r){var n,t,i,o;return i=(o=e*e)*o,t=o*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(o),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-e*r))}var Ie=-.16666666666666632;function Te(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(Ie+i*n):e-(i*(.5*r-t*n)-r-t*Ie)}var ke,Pe,Ve=1048575,Ge=!0===Oe?0:1,Le=new ve(1),$e=new fe(Le.buffer);!0===Oe?(ke=1,Pe=0):(ke=0,Pe=1);var Ce={HIGH:ke,LOW:Pe},He=new ve(1),Me=new fe(He.buffer),We=Ce.HIGH,Be=Ce.LOW;function Re(e,r){return Me[We]=e,Me[Be]=r,He[0]}var Ze=Number.POSITIVE_INFINITY,Xe=1023;function qe(e){return e===Ze||e===z}var Ye,ze;!0===Oe?(Ye=1,ze=0):(Ye=0,ze=1);var De={HIGH:Ye,LOW:ze},Je=new ve(1),Ke=new fe(Je.buffer),Qe=De.HIGH,er=De.LOW;function rr(e,r,n,t){return Je[0]=e,r[t]=Ke[Qe],r[t+n]=Ke[er],r}function nr(e){return rr(e,[0,0],1,0)}M(nr,"assign",rr);var tr=[0,0];function ir(e,r){var n,t;return nr.assign(e,tr,1,0),n=tr[0],n&=J,t=xe(r),Re(n|=t&=2147483648,tr[1])}function or(e,r,n,t){return function(e){return e!=e}(e)||qe(e)?(r[t]=e,r[t+n]=0,r):0!==e&&D(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}M((function(e){return or(e,[0,0],1,0)}),"assign",or);var ur=[0,0],ar=[0,0];function fr(e,r){var n,t,i;return 0===r||0===e||(i=e)!=i||qe(e)?e:(or(e,ur,1,0),r+=ur[1],r+=function(e){var r=xe(e);return(r=(r&K)>>>20)-Xe|0}(e=ur[0]),r<-1074?ir(0,e):r>1023?e<0?z:Ze:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,nr.assign(e,ar,1,0),n=ar[0],n&=2148532223,t*Re(n|=r+Xe<<20,ar[1])))}function cr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var sr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],lr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pr=16777216,vr=5.960464477539063e-8,yr=cr(20),gr=cr(20),br=cr(20),dr=cr(20);function hr(e,r,n,t,i,o,u,a,f){var c,s,l,p,v,y,g,b,d;for(p=o,d=t[n],b=n,v=0;b>0;v++)s=vr*d|0,dr[v]=d-pr*s|0,d=t[b-1]+s,b-=1;if(d=fr(d,i),d-=8*X(.125*d),d-=g=0|d,l=0,i>0?(g+=v=dr[n-1]>>24-i,dr[n-1]-=v<<24-i,l=dr[n-1]>>23-i):0===i?l=dr[n-1]>>23:d>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)b=dr[v],0===c?0!==b&&(c=1,dr[v]=16777216-b):dr[v]=16777215-b;if(i>0)switch(i){case 1:dr[n-1]&=8388607;break;case 2:dr[n-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=fr(1,i)))}if(0===d){for(b=0,v=n-1;v>=o;v--)b|=dr[v];if(0===b){for(y=1;0===dr[o-y];y++);for(v=n+1;v<=n+y;v++){for(f[a+v]=sr[u+v],s=0,b=0;b<=a;b++)s+=e[b]*f[a+(v-b)];t[v]=s}return hr(e,r,n+=y,t,i,o,u,a,f)}}if(0===d)for(n-=1,i-=24;0===dr[n];)n-=1,i-=24;else(d=fr(d,-i))>=pr?(s=vr*d|0,dr[n]=d-pr*s|0,i+=24,dr[n+=1]=s):dr[n]=0|d;for(s=fr(1,i),v=n;v>=0;v--)t[v]=s*dr[v],s*=vr;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=lr[y]*t[v+y];br[n-v]=s}for(s=0,v=n;v>=0;v--)s+=br[v];for(r[0]=0===l?s:-s,s=br[0]-s,v=1;v<=n;v++)s+=br[v];return r[1]=0===l?s:-s,7&g}function wr(e,r,n,t){var i,o,u,a,f,c,s;for(4,(o=(n-3)/24|0)<0&&(o=0),a=n-24*(o+1),c=o-(u=t-1),s=u+4,f=0;f<=s;f++)yr[f]=c<0?0:sr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=e[c]*yr[u+(f-c)];gr[f]=i}return 4,hr(e,r,4,gr,a,4,o,u,yr)}var mr=Math.round;function jr(e,r,n){var t,i,o,u,a;return o=e-1.5707963267341256*(t=mr(.6366197723675814*e)),u=6077100506506192e-26*t,a=r>>20|0,n[0]=o-u,a-(xe(n[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((i=o)-(o=i-(u=6077100506303966e-26*t))-u),n[0]=o-u,a-(xe(n[0])>>20&2047)>49&&(u=84784276603689e-45*t-((i=o)-(o=i-(u=20222662487111665e-37*t))-u),n[0]=o-u)),n[1]=o-n[0]-u,t}var Ar=1.5707963267341256,_r=6077100506506192e-26,Er=2*_r,Or=3*_r,Nr=4*_r,Sr=[0,0,0],Ur=[0,0];function xr(e,r){var n,t,i,o,u,a,f;if((i=xe(e)&J|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(i&Ve)?jr(e,i,r):i<=1073928572?e>0?(f=e-Ar,r[0]=f-_r,r[1]=f-r[0]-_r,1):(f=e+Ar,r[0]=f+_r,r[1]=f-r[0]+_r,-1):e>0?(f=e-2*Ar,r[0]=f-Er,r[1]=f-r[0]-Er,2):(f=e+2*Ar,r[0]=f+Er,r[1]=f-r[0]+Er,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?jr(e,i,r):e>0?(f=e-3*Ar,r[0]=f-Or,r[1]=f-r[0]-Or,3):(f=e+3*Ar,r[0]=f+Or,r[1]=f-r[0]+Or,-3):1075388923===i?jr(e,i,r):e>0?(f=e-4*Ar,r[0]=f-Nr,r[1]=f-r[0]-Nr,4):(f=e+4*Ar,r[0]=f+Nr,r[1]=f-r[0]+Nr,-4);if(i<1094263291)return jr(e,i,r);if(i>=K)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Le[0]=e,$e[Ge]}(e),f=Re(i-((t=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)Sr[u]=0|f,f=16777216*(f-Sr[u]);for(Sr[2]=f,o=3;0===Sr[o-1];)o-=1;return a=wr(Sr,Ur,t,o),e<0?(r[0]=-Ur[0],r[1]=-Ur[1],-a):(r[0]=Ur[0],r[1]=Ur[1],a)}var Fr=[0,0];var Ir=3.141592653589793;function Tr(e){return e!=e}function kr(e){return q(e/2)}function Pr(e){return kr(e>0?e-1:e+1)}var Vr=Math.sqrt,Gr=!0===Oe?0:1,Lr=new ve(1),$r=new fe(Lr.buffer);function Cr(e,r){return Lr[0]=e,$r[Gr]=r>>>0,Lr[0]}function Hr(e){return 0|e}var Mr=!0===Oe?1:0,Wr=new ve(1),Br=new fe(Wr.buffer);function Rr(e,r){return Wr[0]=e,Br[Mr]=r>>>0,Wr[0]}var Zr=1048576,Xr=[1,1.5],qr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8];var zr=1048576;var Dr=1083179008,Jr=1e300,Kr=1e-300,Qr=[0,0],en=[0,0];function rn(e,r){var n,t,i,o,u,a,f,c,s,l,p,v,y,g;if(Tr(e)||Tr(r))return NaN;if(nr.assign(r,Qr,1,0),u=Qr[0],0===Qr[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Vr(e);if(-.5===r)return 1/Vr(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(qe(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:D(e)<1==(r===Ze)?0:Ze}(e,r)}if(nr.assign(e,Qr,1,0),o=Qr[0],0===Qr[1]){if(0===o)return function(e,r){return r===z?Ze:r===Ze?0:r>0?Pr(r)?e:0:Pr(r)?ir(Ze,e):Ze}(e,r);if(1===e)return 1;if(-1===e&&Pr(r))return-1;if(qe(e))return e===z?rn(-0,-r):r<0?0:Ze}if(e<0&&!1===q(r))return(e-e)/(e-e);if(i=D(e),n=o&J|0,t=u&J|0,f=u>>>31|0,a=(a=o>>>31|0)&&Pr(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(xe(e)&J)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===f?a*Jr*Jr:a*Kr*Kr;if(n>1072693248)return 0===f?a*Jr*Jr:a*Kr*Kr;p=function(e,r){var n,t,i,o,u,a;return n=(u=1.9259629911266175e-8*(i=r-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((t=Cr(t=(o=1.4426950216293335*i)+u,0))-o),e[0]=t,e[1]=n,e}(en,i)}else p=function(e,r,n){var t,i,o,u,a,f,c,s,l,p,v,y,g,b,d,h,w,m,j,A,_;return m=0,n<Zr&&(m-=53,n=xe(r*=9007199254740992)),m+=(n>>20)-Xe|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Zr),u=Cr(i=(h=(r=Rr(r,n))-(c=Xr[A]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),f=Rr(0,t+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Cr(f=3+(o=u*u)+(d+=(a=w*(h-u*f-u*(r-(f-c))))*(u+i)),0),g=(v=-7.028461650952758e-9*(l=Cr(l=(h=u*f)+(w=a*f+(d-(f-3-o))*i),0))+.9617966939259756*(w-(l-h))+Yr[A])-((y=Cr(y=(p=.9617967009544373*l)+v+(s=qr[A])+(b=m),0))-b-s-p),e[0]=y,e[1]=g,e}(en,i,n);if(v=(l=(r-(c=Cr(r,0)))*p[0]+r*p[1])+(s=c*p[0]),nr.assign(v,Qr,1,0),y=Hr(Qr[0]),g=Hr(Qr[1]),y>=Dr){if(0!=(y-Dr|g))return a*Jr*Jr;if(l+8008566259537294e-32>v-s)return a*Jr*Jr}else if((y&J)>=1083231232){if(0!=(y-3230714880|g))return a*Kr*Kr;if(l<=v-s)return a*Kr*Kr}return v=function(e,r,n){var t,i,o,u,a,f,c,s,l,p;return l=((s=e&J|0)>>20)-Xe|0,c=0,s>1071644672&&(i=Rr(0,((c=e+(zr>>l+1)>>>0)&~(Ve>>(l=((c&J)>>20)-Xe|0)))>>>0),c=(c&Ve|zr)>>20-l>>>0,e<0&&(c=-c),r-=i),e=Hr(e=xe(f=1-((f=(o=.6931471824645996*(i=Cr(i=n+r,0)))+(u=.6931471805599453*(n-(i-r))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((a=u-(f-o))+f*a)-f))),(e+=c<<20>>>0)>>20<=0?fr(f,c):Rr(f,e)}(y,s,l),a*v}var nn=Math.ceil;function tn(e){return e<0?nn(e):X(e)}var on=1.4426950408889634,un=1/(1<<28);function an(e){var r;return function(e){return e!=e}(e)||e===Ze?e:e===z?0:e>709.782712893384?Ze:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<un?1+e:function(e,r,n){var t,i,o,u;return fr(1-(r-(t=e-r)*(o=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-e),n)}(e-.6931471803691238*(r=tn(e<0?on*e-.5:on*e+.5)),1.9082149292705877e-10*r,r)}function fn(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=an(e),2.5066282746310007*(n=e>143.01608?(t=rn(e,.5*e-.25))*(t/n):rn(e,e-.5)/n)*r}function cn(e,r){return r/((1+.5772156649015329*e)*e)}function sn(e){var r,n,t,i;if(q(e)&&e<0||e===z||function(e){return e!=e}(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===z}(e)?z:Ze;if(e>171.61447887182297)return Ze;if(e<-170.5674972726612)return 0;if((n=D(e))>33)return e>=0?fn(e):(r=0==(1&(t=X(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(e){var r;if(r=xe(e),(r&=J)<=1072243195)return r<1045430272?e:Te(e,0);if(r>=K)return NaN;switch(3&xr(e,Fr)){case 0:return Te(Fr[0],Fr[1]);case 1:return Fe(Fr[0],Fr[1]);case 2:return-Te(Fr[0],Fr[1]);default:return-Fe(Fr[0],Fr[1])}}(Ir*i),r*Ir/(D(i)*fn(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return cn(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return cn(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var ln=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function pn(e){return function(e){return e!=e}(e)?NaN:q(e)?e<0?NaN:e<=170?ln[e]:Ze:sn(e+1)}var vn=Array.isArray?Array.isArray:function(e){return"[object Array]"===te(e)};var yn=/./;function gn(e){return"boolean"==typeof e}var bn=Boolean,dn=Boolean.prototype.toString;var hn=ee();function wn(e){return"object"==typeof e&&(e instanceof bn||(hn?function(e){try{return dn.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===te(e)))}function mn(e){return gn(e)||wn(e)}function jn(){return new Function("return this;")()}M(mn,"isPrimitive",gn),M(mn,"isObject",wn);var An="object"==typeof self?self:null,_n="object"==typeof window?window:null,En="object"==typeof global?global:null,On="object"==typeof globalThis?globalThis:null;var Nn=function(e){if(arguments.length){if(!gn(e))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return jn()}if(On)return On;if(An)return An;if(_n)return _n;if(En)return En;throw new Error("unexpected error. Unable to resolve global object.")}(),Sn=Nn.document&&Nn.document.childNodes,Un=Int8Array;function xn(){return/^\s*function\s*([^(]*)/i}var Fn=/^\s*function\s*([^(]*)/i;function In(e){return null!==e&&"object"==typeof e}function Tn(e){var r,n,t,i;if(("Object"===(n=te(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Fn.exec(t.toString()))return r[1]}return In(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}M(xn,"REGEXP",Fn),M(In,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,t;if(!vn(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(In));var kn="function"==typeof yn||"object"==typeof Un||"function"==typeof Sn?function(e){return Tn(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Tn(e).toLowerCase():r};function Pn(e){return"function"===kn(e)}var Vn,Gn=Object,Ln=Object.getPrototypeOf;Vn=Pn(Object.getPrototypeOf)?Ln:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===te(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var $n=Vn;var Cn=Object.prototype;function Hn(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!vn(e)}(e)&&(r=function(e){return null==e?null:(e=Gn(e),$n(e))}(e),!r||!B(e,"constructor")&&B(r,"constructor")&&Pn(r.constructor)&&"[object Function]"===te(r.constructor)&&B(r,"isPrototypeOf")&&Pn(r.isPrototypeOf)&&(r===Cn||function(e){var r;for(r in e)if(!B(e,r))return!1;return!0}(e)))}function Mn(e){return"number"==typeof e}var Wn=Y.prototype.toString;var Bn=ee();function Rn(e){return"object"==typeof e&&(e instanceof Y||(Bn?function(e){try{return Wn.call(e),!0}catch(e){return!1}}(e):"[object Number]"===te(e)))}function Zn(e){return Mn(e)||Rn(e)}function Xn(e){return e<Ze&&e>z&&q(e)}function qn(e){return Mn(e)&&Xn(e)}function Yn(e){return Rn(e)&&Xn(e.valueOf())}function zn(e){return qn(e)||Yn(e)}function Dn(e){return qn(e)&&e>=0}function Jn(e){return Yn(e)&&e.valueOf()>=0}function Kn(e){return Dn(e)||Jn(e)}function Qn(e,r){return Hn(r)?B(r,"iter")&&(e.iter=r.iter,!Dn(r.iter))?new TypeError(T("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):null:new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",r))}M(Zn,"isPrimitive",Mn),M(Zn,"isObject",Rn),M(zn,"isPrimitive",qn),M(zn,"isObject",Yn),M(Kn,"isPrimitive",Dn),M(Kn,"isObject",Jn);var et=1e308;return function e(r){var n,t,i,o,u;if(n={iter:et},arguments.length&&(o=Qn(n,r)))throw o;return u=-1,M(t={},"next",a),M(t,"return",f),Z&&M(t,Z,c),t;function a(){return u+=1,i||u>=n.iter?{done:!0}:{value:pn(u),done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return e(n)}}}));
//# sourceMappingURL=index.js.map
