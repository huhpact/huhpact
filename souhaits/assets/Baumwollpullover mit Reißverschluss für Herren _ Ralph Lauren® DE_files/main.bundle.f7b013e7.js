/*! For license information please see main.bundle.f7b013e7.js.LICENSE.txt */
(()=>{var e,t,i={9690:e=>{e.exports=function e(t,i,o){function n(s,a){if(!i[s]){if(!t[s]){if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}a=i[s]={exports:{}},t[s][0].call(a.exports,(function(e){return n(t[s][1][e]||e)}),a,a.exports,e,t,i,o)}return i[s].exports}for(var r=void 0,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,i){(function(o,n,r,s,a,l,d,c,u){"use strict";var f=e("crypto");function g(e,t){var i;return void 0===(i="passthrough"!==(t=v(e,t)).algorithm?f.createHash(t.algorithm):new w).write&&(i.write=i.update,i.end=i.update),y(t,i).dispatch(e),i.update||i.end(""),i.digest?i.digest("buffer"===t.encoding?void 0:t.encoding):(e=i.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(i=t.exports=g).sha1=function(e){return g(e)},i.keys=function(e){return g(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(e){return g(e,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(e){return g(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=f.getHashes?f.getHashes().slice():["sha1","md5"],h=(p.push("passthrough"),["buffer","hex","binary","base64"]);function v(e,t){var i={};if(i.algorithm=(t=t||{}).algorithm||"sha1",i.encoding=t.encoding||"hex",i.excludeValues=!!t.excludeValues,i.algorithm=i.algorithm.toLowerCase(),i.encoding=i.encoding.toLowerCase(),i.ignoreUnknown=!0===t.ignoreUnknown,i.respectType=!1!==t.respectType,i.respectFunctionNames=!1!==t.respectFunctionNames,i.respectFunctionProperties=!1!==t.respectFunctionProperties,i.unorderedArrays=!0===t.unorderedArrays,i.unorderedSets=!1!==t.unorderedSets,i.unorderedObjects=!1!==t.unorderedObjects,i.replacer=t.replacer||void 0,i.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var o=0;o<p.length;++o)p[o].toLowerCase()===i.algorithm.toLowerCase()&&(i.algorithm=p[o]);if(-1===p.indexOf(i.algorithm))throw new Error('Algorithm "'+i.algorithm+'"  not supported. supported values: '+p.join(", "));if(-1===h.indexOf(i.encoding)&&"passthrough"!==i.algorithm)throw new Error('Encoding "'+i.encoding+'"  not supported. supported values: '+h.join(", "));return i}function m(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function y(e,t,i){function o(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return i=i||[],{dispatch:function(t){return this["_"+(null===(t=e.replacer?e.replacer(t):t)?"null":typeof t)](t)},_object:function(t){var n,s=Object.prototype.toString.call(t),a=/\[object (.*)\]/i.exec(s);if(a=(a=a?a[1]:"unknown:["+s+"]").toLowerCase(),0<=(s=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+s+"]");if(i.push(t),void 0!==r&&r.isBuffer&&r.isBuffer(t))return o("buffer:"),o(t);if("object"===a||"function"===a||"asyncfunction"===a)return s=Object.keys(t),e.unorderedObjects&&(s=s.sort()),!1===e.respectType||m(t)||s.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(s=s.filter((function(t){return!e.excludeKeys(t)}))),o("object:"+s.length+":"),n=this,s.forEach((function(i){n.dispatch(i),o(":"),e.excludeValues||n.dispatch(t[i]),o(",")}));if(!this["_"+a]){if(e.ignoreUnknown)return o("["+a+"]");throw new Error('Unknown object type "'+a+'"')}this["_"+a](t)},_array:function(t,n){n=void 0!==n?n:!1!==e.unorderedArrays;var r=this;if(o("array:"+t.length+":"),!n||t.length<=1)return t.forEach((function(e){return r.dispatch(e)}));var s=[];return n=t.map((function(t){var o=new w,n=i.slice();return y(e,o,n).dispatch(t),s=s.concat(n.slice(i.length)),o.read().toString()})),i=i.concat(s),n.sort(),this._array(n,!1)},_date:function(e){return o("date:"+e.toJSON())},_symbol:function(e){return o("symbol:"+e.toString())},_error:function(e){return o("error:"+e.toString())},_boolean:function(e){return o("bool:"+e.toString())},_string:function(e){o("string:"+e.length+":"),o(e.toString())},_function:function(t){o("fn:"),m(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return o("number:"+e.toString())},_xml:function(e){return o("xml:"+e.toString())},_null:function(){return o("Null")},_undefined:function(){return o("Undefined")},_regexp:function(e){return o("regex:"+e.toString())},_uint8array:function(e){return o("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return o("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return o("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return o("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return o("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return o("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return o("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return o("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return o("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return o("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return o("url:"+e.toString())},_map:function(t){return o("map:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return o("set:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return o("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return o("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return o("domwindow")},_bigint:function(e){return o("bigint:"+e.toString())},_process:function(){return o("process")},_timer:function(){return o("timer")},_pipe:function(){return o("pipe")},_tcp:function(){return o("tcp")},_udp:function(){return o("udp")},_tty:function(){return o("tty")},_statwatcher:function(){return o("statwatcher")},_securecontext:function(){return o("securecontext")},_connection:function(){return o("connection")},_zlib:function(){return o("zlib")},_context:function(){return o("context")},_nodescript:function(){return o("nodescript")},_httpparser:function(){return o("httpparser")},_dataview:function(){return o("dataview")},_signal:function(){return o("signal")},_fsevent:function(){return o("fsevent")},_tlswrap:function(){return o("tlswrap")}}}function w(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}i.writeToStream=function(e,t,i){return void 0===i&&(i=t,t={}),y(t=v(e,t),i).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,i){(function(e,t,o,n,r,s,a,l,d){!function(e){"use strict";var t="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),o="/".charCodeAt(0),n="0".charCodeAt(0),r="a".charCodeAt(0),s="A".charCodeAt(0),a="-".charCodeAt(0),l="_".charCodeAt(0);function d(e){return(e=e.charCodeAt(0))===i||e===a?62:e===o||e===l?63:e<n?-1:e<n+10?e-n+26+26:e<s+26?e-s:e<r+26?e-r+26:void 0}e.toByteArray=function(e){var i,o;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.length,r=(n="="===e.charAt(n-2)?2:"="===e.charAt(n-1)?1:0,new t(3*e.length/4-n)),s=0<n?e.length-4:e.length,a=0;function l(e){r[a++]=e}for(i=0;i<s;i+=4,0)l((16711680&(o=d(e.charAt(i))<<18|d(e.charAt(i+1))<<12|d(e.charAt(i+2))<<6|d(e.charAt(i+3))))>>16),l((65280&o)>>8),l(255&o);return 2==n?l(255&(o=d(e.charAt(i))<<2|d(e.charAt(i+1))>>4)):1==n&&(l((o=d(e.charAt(i))<<10|d(e.charAt(i+1))<<4|d(e.charAt(i+2))>>2)>>8&255),l(255&o)),r},e.fromByteArray=function(e){var t,i,o,n,r=e.length%3,s="";function a(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,o=e.length-r;t<o;t+=3)s+=a((n=i=(e[t]<<16)+(e[t+1]<<8)+e[t+2])>>18&63)+a(n>>12&63)+a(n>>6&63)+a(63&n);switch(r){case 1:s=(s+=a((i=e[e.length-1])>>2))+a(i<<4&63)+"==";break;case 2:s=(s=(s+=a((i=(e[e.length-2]<<8)+e[e.length-1])>>10))+a(i>>4&63))+a(i<<2&63)+"="}return s}}(void 0===i?this.base64js={}:i)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,t,i){(function(t,o,n,r,s,a,l,d,c){var u=e("base64-js"),f=e("ieee754");function n(e,t,i){if(!(this instanceof n))return new n(e,t,i);var o,r,s,a,l=typeof e;if("base64"===t&&"string"==l)for(e=(a=e).trim?a.trim():a.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==l)o=C(e);else if("string"==l)o=n.byteLength(e,t);else{if("object"!=l)throw new Error("First argument needs to be a number, array or string.");o=C(e.length)}if(n._useTypedArrays?r=n._augment(new Uint8Array(o)):((r=this).length=o,r._isBuffer=!0),n._useTypedArrays&&"number"==typeof e.byteLength)r._set(e);else if(I(a=e)||n.isBuffer(a)||a&&"object"==typeof a&&"number"==typeof a.length)for(s=0;s<o;s++)n.isBuffer(e)?r[s]=e.readUInt8(s):r[s]=e[s];else if("string"==l)r.write(e,0,t);else if("number"==l&&!n._useTypedArrays&&!i)for(s=0;s<o;s++)r[s]=0;return r}function g(e,t,i,o){var n;if(o||(M("boolean"==typeof i,"missing or invalid endian"),M(null!=t,"missing offset"),M(t+1<e.length,"Trying to read beyond buffer length")),!((o=e.length)<=t))return i?(n=e[t],t+1<o&&(n|=e[t+1]<<8)):(n=e[t]<<8,t+1<o&&(n|=e[t+1])),n}function p(e,t,i,o){var n;if(o||(M("boolean"==typeof i,"missing or invalid endian"),M(null!=t,"missing offset"),M(t+3<e.length,"Trying to read beyond buffer length")),!((o=e.length)<=t))return i?(t+2<o&&(n=e[t+2]<<16),t+1<o&&(n|=e[t+1]<<8),n|=e[t],t+3<o&&(n+=e[t+3]<<24>>>0)):(t+1<o&&(n=e[t+1]<<16),t+2<o&&(n|=e[t+2]<<8),t+3<o&&(n|=e[t+3]),n+=e[t]<<24>>>0),n}function h(e,t,i,o){if(o||(M("boolean"==typeof i,"missing or invalid endian"),M(null!=t,"missing offset"),M(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 32768&(o=g(e,t,i,!0))?-1*(65535-o+1):o}function v(e,t,i,o){if(o||(M("boolean"==typeof i,"missing or invalid endian"),M(null!=t,"missing offset"),M(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 2147483648&(o=p(e,t,i,!0))?-1*(4294967295-o+1):o}function m(e,t,i,o){return o||(M("boolean"==typeof i,"missing or invalid endian"),M(t+3<e.length,"Trying to read beyond buffer length")),f.read(e,t,i,23,4)}function y(e,t,i,o){return o||(M("boolean"==typeof i,"missing or invalid endian"),M(t+7<e.length,"Trying to read beyond buffer length")),f.read(e,t,i,52,8)}function w(e,t,i,o,n){if(n||(M(null!=t,"missing value"),M("boolean"==typeof o,"missing or invalid endian"),M(null!=i,"missing offset"),M(i+1<e.length,"trying to write beyond buffer length"),P(t,65535)),!((n=e.length)<=i))for(var r=0,s=Math.min(n-i,2);r<s;r++)e[i+r]=(t&255<<8*(o?r:1-r))>>>8*(o?r:1-r)}function b(e,t,i,o,n){if(n||(M(null!=t,"missing value"),M("boolean"==typeof o,"missing or invalid endian"),M(null!=i,"missing offset"),M(i+3<e.length,"trying to write beyond buffer length"),P(t,4294967295)),!((n=e.length)<=i))for(var r=0,s=Math.min(n-i,4);r<s;r++)e[i+r]=t>>>8*(o?r:3-r)&255}function x(e,t,i,o,n){n||(M(null!=t,"missing value"),M("boolean"==typeof o,"missing or invalid endian"),M(null!=i,"missing offset"),M(i+1<e.length,"Trying to write beyond buffer length"),z(t,32767,-32768)),e.length<=i||w(e,0<=t?t:65535+t+1,i,o,n)}function S(e,t,i,o,n){n||(M(null!=t,"missing value"),M("boolean"==typeof o,"missing or invalid endian"),M(null!=i,"missing offset"),M(i+3<e.length,"Trying to write beyond buffer length"),z(t,2147483647,-2147483648)),e.length<=i||b(e,0<=t?t:4294967295+t+1,i,o,n)}function _(e,t,i,o,n){n||(M(null!=t,"missing value"),M("boolean"==typeof o,"missing or invalid endian"),M(null!=i,"missing offset"),M(i+3<e.length,"Trying to write beyond buffer length"),U(t,34028234663852886e22,-34028234663852886e22)),e.length<=i||f.write(e,t,i,o,23,4)}function $(e,t,i,o,n){n||(M(null!=t,"missing value"),M("boolean"==typeof o,"missing or invalid endian"),M(null!=i,"missing offset"),M(i+7<e.length,"Trying to write beyond buffer length"),U(t,17976931348623157e292,-17976931348623157e292)),e.length<=i||f.write(e,t,i,o,52,8)}i.Buffer=n,i.SlowBuffer=n,i.INSPECT_MAX_BYTES=50,n.poolSize=8192,n._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.isBuffer=function(e){return!(null==e||!e._isBuffer)},n.byteLength=function(e,t){var i;switch(e+="",t||"utf8"){case"hex":i=e.length/2;break;case"utf8":case"utf-8":i=L(e).length;break;case"ascii":case"binary":case"raw":i=e.length;break;case"base64":i=O(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=2*e.length;break;default:throw new Error("Unknown encoding")}return i},n.concat=function(e,t){if(M(I(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new n(0);if(1===e.length)return e[0];if("number"!=typeof t)for(r=t=0;r<e.length;r++)t+=e[r].length;for(var i=new n(t),o=0,r=0;r<e.length;r++){var s=e[r];s.copy(i,o),o+=s.length}return i},n.prototype.write=function(e,t,i,o){isFinite(t)?isFinite(i)||(o=i,i=void 0):(d=o,o=t,t=i,i=d),t=Number(t)||0;var r,s,a,l,d=this.length-t;switch((!i||d<(i=Number(i)))&&(i=d),o=String(o||"utf8").toLowerCase()){case"hex":r=function(e,t,i,o){i=Number(i)||0;var r=e.length-i;(!o||r<(o=Number(o)))&&(o=r),M((r=t.length)%2==0,"Invalid hex string"),r/2<o&&(o=r/2);for(var s=0;s<o;s++){var a=parseInt(t.substr(2*s,2),16);M(!isNaN(a),"Invalid hex string"),e[i+s]=a}return n._charsWritten=2*s,s}(this,e,t,i);break;case"utf8":case"utf-8":s=this,a=t,l=i,r=n._charsWritten=E(L(e),s,a,l);break;case"ascii":case"binary":r=function(e,t,i,o){return n._charsWritten=E(function(e){for(var t=[],i=0;i<e.length;i++)t.push(255&e.charCodeAt(i));return t}(t),e,i,o)}(this,e,t,i);break;case"base64":s=this,a=t,l=i,r=n._charsWritten=E(O(e),s,a,l);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,i,o){return n._charsWritten=E(function(e){for(var t,i,o=[],n=0;n<e.length;n++)t=(i=e.charCodeAt(n))>>8,i%=256,o.push(i),o.push(t);return o}(t),e,i,o)}(this,e,t,i);break;default:throw new Error("Unknown encoding")}return r},n.prototype.toString=function(e,t,i){var o,n,r,s,a=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(i=void 0!==i?Number(i):a.length)===t)return"";switch(e){case"hex":o=function(e,t,i){var o=e.length;(!t||t<0)&&(t=0),(!i||i<0||o<i)&&(i=o);for(var n="",r=t;r<i;r++)n+=A(e[r]);return n}(a,t,i);break;case"utf8":case"utf-8":o=function(e,t,i){var o="",n="";i=Math.min(e.length,i);for(var r=t;r<i;r++)e[r]<=127?(o+=k(n)+String.fromCharCode(e[r]),n=""):n+="%"+e[r].toString(16);return o+k(n)}(a,t,i);break;case"ascii":case"binary":o=function(e,t,i){var o="";i=Math.min(e.length,i);for(var n=t;n<i;n++)o+=String.fromCharCode(e[n]);return o}(a,t,i);break;case"base64":n=a,s=i,o=0===(r=t)&&s===n.length?u.fromByteArray(n):u.fromByteArray(n.slice(r,s));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=function(e,t,i){for(var o=e.slice(t,i),n="",r=0;r<o.length;r+=2)n+=String.fromCharCode(o[r]+256*o[r+1]);return n}(a,t,i);break;default:throw new Error("Unknown encoding")}return o},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},n.prototype.copy=function(e,t,i,o){if(t=t||0,(o=o||0===o?o:this.length)!==(i=i||0)&&0!==e.length&&0!==this.length){M(i<=o,"sourceEnd < sourceStart"),M(0<=t&&t<e.length,"targetStart out of bounds"),M(0<=i&&i<this.length,"sourceStart out of bounds"),M(0<=o&&o<=this.length,"sourceEnd out of bounds"),o>this.length&&(o=this.length);var r=(o=e.length-t<o-i?e.length-t+i:o)-i;if(r<100||!n._useTypedArrays)for(var s=0;s<r;s++)e[s+t]=this[s+i];else e._set(this.subarray(i,i+r),t)}},n.prototype.slice=function(e,t){var i=this.length;if(e=T(e,i,0),t=T(t,i,i),n._useTypedArrays)return n._augment(this.subarray(e,t));for(var o=t-e,r=new n(o,void 0,!0),s=0;s<o;s++)r[s]=this[s+e];return r},n.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},n.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},n.prototype.readUInt8=function(e,t){if(t||(M(null!=e,"missing offset"),M(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},n.prototype.readUInt16LE=function(e,t){return g(this,e,!0,t)},n.prototype.readUInt16BE=function(e,t){return g(this,e,!1,t)},n.prototype.readUInt32LE=function(e,t){return p(this,e,!0,t)},n.prototype.readUInt32BE=function(e,t){return p(this,e,!1,t)},n.prototype.readInt8=function(e,t){if(t||(M(null!=e,"missing offset"),M(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},n.prototype.readInt16LE=function(e,t){return h(this,e,!0,t)},n.prototype.readInt16BE=function(e,t){return h(this,e,!1,t)},n.prototype.readInt32LE=function(e,t){return v(this,e,!0,t)},n.prototype.readInt32BE=function(e,t){return v(this,e,!1,t)},n.prototype.readFloatLE=function(e,t){return m(this,e,!0,t)},n.prototype.readFloatBE=function(e,t){return m(this,e,!1,t)},n.prototype.readDoubleLE=function(e,t){return y(this,e,!0,t)},n.prototype.readDoubleBE=function(e,t){return y(this,e,!1,t)},n.prototype.writeUInt8=function(e,t,i){i||(M(null!=e,"missing value"),M(null!=t,"missing offset"),M(t<this.length,"trying to write beyond buffer length"),P(e,255)),t>=this.length||(this[t]=e)},n.prototype.writeUInt16LE=function(e,t,i){w(this,e,t,!0,i)},n.prototype.writeUInt16BE=function(e,t,i){w(this,e,t,!1,i)},n.prototype.writeUInt32LE=function(e,t,i){b(this,e,t,!0,i)},n.prototype.writeUInt32BE=function(e,t,i){b(this,e,t,!1,i)},n.prototype.writeInt8=function(e,t,i){i||(M(null!=e,"missing value"),M(null!=t,"missing offset"),M(t<this.length,"Trying to write beyond buffer length"),z(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,i):this.writeUInt8(255+e+1,t,i))},n.prototype.writeInt16LE=function(e,t,i){x(this,e,t,!0,i)},n.prototype.writeInt16BE=function(e,t,i){x(this,e,t,!1,i)},n.prototype.writeInt32LE=function(e,t,i){S(this,e,t,!0,i)},n.prototype.writeInt32BE=function(e,t,i){S(this,e,t,!1,i)},n.prototype.writeFloatLE=function(e,t,i){_(this,e,t,!0,i)},n.prototype.writeFloatBE=function(e,t,i){_(this,e,t,!1,i)},n.prototype.writeDoubleLE=function(e,t,i){$(this,e,t,!0,i)},n.prototype.writeDoubleBE=function(e,t,i){$(this,e,t,!1,i)},n.prototype.fill=function(e,t,i){if(t=t||0,i=i||this.length,M("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),M(t<=i,"end < start"),i!==t&&0!==this.length){M(0<=t&&t<this.length,"start out of bounds"),M(0<=i&&i<=this.length,"end out of bounds");for(var o=t;o<i;o++)this[o]=e}},n.prototype.inspect=function(){for(var e=[],t=this.length,o=0;o<t;o++)if(e[o]=A(this[o]),o===i.INSPECT_MAX_BYTES){e[o+1]="...";break}return"<Buffer "+e.join(" ")+">"},n.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(n._useTypedArrays)return new n(this).buffer;for(var e=new Uint8Array(this.length),t=0,i=e.length;t<i;t+=1)e[t]=this[t];return e.buffer};var R=n.prototype;function T(e,t,i){return"number"!=typeof e?i:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function C(e){return(e=~~Math.ceil(+e))<0?0:e}function I(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function A(e){return e<16?"0"+e.toString(16):e.toString(16)}function L(e){for(var t=[],i=0;i<e.length;i++){var o=e.charCodeAt(i);if(o<=127)t.push(e.charCodeAt(i));else for(var n=i,r=(55296<=o&&o<=57343&&i++,encodeURIComponent(e.slice(n,i+1)).substr(1).split("%")),s=0;s<r.length;s++)t.push(parseInt(r[s],16))}return t}function O(e){return u.toByteArray(e)}function E(e,t,i,o){for(var n=0;n<o&&!(n+i>=t.length||n>=e.length);n++)t[n+i]=e[n];return n}function k(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function P(e,t){M("number"==typeof e,"cannot write a non-number as a number"),M(0<=e,"specified a negative value for writing an unsigned value"),M(e<=t,"value is larger than maximum value for type"),M(Math.floor(e)===e,"value has a fractional component")}function z(e,t,i){M("number"==typeof e,"cannot write a non-number as a number"),M(e<=t,"value larger than maximum allowed value"),M(i<=e,"value smaller than minimum allowed value"),M(Math.floor(e)===e,"value has a fractional component")}function U(e,t,i){M("number"==typeof e,"cannot write a non-number as a number"),M(e<=t,"value larger than maximum allowed value"),M(i<=e,"value smaller than minimum allowed value")}function M(e,t){if(!e)throw new Error(t||"Failed assertion")}n._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=R.get,e.set=R.set,e.write=R.write,e.toString=R.toString,e.toLocaleString=R.toString,e.toJSON=R.toJSON,e.copy=R.copy,e.slice=R.slice,e.readUInt8=R.readUInt8,e.readUInt16LE=R.readUInt16LE,e.readUInt16BE=R.readUInt16BE,e.readUInt32LE=R.readUInt32LE,e.readUInt32BE=R.readUInt32BE,e.readInt8=R.readInt8,e.readInt16LE=R.readInt16LE,e.readInt16BE=R.readInt16BE,e.readInt32LE=R.readInt32LE,e.readInt32BE=R.readInt32BE,e.readFloatLE=R.readFloatLE,e.readFloatBE=R.readFloatBE,e.readDoubleLE=R.readDoubleLE,e.readDoubleBE=R.readDoubleBE,e.writeUInt8=R.writeUInt8,e.writeUInt16LE=R.writeUInt16LE,e.writeUInt16BE=R.writeUInt16BE,e.writeUInt32LE=R.writeUInt32LE,e.writeUInt32BE=R.writeUInt32BE,e.writeInt8=R.writeInt8,e.writeInt16LE=R.writeInt16LE,e.writeInt16BE=R.writeInt16BE,e.writeInt32LE=R.writeInt32LE,e.writeInt32BE=R.writeInt32BE,e.writeFloatLE=R.writeFloatLE,e.writeFloatBE=R.writeFloatBE,e.writeDoubleLE=R.writeDoubleLE,e.writeDoubleBE=R.writeDoubleBE,e.fill=R.fill,e.inspect=R.inspect,e.toArrayBuffer=R.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,i){(function(i,o,n,r,s,a,l,d,c){n=e("buffer").Buffer;var u=new n(4);u.fill(0),t.exports={hash:function(e,t,i,o){for(var r=t(function(e,t){e.length%4!=0&&(i=e.length+(4-e.length%4),e=n.concat([e,u],i));for(var i,o=[],r=t?e.readInt32BE:e.readInt32LE,s=0;s<e.length;s+=4)o.push(r.call(e,s));return o}(e=n.isBuffer(e)?e:new n(e),o),8*e.length),s=(t=o,new n(i)),a=t?s.writeInt32BE:s.writeInt32LE,l=0;l<r.length;l++)a.call(s,r[l],4*l,!0);return s}}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,t,i){(function(t,o,n,r,s,a,l,d,c){n=e("buffer").Buffer;var u=e("./sha"),f=e("./sha256"),g=e("./rng"),p={sha1:u,sha256:f,md5:e("./md5")},h=64,v=new n(h);function m(e,t){var i=p[e=e||"sha1"],o=[];return i||y("algorithm:",e,"is not yet supported"),{update:function(e){return n.isBuffer(e)||(e=new n(e)),o.push(e),e.length,this},digest:function(e){var r=n.concat(o);return r=t?function(e,t,i){n.isBuffer(t)||(t=new n(t)),n.isBuffer(i)||(i=new n(i)),t.length>h?t=e(t):t.length<h&&(t=n.concat([t,v],h));for(var o=new n(h),r=new n(h),s=0;s<h;s++)o[s]=54^t[s],r[s]=92^t[s];return i=e(n.concat([o,i])),e(n.concat([r,i]))}(i,t,r):i(r),o=null,e?r.toString(e):r}}}function y(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}v.fill(0),i.createHash=function(e){return m(e)},i.createHmac=m,i.randomBytes=function(e,t){if(!t||!t.call)return new n(g(e));try{t.call(this,void 0,new n(g(e)))}catch(e){t(e)}};var w,b=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(e){i[e]=function(){y("sorry,",e,"is not implemented yet")}};for(w in b)x(b[w])}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,i){(function(i,o,n,r,s,a,l,d,c){var u=e("./helpers");function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var i=1732584193,o=-271733879,n=-1732584194,r=271733878,s=0;s<e.length;s+=16){var a=i,l=o,d=n,c=r;i=p(i,o,n,r,e[s+0],7,-680876936),r=p(r,i,o,n,e[s+1],12,-389564586),n=p(n,r,i,o,e[s+2],17,606105819),o=p(o,n,r,i,e[s+3],22,-1044525330),i=p(i,o,n,r,e[s+4],7,-176418897),r=p(r,i,o,n,e[s+5],12,1200080426),n=p(n,r,i,o,e[s+6],17,-1473231341),o=p(o,n,r,i,e[s+7],22,-45705983),i=p(i,o,n,r,e[s+8],7,1770035416),r=p(r,i,o,n,e[s+9],12,-1958414417),n=p(n,r,i,o,e[s+10],17,-42063),o=p(o,n,r,i,e[s+11],22,-1990404162),i=p(i,o,n,r,e[s+12],7,1804603682),r=p(r,i,o,n,e[s+13],12,-40341101),n=p(n,r,i,o,e[s+14],17,-1502002290),i=h(i,o=p(o,n,r,i,e[s+15],22,1236535329),n,r,e[s+1],5,-165796510),r=h(r,i,o,n,e[s+6],9,-1069501632),n=h(n,r,i,o,e[s+11],14,643717713),o=h(o,n,r,i,e[s+0],20,-373897302),i=h(i,o,n,r,e[s+5],5,-701558691),r=h(r,i,o,n,e[s+10],9,38016083),n=h(n,r,i,o,e[s+15],14,-660478335),o=h(o,n,r,i,e[s+4],20,-405537848),i=h(i,o,n,r,e[s+9],5,568446438),r=h(r,i,o,n,e[s+14],9,-1019803690),n=h(n,r,i,o,e[s+3],14,-187363961),o=h(o,n,r,i,e[s+8],20,1163531501),i=h(i,o,n,r,e[s+13],5,-1444681467),r=h(r,i,o,n,e[s+2],9,-51403784),n=h(n,r,i,o,e[s+7],14,1735328473),i=v(i,o=h(o,n,r,i,e[s+12],20,-1926607734),n,r,e[s+5],4,-378558),r=v(r,i,o,n,e[s+8],11,-2022574463),n=v(n,r,i,o,e[s+11],16,1839030562),o=v(o,n,r,i,e[s+14],23,-35309556),i=v(i,o,n,r,e[s+1],4,-1530992060),r=v(r,i,o,n,e[s+4],11,1272893353),n=v(n,r,i,o,e[s+7],16,-155497632),o=v(o,n,r,i,e[s+10],23,-1094730640),i=v(i,o,n,r,e[s+13],4,681279174),r=v(r,i,o,n,e[s+0],11,-358537222),n=v(n,r,i,o,e[s+3],16,-722521979),o=v(o,n,r,i,e[s+6],23,76029189),i=v(i,o,n,r,e[s+9],4,-640364487),r=v(r,i,o,n,e[s+12],11,-421815835),n=v(n,r,i,o,e[s+15],16,530742520),i=m(i,o=v(o,n,r,i,e[s+2],23,-995338651),n,r,e[s+0],6,-198630844),r=m(r,i,o,n,e[s+7],10,1126891415),n=m(n,r,i,o,e[s+14],15,-1416354905),o=m(o,n,r,i,e[s+5],21,-57434055),i=m(i,o,n,r,e[s+12],6,1700485571),r=m(r,i,o,n,e[s+3],10,-1894986606),n=m(n,r,i,o,e[s+10],15,-1051523),o=m(o,n,r,i,e[s+1],21,-2054922799),i=m(i,o,n,r,e[s+8],6,1873313359),r=m(r,i,o,n,e[s+15],10,-30611744),n=m(n,r,i,o,e[s+6],15,-1560198380),o=m(o,n,r,i,e[s+13],21,1309151649),i=m(i,o,n,r,e[s+4],6,-145523070),r=m(r,i,o,n,e[s+11],10,-1120210379),n=m(n,r,i,o,e[s+2],15,718787259),o=m(o,n,r,i,e[s+9],21,-343485551),i=y(i,a),o=y(o,l),n=y(n,d),r=y(r,c)}return Array(i,o,n,r)}function g(e,t,i,o,n,r){return y((t=y(y(t,e),y(o,r)))<<n|t>>>32-n,i)}function p(e,t,i,o,n,r,s){return g(t&i|~t&o,e,t,n,r,s)}function h(e,t,i,o,n,r,s){return g(t&o|i&~o,e,t,n,r,s)}function v(e,t,i,o,n,r,s){return g(t^i^o,e,t,n,r,s)}function m(e,t,i,o,n,r,s){return g(i^(t|~o),e,t,n,r,s)}function y(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}t.exports=function(e){return u.hash(e,f,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,i){(function(e,i,o,n,r,s,a,l,d){t.exports=function(e){for(var t,i=new Array(e),o=0;o<e;o++)0==(3&o)&&(t=4294967296*Math.random()),i[o]=t>>>((3&o)<<3)&255;return i}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,t,i){(function(i,o,n,r,s,a,l,d,c){var u=e("./helpers");function f(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var i,o,n,r=Array(80),s=1732584193,a=-271733879,l=-1732584194,d=271733878,c=-1009589776,u=0;u<e.length;u+=16){for(var f=s,h=a,v=l,m=d,y=c,w=0;w<80;w++){r[w]=w<16?e[u+w]:p(r[w-3]^r[w-8]^r[w-14]^r[w-16],1);var b=g(g(p(s,5),(b=a,o=l,n=d,(i=w)<20?b&o|~b&n:!(i<40)&&i<60?b&o|b&n|o&n:b^o^n)),g(g(c,r[w]),(i=w)<20?1518500249:i<40?1859775393:i<60?-1894007588:-899497514));c=d,d=l,l=p(a,30),a=s,s=b}s=g(s,f),a=g(a,h),l=g(l,v),d=g(d,m),c=g(c,y)}return Array(s,a,l,d,c)}function g(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function p(e,t){return e<<t|e>>>32-t}t.exports=function(e){return u.hash(e,f,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,i){(function(i,o,n,r,s,a,l,d,c){function u(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function f(e,t){var i,o=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),n=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),r=new Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var s,a,l=0;l<e.length;l+=16){for(var d=n[0],c=n[1],f=n[2],g=n[3],v=n[4],m=n[5],y=n[6],w=n[7],b=0;b<64;b++)r[b]=b<16?e[b+l]:u(u(u((a=r[b-2],p(a,17)^p(a,19)^h(a,10)),r[b-7]),(a=r[b-15],p(a,7)^p(a,18)^h(a,3))),r[b-16]),i=u(u(u(u(w,p(a=v,6)^p(a,11)^p(a,25)),v&m^~v&y),o[b]),r[b]),s=u(p(s=d,2)^p(s,13)^p(s,22),d&c^d&f^c&f),w=y,y=m,m=v,v=u(g,i),g=f,f=c,c=d,d=u(i,s);n[0]=u(d,n[0]),n[1]=u(c,n[1]),n[2]=u(f,n[2]),n[3]=u(g,n[3]),n[4]=u(v,n[4]),n[5]=u(m,n[5]),n[6]=u(y,n[6]),n[7]=u(w,n[7])}return n}var g=e("./helpers"),p=function(e,t){return e>>>t|e<<32-t},h=function(e,t){return e>>>t};t.exports=function(e){return g.hash(e,f,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,i){(function(e,t,o,n,r,s,a,l,d){i.read=function(e,t,i,o,n){var r,s,a=8*n-o-1,l=(1<<a)-1,d=l>>1,c=-7,u=i?n-1:0,f=i?-1:1;for(n=e[t+u],u+=f,r=n&(1<<-c)-1,n>>=-c,c+=a;0<c;r=256*r+e[t+u],u+=f,c-=8);for(s=r&(1<<-c)-1,r>>=-c,c+=o;0<c;s=256*s+e[t+u],u+=f,c-=8);if(0===r)r=1-d;else{if(r===l)return s?NaN:1/0*(n?-1:1);s+=Math.pow(2,o),r-=d}return(n?-1:1)*s*Math.pow(2,r-o)},i.write=function(e,t,i,o,n,r){var s,a,l=8*r-n-1,d=(1<<l)-1,c=d>>1,u=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,f=o?0:r-1,g=o?1:-1;for(r=t<0||0===t&&1/t<0?1:0,t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(o=Math.pow(2,-s))<1&&(s--,o*=2),2<=(t+=1<=s+c?u/o:u*Math.pow(2,1-c))*o&&(s++,o/=2),d<=s+c?(a=0,s=d):1<=s+c?(a=(t*o-1)*Math.pow(2,n),s+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,n),s=0));8<=n;e[i+f]=255&a,f+=g,a/=256,n-=8);for(s=s<<n|a,l+=n;0<l;e[i+f]=255&s,f+=g,s/=256,l-=8);e[i+f-g]|=128*r}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,t,i){(function(e,i,o,n,r,s,a,l,d){var c,u,f;function g(){}(e=t.exports={}).nextTick=(u="undefined"!=typeof window&&window.setImmediate,f="undefined"!=typeof window&&window.postMessage&&window.addEventListener,u?function(e){return window.setImmediate(e)}:f?(c=[],window.addEventListener("message",(function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<c.length&&c.shift()())}),!0),function(e){c.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=g,e.addListener=g,e.once=g,e.off=g,e.removeListener=g,e.removeAllListeners=g,e.emit=g,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)},1577:(e,t,i)=>{"use strict";i.d(t,{Z:()=>ct});var o=i(8081),n=i.n(o),r=i(3645),s=i.n(r),a=i(1667),l=i.n(a),d=new URL(i(3642),i.b),c=new URL(i(8739),i.b),u=new URL(i(490),i.b),f=new URL(i(3694),i.b),g=new URL(i(4452),i.b),p=new URL(i(2915),i.b),h=new URL(i(8215),i.b),v=new URL(i(3643),i.b),m=new URL(i(3320),i.b),y=new URL(i(9930),i.b),w=new URL(i(287),i.b),b=new URL(i(3964),i.b),x=new URL(i(6223),i.b),S=new URL(i(4018),i.b),_=new URL(i(5223),i.b),$=new URL(i(4913),i.b),R=new URL(i(8279),i.b),T=new URL(i(510),i.b),C=new URL(i(9702),i.b),I=new URL(i(3781),i.b),A=new URL(i(7859),i.b),L=new URL(i(7074),i.b),O=new URL(i(3604),i.b),E=new URL(i(7530),i.b),k=new URL(i(1699),i.b),P=new URL(i(2024),i.b),z=new URL(i(4141),i.b),U=new URL(i(6021),i.b),M=new URL(i(6185),i.b),W=new URL(i(2186),i.b),F=new URL(i(2798),i.b),B=new URL(i(1733),i.b),G=new URL(i(8796),i.b),D=new URL(i(1615),i.b),N=new URL(i(9502),i.b),j=new URL(i(9095),i.b),H=new URL(i(5272),i.b),V=new URL(i(1130),i.b),K=new URL(i(8052),i.b),Y=new URL(i(2614),i.b),q=new URL(i(2310),i.b),J=new URL(i(5502),i.b),Z=new URL(i(5850),i.b),X=new URL(i(1018),i.b),Q=new URL(i(6775),i.b),ee=new URL(i(6579),i.b),te=new URL(i(2668),i.b),ie=new URL(i(1702),i.b),oe=new URL(i(3704),i.b),ne=new URL(i(1212),i.b),re=new URL(i(492),i.b),se=new URL(i(2203),i.b),ae=new URL(i(6498),i.b),le=new URL(i(8953),i.b),de=s()(n()),ce=l()(d),ue=l()(c),fe=l()(u),ge=l()(f),pe=l()(g),he=l()(p),ve=l()(h),me=l()(v),ye=l()(m),we=l()(y),be=l()(w),xe=l()(b),Se=l()(x),_e=l()(S),$e=l()(_),Re=l()($),Te=l()(R),Ce=l()(T),Ie=l()(C),Ae=l()(I),Le=l()(A),Oe=l()(L),Ee=l()(O),ke=l()(E),Pe=l()(k),ze=l()(P),Ue=l()(z),Me=l()(U),We=l()(M),Fe=l()(W),Be=l()(F),Ge=l()(B),De=l()(G),Ne=l()(D),je=l()(N),He=l()(j),Ve=l()(H),Ke=l()(V),Ye=l()(K),qe=l()(Y),Je=l()(q),Ze=l()(J),Xe=l()(Z),Qe=l()(X),et=l()(Q),tt=l()(ee),it=l()(te),ot=l()(ie),nt=l()(oe),rt=l()(ne),st=l()(re),at=l()(se),lt=l()(ae),dt=l()(le);de.push([e.id,'@font-face{font-family:"Archivo";font-style:normal;font-weight:300;src:url('+ce+') format("woff2")}@font-face{font-family:"Archivo";font-style:normal;font-weight:400;src:url('+ue+') format("woff2")}@font-face{font-family:"Archivo";font-style:normal;font-weight:500;src:url('+fe+') format("woff2")}@font-face{font-family:"Archivo";font-style:normal;font-weight:600;src:url('+ge+') format("woff2")}@font-face{font-family:"Archivo";font-style:normal;font-weight:700;src:url('+pe+') format("woff2")}@font-face{font-family:"Avenir Book";font-style:normal;font-weight:400;src:url('+he+') format("woff")}@font-face{font-family:"Calibre Regular";font-style:normal;font-weight:400;src:url('+ve+') format("woff2")}@font-face{font-family:"CircularStd-Book";font-style:normal;font-weight:450;src:url('+me+') format("woff2")}@font-face{font-family:"CircularXX";font-style:normal;font-weight:500;src:url('+ye+') format("woff2")}@font-face{font-family:"Grosa";font-style:normal;font-weight:400;src:url('+we+') format("woff2")}@font-face{font-family:"Grosa";font-style:normal;font-weight:500;src:url('+be+') format("woff2")}@font-face{font-family:"Libre Baskerville";font-style:normal;font-weight:400;src:url('+xe+') format("woff2")}@font-face{font-family:"Libre Baskerville";font-style:normal;font-weight:700;src:url('+Se+') format("woff2")}@font-face{font-family:"store-mcy-MacysSans";font-style:normal;font-weight:400;src:url('+_e+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:300;src:url('+$e+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:400;src:url('+Re+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:500;src:url('+Te+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:600;src:url('+Ce+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:700;src:url('+Ie+') format("woff2")}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;src:url('+Ae+') format("woff2")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;src:url('+Le+') format("woff2")}@font-face{font-family:"Roboto";font-style:normal;font-weight:500;src:url('+Oe+') format("woff2")}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;src:url('+Ee+') format("woff2")}@font-face{font-family:"store-sjk-Avenir";font-style:normal;font-weight:200;src:url('+ke+') format("woff2")}@font-face{font-family:"store-sjk-Avenir";font-style:normal;font-weight:300;src:url('+Pe+') format("woff2")}@font-face{font-family:"store-sjk-Avenir";font-style:normal;font-weight:400;src:url('+ze+') format("woff2")}@font-face{font-family:"store-sjk-Avenir";font-style:normal;font-weight:500;src:url('+Ue+') format("woff2")}@font-face{font-family:"store-sjk-Avenir";font-style:normal;font-weight:800;src:url('+Me+') format("woff2")}@font-face{font-family:"Swear Text";font-style:normal;font-weight:400;src:url('+We+') format("woff2")}@font-face{font-family:"Swear Text";font-style:normal;font-weight:700;src:url('+Fe+') format("woff2")}@font-face{font-family:"FuturaPT";font-style:normal;font-weight:500;src:url('+Be+') format("woff2")}@font-face{font-family:"FuturaPT";font-style:normal;font-weight:700;src:url('+Ge+') format("woff2")}@font-face{font-family:"store-bto-NeueHaas";font-style:normal;font-weight:300;src:url('+De+') format("woff2")}@font-face{font-family:"store-bto-NeueHaas";font-style:normal;font-weight:400;src:url('+Ne+') format("woff2")}@font-face{font-family:"store-bhw-SweetSans";font-style:normal;font-weight:300;src:url('+je+') format("woff2")}@font-face{font-family:"store-bhw-SweetSans";font-style:normal;font-weight:400;src:url('+He+') format("woff2")}@font-face{font-family:"Lato";font-style:normal;font-weight:300;src:url('+Ve+') format("woff2")}@font-face{font-family:"Lato";font-style:normal;font-weight:400;src:url('+Ke+') format("woff2")}@font-face{font-family:"Lato";font-style:normal;font-weight:700;src:url('+Ye+') format("woff2")}@font-face{font-family:"Gilroy";font-style:normal;font-weight:300;src:url('+qe+') format("woff2")}@font-face{font-family:"Gilroy";font-style:normal;font-weight:600;src:url('+Je+') format("woff2")}@font-face{font-family:"Gilroy";font-style:normal;font-weight:700;src:url('+Ze+') format("woff2")}@font-face{font-family:"store-lan-Sofia";font-style:normal;font-weight:400;src:url('+Xe+') format("woff2")}@font-face{font-family:"store-lan-Sofia";font-style:normal;font-weight:600;src:url('+Qe+') format("woff2")}@font-face{font-family:"store-ral-FoundersGrotesk";font-style:normal;font-weight:400;src:url('+et+') format("woff2")}@font-face{font-family:"store-ral-FoundersGrotesk";font-style:normal;font-weight:500;src:url('+tt+') format("woff2")}@font-face{font-family:"ProximaNova";font-style:normal;font-weight:400;src:url('+it+') format("woff2")}@font-face{font-family:"ProximaNova";font-style:normal;font-weight:500;src:url('+ot+') format("woff2")}@font-face{font-family:"ProximaNova";font-style:normal;font-weight:700;src:url('+nt+') format("woff2")}@font-face{font-family:"store-nor-HelveticaNeue";font-style:normal;font-weight:400;src:url('+rt+') format("woff2")}@font-face{font-family:"store-nor-HelveticaNeue";font-style:normal;font-weight:700;src:url('+st+') format("woff2")}@font-face{font-family:"Athletics";font-style:normal;font-weight:500;src:url('+at+') format("woff2")}@font-face{font-family:"Athletics";font-style:normal;font-weight:700;src:url('+lt+') format("woff2")}@font-face{font-family:"inter";font-style:normal;font-weight:400;src:url('+dt+') format("woff2")}',""]);const ct=de},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",o=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),o&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),o&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,o,n,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&s[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),t.push(c))}},t}},1667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},3379:e=>{"use strict";var t=[];function i(e){for(var i=-1,o=0;o<t.length;o++)if(t[o].identifier===e){i=o;break}return i}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var l=e[a],d=o.base?l[0]+o.base:l[0],c=r[d]||0,u="".concat(d," ").concat(c);r[d]=c+1;var f=i(u),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(g);else{var p=n(g,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function n(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,n){var r=o(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=i(r[s]);t[a].references--}for(var l=o(e,n),d=0;d<r.length;d++){var c=i(r[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var o=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,n&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},1840:(e,t,i)=>{var o={"./ar":[6956,228],"./ar.ts":[6956,228],"./da":[7027,139],"./da.ts":[7027,139],"./de":[2849,9],"./de.ts":[2849,9],"./en-CA":[754,106],"./en-CA.ts":[754,106],"./en-GB":[2113,45],"./en-GB.ts":[2113,45],"./es":[9324,473],"./es.ts":[9324,473],"./fi":[9844,390],"./fi.ts":[9844,390],"./fr":[9936,360],"./fr-CA":[7734,916],"./fr-CA.ts":[7734,916],"./fr.ts":[9936,360],"./hu":[3738,137],"./hu.ts":[3738,137],"./is":[3780,199],"./is.ts":[3780,199],"./it":[9345,839],"./it.ts":[9345,839],"./ja":[6218,463],"./ja.ts":[6218,463],"./ko":[1725,168],"./ko.ts":[1725,168],"./ms":[1616,391],"./ms.ts":[1616,391],"./nl":[5171,677],"./nl.ts":[5171,677],"./pt":[99,517],"./pt.ts":[99,517],"./sv":[6285,530],"./sv.ts":[6285,530],"./th":[59,666],"./th.ts":[59,666],"./zh-CN":[8125,449],"./zh-CN.ts":[8125,449],"./zh-HK":[6580,162],"./zh-HK.ts":[6580,162],"./zh-SG":[6253,524],"./zh-SG.ts":[6253,524],"./zh-TW":[2285,17],"./zh-TW.ts":[2285,17]};function n(e){if(!i.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return i.e(t[1]).then((()=>i(n)))}n.keys=()=>Object.keys(o),n.id=1840,e.exports=n},3642:(e,t,i)=>{"use strict";e.exports=i.p+"static/archivo-v19-latin_latin-ext-300.3ff70d68.woff2"},490:(e,t,i)=>{"use strict";e.exports=i.p+"static/archivo-v19-latin_latin-ext-500.1d76bee3.woff2"},3694:(e,t,i)=>{"use strict";e.exports=i.p+"static/archivo-v19-latin_latin-ext-600.d25ff234.woff2"},4452:(e,t,i)=>{"use strict";e.exports=i.p+"static/archivo-v19-latin_latin-ext-700.a90330de.woff2"},8739:(e,t,i)=>{"use strict";e.exports=i.p+"static/archivo-v19-latin_latin-ext-regular.5845abbf.woff2"},2203:(e,t,i)=>{"use strict";e.exports=i.p+"static/athletics-500.b5a12d80.woff2"},6498:(e,t,i)=>{"use strict";e.exports=i.p+"static/athletics-700.da2d08c9.woff2"},2915:(e,t,i)=>{"use strict";e.exports=i.p+"126382d4f80eb3eff470.woff"},8215:(e,t,i)=>{"use strict";e.exports=i.p+"static/calibre-regular.e472fdda.woff2"},3643:(e,t,i)=>{"use strict";e.exports=i.p+"static/circular-book-450.28c77f3e.woff2"},3320:(e,t,i)=>{"use strict";e.exports=i.p+"static/circular-xx-500.056b4626.woff2"},2798:(e,t,i)=>{"use strict";e.exports=i.p+"static/futura-pt-500.50991d33.woff2"},1733:(e,t,i)=>{"use strict";e.exports=i.p+"static/futura-pt-700.ecb6461d.woff2"},2310:(e,t,i)=>{"use strict";e.exports=i.p+"static/gilroy-600.9aa9ea30.woff2"},5502:(e,t,i)=>{"use strict";e.exports=i.p+"static/gilroy-700.22c377fe.woff2"},2614:(e,t,i)=>{"use strict";e.exports=i.p+"static/gilroy-light.8a1d33d5.woff2"},287:(e,t,i)=>{"use strict";e.exports=i.p+"static/Grosa-Medium.5cd0c610.woff2"},9930:(e,t,i)=>{"use strict";e.exports=i.p+"static/Grosa-Regular.b92ac017.woff2"},8953:(e,t,i)=>{"use strict";e.exports=i.p+"static/Inter-Regular.416239b4.woff2"},5272:(e,t,i)=>{"use strict";e.exports=i.p+"static/lato-300.ae6d2457.woff2"},8052:(e,t,i)=>{"use strict";e.exports=i.p+"static/lato-700.d773245a.woff2"},1130:(e,t,i)=>{"use strict";e.exports=i.p+"static/lato-regular.755c4a43.woff2"},6223:(e,t,i)=>{"use strict";e.exports=i.p+"static/libre-baskerville-v14-latin-ext_latin-700.f6b9391f.woff2"},3964:(e,t,i)=>{"use strict";e.exports=i.p+"static/libre-baskerville-v14-latin-ext_latin-regular.23649c90.woff2"},5223:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-300.514dfdf9.woff2"},8279:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-500.76be2cdf.woff2"},510:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-600.f6d165b6.woff2"},9702:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-700.1f256dfe.woff2"},4913:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-regular.35b478a9.woff2"},1702:(e,t,i)=>{"use strict";e.exports=i.p+"static/proxima-nova-500.f7c98b09.woff2"},3704:(e,t,i)=>{"use strict";e.exports=i.p+"static/proxima-nova-700.55755e73.woff2"},2668:(e,t,i)=>{"use strict";e.exports=i.p+"static/proxima-nova-regular.e2259dd9.woff2"},3781:(e,t,i)=>{"use strict";e.exports=i.p+"static/roboto-v30-latin_latin-ext-300.fe7979be.woff2"},7074:(e,t,i)=>{"use strict";e.exports=i.p+"static/roboto-v30-latin_latin-ext-500.5e47c600.woff2"},3604:(e,t,i)=>{"use strict";e.exports=i.p+"static/roboto-v30-latin_latin-ext-700.80d49d24.woff2"},7859:(e,t,i)=>{"use strict";e.exports=i.p+"static/roboto-v30-latin_latin-ext-regular.eb22083c.woff2"},9502:(e,t,i)=>{"use strict";e.exports=i.p+"static/sweet-sans-300.960a4a84.woff2"},9095:(e,t,i)=>{"use strict";e.exports=i.p+"static/sweet-sans-regular.c6c80651.woff2"},8796:(e,t,i)=>{"use strict";e.exports=i.p+"static/neue-haas-300.ba66cb28.woff2"},1615:(e,t,i)=>{"use strict";e.exports=i.p+"static/neue-haas-regular.47a0032b.woff2"},1018:(e,t,i)=>{"use strict";e.exports=i.p+"static/sofia-600.59cd3ea1.woff2"},5850:(e,t,i)=>{"use strict";e.exports=i.p+"static/sofia-regular.901f809b.woff2"},4018:(e,t,i)=>{"use strict";e.exports=i.p+"static/macys-sans-400.9b0861f6.woff2"},492:(e,t,i)=>{"use strict";e.exports=i.p+"static/helvetica-neue-700.3e16015d.woff2"},1212:(e,t,i)=>{"use strict";e.exports=i.p+"static/helvetica-neue-regular.b6f9be48.woff2"},6579:(e,t,i)=>{"use strict";e.exports=i.p+"static/founders-grotesk-500.d9ed53fb.woff2"},6775:(e,t,i)=>{"use strict";e.exports=i.p+"static/founders-grotesk-regular.be1aac26.woff2"},1699:(e,t,i)=>{"use strict";e.exports=i.p+"static/Avenir-Book.201b8d2d.woff2"},6021:(e,t,i)=>{"use strict";e.exports=i.p+"static/Avenir-Heavy.e20d1512.woff2"},7530:(e,t,i)=>{"use strict";e.exports=i.p+"static/Avenir-Light.867b51dd.woff2"},4141:(e,t,i)=>{"use strict";e.exports=i.p+"static/Avenir-Medium.91ca83b6.woff2"},2024:(e,t,i)=>{"use strict";e.exports=i.p+"static/Avenir-Roman.cf8485cd.woff2"},2186:(e,t,i)=>{"use strict";e.exports=i.p+"static/swear-text-700.d9f87dd9.woff2"},6185:(e,t,i)=>{"use strict";e.exports=i.p+"static/swear-text-regular.c55c0aa9.woff2"},1696:(e,t,i)=>{"use strict";i.d(t,{wd:()=>A,AM:()=>$,kI:()=>d,WI:()=>C,Bd:()=>o});const o=(e,...t)=>({strTag:!0,strings:e,values:t}),n=(e,t,i)=>{let o=e[0];for(let n=1;n<e.length;n++)o+=t[i?i[n-1]:n-1],o+=e[n];return o},r=e=>{return"string"!=typeof(t=e)&&"strTag"in t?n(e.strings,e.values):e;var t},s="lit-localize-status";class a{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(s,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(s,this.__litLocalizeEventHandler)}}const l=e=>e.addController(new a(e)),d=()=>(e,t)=>(e.addInitializer(l),e);class c{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const u=[];for(let e=0;e<256;e++)u[e]=(e>>4&15).toString(16)+(15&e).toString(16);const f=new WeakMap,g=new Map;function p(e,t,i){if(e){const o=i?.id??function(e){const t="string"==typeof e?e:e.strings;let i=g.get(t);return void 0===i&&(i=function(e,t){return(t?"h":"s")+function(e){let t=0,i=8997,o=0,n=33826,r=0,s=40164,a=0,l=52210;for(let d=0;d<e.length;d++)i^=e.charCodeAt(d),t=435*i,o=435*n,r=435*s,a=435*l,r+=i<<8,a+=n<<8,o+=t>>>16,i=65535&t,r+=o>>>16,n=65535&o,l=a+(r>>>16)&65535,s=65535&r;return u[l>>8]+u[255&l]+u[s>>8]+u[255&s]+u[n>>8]+u[255&n]+u[i>>8]+u[255&i]}("string"==typeof e?e:e.join(""))}(t,"string"!=typeof e&&!("strTag"in e)),g.set(t,i)),i}(t),r=e[o];if(r){if("string"==typeof r)return r;if("strTag"in r)return n(r.strings,t.values,r.values);{let e=f.get(r);return void 0===e&&(e=r.values,f.set(r,e)),{...r,values:e.map((e=>t.values[e]))}}}}return r(t)}function h(e){window.dispatchEvent(new CustomEvent(s,{detail:e}))}let v,m,y,w,b,x="",S=new c;S.resolve();let _=0;const $=e=>(A(((e,t)=>p(b,e,t))),x=m=e.sourceLocale,y=new Set(e.targetLocales),y.add(e.sourceLocale),w=e.loadLocale,{getLocale:R,setLocale:T}),R=()=>x,T=e=>{if(e===(v??x))return S.promise;if(!y||!w)throw new Error("Internal error");if(!y.has(e))throw new Error("Invalid locale code");_++;const t=_;return v=e,S.settled&&(S=new c),h({status:"loading",loadingLocale:e}),(e===m?Promise.resolve({templates:void 0}):w(e)).then((i=>{_===t&&(x=e,v=void 0,b=i.templates,h({status:"ready",readyLocale:e}),S.resolve())}),(i=>{_===t&&(h({status:"error",errorLocale:e,errorMessage:i.toString()}),S.reject(i))})),S.promise};let C=r,I=!1;function A(e){if(I)throw new Error("lit-localize can only be configured once");C=e,I=!0}},8259:(e,t,i)=>{"use strict";i.d(t,{Al:()=>G,Jb:()=>T,Ld:()=>C,YP:()=>R,dy:()=>$,sY:()=>D});const o=globalThis,n=o.trustedTypes,r=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,s="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,d=`<${l}>`,c=document,u=()=>c.createComment(""),f=e=>null===e||"object"!=typeof e&&"function"!=typeof e,g=Array.isArray,p=e=>g(e)||"function"==typeof e?.[Symbol.iterator],h="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,y=/>/g,w=RegExp(`>|${h}(?:([^\\s"'>=/]+)(${h}*=${h}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,x=/"/g,S=/^(?:script|style|textarea|title)$/i,_=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$=_(1),R=_(2),T=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),I=new WeakMap,A=c.createTreeWalker(c,129);function L(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(t):t}const O=(e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",l=v;for(let t=0;t<i;t++){const i=e[t];let c,u,f=-1,g=0;for(;g<i.length&&(l.lastIndex=g,u=l.exec(i),null!==u);)g=l.lastIndex,l===v?"!--"===u[1]?l=m:void 0!==u[1]?l=y:void 0!==u[2]?(S.test(u[2])&&(n=RegExp("</"+u[2],"g")),l=w):void 0!==u[3]&&(l=w):l===w?">"===u[0]?(l=n??v,f=-1):void 0===u[1]?f=-2:(f=l.lastIndex-u[2].length,c=u[1],l=void 0===u[3]?w:'"'===u[3]?x:b):l===x||l===b?l=w:l===m||l===y?l=v:(l=w,n=void 0);const p=l===w&&e[t+1].startsWith("/>")?" ":"";r+=l===v?i+d:f>=0?(o.push(c),i.slice(0,f)+s+i.slice(f)+a+p):i+a+(-2===f?t:p)}return[L(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class E{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,d=0;const c=e.length-1,f=this.parts,[g,p]=O(e,t);if(this.el=E.createElement(g,i),A.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=A.nextNode())&&f.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(s)){const t=p[d++],i=o.getAttribute(e).split(a),n=/([.?@])?(.*)/.exec(t);f.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?M:"?"===n[1]?W:"@"===n[1]?F:U}),o.removeAttribute(e)}else e.startsWith(a)&&(f.push({type:6,index:r}),o.removeAttribute(e));if(S.test(o.tagName)){const e=o.textContent.split(a),t=e.length-1;if(t>0){o.textContent=n?n.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],u()),A.nextNode(),f.push({type:2,index:++r});o.append(e[t],u())}}}else if(8===o.nodeType)if(o.data===l)f.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(a,e+1));)f.push({type:7,index:r}),e+=a.length-1}r++}}static createElement(e,t){const i=c.createElement("template");return i.innerHTML=e,i}}function k(e,t,i=e,o){if(t===T)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=f(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=k(e,n._$AS(e,t.values),n,o)),t}class P{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??c).importNode(t,!0);A.currentNode=o;let n=A.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new z(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new B(n,this,e)),this._$AV.push(t),a=i[++s]}r!==a?.index&&(n=A.nextNode(),r++)}return A.currentNode=c,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),f(e)?e===C||null==e||""===e?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):p(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==C&&f(this._$AH)?this._$AA.nextSibling.data=e:this.T(c.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=E.createElement(L(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new P(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new E(e)),t}k(e){g(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new z(this.S(u()),this.S(u()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=k(this,e,t,0),r=!f(e)||e!==this._$AH&&e!==T,r&&(this._$AH=e);else{const o=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=k(this,o[i+s],t,s),a===T&&(a=this._$AH[s]),r||=!f(a)||a!==this._$AH[s],a===C?e=C:e!==C&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends U{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class W extends U{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}class F extends U{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??C)===T)return;const i=this._$AH,o=e===C&&i!==C||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==C&&(i===C||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const G={P:s,A:a,C:l,M:1,L:O,R:P,D:p,V:k,I:z,H:U,N:W,U:F,B:M,F:B};(0,o.litHtmlPolyfillSupport)?.(E,z),(o.litHtmlVersions??=[]).push("3.1.2");const D=(e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new z(t.insertBefore(u(),e),e,void 0,i??{})}return n._$AI(e),n}},8557:(e,t,i)=>{"use strict";i.d(t,{oi:()=>r,iv:()=>o.iv,dy:()=>n.dy,YP:()=>n.YP});var o=i(2584),n=i(8259);class r extends o.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.Jb}}r._$litElement$=!0,r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:r}),(0,globalThis.litElementPolyfillSupport)?.({LitElement:r}),(globalThis.litElementVersions??=[]).push("4.0.4")},2584:(e,t,i)=>{"use strict";i.d(t,{fl:()=>R,iv:()=>l,Ts:()=>S,Qu:()=>_});const o=globalThis,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;class a{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new a(i,e,r)},d=(e,t)=>{if(n)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),n=o.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:u,defineProperty:f,getOwnPropertyDescriptor:g,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:v}=Object,m=globalThis,y=m.trustedTypes,w=y?y.emptyScript:"",b=m.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!u(e,t),$={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class R extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&f(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:S;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??_)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[x("elementProperties")]=new Map,R[x("finalized")]=new Map,b?.({ReactiveElement:R}),(m.reactiveElementVersions??=[]).push("2.0.4")}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return i[e](r,r.exports,n),r.exports}n.m=i,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,i)=>(n.f[i](e,t),t)),[])),n.u=e=>({9:"locale-de",17:"locale-zh-TW",45:"locale-en-GB",106:"locale-en-CA",137:"locale-hu",139:"locale-da",162:"locale-zh-HK",168:"locale-ko",199:"locale-is",228:"locale-ar",360:"locale-fr",390:"locale-fi",391:"locale-ms",449:"locale-zh-CN",463:"locale-ja",473:"locale-es",517:"locale-pt",524:"locale-zh-SG",530:"locale-sv",666:"locale-th",677:"locale-nl",839:"locale-it",916:"locale-fr-CA"}[e]+".bundle."+{9:"31a55bc9",17:"173fbb82",45:"9de12df7",106:"ff48e0fd",137:"901e0567",139:"3904b4b1",162:"e098ab85",168:"a6acd228",199:"635b48ff",228:"c67f477a",360:"1be619fd",390:"fc131b2f",391:"d0b33c4f",449:"50a26737",463:"c8d4ea9b",473:"6622f2ce",517:"6ba0c7cb",524:"e4b8a446",530:"1dcdf583",666:"bbe291a2",677:"2cbf427a",839:"dfacbda2",916:"264fce3b"}[e]+".js"),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="tfp-widgets:",n.l=(i,o,r,s)=>{if(e[i])e[i].push(o);else{var a,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+r){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=i),e[i]=[o];var f=(t,o)=>{a.onerror=a.onload=null,clearTimeout(g);var n=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={179:0};n.f.j=(t,i)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise(((i,n)=>o=e[t]=[i,n]));i.push(o[2]=r);var s=n.p+n.u(t),a=new Error;n.l(s,(i=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,o[1](a)}}),"chunk-"+t,t)}};var t=(t,i)=>{var o,r,[s,a,l]=i,d=0;if(s.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);l&&l(n)}for(t&&t(i);d<s.length;d++)r=s[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0},i=self.webpackChunktfp_widgets=self.webpackChunktfp_widgets||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),(()=>{"use strict";var e=n(8557);const t=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};var i=n(2584);const o={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},r=(e=o,t,i)=>{const{kind:n,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,e),"accessor"===n){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===n){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+n)};function s(e){return(t,i)=>"object"==typeof i?r(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function a(e){return s({...e,state:!0,attribute:!1})}var l=n(8259);const d=e=>(...t)=>({_$litDirective$:e,values:t});class c{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const u=d(class extends c{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return l.Jb}});var f=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let g=class extends e.oi{render(){const{widgetTheme:t="standard",noRegFromWidget:i}=this;return i?e.dy``:e.dy`<span
          class="${u({link:!0,[t]:!0})}"
          ><slot></slot
        ></span>`}};g.styles=e.iv`
    :host {
      font-family: inherit;
      margin-left: var(--cta-margin-left);
    }
    .link {
      text-decoration: underline;
      display: inline-block;
      color: var(--cta-text-color);
      text-transform: var(--cta-text-transform);
    }
    .link.button {
      text-decoration: none;
      display: inline;
      color: var(--button-text-color);
      line-height: 1.25em;
    }
    .link.slim {
      vertical-align: middle;
    }
  `,f([s()],g.prototype,"widgetTheme",void 0),f([s()],g.prototype,"noRegFromWidget",void 0),g=f([t("cta-link")],g);let p=class extends e.oi{render(){return e.dy`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-242 334 126 126"
    >
      <path
        style="fill:var(--t-logo-text-color, #fff)"
        d="M-220 350h83v97h-83z"
      />
      <path
        style="fill:var(--t-logo-bg-color, #d31245)"
        d="M-128 334h-102c-6.6 0-12 5.4-12 12v102c0 6.6 5.4 12 12 12h102c6.6 0 12-5.4 12-12V346c0-6.6-5.4-12-12-12zm-15.7 36.4h-25.7v69.8h-18.9v-69.8h-25.6v-15.8h70.2v15.8z"
      />
    </svg>`}};p.styles=e.iv`
    svg {
      display: block;
    }
  `,p=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([t("t-logo")],p);var h=n(1696);const v=(e,t,i)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return i?.()};var m,y,w;!function(e){e.RunsOneSizeStepLarge="RunsOneSizeStepLarge",e.MayRunOneSizeStepLarge="MayRunOneSizeStepLarge",e.RunsTrueToSizeLarge="RunsTrueToSizeLarge",e.RunsTrueToSize="RunsTrueToSize",e.RunsTrueToSizeSmall="RunsTrueToSizeSmall",e.MayRunOneSizeStepSmall="MayRunOneSizeStepSmall",e.RunsOneSizeStepSmall="RunsOneSizeStepSmall"}(m||(m={})),function(e){e.BrandCategory="BrandCategory",e.BrandClass="BrandClass",e.ItemSales="ItemSales",e.Manual="Manual",e.Product="Product",e.Style="Style"}(y||(y={})),function(e){e.Success="success",e.EstimationInProgress="estimationinprogress",e.Error="error",e.NoUser="nouser",e.NoStyle="nostyle",e.NoStyleNoUser="nostylenouser",e.IncompleteGarment="incompletegarment",e.IncompleteProfile="incompleteprofile",e.InvalidDepartment="invaliddepartment",e.SizeNotAvailable="sizenotavailable",e.RecommendationDisabled="recommendationdisabled",e.UnrecommendableDepartment="unrecommendabledepartment"}(w||(w={}));var b=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let x=class extends e.oi{render(){const{ugDetails:t,vAlignMiddle:i=!0,scale:o=!1}=this,n=u({"ug-text":!0,middle:i,scale:o});return e.dy`${v(null==t?void 0:t.guidance,[[m.RunsOneSizeStepSmall,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsOneSizeStepSmall)&&void 0!==o?o:(0,h.WI)("Fit: Runs Small")}</span
            >`}],[m.MayRunOneSizeStepSmall,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.mayRunOneSizeStepSmall)&&void 0!==o?o:(0,h.WI)("Fit: Slightly Small")}</span
            >`}],[m.RunsTrueToSizeSmall,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsTrueToSizeSmall)&&void 0!==o?o:(0,h.WI)("Fit: True To Size")}</span
            >`}],[m.RunsTrueToSize,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsTrueToSize)&&void 0!==o?o:(0,h.WI)("Fit: True To Size")}</span
            >`}],[m.RunsTrueToSizeLarge,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsTrueToSizeLarge)&&void 0!==o?o:(0,h.WI)("Fit: True To Size")}</span
            >`}],[m.MayRunOneSizeStepLarge,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.mayRunOneSizeStepLarge)&&void 0!==o?o:(0,h.WI)("Fit: Slightly Big")}</span
            >`}],[m.RunsOneSizeStepLarge,()=>{var t,i,o;return e.dy`<span class="${n}"
              >${null!==(o=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsOneSizeStepLarge)&&void 0!==o?o:(0,h.WI)("Fit: Runs Big")}</span
            >`}]],(()=>null))}`}};function S(){const e=document.body.dir;return(null==e?void 0:e.length)?e:"ltr"}x.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .ug-text {
      font-weight: var(--ug-text-font-weight);
      text-transform: var(--ug-text-transform);
    }
    .ug-text.scale {
      font-weight: var(--ug-scale-ug-text-font-weight);
      text-transform: var(--ug-scale-ug-text-text-transform);
    }
    .ug-text.middle {
      vertical-align: middle;
    }
  `,b([s({type:Object})],x.prototype,"ugDetails",void 0),b([s()],x.prototype,"vAlignMiddle",void 0),b([s()],x.prototype,"scale",void 0),b([s()],x.prototype,"configs",void 0),x=b([(0,h.kI)(),t("ug-text")],x);const{setLocale:_,getLocale:$}=(0,h.AM)({sourceLocale:"en",targetLocales:["ar","da","de","en-CA","en-GB","es","fi","fr","fr-CA","hu","is","it","ja","ko","ms","nl","pt","sv","th","zh-CN","zh-HK","zh-SG","zh-TW"],loadLocale:e=>n(1840)(`./${e}`)}),R=_,T=$;var C=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let I=class extends e.oi{render(){const t=this.ugDetails,i=this.ugScaleStyle,o=this.ugDisplayText,n=this.ugScalePosition;if(!t||!i||!n||void 0===o)return e.dy``;const r=T(),s=["da","fr","hu","it","ja","nl","pt","sv"].includes(r);return e.dy`<div class="scale-wrapper"><div class="scale-svg-wrapper ${i}"><span class="scale-label-small ${i}">${(0,h.WI)("Small",{desc:"A label at the small end of a scale that ranges from small to big. This scale represents how an item fits (small, slightly small, true to size, slightly big or big)."})}</span><div class=${u({"scale-recommendation":!0,[t.guidance]:!0,[i]:!0,"long-translation":s})}><ug-text .ugDetails="${t}" .scale="${!0}" .vAlignMiddle="${!1}"></ug-text></div><div class="svg-wrapper ${i} ${n} ${S()}">${H[t.guidance][i]}</div><span class="scale-label-big ${i}">${(0,h.WI)("Big",{desc:"A label at the big end of a scale that ranges from small to big. This scale represents how an item fits (small, slightly small, true to size, slightly big or big)."})}</span></span></div></div><ug-text .ugDetails="${t}" class=${u({"text-replacement":!0,"text-hidden":!o})}></ug-text>`}};I.styles=e.iv`
    .text-replacement {
      display: none;
    }

    @media (max-width: 169px) {
      .scale-wrapper {
        display: none;
      }

      .text-replacement.text-hidden {
        display: inline-block;
      }
    }

    .scale-svg-wrapper {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr;
      gap: 3px;
    }

    .scale-svg-wrapper.BarWithUgText {
      align-items: end;
    }

    .scale-recommendation {
      font-size: var(--ug-scale-ug-text-font-size);
      width: 100%;
      margin-bottom: 3px;
    }

    .scale-recommendation.Gradient {
      display: none;
    }

    .scale-recommendation.RunsTrueToSizeSmall,
    .scale-recommendation.RunsTrueToSize,
    .scale-recommendation.RunsTrueToSizeLarge {
      grid-column-start: 2;
      grid-row-start: 1;
      text-align: center;
    }

    .scale-recommendation.RunsTrueToSizeSmall.long-translation,
    .scale-recommendation.RunsTrueToSize.long-translation,
    .scale-recommendation.RunsTrueToSizeLarge.long-translation {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    .scale-recommendation.RunsOneSizeStepSmall,
    .scale-recommendation.MayRunOneSizeStepSmall {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      text-align: left;
    }

    .scale-recommendation.RunsOneSizeStepLarge,
    .scale-recommendation.MayRunOneSizeStepLarge {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      text-align: right;
    }

    .svg-wrapper {
      display: grid;
      width: 100%;
      grid-row-start: 2;
      grid-column-start: 2;
    }

    .svg-wrapper.rtl svg {
      transform: scaleX(-1);
    }

    .svg-wrapper.BarWithUgText.above {
      max-width: 118px;
    }

    .svg-wrapper.Gradient.above,
    .svg-wrapper.GradientWithUgText.above {
      max-width: 156px;
    }

    .svg-wrapper.MinimalWithUgText.above {
      max-width: 124px;
    }

    svg {
      width: 100%;
    }

    svg.Gradient,
    svg.GradientWithUgText {
      height: 10px;
    }

    svg.MinimalWithUgText {
      height: 11px;
    }

    svg.BarWithUgText {
      height: 16px;
    }

    .scale-label-small,
    .scale-label-big {
      font-size: var(--ug-scale-label-font-size);
      flex-shrink: 0;
      text-transform: var(--ug-scale-label-text-transform);
      color: var(--ug-scale-label-text-color);
    }

    .scale-label-small {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    .scale-label-big {
      grid-column-start: 3;
      grid-row-start: 2;
      justify-self: end;
    }
  `,C([s({type:Object})],I.prototype,"ugDetails",void 0),C([s()],I.prototype,"ugScaleStyle",void 0),C([s()],I.prototype,"ugScalePosition",void 0),C([s()],I.prototype,"ugDisplayText",void 0),I=C([(0,h.kI)(),t("ug-scale")],I);const A=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#rosss_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="6.5"
    y1="0.5"
    x2="6.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="rosss_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.705148" stop-color="var(--ug-scale-background-color)" />
      <stop offset="1" stop-color="var(--ug-scale-gradient-color)" />
    </linearGradient>
  </defs>
</svg>`,L=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 -4.37115e-08C8.55228 -1.95703e-08 9 0.447715 9 1L9 10C9 10.5523 8.55228 11 8 11C7.44771 11 7 10.5523 7 10L7 1C7 0.447715 7.44772 -6.78527e-08 8 -4.37115e-08Z"
    fill="black"
  />
</svg> `,O=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H5.9067C6.44592 2 6.96228 2.21772 7.3387 2.6038L15.068 10.5313C15.8529 11.3363 17.1471 11.3363 17.932 10.5313L25.6613 2.6038C26.0377 2.21772 26.5541 2 27.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M16.5 7L9.13878 0.249999L23.8612 0.25L16.5 7Z" fill="black" />
</svg> `,E=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#mrosss_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="40.5"
    y1="0.5"
    x2="40.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="mrosss_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.539119" stop-color="var(--ug-scale-background-color)" />
      <stop offset="0.735372" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.931626" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,k=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M32 -4.37115e-08C32.5523 -1.95703e-08 33 0.447715 33 1L33 10C33 10.5523 32.5523 11 32 11C31.4477 11 31 10.5523 31 10L31 1C31 0.447715 31.4477 -6.78527e-08 32 -4.37115e-08Z"
    fill="black"
  />
</svg> `,P=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.89543 2 2 2H25.9067C26.4459 2 26.9623 2.21772 27.3387 2.6038L35.068 10.5313C35.8529 11.3363 37.1471 11.3363 37.932 10.5313L45.6613 2.6038C46.0377 2.21772 46.5541 2 47.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M36.5 7L29.1388 0.249999L43.8612 0.25L36.5 7Z" fill="black" />
</svg> `,z=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#rtts_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="77.5"
    y1="0.5"
    x2="77.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="rtts_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.239583" stop-color="var(--ug-scale-background-color)" />
      <stop offset="0.493504" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.75" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,U=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M62 -4.37115e-08C62.5523 -1.95703e-08 63 0.447715 63 1L63 10C63 10.5523 62.5523 11 62 11C61.4477 11 61 10.5523 61 10L61 1C61 0.447715 61.4477 -6.78527e-08 62 -4.37115e-08Z"
    fill="black"
  />
</svg> `,M=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H47.9067C48.4459 2 48.9623 2.21772 49.3387 2.6038L57.068 10.5313C57.8529 11.3363 59.1471 11.3363 59.932 10.5313L67.6613 2.6038C68.0377 2.21772 68.5541 2 69.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M58.5 7L51.1388 0.249999L65.8612 0.25L58.5 7Z" fill="black" />
</svg> `,W=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#mrossl_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="119.5"
    y1="0.5"
    x2="119.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="mrossl_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.0474811" stop-color="var(--ug-scale-background-color)" />
      <stop offset="0.236466" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.425451" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,F=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M92 -4.37115e-08C92.5523 -1.95703e-08 93 0.447715 93 1L93 10C93 10.5523 92.5523 11 92 11C91.4477 11 91 10.5523 91 10L91 1C91 0.447715 91.4477 -6.78527e-08 92 -4.37115e-08Z"
    fill="black"
  />
</svg> `,B=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H70.9067C71.4459 2 71.9623 2.21772 72.3387 2.6038L80.068 10.5313C80.8529 11.3363 82.1471 11.3363 82.932 10.5313L90.6613 2.6038C91.0377 2.21772 91.5541 2 92.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M81.5 7L74.1388 0.249999L88.8612 0.25L81.5 7Z" fill="black" />
</svg> `,G=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#rossl_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="149.5"
    y1="1.09278e-07"
    x2="149.5"
    y2="9"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="rossl_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.221132" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,D=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M116 -4.37115e-08C116.552 -1.95703e-08 117 0.447715 117 1L117 10C117 10.5523 116.552 11 116 11C115.448 11 115 10.5523 115 10L115 1C115 0.447715 115.448 -6.78527e-08 116 -4.37115e-08Z"
    fill="black"
  />
</svg> `,N=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H90.9067C91.4459 2 91.9623 2.21772 92.3387 2.6038L100.068 10.5313C100.853 11.3363 102.147 11.3363 102.932 10.5313L110.661 2.6038C111.038 2.21772 111.554 2 112.093 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M101.5 7L94.1388 0.249999L108.861 0.25L101.5 7Z" fill="black" />
</svg> `;var j;!function(e){e.Gradient="Gradient",e.GradientWithUgText="GradientWithUgText",e.MinimalWithUgText="MinimalWithUgText",e.BarWithUgText="BarWithUgText"}(j||(j={}));const H={[m.RunsOneSizeStepSmall]:{[j.Gradient]:A,[j.GradientWithUgText]:A,[j.MinimalWithUgText]:L,[j.BarWithUgText]:O},[m.MayRunOneSizeStepSmall]:{[j.Gradient]:E,[j.GradientWithUgText]:E,[j.MinimalWithUgText]:k,[j.BarWithUgText]:P},[m.RunsTrueToSizeSmall]:{[j.Gradient]:z,[j.GradientWithUgText]:z,[j.MinimalWithUgText]:U,[j.BarWithUgText]:M},[m.RunsTrueToSize]:{[j.Gradient]:z,[j.GradientWithUgText]:z,[j.MinimalWithUgText]:U,[j.BarWithUgText]:M},[m.RunsTrueToSizeLarge]:{[j.Gradient]:z,[j.GradientWithUgText]:z,[j.MinimalWithUgText]:U,[j.BarWithUgText]:M},[m.MayRunOneSizeStepLarge]:{[j.Gradient]:W,[j.GradientWithUgText]:W,[j.MinimalWithUgText]:F,[j.BarWithUgText]:B},[m.RunsOneSizeStepLarge]:{[j.Gradient]:G,[j.GradientWithUgText]:G,[j.MinimalWithUgText]:D,[j.BarWithUgText]:N}};function V(e,t){return t&&(null==e?void 0:e.replace(/sizePlaceholder/g,t))}function K({alias:e,aliasedMessage:t,aliasedFallback:i,unaliasedMessage:o,unaliasedFallback:n}){var r;return e?null!==(r=function(e,t){return t&&(null==e?void 0:e.replace(/aliasPlaceholder/g,t))}(t,e))&&void 0!==r?r:i:null!=o?o:n}const Y=(e,t,i)=>{var o,n;const r=null!==(o=i===w.IncompleteProfile?null==t?void 0:t.incompleteProfileCtaMessageWithNameOverride:void 0)&&void 0!==o?o:null==t?void 0:t.ctaMessageWithNameOverride,s=null!==(n=i===w.IncompleteProfile?null==t?void 0:t.incompleteProfileCtaMessageOverride:void 0)&&void 0!==n?n:null==t?void 0:t.ctaMessageOverride;return K({alias:e,aliasedMessage:r,aliasedFallback:J(e),unaliasedMessage:s,unaliasedFallback:J()})},q=(e,t)=>{const i=null==t?void 0:t.socialProofCtaMessageWithNameOverride,o=null==t?void 0:t.socialProofCtaMessageOverride;return K({alias:e,aliasedMessage:i,aliasedFallback:J(e),unaliasedMessage:o,unaliasedFallback:J()})};function J(e){return e?(0,h.WI)(h.Bd`What's ${e}'s Size?`):(0,h.WI)("What's My Size?")}const Z=(t,i,o)=>K({alias:i,aliasedMessage:V(null==o?void 0:o.hwRecMessageWithNameOverride,t),aliasedFallback:(0,h.WI)(e.dy`True Fit shoppers similar to ${i} buy & keep size ${t}.`),unaliasedMessage:V(null==o?void 0:o.hwRecMessageOverride,t),unaliasedFallback:(0,h.WI)(e.dy`True Fit shoppers similar to you buy & keep size ${t}.`)});function X(t,i){var o,n,r,s,a,l,d;const c=null==i?void 0:i.universalGuidance,f="button"===(null==t?void 0:t.theme)?Object.assign({displayScale:!1},null===(o=null==t?void 0:t.button)||void 0===o?void 0:o.univGuidance):null==t?void 0:t.univGuidance;let g;if(g=(null==i?void 0:i.status)===w.Success?!0===(null===(n=null==t?void 0:t.univGuidance)||void 0===n?void 0:n.displayScaleOnSuccess):!1!==(null==f?void 0:f.displayScale),!c||!g||c.source===y.ItemSales)return;const p=(null===(s=null===(r=null==t?void 0:t.univGuidance)||void 0===r?void 0:r.scale)||void 0===s?void 0:s.style)||"Gradient",h=!1===(null===(a=null==t?void 0:t.univGuidance)||void 0===a?void 0:a.displayText),v=(null===(d=null===(l=null==t?void 0:t.univGuidance)||void 0===l?void 0:l.scale)||void 0===d?void 0:d.position)||"above";return e.dy`<ug-scale
    .ugDetails=${c}
    .ugScaleStyle=${p}
    .ugDisplayText=${!h}
    .ugScalePosition=${v}
    aria-hidden="true"
    class=${u({[v]:!0,"text-displayed":!h})}
  ></ug-scale>`}var Q=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ee=class extends e.oi{render(){return e.dy`<div class="product-widget-wrapper">
      <div class="wrapper-first-row">
        ${this.withSlotBeforeButton?e.dy`<span><slot name="beforeButton"></slot></span>`:null}${this.noRegFromWidget?e.dy``:e.dy`<span class="button-wrapper"
              >${this.hideLogo?e.dy``:e.dy`<t-logo></t-logo>`}<slot
                name="afterLogo"
              ></slot
            ></span>`}
      </div>
      <div>
        ${this.withSlotAfterButton?e.dy`<slot name="afterButton"></slot>`:null}
      </div>
    </div>`}};ee.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .product-widget-wrapper {
      display: grid;
      grid-row-gap: 0.333em;
    }
    .product-widget-wrapper .button-wrapper {
      background: var(--button-background-color);
      border: 1px solid #ddd;
      border-color: var(--button-border-color);
      border-radius: var(--button-border-radius);
      box-shadow: var(--button-box-shadow);
      display: flex;
      align-items: center;
      padding: 10px 15px;
    }
    .product-widget-wrapper t-logo {
      display: block;
      vertical-align: middle;
      margin-inline-end: 0.417em;
      -webkit-margin-end: 0.417em;
      width: var(--t-logo-size-button);
    }

    .product-widget-wrapper .wrapper-first-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.333em 0.833em;
    }
  `,Q([s()],ee.prototype,"withSlotBeforeButton",void 0),Q([s()],ee.prototype,"withSlotAfterButton",void 0),Q([s()],ee.prototype,"noRegFromWidget",void 0),Q([s()],ee.prototype,"hideLogo",void 0),ee=Q([t("button-product-widget-wrapper")],ee);let te=class extends e.oi{render(){var t,i,o,n;const r=this.widgetResult;if(!r)return e.dy``;const s=this.noRegFromWidget,a=this.recipientAlias,l=null==r?void 0:r.universalGuidance,d=null==r?void 0:r.heightWeightRecSizeName,c="button",u=!1===(null===(i=null===(t=this.widgetConfigs)||void 0===t?void 0:t.univGuidance)||void 0===i?void 0:i.displayText),f=!!l&&!u,g=null===(n=null===(o=this.widgetConfigs)||void 0===o?void 0:o.univGuidance)||void 0===n?void 0:n.ugText;return e.dy`${X(this.widgetConfigs,this.widgetResult)}
    ${v(r.status,[[w.NoUser,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${f}
            .noRegFromWidget=${s}
            .hideLogo=${this.hideLogo}
          >
            ${f&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${l}"
              .configs=${g}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="nouser-cta"
              .widgetTheme="${c}"
              >${Y(a,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`],[w.IncompleteProfile,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${f}
            .withSlotAfterButton=${!!d}
            .noRegFromWidget=${s}
            .hideLogo=${this.hideLogo}
          >
            <cta-link
              slot="afterLogo"
              data-element-id="incompleteprofile-cta"
              .widgetTheme="${c}"
              >${Y(a,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
            ${f&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${l}"
              .configs=${g}
            ></ug-text>`}
            ${d&&e.dy`<span class="middle" slot="afterButton">
              ${Z(d,a,this.widgetConfigs)}
            </span>`}
          </button-product-widget-wrapper>`],[w.InvalidDepartment,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${f}
            .noRegFromWidget=${s}
            .hideLogo=${this.hideLogo}
          >
            ${f&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${l}"
              .configs=${g}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="invaliddepartment-cta"
              .widgetTheme="${c}"
              >${Y(a,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`],[w.SizeNotAvailable,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${f}
            .noRegFromWidget=${s}
            .hideLogo=${this.hideLogo}
          >
            ${f&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${l}"
              .configs=${g}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="sizenotavailable-cta"
              .widgetTheme="${c}"
              >${Y(a,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`],[w.UnrecommendableDepartment,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${f}
            .hideLogo=${this.hideLogo}
          >
            ${f&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${l}"
              .configs=${g}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="unrecommendabledepartment-cta"
              .widgetTheme="${c}"
              >${Y(void 0,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`]])}`}};te.styles=e.iv`
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      column-gap: var(--ug-scale-horizontal-spacing);
    }

    @media (max-width: 169px) {
      ug-scale.text-displayed {
        display: none;
      }
    }

    ug-scale.start {
      flex: 1 0 160px;
      max-width: 180px;
    }

    /* This is for the middle-aligned to components at this level. */
    /* The other components may be middle-aligned in a deeper-level component instead. */
    .middle {
      vertical-align: middle;
    }
  `,Q([s({type:Object})],te.prototype,"widgetResult",void 0),Q([s({type:Object})],te.prototype,"widgetConfigs",void 0),Q([s()],te.prototype,"recipientAlias",void 0),Q([s()],te.prototype,"noRegFromWidget",void 0),Q([s()],te.prototype,"hideLogo",void 0),te=Q([(0,h.kI)(),t("button-product-widget")],te);var ie=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let oe=class extends e.oi{render(){const{size:t,vAlignMiddle:i=!0,showRecommendationUnderline:o=!1}=this;return t?e.dy`<span
      data-element-id="recommended-size"
      class=${u({"size-rec":!0,middle:i,"recommendation-underline":o})}
      >${(0,h.WI)(h.Bd`Size: ${t}`)}</span
    >`:e.dy``}};oe.styles=e.iv`
    :host {
      font-family: inherit;
      text-transform: var(--size-rec-text-transform);
      font-weight: var(--size-rec-font-weight);
    }

    .size-rec.middle {
      vertical-align: middle;
    }

    .size-rec.recommendation-underline {
      text-decoration: underline;
    }
  `,ie([s({type:String})],oe.prototype,"size",void 0),ie([s()],oe.prototype,"vAlignMiddle",void 0),ie([s()],oe.prototype,"showRecommendationUnderline",void 0),oe=ie([(0,h.kI)(),t("size-rec")],oe);var ne=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let re=class extends e.oi{render(){var t,i,o;const{vAlignMiddle:n=!0}=this,{taglineMessageOverride:r,incompleteProfileTaglineMessageOverride:s}=null!==(t=this.widgetConfigs)&&void 0!==t?t:{};return e.dy`<span
      class="${u({tagline:!0,middle:n})}"
      >${null!==(o=null!==(i=this.fitRecStatus===w.IncompleteProfile?s:void 0)&&void 0!==i?i:r)&&void 0!==o?o:(0,h.WI)("When you can't try it on.")}</span
    >`}};re.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .tagline.middle {
      vertical-align: middle;
    }
  `,ne([s()],re.prototype,"vAlignMiddle",void 0),ne([s()],re.prototype,"widgetConfigs",void 0),ne([s()],re.prototype,"fitRecStatus",void 0),re=ne([(0,h.kI)(),t("tagline-text")],re);var se=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ae=class extends e.oi{constructor(){super(...arguments),this.showSocialProofMessage=!1}handleCtaClick(e){this.sendOpenEvent&&this.showCtaInfoIcon&&(e.stopPropagation(),this.sendOpenEvent(!1))}render(){if(!this.overallItemSizing)return e.dy``;const t={down:(0,h.WI)("Consider sizing down"),typical:(0,h.WI)("Consider your typical size"),up:(0,h.WI)("Consider sizing up")};let i="";const o=(0,h.WI)(`Based on ${this.overallItemSizing.orderCount} purchases`);switch(this.overallItemSizing.sizingTrend){case 1:case 2:case 3:i=t.down;break;case 4:case 5:case 6:i=t.typical;break;case 7:case 8:case 9:i=t.up}return e.dy`
      <span>
        <span class="title">${i}</span>
        ${this.showSocialProofMessage?e.dy`<br />
              <span>${o}</span>`:null}
        <cta-link
          data-element-id="nouser-cta"
          .widgetTheme="slim"
          @click="${this.handleCtaClick}"
        >
          ${this.ctaString}${this.showCtaInfoIcon?e.dy`<span
                class="info-icon"
                @click="${e=>{this.sendOpenEvent&&(e.stopPropagation(),this.sendOpenEvent())}}"
              >
                <span
                  class="separator"
                  @click="${e=>e.stopPropagation()}"
                  >|</span
                ><span class="icon">ⓘ</span>
              </span>`:e.dy``}
        </cta-link>
      </span>
    `}};var le;ae.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .title {
      font-weight: bold;
      vertical-align: middle;
    }
    .info-icon {
      vertical-align: middle;
      display: inline-block;
    }
    .info-icon .separator {
      margin: 0 8px;
      cursor: auto;
    }
  `,se([s()],ae.prototype,"overallItemSizing",void 0),se([s()],ae.prototype,"showSocialProofMessage",void 0),se([s()],ae.prototype,"sendOpenEvent",void 0),se([s()],ae.prototype,"ctaString",void 0),se([s()],ae.prototype,"showCtaInfoIcon",void 0),ae=se([(0,h.kI)(),t("social-proof-message")],ae),function(e){e.FitDetails="fitdetails",e.InvalidDepartment="invaliddepartment",e.IncompleteGarment="incompletegarment",e.InvalidGender="invalidgender",e.Login="login",e.Manage="manage",e.ProfileSwitcher="profileswitcher",e.SizeNotAvailable="sizenotavailable"}(le||(le={}));var de=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ce=class extends e.oi{handleCtaClick(e){this.sendOpenEvent&&(e.stopPropagation(),this.sendOpenEvent(!0,le.ProfileSwitcher))}render(){const t=this.alias||"you";return e.dy`<div>
      ${(0,h.WI)(h.Bd`Not for ${t}? `)}
      <cta-link
        data-element-id="switchprofile-cta"
        .widgetTheme="slim"
        @click="${this.handleCtaClick}"
      >
        ${(0,h.WI)("Switch/Add Profile")}
      </cta-link>
    </div>`}};ce.styles=e.iv``,de([s()],ce.prototype,"alias",void 0),de([s()],ce.prototype,"sendOpenEvent",void 0),ce=de([(0,h.kI)(),t("mdr-widget-text")],ce);const ue=(e,t)=>K({alias:e,aliasedMessage:null==t?void 0:t.successRecMessageWithNameOverride,aliasedFallback:(0,h.WI)(h.Bd`${e}'s Recommendation`),unaliasedMessage:null==t?void 0:t.successRecMessageOverride,unaliasedFallback:(0,h.WI)("Your Recommendation")});var fe=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ge=class extends e.oi{render(){return e.dy`<div class="product-widget-wrapper">
      <div>
        <span class="logo-and-first-wrapper"
          >${this.hideLogo?e.dy``:e.dy`<t-logo></t-logo>`}<slot
            name="afterLogo-row1-col1"
          ></slot></span
        ><slot name="afterLogo-row1-col2-no-space"></slot>
        <slot name="afterLogo-row1-col2"></slot>
      </div>
      <div
        class=${u({"after-logo-row-2":!0,"with-margin-top":!!this.withGapAboveSecondRow})}
      >
        <slot name="afterLogo-row2-col1"></slot>
      </div>
    </div>`}};ge.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .product-widget-wrapper {
      display: inline-flex;
      flex-wrap: wrap;
      column-gap: 0.3em;
      align-items: center;
      vertical-align: middle;
    }
    .product-widget-wrapper .logo-and-first-wrapper {
      display: inline-block;
    }
    .product-widget-wrapper t-logo {
      display: inline-block;
      vertical-align: middle;
      margin-inline-end: 0.3em;
      -webkit-margin-end: 0.3em;
      width: var(--t-logo-size-slim);
    }
    .product-widget-wrapper .after-logo-row-2.with-margin-top {
      margin-top: 0.66667em;
    }
  `,fe([s()],ge.prototype,"withGapAboveSecondRow",void 0),fe([s()],ge.prototype,"hideLogo",void 0),ge=fe([t("slim-product-widget-wrapper")],ge);let pe=class extends e.oi{render(){var t,i,o,n,r,s,a,l,d,c,f,g;const p=this.widgetResult;if(!p)return e.dy``;const m=this.noRegFromWidget,y=this.recipientAlias,b=null==p?void 0:p.universalGuidance,x=null==p?void 0:p.heightWeightRecSizeName,S=null===(t=this.widgetConfigs)||void 0===t?void 0:t.theme,_=(e=>{var t;return"excluded"===(null===(t=null==e?void 0:e.slimThemeTagline)||void 0===t?void 0:t.toLowerCase())})(this.widgetConfigs),$=!b&&!_&&!m,R=!1===(null===(o=null===(i=this.widgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===o?void 0:o.displayText),T=!0===(null===(n=this.widgetConfigs)||void 0===n?void 0:n.recommendationUnderline),C=(null===(a=null===(s=null===(r=this.widgetConfigs)||void 0===r?void 0:r.univGuidance)||void 0===s?void 0:s.scale)||void 0===a?void 0:a.position)||"above",I=null===(d=null===(l=this.widgetConfigs)||void 0===l?void 0:l.univGuidance)||void 0===d?void 0:d.ugText,A=!0===(null===(c=this.widgetConfigs)||void 0===c?void 0:c.showSocialProofTitle),L=!0===(null===(f=this.widgetConfigs)||void 0===f?void 0:f.showSocialProofMessage),O=null===(g=this.widgetResult)||void 0===g?void 0:g.mdrRecommendationInfo;return e.dy`${v(p.status,[[w.NoUser,()=>{var t,i,o,n;let r=null,s="afterLogo-row1-col1";return(null===(o=null===(i=null===(t=this.widgetResult)||void 0===t?void 0:t.fitHubResponse)||void 0===i?void 0:i.itemSizingSummary)||void 0===o?void 0:o.overall)&&A?(s="",r=e.dy`<social-proof-message
              slot="afterLogo-row1-col1"
              .overallItemSizing=${this.widgetResult.fitHubResponse.itemSizingSummary.overall}
              .showSocialProofMessage=${L}
              .sendOpenEvent=${this.sendOpenEvent}
              .ctaString="${q(y,this.widgetConfigs)}"
              .showCtaInfoIcon=${null===(n=this.widgetConfigs)||void 0===n?void 0:n.showCtaInfoIcon}
            ></social-proof-message>`):b&&!R?(s="afterLogo-row1-col2",r=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${b}
              .configs=${I}
            ></ug-text>`):$&&(s="afterLogo-row1-col2",r=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==p?void 0:p.status}
            ></tagline-text>`),e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper .hideLogo=${this.hideLogo}>
              ${r}
              <cta-link
                slot="${s}"
                data-element-id="nouser-cta"
                .widgetTheme="${S}"
                .noRegFromWidget=${m}
                >${Y(y,this.widgetConfigs,null==p?void 0:p.status)}</cta-link
              >
            </slim-product-widget-wrapper>`}],[w.IncompleteProfile,()=>{var t,i,o,n;let r=null,s=null,a=null,l=null;b||x?b&&!x?R?a="afterLogo-row1-col1":(l="afterLogo-row1-col1",a="afterLogo-row1-col2"):!b&&x?(a="afterLogo-row1-col1",s="afterLogo-row2-col1"):b&&x&&(R?a="afterLogo-row1-col1":(l="afterLogo-row1-col1",a="afterLogo-row1-col2"),s="afterLogo-row2-col1"):(r="afterLogo-row1-col1",a="afterLogo-row1-col2");const d=(null===(o=null===(i=null===(t=this.widgetResult)||void 0===t?void 0:t.fitHubResponse)||void 0===i?void 0:i.itemSizingSummary)||void 0===o?void 0:o.overall)?e.dy`<social-proof-message
                slot="afterLogo-row1-col1"
                .overallItemSizing=${this.widgetResult.fitHubResponse.itemSizingSummary.overall}
                .showSocialProofMessage=${L}
                .sendOpenEvent=${this.sendOpenEvent}
                .ctaString="${q(y,this.widgetConfigs)}"
                .showCtaInfoIcon=${null===(n=this.widgetConfigs)||void 0===n?void 0:n.showCtaInfoIcon}
              ></social-proof-message>`:null;a=d?"":a;const c=$&&r?e.dy`<tagline-text
                  slot=${r}
                  .widgetConfigs=${this.widgetConfigs}
                  .fitRecStatus=${null==p?void 0:p.status}
                ></tagline-text>`:null,u=l&&b?e.dy`<ug-text
                  slot=${l}
                  .ugDetails=${b}
                  .configs=${I}
                ></ug-text>`:null,f=d||u||c,g=s&&x?e.dy`<span
                  class="hw-rec middle ${C}"
                  slot=${s}
                  >${Z(x,y,this.widgetConfigs)}</span
                >`:null;return e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper
              .withGapAboveSecondRow=${!!x}
              .hideLogo=${this.hideLogo||!f&&m}
            >
              ${f}
              <cta-link
                slot="${a}"
                data-element-id="incompleteprofile-cta"
                .widgetTheme="${S}"
                .noRegFromWidget=${m}
                >${Y(y,this.widgetConfigs,null==p?void 0:p.status)}</cta-link
              >
              ${g}
            </slim-product-widget-wrapper> `}],[w.InvalidDepartment,()=>{let t=null,i="afterLogo-row1-col1";return b&&!R?(i="afterLogo-row1-col2",t=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${b}
              .configs=${I}
            ></ug-text>`):$&&(i="afterLogo-row1-col2",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==p?void 0:p.status}
            ></tagline-text>`),e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper .hideLogo=${this.hideLogo}>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="invaliddepartment-cta"
                .widgetTheme="${S}"
                .noRegFromWidget=${m}
                >${Y(y,this.widgetConfigs,null==p?void 0:p.status)}</cta-link
              >
            </slim-product-widget-wrapper>`}],[w.Success,()=>{var t;const i=(null===(t=null==O?void 0:O.recommendationType)||void 0===t?void 0:t.startsWith("cross"))?e.dy`<mdr-widget-text
                .alias=${y}
                .sendOpenEvent=${this.sendOpenEvent}
              ></mdr-widget-text>`:e.dy``;return e.dy`<div
            class=${u({"recommendation-underline":T})}
          >
            ${X(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper
              data-element-id="success-widget"
              .hideLogo=${this.hideLogo}
            >
              <size-rec
                slot="afterLogo-row1-col1"
                .size="${null==p?void 0:p.size}"
                .showRecommendationUnderline="${T}"
              ></size-rec>
              <!-- Using the no-space slot so the underline is connected -->
              <span
                slot="afterLogo-row1-col2-no-space"
                class="size-rec-description middle"
              >
                ${" "+ue(y,this.widgetConfigs)}</span
              >
            </slim-product-widget-wrapper>
            ${i}
          </div>`}],[w.EstimationInProgress,()=>e.dy`<slim-product-widget-wrapper
            data-element-id="estimationinprogress-widget"
            .hideLogo=${this.hideLogo}
          >
            <span slot="afterLogo-row1-col1" class="estimation middle"
              >${y?(0,h.WI)(h.Bd`Calculating ${y}'s True Fit…`):(0,h.WI)("Calculating your True Fit…")}</span
            >
          </slim-product-widget-wrapper>`],[w.SizeNotAvailable,()=>{var t,i,o,n;let r=null,s="afterLogo-row1-col1";return(null===(o=null===(i=null===(t=this.widgetResult)||void 0===t?void 0:t.fitHubResponse)||void 0===i?void 0:i.itemSizingSummary)||void 0===o?void 0:o.overall)?(s="",r=e.dy`<social-proof-message
              slot="afterLogo-row1-col1"
              .overallItemSizing=${this.widgetResult.fitHubResponse.itemSizingSummary.overall}
              .showSocialProofMessage=${L}
              .sendOpenEvent=${this.sendOpenEvent}
              .ctaString="${q(y,this.widgetConfigs)}"
              .showCtaInfoIcon=${null===(n=this.widgetConfigs)||void 0===n?void 0:n.showCtaInfoIcon}
            ></social-proof-message>`):b&&!R?(s="afterLogo-row1-col2",r=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${b}
              .configs=${I}
            ></ug-text>`):$&&(s="afterLogo-row1-col2",r=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==p?void 0:p.status}
            ></tagline-text>`),e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper .hideLogo=${this.hideLogo}>
              ${r}
              <cta-link
                slot="${s}"
                data-element-id="sizenotavailable-cta"
                .widgetTheme="${S}"
                .noRegFromWidget=${m}
                >${Y(y,this.widgetConfigs,null==p?void 0:p.status)}</cta-link
              >
            </slim-product-widget-wrapper>`}],[w.UnrecommendableDepartment,()=>{let t=null,i="afterLogo-row1-col1";return b&&!R?(i="afterLogo-row1-col2",t=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${b}
              .configs=${I}
            ></ug-text>`):$&&(i="afterLogo-row1-col2",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==p?void 0:p.status}
            ></tagline-text>`),e.dy`<slim-product-widget-wrapper .hideLogo=${this.hideLogo}>
            ${t}
            <cta-link
              slot="${i}"
              data-element-id="unrecommendabledepartment-cta"
              .widgetTheme="${S}"
              .noRegFromWidget=${m}
              >${Y(void 0,this.widgetConfigs,null==p?void 0:p.status)}</cta-link
            >
          </slim-product-widget-wrapper>`}]])}`}};pe.styles=e.iv`
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      column-gap: var(--ug-scale-horizontal-spacing);
    }

    @media (max-width: 169px) {
      ug-scale.text-displayed {
        display: none;
      }
    }

    ug-scale.start {
      flex: 1 0 160px;
      max-width: 180px;
    }

    /* This is for the middle-aligned to components at this level. */
    /* The other components may be middle-aligned in a deeper-level component instead. */
    .middle {
      vertical-align: middle;
    }

    .hw-rec {
      margin-top: 0.66667em;
    }

    .recommendation-underline {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .recommendation-underline .size-rec,
    .recommendation-underline .size-rec-description {
      text-decoration: underline;
    }
  `,fe([s({type:Object})],pe.prototype,"widgetResult",void 0),fe([s({type:Object})],pe.prototype,"widgetConfigs",void 0),fe([s()],pe.prototype,"recipientAlias",void 0),fe([s()],pe.prototype,"noRegFromWidget",void 0),fe([s()],pe.prototype,"hideLogo",void 0),fe([s()],pe.prototype,"sendOpenEvent",void 0),pe=fe([(0,h.kI)(),t("slim-product-widget")],pe);var he=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ve=class extends e.oi{render(){return e.dy`<div class="product-widget-wrapper">
      ${this.hideLogo?e.dy``:e.dy`<t-logo></t-logo>`}
      <div class="after-logo-wrapper standard">
        <div class="after-logo-row-1">
          <span><slot name="afterLogo-row1-col1"></slot></span>
          <span><slot name="afterLogo-row1-col2"></slot></span>
        </div>
        <div
          class=${u({"after-logo-row-2":!0,"with-margin-top":!!this.withGapAboveSecondRow})}
        >
          <slot name="afterLogo-row2-col1"></slot>
        </div>
      </div>
    </div>`}};ve.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .product-widget-wrapper {
      display: inline-flex;
      align-items: center;
    }
    .product-widget-wrapper t-logo {
      flex: 0 0 auto;
      width: var(--t-logo-size-standard);
      margin-inline-end: 0.5em;
      -webkit-margin-end: 0.5em;
    }
    .product-widget-wrapper .after-logo-row-2.with-margin-top {
      margin-top: 0.25em;
    }
  `,he([s()],ve.prototype,"withGapAboveSecondRow",void 0),he([s()],ve.prototype,"hideLogo",void 0),ve=he([t("standard-product-widget-wrapper")],ve);let me=class extends e.oi{render(){var t,i,o,n,r,s,a,l,d,c;const f=this.widgetResult;if(!f)return e.dy``;const g=this.noRegFromWidget,p=this.recipientAlias,m=null==f?void 0:f.universalGuidance,y=null==f?void 0:f.heightWeightRecSizeName,b=null===(t=this.widgetConfigs)||void 0===t?void 0:t.theme,x=!1===(null===(o=null===(i=this.widgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===o?void 0:o.displayText),S=!0===(null===(n=this.widgetConfigs)||void 0===n?void 0:n.recommendationUnderline),_=(null===(a=null===(s=null===(r=this.widgetConfigs)||void 0===r?void 0:r.univGuidance)||void 0===s?void 0:s.scale)||void 0===a?void 0:a.position)||"above",$=null===(d=null===(l=this.widgetConfigs)||void 0===l?void 0:l.univGuidance)||void 0===d?void 0:d.ugText,R=null===(c=this.widgetResult)||void 0===c?void 0:c.mdrRecommendationInfo;return e.dy`${v(f.status,[[w.NoUser,()=>{let t=null,i="afterLogo-row1-col1";return m?x||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${m}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==f?void 0:f.status}
            ></tagline-text>`),e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper .hideLogo=${this.hideLogo}>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="nouser-cta"
                .widgetTheme="${b}"
                .noRegFromWidget=${g}
                >${Y(p,this.widgetConfigs,null==f?void 0:f.status)}</cta-link
              >
            </standard-product-widget-wrapper>`}],[w.IncompleteProfile,()=>{let t=null,i=null,o=null,n=null;m||y?m&&!y?x?o="afterLogo-row1-col1":(n="afterLogo-row1-col1",o="afterLogo-row2-col1"):!m&&y?(o="afterLogo-row1-col1",i="afterLogo-row2-col1"):m&&y&&(x?o="afterLogo-row1-col1":(n="afterLogo-row1-col1",o="afterLogo-row1-col2"),i="afterLogo-row2-col1"):(t="afterLogo-row1-col1",o="afterLogo-row2-col1");const r=t?e.dy`<tagline-text
                slot=${t}
                .vAlignMiddle=${!1}
                .widgetConfigs=${this.widgetConfigs}
                .fitRecStatus=${null==f?void 0:f.status}
              ></tagline-text>`:null,s=(n&&m?e.dy`<ug-text
                  slot=${n}
                  .vAlignMiddle=${!1}
                  .ugDetails=${m}
                  .configs=${$}
                ></ug-text>`:null)||r,a=i&&y?e.dy`<span
                  class="hw-rec middle ${_}"
                  slot=${i}
                  >${Z(y,p,this.widgetConfigs)}</span
                >`:null;return e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper
              .withGapAboveSecondRow=${!!y}
              .hideLogo=${this.hideLogo}
            >
              ${s}<cta-link
                slot="${o}"
                data-element-id="incompleteprofile-cta"
                .widgetTheme="${b}"
                .noRegFromWidget=${g}
                >${Y(p,this.widgetConfigs,null==f?void 0:f.status)}</cta-link
              >
              ${a}
            </standard-product-widget-wrapper> `}],[w.InvalidDepartment,()=>{let t=null,i="afterLogo-row1-col1";return m?x||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${m}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==f?void 0:f.status}
            ></tagline-text>`),e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper .hideLogo=${this.hideLogo}>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="invaliddepartment-cta"
                .widgetTheme="${b}"
                .noRegFromWidget=${g}
                >${Y(p,this.widgetConfigs,null==f?void 0:f.status)}</cta-link
              >
            </standard-product-widget-wrapper>`}],[w.Success,()=>{var t;const i=(null===(t=null==R?void 0:R.recommendationType)||void 0===t?void 0:t.startsWith("cross"))?e.dy`<mdr-widget-text
                .alias=${p}
                .sendOpenEvent=${this.sendOpenEvent}
              ></mdr-widget-text>`:e.dy``;return e.dy`<div
            class=${u({"recommendation-underline":S})}
          >
            <standard-product-widget-wrapper
              data-element-id="success-widget"
              .hideLogo=${this.hideLogo}
            >
              <size-rec
                slot="afterLogo-row1-col1"
                .size="${null==f?void 0:f.size}"
                .vAlignMiddle=${!1}
                .showRecommendationUnderline="${S}"
              ></size-rec>
              <span slot="afterLogo-row2-col1" class="size-rec-description"
                >${ue(p,this.widgetConfigs)}</span
              >
            </standard-product-widget-wrapper>
            ${i}
          </div>`}],[w.EstimationInProgress,()=>e.dy`<standard-product-widget-wrapper
            data-element-id="estimationinprogress-widget"
            .hideLogo=${this.hideLogo}
          >
            <span
              slot="afterLogo-row1-col1"
              class="${u({estimation:!0})}"
              >${p?(0,h.WI)(h.Bd`Calculating ${p}'s True Fit…`):(0,h.WI)("Calculating your True Fit…")}</span
            >
          </standard-product-widget-wrapper>`],[w.SizeNotAvailable,()=>{let t=null,i="afterLogo-row1-col1";return m?x||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${m}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==f?void 0:f.status}
            ></tagline-text>`),e.dy`${X(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper .hideLogo=${this.hideLogo}>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="sizenotavailable-cta"
                .widgetTheme="${b}"
                .noRegFromWidget=${g}
                >${Y(p,this.widgetConfigs,null==f?void 0:f.status)}</cta-link
              >
            </standard-product-widget-wrapper>`}],[w.UnrecommendableDepartment,()=>{let t=null,i="afterLogo-row1-col1";return m?x||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${m}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==f?void 0:f.status}
            ></tagline-text>`),e.dy`<standard-product-widget-wrapper
            .hideLogo=${this.hideLogo}
          >
            ${t}
            <cta-link
              slot="${i}"
              data-element-id="unrecommendabledepartment-cta"
              .widgetTheme="${b}"
              >${Y(void 0,this.widgetConfigs,null==f?void 0:f.status)}</cta-link
            >
          </standard-product-widget-wrapper>`}]])}`}};me.styles=e.iv`
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      column-gap: var(--ug-scale-horizontal-spacing);
    }

    @media (max-width: 169px) {
      ug-scale.text-displayed {
        display: none;
      }
    }

    ug-scale.start {
      flex: 1 0 160px;
      max-width: 180px;
    }

    /* This is for the middle-aligned to components at this level. */
    /* The other components may be middle-aligned in a deeper-level component instead. */
    .middle {
      vertical-align: middle;
    }

    .recommendation-underline {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .recommendation-underline .size-rec,
    .recommendation-underline .size-rec-description {
      text-decoration: underline;
    }
  `,he([s({type:Object})],me.prototype,"widgetResult",void 0),he([s({type:Object})],me.prototype,"widgetConfigs",void 0),he([s()],me.prototype,"recipientAlias",void 0),he([s()],me.prototype,"noRegFromWidget",void 0),he([s()],me.prototype,"hideLogo",void 0),he([s()],me.prototype,"sendOpenEvent",void 0),me=he([(0,h.kI)(),t("standard-product-widget")],me);const{I:ye}=l.Al,we=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),we(e,t);return!0},be=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},xe=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),$e(t)}};function Se(e){void 0!==this._$AN?(be(this),this._$AM=e,xe(this)):this._$AM=e}function _e(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)we(o[e],!1),be(o[e]);else null!=o&&(we(o,!1),be(o));else we(this,e)}const $e=e=>{2==e.type&&(e._$AP??=_e,e._$AQ??=Se)};class Re extends c{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),xe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(we(this,e),be(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Te{}const Ce=new WeakMap,Ie=d(class extends Re{render(e){return l.Ld}update(e,[t]){const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),l.Ld}rt(e){if("function"==typeof this.Y){const t=this.ht??globalThis;let i=Ce.get(t);void 0===i&&(i=new WeakMap,Ce.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?Ce.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ae,Le;const Oe="undefined"!=typeof self?self:globalThis,Ee=null!==(Ae=Oe.window)&&void 0!==Ae?Ae:{},ke=null!==(Le=Oe.document)&&void 0!==Le?Le:{},Pe={NODE_ENV:"production",PUBLIC_URL:void 0,WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,TFP_APP_DIST_PUBLIC_URL:"/consumer-ux/7.0-localized-202502201542.77/tfp-app"};let ze;function Ue(e){ze=e}function Me(){return ze}var We,Fe,Be,Ge,De,Ne,je,He,Ve,Ke,Ye;!function(e){e.Valid="valid",e.Invalid="invalid",e.RequestSent="requestSent",e.Unknown="unknown"}(We||(We={}));class qe{constructor(){this.callbacks=[]}listen(e){this.callbacks.push(e)}unlisten(e){const t=this.callbacks.indexOf(e);t>=0&&this.callbacks.splice(t,1)}unlistenAll(){this.callbacks.splice(0)}trigger(e){this.callbacks.slice().forEach((t=>t(e)))}}function Je(){return(new Date).getTime()}!function(e){e.Female="Female",e.Male="Male",e.Unisex="Unisex"}(Fe||(Fe={})),function(e){e.Adult="Adult",e.Child="Child"}(Be||(Be={})),function(e){e.YrMo="YrMo"}(Ge||(Ge={})),function(e){e.Cm="Cm",e.FtIn="FtIn"}(De||(De={})),function(e){e.Kg="Kg",e.Lb="Lb",e.StLb="StLb"}(Ne||(Ne={})),function(e){e.Cm="Cm",e.In="In"}(je||(je={})),function(e){e.ExtraLong="ExtraLong",e.Long="Long",e.Regular="Regular",e.Short="Short"}(He||(He={})),function(e){e.WayTooShort="WayTooShort",e.TooShort="TooShort",e.JustRight="JustRight",e.TooLong="TooLong",e.WayTooLong="WayTooLong"}(Ve||(Ve={})),(Ye=Ke||(Ke={})).Snug="Snug",Ye.GreatFitSnug="GreatFitSnug",Ye.GreatFit="GreatFit",Ye.GreatFitLoose="GreatFitLoose",Ye.Loose="Loose";let Ze,Xe,Qe=null;function et(e){Qe=e}function tt(){if(null===Qe)throw"ScreenSize has not been set";return Qe}function it(){if(null===Qe)throw"ScreenSize has not been set";return"small"===Qe?"mobile":"desktop"}function ot(){return Ze}function nt(e){Ze=e}function rt(){return Xe}function st(e){Xe=e}let at={};function lt(){return at}function dt(){return at}function ct(e){at=Object.assign(Object.assign({},at),e)}const ut=ke.location.hash.substring(1).split("&").reduce(((e,t)=>{const[i,o]=t.split("=");return e[decodeURIComponent(i)]=decodeURIComponent(o),e}),{});let ft,gt,pt,ht,vt;const mt=Pe.TFP_WIDGETS_CONSUMER_SERVICE_URI,yt=Pe.TFP_WIDGETS_CONSUMER_CDN_URI||"https://cdn.truefitcorp.com",wt=mt||"https://consumer.truefitcorp.com",bt=yt,xt=Pe.TFP_WIDGETS_TFP_APP_URI||yt,St=mt||ke.location.origin,_t=ut.otherWidgets,$t=()=>{var e;return ft||(ft={iframeId:Ot("iframeId"),tfIntegrationVersion:ut.tfIntegrationVersion,nativeAppSdkIntegration:ut.nativeAppSdkIntegration,type:Ot("type"),storeKey:Ot("storeKey"),cookiesEnabled:(e=Ot("cookiesEnabled"),"true"===e),retailerHref:ut.retailerHref,retailerOrigin:ut.retailerOrigin,screenSize:Ot("screenSize"),deviceType:Ot("deviceType"),integrationPlatform:ut.integrationPlatform,token:ut.token,userId:ut.userId,registered:Lt(ut.registered),locale:ut.locale,widgetHidden:Lt(ut.widgetHidden),storeExperimentKey:ut.storeExperimentKey,sessionParamOverrides:ut.sessionParamOverrides}),ft},Rt=()=>{if(!gt){const e=$t();if("tfc-fitrec-product"!==e.type)throw new Error(`Expected widget type=tfc-fitrec-product, but found: ${e.type}`);gt=Object.assign(Object.assign({},e),{type:"tfc-fitrec-product",configSet:ut.configSet,configOverride:ut.configOverride,widgetLocation:ut.widgetLocation,styleId:Ot("styleId"),colorId:ut.colorId,context:ut.context,otherWidgets:_t,recOnly:Lt(ut.recOnly)})}return gt},Tt=()=>{if(!ht){const e=$t();if("tfc-fitrec-size-sampling"!==e.type)throw new Error(`Expected widget type=tfc-fitrec-size-sampling, but found: ${e.type}`);ht=Object.assign(Object.assign({},e),{type:"tfc-fitrec-size-sampling",configSet:ut.configSet,configOverride:ut.configOverride,otherWidgets:_t,productInfo:ut.productInfo})}return ht},Ct=()=>{if(!vt){const e=$t();if("tfc-fitrec-rollup"!==e.type)throw new Error(`Expected widget type=tfc-fitrec-rollup, but found: ${e.type}`);vt=Object.assign(Object.assign({},e),{type:"tfc-fitrec-rollup",styleId:Ot("styleId"),configSet:ut.configSet,configOverride:ut.configOverride,widgetLocation:ut.widgetLocation,otherWidgets:_t})}return vt},It=()=>{if(!pt){const e=$t();if("api"!==e.type)throw new Error(`Expected widget type=api, but found: ${e.type}`);pt=Object.assign(Object.assign({},e),{type:"api",iframeId:Ot("iframeId"),checkout:ut.checkout,otherWidgets:_t,sessionInfo:ut.sessionInfo})}return pt};function At(e){const{userId:t,registered:i,widgetHidden:o,locale:n,storeExperimentKey:r,configSet:s,configOverride:a}=e;return{userId:t,registered:i,locale:n,widgetHidden:o,storeExperimentKey:r,configSet:s,configOverride:a,widgetLocation:"widgetLocation"in e?e.widgetLocation:"A"}}function Lt(e){return void 0===e?void 0:"true"===e}function Ot(e){const t=ut[e];if(void 0===t)throw new Error(`Required param [${e}] not found on the hash`);return t}const Et=()=>{var e;const{deviceType:t,storeKey:i,integrationPlatform:o,nativeAppSdkIntegration:n}=$t(),{widgetLocation:r}=lt(),s=rt();if(!s)throw new Error("attempted to build url params, but there is no current widget response - this shouldn't be possible");const{configs:a,locale:l,profiles:d}=s,{id:c}=null!==(e=null==d?void 0:d.recipient)&&void 0!==e?e:{},{analytics:{universalAnalyticsConfigs:u},feature:{sfoEnabled:f,emailOptInEnabled:g,includeAgeQuestion:p,quantumMetricEnabled:h,brandSearchMode:v,privacyMessagingEnabled:m,fitDetailsUxMode:y,fitDetailsInFunnel:w,modalHeaderDisplayMode:b,includeShoeIntro:x,apparelIntro:S,heightQuestion:_,weightQuestion:$,saveQuestion:R,stepIndicator:T,suggestedBrands:C,bannerRedirectUrl:I,explicitlyAcceptPrivacyPolicy:A,pixelSyncEnabled:L},tfpApp:O}=a,E=u&&JSON.stringify(u),k=O?JSON.stringify(O):void 0,P=Me(),z=tt();return{storeId:i,token:P,nativeAppSdkIntegration:n,serviceSecureURI:wt,cdnSecureURI:bt,platform:o,deviceType:t,screenSize:z,recipientProfileId:c,locale:l,shopForOthersEnabled:f,emailOptInEnabled:g,includeAgeQuestion:p,universalAnalyticsConfigs:E,tfpAppConfigs:k,qmEnabled:h,brandSearchMode:v,privacyMessagingEnabled:m,fitDetailsUxMode:y,fitDetailsInFunnel:w,modalHeaderDisplayMode:b,includeShoeIntro:x,apparelIntro:S,heightQuestion:_,weightQuestion:$,saveQuestion:R,stepIndicator:T,suggestedBrands:C,bannerRedirectUrl:I,explicitlyAcceptPrivacyPolicy:A,widgetLocation:r,pixelSyncEnabled:L}};function kt(e){return t=this,i=void 0,n=function*(){const{storeKey:t}=$t(),{checkoutType:i,orderId:o,userId:n,locale:r,deviceType:s,integrationPlatform:a,widgetHidden:l,storeExperimentKey:d,products:c}=e,u={};n&&(u["X-TF-StoreUserId"]=n);const f={};r&&(f.locale=r),yield ui(),yield si({path:`/profile/public/v4/${t}/checkout`,headers:u,queryParams:f,body:JSON.stringify({checkoutType:i,orderId:o,deviceType:s,integrationPlatform:a,widgetHidden:l,storeExperimentKey:d,products:c})})},new((o=void 0)||(o=Promise))((function(e,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(s,a)}l((n=n.apply(t,i||[])).next())}));var t,i,o,n}var Pt,zt;function Ut(e){return t=this,i=void 0,n=function*(){const{storeKey:t}=$t(),{userId:i,locale:o,widgetHidden:n,storeExperimentKey:r,deviceType:s,integrationPlatform:a,referrerUri:l,retailerReferer:d}=e,c={};i&&(c["X-TF-StoreUserId"]=i);const u={};o&&(u.locale=o),yield ui(),yield si({path:`/profile/public/v4/${t}/analytics/tracking`,headers:c,queryParams:u,body:JSON.stringify({widgetHidden:n,storeExperimentKey:r,deviceType:s,integrationPlatform:a,referrerUri:l,retailerReferer:d})})},new((o=void 0)||(o=Promise))((function(e,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(s,a)}l((n=n.apply(t,i||[])).next())}));var t,i,o,n}!function(e){e.INFO="INFO",e.WARN="WARN",e.ERROR="ERROR"}(Pt||(Pt={})),function(e){e[e.TRACE=1]="TRACE",e[e.DEBUG=2]="DEBUG",e[e.INFO=3]="INFO",e[e.WARN=4]="WARN",e[e.ERROR=5]="ERROR",e[e.OFF=6]="OFF"}(zt||(zt={}));const Mt="true"===Pe.TFP_WIDGETS_CONSOLE_LOGGER;Ee.tfcLoggingLevel=Ee.tfcLoggingLevel||void 0;const Wt=Pe.TFP_WIDGETS_LOGGING_LEVEL;function Ft(){var e;return null!==(e=Ee.tfcLoggingLevel)&&void 0!==e?e:zt.WARN}Ee.tfcLoggingLevel=zt[Wt];let Bt=[];function Gt(){if(Bt.length){const{storeKey:e}=$t(),t=Bt.slice();Bt=[],si({path:`/profile/public/v4/${e}/client-log`,body:JSON.stringify({clientLogs:t})})}}const Dt=function(e,t,i){let o,n,r,s,a=0;i||(i={});const l=function(){a=!1===i.leading?0:Je(),o=null,s=e.apply(n,r),o||(n=null,r=[])},d=function(...t){const d=Je();a||!1!==i.leading||(a=d);const c=1e3-(d-a);return n=this,r=t,c<=0||c>1e3?(o&&(clearTimeout(o),o=null),a=d,s=e.apply(n,r),o||(n=null,r=[])):o||!1===i.trailing||(o=setTimeout(l,c)),s};return d.cancel=function(){o&&clearTimeout(o),a=0,o=n=null,r=[]},d}(Gt,0,{leading:!1});function Nt(e,...t){console.error(e,...t);const{stack:i,message:o}=e instanceof Error?e:new Error(`${e}`);Bt.push({level:Pt.ERROR,message:`${o}`,stack:i})}const jt=Object.assign({trace:(e,...t)=>{Ft()<=zt.TRACE&&console.trace(e,...t)},debug:(e,...t)=>{Ft()<=zt.DEBUG&&console.debug(e,...t)},info:(e,...t)=>{Ft()<=zt.INFO&&console.info(e,...t)},warn:(e,...t)=>{Ft()<=zt.WARN&&(console.warn(e,...t),Bt.push({level:Pt.WARN,message:e}),Dt())},error:(e,...t)=>{Ft()<=zt.ERROR&&(Nt(e,...t),Dt())},error_consoleOnly:(e,...t)=>{Ft()<=zt.ERROR&&console.error(e,...t)},raise:(e,...t)=>{const i=new Error(e);throw Mt?console.error(i):Ft()<=zt.ERROR&&(Nt(i,...t),Gt()),i}},Mt?console:{});function Ht(e,t="JSON parsing error"){try{return JSON.parse(e)}catch(e){jt.error(t,e)}}var Vt=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};function Kt(e){return Vt(this,void 0,void 0,(function*(){const{storeKey:t}=$t(),i=`sourceOrigin=${encodeURIComponent(e)}`;return(yield fetch(`${St}/profile/public/v4/${t}/validate/origin?${i}`,{headers:{"content-type":"application/json; charset=UTF-8"},method:"GET"})).json()}))}let Yt=[];const qt=({message:e,retailerOrigin:t})=>Ee.parent.postMessage(e,t);let Jt=We.Unknown;const Zt=new Map,Xt={event(e,t){let i=Zt.get(e);i||(i=new qe,Zt.set(e,i)),i.listen(t)},triggerEvent(e,t){const i=Zt.get(e);i&&i.trigger(t)}};function Qt(e){return Vt(this,void 0,void 0,(function*(){const{retailerOrigin:t,nativeAppSdkIntegration:i}=$t();if(i)Xt.triggerEvent(e.type,e);else if(t){var o;switch(o={retailerOrigin:t,message:e},Yt.push(o),Jt===We.Unknown&&(Jt=We.RequestSent,Jt=(yield function(e){return Vt(this,void 0,void 0,(function*(){if("true"===Pe.TFP_WIDGETS_OFFLINE)return!0;let t;t=_t?Kt(e):function(e){return Vt(this,void 0,void 0,(function*(){const t=Ee.parent.frames;for(let e=0;e<t.length;e++){const i=t[e];try{if(i&&Ee!==i&&i.location.origin===Ee.location.origin&&i.location.hash.includes("iframeId")&&i.tfcValidateOriginPromise)return jt.debug("Found tfcValidateOriginPromise - returning"),i.tfcValidateOriginPromise}catch(e){}}return jt.debug("Didn't find another widget with tfcValidateOriginPromise - calling the service"),Kt(e)}))}(e),Ee.tfcValidateOriginPromise=t;const i=yield t,{isValid:o}=i;return o||jt.error_consoleOnly(`True Fit: origin [${e}] is not configured to be allowed.`),o}))}(t))?We.Valid:We.Invalid),Jt){case We.Invalid:return;case We.Valid:!function(){for(;Yt.length;){const[e,...t]=Yt;qt(e),Yt=t}}()}}else jt.error("retailerOrigin is missing from the widget hash")}))}Ee.tfc=Xt;let ei=[];function ti(e){const{retailerOrigin:t,iframeId:i}=$t();Ee.addEventListener("message",(i=>Vt(this,void 0,void 0,(function*(){if(i.origin===t||i.origin===location.origin){const t=i.data;switch(t.type){case"tokenUpdate":jt.debug("tokenUpdate event",i),Ue(t.token);break;case"widgetRefresh":jt.debug("widgetRefresh event",i),ct(t.currentWidget),e(t.immediateOpen,t.styleIdForCurrentWidget);break;case"screenSizeChange":jt.debug("screenSizeChange event",i),et(t.newSize),e(!1);break;case"checkout":jt.debug("checkout event",i),kt(t.checkout);break;case"trackSession":jt.debug("track session event",i),Ut(t.sessionInfo);break;case"widgetResponse":{jt.debug("widget response",i);const{widgetResponse:e}=i.data;st(e);break}case"updateOtherWidgets":{jt.debug("updateOtherWidgets event",i);const e=Ht(t.otherWidgets,"Received unparsable otherWidgets.");e&&(Ri=e);break}case"idSyncProviderIds":jt.debug("idSyncProviderIds event",i),function(e){var t,i,o,n,r;i=this,o=void 0,r=function*(){const{storeKey:i}=$t(),o=rt(),n=null===(t=null==o?void 0:o.profiles)||void 0===t?void 0:t.shopper.id;if(n){const t=[];for(const o in e){const r=e[o];t.push(ai({path:`/profile/public/v4/${i}/id-sync`,body:JSON.stringify({provider:o,providerId:r,shopperProfileId:n})}))}yield Promise.all(t)}},new((n=void 0)||(n=Promise))((function(e,t){function s(e){try{l(r.next(e))}catch(e){t(e)}}function a(e){try{l(r.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,a)}l((r=r.apply(i,o||[])).next())}))}(i.data.idSyncProviderIds);break;case"triggerOpen":jt.debug("triggerOpen event",i),Ee.dispatchEvent(new CustomEvent("triggerOpen"));break;case"focusWidgetButton":jt.debug("focusWidgetButton event",i),Ee.dispatchEvent(new CustomEvent("focusWidgetButton"));break;default:return void jt.trace("received unhandled message event",i)}ei=ei.filter((e=>t.type!==e.messageType||(e.resolve(i),!1)))}}))),!1),Qt({type:"widgetReady",iframeId:i})}var ii=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};const oi=[e=>!!e.match(/\/profile\/public\/v.+\/token$/),e=>!!e.match(/\/profile\/public\/v.+\/widget$/)];function ni(e,t,i=!1){return ii(this,void 0,void 0,(function*(){const{path:o,queryParams:n={},headers:r={},body:s}=t;if(!i){let e=Me();e||(e=>oi.some((t=>t(e))))(o)||(e=yield ui()),!r["X-TF-UserToken"]&&e&&(r["X-TF-UserToken"]=e),t.headers=r}const a=Object.entries(n).map((([e,t])=>`${e}=${encodeURIComponent(t)}`)).join("&"),l=yield fetch(`${St}${o}?${a}`,{headers:Object.assign(Object.assign({},r),{"content-type":"application/json; charset=UTF-8"}),body:s,method:e,credentials:"include"});if(!i){const e=l.headers.get("x-tf-usertoken"),t=l.headers.get("x-tf-usertokenmaxage");if(e&&e!==Me()){let i;jt.debug(`calling setToken from doHttp - token: ${e}`),Ue(e),t?i=parseInt(t,10):(jt.error("Unexpected Error - x-tf-usertoken header present but not x-tf-usertokenmaxage"),i=63072e3),Qt({type:"tokenUpdate",token:e,maxAge:i})}}return l}))}function ri(e){return ii(this,void 0,void 0,(function*(){return ni("GET",e)}))}function si(e){return ii(this,void 0,void 0,(function*(){return ni("POST",e)}))}function ai(e){return ii(this,void 0,void 0,(function*(){return ni("POST",e,!0)}))}var li=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};let di;function ci(e){return li(this,void 0,void 0,(function*(){return yield di,t=e(),di=null!=di?di:t,t;var t}))}function ui(){return li(this,void 0,void 0,(function*(){let e=Me();if(e||(e=yield function(){return li(this,void 0,void 0,(function*(){if(!di){const{storeKey:e}=$t();yield ci((()=>ri({path:`/profile/public/v4/${e}/token`})))}return yield di,Me()}))}()),!e)throw"Unable to retrieve a token";return e}))}const{TFP_APP_DIST_PUBLIC_URL:fi}=Pe,gi=e=>{return`${fi}/index.html#/${t=e,Object.entries(t).reduce(((e,[t,i])=>`${e}${null!=i?`${e?"&":""}${t}=${encodeURIComponent(i)}`:""}`),"")}`;var t},pi={dev:1,test:2,staging:3,prod:4};let hi;function vi(){const e=Pe.TFP_WIDGETS_LOCAL_DEV_RUN_MODE;return e?pi[e]:(hi=hi||ke.getElementById("tfRunModeMeta"),hi&&pi[hi.content]||pi.prod)}var mi=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};let yi,wi=!1;const bi=[w.NoUser,w.IncompleteProfile,w.InvalidDepartment,w.Success,w.EstimationInProgress,w.SizeNotAvailable,w.UnrecommendableDepartment],xi=[w.Success,w.EstimationInProgress],Si=({status:e})=>bi.includes(e),_i=({size:e,universalGuidance:t})=>e?"personal":t?"general":void 0,$i=(e,t)=>{var i;const o=(({productResults:e},{productWidgets:t})=>e?Object.keys(e).reduce(((t,i)=>Object.assign(Object.assign({},t),{[i]:{isWidgetVisible:Si(e[i]),successType:_i(e[i])}})),{}):null==t?void 0:t.map((e=>e.style)).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:{isWidgetVisible:!1}})),{}))(t,e),n=(({configs:e,productResults:t})=>t&&e.feature.autoSizeSelectEnabled?Object.keys(t).reduce(((e,i)=>{const{size:o}=t[i];return o?[...e,{styleId:i,size:o}]:e}),[]):void 0)(t),r=e.hasRegisterWidget?(()=>{const e=Et(),{token:t}=e,i=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(e,["token"]);if("string"!=typeof t&&void 0!==t)throw new Error(`Unknown type ${typeof t} for widget token.`);const o=Object.assign(Object.assign({},i),{originWidget:"tfc-fitrec-register"});return{iframeOrigin:xt,iframePathAndHash:gi(o),widgetToken:t}})():null,s=null===(i=t.profiles)||void 0===i?void 0:i.shopper.id,a=!!s,l=t.configs.store.idSyncProvidersWithFetchers,d=t.userState;Qt(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({type:"widgetResponse",widgetResponse:t},o?{retailerWidgetResult:o}:{}),n?{autoSizeSelect:n}:{}),r?{bannerRegistration:r}:{}),a&&l?{idSyncProvidersWithFetchers:l}:{}),s?{shopperProfileId:s}:{}),d?{userState:d}:{}),{productWidgetLocationConfig:t.configs.widget["widgets.product.widgetLocation"]}),{rollupWidgetLocationConfig:t.configs.widget["widgets.rollup.widgetLocation"]}))};let Ri=_t&&Ht(_t,"Skipping unparsable otherWidgets.");function Ti(e,t){var i;return mi(this,void 0,void 0,(function*(){if("true"===Pe.TFP_WIDGETS_OFFLINE)return;if(jt.debug(`[Widget] ${e} updateFitResponse()`),yi)return jt.debug(`[Widget] ${e} Widget request in flight, awaiting that.`),yi;const{tfIntegrationVersion:o,deviceType:n,retailerHref:r,cookiesEnabled:s,storeKey:a,sessionParamOverrides:l,integrationPlatform:d,type:c}=$t();if(!Ri&&"tfc-fitrec-size-sampling"!==c){jt.debug(`[Widget] ${e} Awaiting widgetResponse`),ot()||nt(function(){return mi(this,void 0,void 0,(function*(){return(yield function(e){return Vt(this,void 0,void 0,(function*(){return new Promise((e=>{ei=[...ei,{messageType:"widgetResponse",resolve:e}]}))}))}()).data.widgetResponse}))}());const t=ot();t&&st(yield t);const i=rt();return jt.debug(`[Widget] ${e} Resolved widgetResponse`,i),nt(void 0),i}const u=lt(),f={};o&&(f["x-tf-integration-version"]=o),u.userId&&(f["X-TF-StoreUserId"]=u.userId);const g=Object.assign(Object.assign(Object.assign(Object.assign({},r?{retailerReferer:r}:{}),{analyticsScreenSize:tt(),cookiesEnabled:s.toString(),deviceType:n}),d?{platform:d}:{}),l?{sessionParamOverrides:l}:{});["locale","registered","widgetHidden","storeExperimentKey","configSet"].forEach((e=>{var t;const i=null===(t=u[e])||void 0===t?void 0:t.toString();i&&(g[e]=i)}));const p=(Ri||[]).reduce((function(e,t){var i;return"tfc-fitrec-register"===t.type?Object.assign(Object.assign({},e),{hasRegisterWidget:!0}):"tfc-fitrec-product"===t.type||"tfc-fitrec-rollup"===t.type?t.style?t.style.startsWith("tfTest-")?e:Object.assign(Object.assign({},e),{productWidgets:[...null!==(i=e.productWidgets)&&void 0!==i?i:[],{style:t.style,context:t.context}]}):(jt.error("Missing style id for other product widget data."),e):(jt.error(`Unexpected type "${t.type}" for other widget data.`),e)}),(null==e?void 0:e.length)&&!e.every((e=>e.startsWith("tfTest-")))?{productWidgets:e.map((e=>({style:e,context:t})))}:{});if(yi){jt.debug(`[Widget] ${e} Awaiting existing widget request`);const t=yield yi;return st(t),t}jt.debug("[Widget]"+((null==e?void 0:e.length)?` ${e}`:""),"Sending widget request",p),yi=function({storeKey:e,queryParams:t,headers:i,body:o}){return mi(this,void 0,void 0,(function*(){return(yield ci((()=>si({path:`/profile/public/v4/${e}/widget`,queryParams:t,headers:i,body:JSON.stringify(o)})))).json()}))}({storeKey:a,queryParams:g,headers:f,body:p});const h=yield yi;st(h),yi=void 0,jt.debug(`[Widget] ${e} Sending widgetResponse message.`,h),"sizeSamplingBanner"!==t&&$i(p,h);const v=h.configs.feature.pixelSyncEnabled,m=null===(i=h.profiles)||void 0===i?void 0:i.shopper.id;v&&m&&!wi&&(setTimeout((()=>{const e=vi()===pi.staging||vi()===pi.prod?m:"nonprod-"+m;!function(){if(window.fbq)return;const e=function(t,...i){e.callMethod?e.callMethod.apply(e,[t,...i]):e.queue.push([t,...i])};window.fbq=e,window._fbq=e,e.push=function(...t){return e.queue.push(t)},e.loaded=!0,e.version="2.0",e.queue=[];const t=ke.createElement("script");t.async=!0,t.src="https://connect.facebook.net/en_US/fbevents.js";const i=ke.getElementsByTagName("script")[0];i.parentNode&&i.parentNode.insertBefore(t,i),e("init","6372046616252462")}(),fbq("track","ViewContent",{external_id:e})}),700),wi=!0);const y=h.configs.feature.fullScreenPopupZoomEnabled,w="responsive"!==h.deviceType?h.deviceType:void 0;return(w||y)&&Qt({type:"deviceTypeUpdate",deviceType:w,fullScreenPopupZoomEnabled:y}),h}))}var Ci=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ii=class extends e.oi{constructor(){super(),this.buttonRef=new Te,window.addEventListener("focusWidgetButton",this.setButtonFocus.bind(this))}_determineTheme(){var e,t,i,o,n,r,s,a,l;const d=!0===(null===(e=this.productWidgetConfigs)||void 0===e?void 0:e.showSocialProofTitle);return"slim"===(null===(t=this.productWidgetConfigs)||void 0===t?void 0:t.theme)||"button"===(null===(i=this.productWidgetConfigs)||void 0===i?void 0:i.theme)&&(null===(o=this.fitRec)||void 0===o?void 0:o.status)&&xi.includes(null===(n=this.fitRec)||void 0===n?void 0:n.status)||(null===(a=null===(s=null===(r=this.fitRec)||void 0===r?void 0:r.fitHubResponse)||void 0===s?void 0:s.itemSizingSummary)||void 0===a?void 0:a.overall)&&d?"slim":null===(l=this.productWidgetConfigs)||void 0===l?void 0:l.theme}setButtonFocus(){var e;null===(e=this.buttonRef.value)||void 0===e||e.focus()}getAriaLabel(){var e,t;const i=null===(e=this.fitRec)||void 0===e?void 0:e.status,o=null===(t=this.fitRec)||void 0===t?void 0:t.size,n=i!==w.UnrecommendableDepartment?this.recipientAlias:void 0;return i===w.Success&&o?(0,h.WI)(h.Bd`Size: ${o}`)+" "+ue(n,this.productWidgetConfigs):i===w.EstimationInProgress?n?(0,h.WI)(h.Bd`Calculating ${n}'s True Fit…`):(0,h.WI)("Calculating your True Fit…"):Y(n,this.productWidgetConfigs,i)}render(){var t,i,o,n,r,s,a,l,d;const c=!1===(null===(t=this.productWidgetConfigs)||void 0===t?void 0:t.logoEnabled);this.fitRec||(jt.debug(`style ${this.styleId} not found in the widget call response - either the product isn't in an enabled hierarchy, or the user is disabled.`),this._widgetTemplate=void 0);const u=null===(i=this.fitRec)||void 0===i?void 0:i.status;if(u&&!bi.includes(u))this._widgetTemplate=void 0;else{const t=(null===(r=null===(n=null===(o=this.productWidgetConfigs)||void 0===o?void 0:o.univGuidance)||void 0===n?void 0:n.scale)||void 0===r?void 0:r.position)||"above";switch(this._determineTheme()){case"button":this._widgetTemplate=e.dy`<button-product-widget
            class="${t}"
            .widgetResult=${this.fitRec}
            .widgetConfigs=${this.productWidgetConfigs}
            .recipientAlias=${this.recipientAlias}
            .noRegFromWidget=${this.noRegFromWidget}
            .hideLogo=${c}
          ></button-product-widget>`;break;case"slim":this._widgetTemplate=e.dy`<slim-product-widget
            class="${t}"
            .widgetResult=${this.fitRec}
            .widgetConfigs=${this.productWidgetConfigs}
            .recipientAlias=${this.recipientAlias}
            .noRegFromWidget=${this.noRegFromWidget}
            .hideLogo=${c}
            .sendOpenEvent=${this.sendOpenEvent}
          ></slim-product-widget>`;break;default:this._widgetTemplate=e.dy`<standard-product-widget
            class="${t}"
            .widgetResult=${this.fitRec}
            .widgetConfigs=${this.productWidgetConfigs}
            .recipientAlias=${this.recipientAlias}
            .noRegFromWidget=${this.noRegFromWidget}
            .hideLogo=${c}
            .sendOpenEvent=${this.sendOpenEvent}
          ></standard-product-widget>`}}const f=null===(s=this.fitRec)||void 0===s?void 0:s.universalGuidance,g=null===(a=this.fitRec)||void 0===a?void 0:a.heightWeightRecSizeName,p=!1===(null===(d=null===(l=this.productWidgetConfigs)||void 0===l?void 0:l.univGuidance)||void 0===d?void 0:d.displayText),h=f&&!p;return this.noRegFromWidget&&u!=w.Success&&(u!=w.IncompleteProfile&&!h||u===w.IncompleteProfile&&!h&&!g)?e.dy``:(jt.debug("starting render",performance.now()),this._widgetTemplate?e.dy`<button
        type="button"
        @click="${this.sendOpenEvent}"
        ?disabled="${this.noRegFromWidget}"
        aria-label="${this.getAriaLabel()}"
        ${Ie(this.buttonRef)}
      >
        ${this._widgetTemplate}
      </button>`:e.dy``)}};var Ai,Li,Oi,Ei,ki;function Pi(e,t){switch(t){case Be.Child:switch(e){case Fe.Male:return Oi.Boys;case Fe.Female:return Oi.Girls;default:return Oi.UnisexKids}case Be.Adult:switch(e){case Fe.Male:return Oi.Men;case Fe.Female:return Oi.Women;default:return Oi.Unisex}}}function zi(e,t,i){if(e===Li.Tops&&t===ki.DressShirts&&i===Oi.Men)return Ei.DressShirts;if(e===Li.Tops)return Ei.Tops;if(e===Li.Bottoms)return Ei.Bottoms;if(e===Li.Dresses)return Ei.Dresses;if(e===Li.Shoes)return Ei.Shoes;if(e===Li.Bras)return Ei.Bras;if(e===Li.Suits)return Ei.Suits;throw new Error(`Unable to resolve product type from category ${e} and classification ${t}`)}Ii.styles=e.iv`
    /* REVERT - this broke slim and button theme, caused the bottom to be cut off
    need inline-block instead of the default of inline so that firefox doesn't give the empty widget a height 
    :host {
      display: inline-block;
    }
    */

    button {
      font-family: var(--font-family);
      font-size: var(--font-size);
      color: var(--text-color);

      background-color: transparent;
      min-height: var(--widget-min-height);
      border: 0;
      padding: 0;
      text-align: start;
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 0;
      -webkit-border-radius: 0;
    }

    button:active {
      color: var(--text-color);
    }

    button:disabled {
      cursor: default;
    }

    button:focus {
      outline: none;
    }

    .start {
      flex-direction: row;
      align-items: flex-end;
      flex-wrap: wrap;
    }
  `,Ci([s({type:Object})],Ii.prototype,"productWidgetConfigs",void 0),Ci([s()],Ii.prototype,"recipientAlias",void 0),Ci([s()],Ii.prototype,"styleId",void 0),Ci([s({type:Object})],Ii.prototype,"fitRec",void 0),Ci([s()],Ii.prototype,"sendOpenEvent",void 0),Ci([s()],Ii.prototype,"noRegFromWidget",void 0),Ii=Ci([t("product-widget-element")],Ii),function(e){e.FitDetails="fitdetails",e.InvalidDepartment="invaliddepartment",e.IncompleteGarment="incompletegarment",e.InvalidGender="invalidgender",e.Login="login",e.Manage="manage",e.ProfileSwitcher="profileswitcher",e.SizeNotAvailable="sizenotavailable"}(Ai||(Ai={})),function(e){e.Bottoms="Bottoms",e.Dresses="Dresses",e.Shoes="Shoes",e.Tops="Tops",e.Bras="Bras",e.Suits="Suits"}(Li||(Li={})),function(e){e.Men="Mens",e.Women="Womens",e.Unisex="Unisex",e.Boys="Boys",e.Girls="Girls",e.UnisexKids="UnisexKids"}(Oi||(Oi={})),function(e){e.Bottoms="Bottoms",e.Dresses="Dresses",e.Shoes="Shoes",e.Tops="Tops",e.Bras="Bras",e.Suits="Suits",e.DressShirts="DressShirts"}(Ei||(Ei={})),function(e){e.AthleticSneakers="AthleticSneakers",e.Boots="Boots",e.Casual="Casual",e.CasualShirts="CasualShirts",e.Dress="Dress",e.DressShirts="DressShirts",e.Flats="Flats",e.General="General",e.Heels="Heels",e.Jeans="Jeans",e.Pants="Pants",e.Sandals="Sandals",e.NotSure="NotSure",e.NoneOfThese="NoneOfThese"}(ki||(ki={}));const Ui=["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"],Mi=["ar","da","de","en","en-CA","en-GB","es","fi","fr","fr-CA","hu","is","it","ja","ko","ms","nl","pt","sv","th","zh-CN","zh-HK","zh-SG","zh-TW"];function Wi(e){return Mi.includes(e)}function Fi(e){const[t,i]=e.split(/[_-]/);return[t,i]}function Bi(e){const[t,i=""]=Fi(e),o=t.toLowerCase(),n=i.toUpperCase();(null==o?void 0:o.length)||jt.error(new Error(`Could not parse a language from the locale code ${e}`));const r="MX"===n||"US"===n?"en":"en-GB",s=[o,n].filter((e=>e)).join("-"),a=Wi(s)?s:"en"!==o&&Wi(o)?o:r,[l]=Fi(a);return function(e){const t=Ui.includes(e)?"rtl":"ltr";document.body.dir===t?jt.debug(`Text direction already set to "${t}".`):(jt.debug(`Setting text direction to "${t}".`),document.body.dir=t)}(l),R(a)}var Gi;function Di(e){if(e.startsWith("tfTest")){const[t,...i]=e.split("|"),{hwRec:o,ug:n,ageGroup:r,alias:s}=i.reduce(((e,t)=>{const[i,o]=t.split(":");return e[i]=o,e}),{}),a=Ji[t];if(a){const e=function(e){if(e)switch(e){case"RS":return Ni;case"MRS":return ji;case"TTSS":return Hi;case"TTS":return Vi;case"TTSL":return Ki;case"MRL":return Yi;case"RL":return qi}}(n);return e&&(a.universalGuidance=e),!r||"Adult"!==r&&"Child"!==r||(a.ageGroup=r),o&&(a.heightWeightRecSizeName=o),{productResult:a,alias:s}}}}!function(e){e.NoUser="tfTest-nouser",e.IncompleteProfile="tfTest-incompleteprofile",e.SizeNotAvailable="tfTest-sizenotavailable",e.InvalidDepartment="tfTest-invaliddepartment",e.UnrecommendableDepartment="tfTest-unrecommendabledepartment",e.Success="tfTest-success",e.EstimationInProgress="tfTest-estimationinprogress"}(Gi||(Gi={}));const Ni={guidance:m.RunsOneSizeStepSmall,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},ji={guidance:m.MayRunOneSizeStepSmall,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},Hi={guidance:m.RunsTrueToSizeSmall,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},Vi={guidance:m.RunsTrueToSize,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},Ki={guidance:m.RunsTrueToSizeLarge,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},Yi={guidance:m.MayRunOneSizeStepLarge,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},qi={guidance:m.RunsOneSizeStepLarge,source:y.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},Ji={[Gi.NoUser]:{styleId:Gi.NoUser,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,status:w.NoUser},[Gi.IncompleteProfile]:{styleId:Gi.IncompleteProfile,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,status:w.IncompleteProfile},[Gi.SizeNotAvailable]:{styleId:Gi.SizeNotAvailable,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,status:w.SizeNotAvailable},[Gi.InvalidDepartment]:{styleId:Gi.InvalidDepartment,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,status:w.InvalidDepartment},[Gi.UnrecommendableDepartment]:{styleId:Gi.UnrecommendableDepartment,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,status:w.UnrecommendableDepartment},[Gi.Success]:{styleId:Gi.Success,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,size:"2",status:w.Success},[Gi.EstimationInProgress]:{styleId:Gi.EstimationInProgress,ageGroup:Be.Adult,gender:Fe.Female,category:Li.Bottoms,recommendable:!0,status:w.EstimationInProgress}};var Zi=n(9690),Xi=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))},Qi=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};const eo="Montserrat",to={Archivo:{family:"Archivo",familyRuleDeclaration:"'Archivo', Montserrat, sans-serif"},Arial:{family:"Arial",familyRuleDeclaration:"Arial, Helvetica, sans-serif"},AvenirBook:{family:"Avenir Book",familyRuleDeclaration:"'Avenir Book', Montserrat, sans-serif"},CalibreRegular:{family:"Calibre Regular",familyRuleDeclaration:"'Calibre Regular', Montserrat, sans-serif"},CircularBook:{family:"CircularStd-Book",familyRuleDeclaration:"'CircularStd-Book', Montserrat, sans-serif"},CircularXX:{family:"CircularXX",familyRuleDeclaration:"'CircularXX', Montserrat, sans-serif"},Grosa:{family:"Grosa",familyRuleDeclaration:"'Grosa', Montserrat, sans-serif"},LibreBaskerville:{family:"Libre",familyRuleDeclaration:"'Libre Baskerville', serif"},"store-mcy-MacysSans":{family:"store-mcy-MacysSans",familyRuleDeclaration:"'store-mcy-MacysSans', Montserrat, sans-serif"},Montserrat:{family:"Montserrat",familyRuleDeclaration:void 0},Roboto:{family:"Roboto",familyRuleDeclaration:"'Roboto', Montserrat, sans-serif"},SwearText:{family:"Swear Text",familyRuleDeclaration:"'Swear Text', Montserrat, serif"},StoreCustomBaseFont:{family:"Store Custom Base Font",familyRuleDeclaration:"'Store Custom Base Font', Montserrat"},"store-sjk-Avenir":{family:"store-sjk-Avenir",familyRuleDeclaration:"'store-sjk-Avenir', Montserrat, sans-serif"},FuturaPT:{family:"FuturaPT",familyRuleDeclaration:"'FuturaPT', Montserrat, sans-serif"},"store-bto-NeueHaas":{family:"store-bto-NeueHaas",familyRuleDeclaration:"'store-bto-NeueHaas', Montserrat, sans-serif"},"store-bhw-SweetSans":{family:"store-bhw-SweetSans",familyRuleDeclaration:"'store-bhw-SweetSans', Montserrat, sans-serif"},Lato:{family:"Lato",familyRuleDeclaration:"'Lato', Montserrat, sans-serif"},Gilroy:{family:"Gilroy",familyRuleDeclaration:"'Gilroy', Montserrat, sans-serif"},"store-lan-Sofia":{family:"store-lan-Sofia",familyRuleDeclaration:"'store-lan-Sofia', Montserrat, sans-serif"},"store-ral-FoundersGrotesk":{family:"store-ral-FoundersGrotesk",familyRuleDeclaration:"'store-ral-FoundersGrotesk', Montserrat, sans-serif"},ProximaNova:{family:"ProximaNova",familyRuleDeclaration:"'ProximaNova', Montserrat, sans-serif"},"store-nor-HelveticaNeue":{family:"store-nor-HelveticaNeue",familyRuleDeclaration:"'store-nor-HelveticaNeue', Montserrat, sans-serif"},Athletics:{family:"Athletics",familyRuleDeclaration:"'Athletics', Montserrat, sans-serif"},inter:{family:"inter",familyRuleDeclaration:"'inter', Montserrat, sans-serif"}},io={light:300,regular:400,medium:500,semiBold:600,bold:700},oo={};function no(e){var t,i;return Qi(this,void 0,void 0,(function*(){let o=eo;const n=null===(t=e.fonts)||void 0===t?void 0:t.base;if(n){o="StoreCustomBaseFont";const e=`${o}-${(0,Zi.sha1)(n)}`;oo[e]||(oo[e]=function(e,t){return Qi(this,void 0,void 0,(function*(){const{family:i,familyRuleDeclaration:o}=to[e];try{if(!i)throw new Error(`Font ${e} does not have a defined family name.`);if(i!==eo&&!o)throw new Error(`Font ${e} does not have a defined rule declaration.`);const n=yield function(e,t){return Xi(this,void 0,void 0,(function*(){return(yield Promise.all(Object.keys(e).map((i=>Xi(this,void 0,void 0,(function*(){const o=yield t(i,e[i]);return[i,o]})))))).reduce(((e,[t,i])=>Object.assign(Object.assign({},e),{[t]:i})),{})}))}(t,((e,t)=>Qi(this,void 0,void 0,(function*(){if(t){const o=new FontFace(i,`url(${t})`,{style:"normal",weight:`${io[e]}`}),n=yield o.load();return yield document.fonts.add(n),n}}))));jt.info("All custom fonts finished loading.",n)}catch(e){jt.error("Error loading custom fonts."),jt.error(e)}}))}(o,n)),yield oo[e]}else if(null===(i=e.product)||void 0===i?void 0:i.font){const t=e.product.font;(e=>e in to)(t)?o=t:jt.error(`Unrecognized font "${t}" provided on the product widget configs.`)}const{family:r,familyRuleDeclaration:s}=to[o];return jt.info("Using font",r,s),null!=s?s:null}))}function ro(e,t,i){if(void 0===i||""===i)return;const[o,...n]=t;1!==t.length?(e[o]||(e[o]={}),ro(e[o],n,i)):e[o]=i}const so={product:"widgets.product",sizeSampling:"widgets.sizeSampling",rollup:"widgets.rollup",fonts:"widgets.fonts"},ao=Object.keys(so),lo={product:{noRegOnPDP:e=>e.noRegOnPDP,ctaMessageOverride:e=>e.ctaMessageOverride,ctaMessageWithNameOverride:e=>e.ctaMessageWithNameOverride,taglineMessageOverride:e=>e.taglineMessageOverride,hwRecMessageOverride:e=>e.hwRecMessageOverride,hwRecMessageWithNameOverride:e=>e.hwRecMessageWithNameOverride,incompleteProfileCtaMessageOverride:e=>e.incompleteProfileCtaMessageOverride,incompleteProfileCtaMessageWithNameOverride:e=>e.incompleteProfileCtaMessageWithNameOverride,incompleteProfileTaglineMessageOverride:e=>e.incompleteProfileTaglineMessageOverride,successRecMessageOverride:e=>e.successRecMessageOverride,successRecMessageWithNameOverride:e=>e.successRecMessageWithNameOverride,theme:e=>e.theme,logoColor:e=>e.logoColor,logoSize:e=>e.logoSize,font:e=>e.font,fontSize:e=>e.fontSize,textColor:e=>e.textColor,ctaTextColor:e=>e.ctaTextColor,alignment:e=>e.alignment,maxWidth:e=>e.maxWidth,ctaTextTransform:e=>e.ctaTextTransform,ctaMarginLeft:e=>e.ctaMarginLeft,recommendationUnderline:e=>e.recommendationUnderline,recommendationTextTransform:e=>e.recommendationTextTransform,recommendationFontWeight:e=>e.recommendationFontWeight,logoEnabled:e=>e.logoEnabled,widgetMinHeight:e=>e.widgetMinHeight,showCtaInfoIcon:e=>e.showCtaInfoIcon,"margin.top":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.top},"margin.right":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.right},"margin.bottom":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.bottom},"margin.left":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.left},"button.textColor":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.textColor},"button.backgroundColor":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.backgroundColor},"button.borderColor":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.borderColor},"button.borderRadius":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.borderRadius},"button.boxShadow":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.boxShadow},"button.univGuidance.displayScale":e=>{var t,i;return null===(i=null===(t=e.button)||void 0===t?void 0:t.univGuidance)||void 0===i?void 0:i.displayScale},"univGuidance.ugText.messageOverrides.runsOneSizeStepSmall":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.runsOneSizeStepSmall},"univGuidance.ugText.messageOverrides.mayRunOneSizeStepSmall":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.mayRunOneSizeStepSmall},"univGuidance.ugText.messageOverrides.runsTrueToSizeSmall":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.runsTrueToSizeSmall},"univGuidance.ugText.messageOverrides.runsTrueToSize":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.runsTrueToSize},"univGuidance.ugText.messageOverrides.runsTrueToSizeLarge":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.runsTrueToSizeLarge},"univGuidance.ugText.messageOverrides.mayRunOneSizeStepLarge":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.mayRunOneSizeStepLarge},"univGuidance.ugText.messageOverrides.runsOneSizeStepLarge":e=>{var t,i,o;return null===(o=null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.ugText)||void 0===i?void 0:i.messageOverrides)||void 0===o?void 0:o.runsOneSizeStepLarge},"univGuidance.displayScale":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayScale},"univGuidance.displayScaleOnSuccess":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayScaleOnSuccess},"univGuidance.displayText":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayText},"univGuidance.displayTextTextTransform":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayTextTextTransform},"univGuidance.displayTextFontWeight":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayTextFontWeight},"univGuidance.scale.indicatorColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.indicatorColor},"univGuidance.scale.gradientAccentColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.gradientAccentColor},"univGuidance.scale.backgroundColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.backgroundColor},"univGuidance.scale.labelColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.labelColor},"univGuidance.scale.labelTextTransform":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.labelTextTransform},"univGuidance.scale.position":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.position},"univGuidance.scale.style":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.style},"univGuidance.scale.horizontalSpacing":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.horizontalSpacing},"univGuidance.scale.labelFontSize":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.labelFontSize},"univGuidance.scale.ugTextFontSize":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.ugTextFontSize},"univGuidance.scale.ugTextTextTransform":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.ugTextTextTransform},"univGuidance.scale.ugTextFontWeight":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.ugTextFontWeight}},sizeSampling:{backgroundColor:e=>e.backgroundColor,borderColor:e=>e.borderColor,caretDisabledColor:e=>e.caretDisabledColor,caretEnabledColor:e=>e.caretEnabledColor,maxWidth:e=>e.maxWidth,linkTextColor:e=>e.linkTextColor,textColor:e=>e.textColor,bannerMessageOverride:e=>e.bannerMessageOverride,"margin.top":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.top},"margin.right":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.right},"margin.bottom":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.bottom},"margin.left":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.left}},rollup:{primaryBackgroundColor:e=>e.primaryBackgroundColor,primaryTextColor:e=>e.primaryTextColor,primaryBorderColor:e=>e.primaryBorderColor,explanationBackgroundColor:e=>e.explanationBackgroundColor,explanationTextColor:e=>e.explanationTextColor,explanationIconColor:e=>e.explanationIconColor,maxWidth:e=>e.maxWidth,"margin.top":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.top},"margin.right":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.right},"margin.bottom":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.bottom},"margin.left":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.left}},fonts:{"base.light":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.light},"base.regular":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.regular},"base.medium":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.medium},"base.semiBold":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.semiBold},"base.bold":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.bold}}},co=new RegExp(`^(widgets\\.)(?!${ao.join("|")}\\.)`),uo=e=>e.replace(co,"widgets.product."),fo=e=>"sizeSampling"===e?"sizeSamplingBanner":e,go=e=>!!e&&!ao.some((t=>fo(t)in e));function po(e,t){var i;jt.debug("Building widget config object.");const o=function(e,t=ao){return Object.entries(e).reduce(((e,[i,o])=>{for(const n of t){const t=so[n],r=uo(i);i.startsWith(t)&&ro(e,r.split("."),o)}return e}),{})}(e,t),n=function(e,t="JSON parsing error"){return e&&Ht(e,t)}(lt().configOverride,"Skipping unparseable configOverride"),r={widgets:n?go(n)?{product:n}:n:void 0};jt.debug("Parsed widget config override object.",r);for(const e of ao){const t=fo(e),n=null===(i=r.widgets)||void 0===i?void 0:i[t];if(n){const t=so[e].split("."),i=lo[e];for(const[e,r]of Object.entries(i))ro(o,[...t,...e.split(".")],r(n))}}return o}function ho(e,t){return i=this,o=void 0,r=function*(){const i=yield no(e);t.setProperty("--font-family",i)},new((n=void 0)||(n=Promise))((function(e,t){function s(e){try{l(r.next(e))}catch(e){t(e)}}function a(e){try{l(r.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,a)}l((r=r.apply(i,o||[])).next())}));var i,o,n,r}function vo(e,t){var i,o,n,r,s,a,l,d,c,u,f,g,p,h,v,m;const{margin:y,alignment:w,logoColor:b,logoSize:x,fontSize:S,textColor:_,ctaTextTransform:$,ctaTextColor:R,ctaMarginLeft:T,univGuidance:C,button:{textColor:I,backgroundColor:A,borderColor:L,borderRadius:O,boxShadow:E}={},widgetMinHeight:k,recommendationTextTransform:P,recommendationFontWeight:z}=e,U=t;U.setProperty("--alignment",null!=w?w:null),U.setProperty("--margin-top",null!==(i=null==y?void 0:y.top)&&void 0!==i?i:null),U.setProperty("--margin-right",null!==(o=null==y?void 0:y.right)&&void 0!==o?o:null),U.setProperty("--margin-bottom",null!==(n=null==y?void 0:y.bottom)&&void 0!==n?n:null),U.setProperty("--margin-left",null!==(r=null==y?void 0:y.left)&&void 0!==r?r:null);const M=null==C?void 0:C.scale,W="white"===b?"#fff":"black"===b?"#000":void 0,F="white"===b?"#000":void 0;U.setProperty("--t-logo-bg-color",null!=W?W:null),U.setProperty("--t-logo-size-button",null!=x?x:null),U.setProperty("--t-logo-size-standard",null!=x?x:null),U.setProperty("--t-logo-size-slim",null!=x?x:null),U.setProperty("--t-logo-text-color",null!=F?F:null),U.setProperty("--font-size",null!=S?S:null),U.setProperty("--text-color",null!=_?_:null),U.setProperty("--cta-text-color",null!=R?R:null),U.setProperty("--cta-text-transform",null!=$?$:null),U.setProperty("--cta-margin-left",null!=T?T:null),U.setProperty("--ug-scale-label-text-color",null!==(s=null==M?void 0:M.labelColor)&&void 0!==s?s:null),U.setProperty("--ug-scale-horizontal-spacing",null!==(a=null==M?void 0:M.horizontalSpacing)&&void 0!==a?a:null),U.setProperty("--ug-scale-label-text-transform",null!==(l=null==M?void 0:M.labelTextTransform)&&void 0!==l?l:null),U.setProperty("--ug-scale-gradient-color",null!==(d=null==M?void 0:M.gradientAccentColor)&&void 0!==d?d:null),U.setProperty("--ug-scale-background-color",null!==(c=null==M?void 0:M.backgroundColor)&&void 0!==c?c:null),U.setProperty("--ug-scale-indicator-color",null!==(u=null==M?void 0:M.indicatorColor)&&void 0!==u?u:null),U.setProperty("--ug-scale-label-font-size",null!==(f=null==M?void 0:M.labelFontSize)&&void 0!==f?f:null),U.setProperty("--ug-scale-ug-text-font-size",null!==(g=null==M?void 0:M.ugTextFontSize)&&void 0!==g?g:null),U.setProperty("--ug-scale-ug-text-text-transform",null!==(p=null==M?void 0:M.ugTextTextTransform)&&void 0!==p?p:null),U.setProperty("--ug-scale-ug-text-font-weight",null!==(h=null==M?void 0:M.ugTextFontWeight)&&void 0!==h?h:null),U.setProperty("--button-text-color",null!=I?I:null),U.setProperty("--button-background-color",null!=A?A:null),U.setProperty("--button-border-color",null!=L?L:null),U.setProperty("--button-border-radius",null!=O?O:null),U.setProperty("--button-box-shadow",null!=E?E:null),U.setProperty("--ug-text-font-weight",null!==(v=null==C?void 0:C.displayTextFontWeight)&&void 0!==v?v:null),U.setProperty("--ug-text-transform",null!==(m=null==C?void 0:C.displayTextTextTransform)&&void 0!==m?m:null),U.setProperty("--size-rec-font-weight",null!=z?z:null),U.setProperty("--size-rec-text-transform",null!=P?P:null),U.setProperty("--widget-min-height",null!=k?k:"unset")}function mo(e){switch(e){case Fe.Female:return Fe.Female;case Fe.Male:return Fe.Male;default:return}}var yo=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let wo=class extends e.oi{constructor(){super(),ti(((e,t)=>{t&&this.styleId!=t?this.styleId=t:this.updateFitRec(e)})),Ee.addEventListener("resize",(e=>{jt.trace("resize detected - trigger height update",e),this._heightUpdate()})),document.fonts.onloadingdone=()=>{jt.trace("Font loading complete"),this._heightUpdate()},Ee.addEventListener("triggerOpen",(e=>{jt.debug("triggerOpen event handling in tf-product-widget",e),this._sendOpenEvent(this._fitRec)}))}updateFitRec(t){var i,o,n,r,s,a,l,d,c,u,f,g;return c=this,u=void 0,g=function*(){const c=null==this?void 0:this.styleId;if(!c)return void(this._fitRec=void 0);const u=yield Ti([c]),f=(null==u?void 0:u.locale)||$t().locale;f&&(yield Bi(f));const g=Di(c);this._fitRec=g?g.productResult:null===(i=null==u?void 0:u.productResults)||void 0===i?void 0:i[c];const{widgets:p={}}=po((null==u?void 0:u.configs.widget)||{},["product","fonts"]),{widgetLocation:h,recOnly:v}=dt();if(h&&h!==(null===(o=p.product)||void 0===o?void 0:o.widgetLocation))return void(this._widgetTemplate=void 0);ho(p,this.style).then((()=>{jt.info("Fonts loaded. Updating product widget height."),this._heightUpdate()})),p.product&&(vo(p.product,this.style),this._widthUpdate(p.product.maxWidth));const m=!!(null===(n=null==u?void 0:u.profiles)||void 0===n?void 0:n.hasMultiple),y=!(null===(r=null==p?void 0:p.product)||void 0===r?void 0:r.recOnlyAttrMode)||"Honor"===(null===(s=null==p?void 0:p.product)||void 0===s?void 0:s.recOnlyAttrMode),b=!m&&((null===(a=null==p?void 0:p.product)||void 0===a?void 0:a.noRegOnPDP)||v&&y);var x;this._recipientAlias=(null==g?void 0:g.alias)||(null===(l=null==u?void 0:u.profiles)||void 0===l?void 0:l.recipient.alias),this._fitRec&&Si(this._fitRec)?this._widgetTemplate=e.dy`<product-widget-element
        .styleId=${this.styleId}
        .recipientAlias=${this._recipientAlias}
        .fitRec=${this._fitRec}
        .productWidgetConfigs=${p.product}
        .sendOpenEvent=${(e=!0,t)=>{var i;(null===(i=this._fitRec)||void 0===i?void 0:i.fitHubResponse)&&(this._fitRec.fitHubResponse.launchFithub=e),this._sendOpenEvent(this._fitRec,t)}}
        .noRegFromWidget=${b}
      ></product-widget-element>`:this._widgetTemplate=void 0,!g&&(x=null==u?void 0:u.productResults)&&Object.values(x).some((e=>e.status===w.EstimationInProgress))?(jt.debug("There is at least one estimation in progress. Queueing a delayed poll."),setTimeout((()=>this.updateFitRec(t)),3e3)):jt.debug("All widget estimations settled.");const S=null===(d=this._fitRec)||void 0===d?void 0:d.status;t&&S!==w.EstimationInProgress&&this._sendOpenEvent(this._fitRec)},new((f=void 0)||(f=Promise))((function(e,t){function i(e){try{n(g.next(e))}catch(e){t(e)}}function o(e){try{n(g.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof f?n:new f((function(e){e(n)}))).then(i,o)}n((g=g.apply(c,u||[])).next())}))}updated(e){e.has("styleId")&&this.styleId&&this.updateFitRec(!1),this._heightUpdate()}render(){return jt.debug("starting render",performance.now()),this._widgetTemplate?e.dy`<div class="product-widget-wrapper">
      ${this._widgetTemplate}
    </div>`:e.dy``}_heightUpdate(){requestAnimationFrame((()=>{const e=this.getBoundingClientRect().height;if(e!==this._lastHeight){this._lastHeight=e;const{iframeId:t}=Rt(),i={type:"widgetHeight",height:e,iframeId:t};jt.debug("updated",i,performance.now()),Qt(i)}}))}_widthUpdate(e){requestAnimationFrame((()=>{Qt({type:"widgetWidth",width:e})}))}_sendOpenEvent(e,t){if(this.styleId&&Di(this.styleId))return;const{iframeId:i}=Rt(),o=(null==e?void 0:e.gender)&&(null==e?void 0:e.ageGroup)&&Pi(e.gender,e.ageGroup),n="true"===Pe.TFP_WIDGETS_OFFLINE?Pe.TFP_WIDGETS_OFFLINE_IFRAME_PATH||"":gi((()=>{var i;let n;if(t)n=t;else switch(null===(i=this._fitRec)||void 0===i?void 0:i.status){case w.InvalidDepartment:n=Ai.InvalidDepartment;break;case w.Success:n=Ai.FitDetails;break;case w.SizeNotAvailable:n=Ai.SizeNotAvailable}return Object.assign(Object.assign({},Et()),{gender:(null==e?void 0:e.gender)&&mo(e.gender),ageGroup:null==e?void 0:e.ageGroup,category:null==e?void 0:e.category,department:o,productType:(null==e?void 0:e.category)&&o&&zi(e.category,e.classification,o),originWidget:"tfc-fitrec-product",style:(null==e?void 0:e.styleId)&&JSON.stringify([e.styleId]),productWidgetResult:JSON.stringify(e),ips:n})})()),r="true"===Pe.TFP_WIDGETS_OFFLINE?Pe.TFP_WIDGETS_OFFLINE_IFRAME_ORIGIN||"":xt,s=rt();Qt({type:"appOpen",iframeOrigin:r,iframeId:i,iframePathAndHash:n,widgetToken:Me()||("true"===Pe.TFP_WIDGETS_OFFLINE?"testtoken":void 0),mobileModalSize:null==s?void 0:s.configs.feature.mobileModalSize})}};wo.styles=e.iv`
    :host {
      --margin-top: 0;
      --margin-right: 0;
      --margin-bottom: 0;
      --margin-left: 0;
      --alignment: start;

      --font-family: 'Montserrat', sans-serif;
      --font-size: 12px;
      --t-logo-bg-color: #d31245;
      --t-logo-size-standard: 2.333em;
      --t-logo-size-button: 1.1667em;
      --t-logo-size-slim: 1em;
      --t-logo-text-color: #fff;
      --text-color: #000;
      --cta-text-color: #000;
      --cta-text-transform: none;
      --ug-text-transform: uppercase;
      --ug-text-font-weight: 600;
      --size-rec-text-transform: uppercase;
      --size-rec-font-weight: 600;
      --ug-scale-label-font-size: 11px;
      --ug-scale-ug-text-font-size: 10px;
      --ug-scale-ug-text-font-weight: 600;
      --ug-scale-ug-text-text-transform: uppercase;
      --ug-scale-label-text-color: #999;
      --ug-scale-label-text-transform: uppercase;
      --ug-scale-gradient-color: #000;
      --ug-scale-background-color: #ccc;
      --ug-scale-indicator-color: #d31145;
      --ug-scale-horizontal-spacing: 10px;
      --button-text-color: #000;
      --button-background-color: #fff;
      --button-border-color: #ddd;
      --button-border-radius: 5px;
      --button-box-shadow: 0px 0px 0px #ddd;
    }

    .product-widget-wrapper {
      text-align: var(--alignment);
      padding: var(--margin-top) var(--margin-right) var(--margin-bottom)
        var(--margin-left);
    }
  `,yo([s()],wo.prototype,"styleId",void 0),yo([a()],wo.prototype,"_widgetTemplate",void 0),yo([a()],wo.prototype,"_fitRec",void 0),yo([a()],wo.prototype,"_recipientAlias",void 0),wo=yo([t("tf-product-widget")],wo);function bo(e,t,i){return o=this,n=void 0,s=function*(){const{storeKey:o,integrationPlatform:n}=$t(),r=rt(),s=null==r?void 0:r.locale,a=(null==r?void 0:r.productResults)&&(null==r?void 0:r.productResults[e]);(null==a?void 0:a.status)&&(yield ui(),yield si({path:`/profile/public/v4/${o}/analytics/fit-inquiry`,body:JSON.stringify({styleId:e,uiLocale:s,deviceType:it(),platform:n,status:null==a?void 0:a.status,context:t,shopForOthersEnabled:null==r?void 0:r.configs.feature.sfoEnabled,kidsEnabled:!0,universalGuidance:i})}))},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{l(s.next(e))}catch(e){t(e)}}function a(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r((function(e){e(o)}))).then(i,a)}l((s=s.apply(o,n||[])).next())}));var o,n,r,s}var xo=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let So=class extends e.oi{constructor(){super(),this._ugScale=t=>{var i,o,n;if(!t)return;const r=(null===(n=null===(o=null===(i=this._productWidgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===o?void 0:o.scale)||void 0===n?void 0:n.style)||"Gradient";return e.dy`<ug-scale
      .ugDetails=${t}
      .ugScaleStyle=${r}
      .ugDisplayText=${!1}
      .ugScalePosition=${"above"}
      aria-hidden="true"
    ></ug-scale>`},ti(((e,t)=>{t&&this.styleId!=t?this.styleId=t:this.updateFitRec(e)})),Ee.addEventListener("resize",(e=>{jt.trace("resize detected - trigger height update",e),this._heightUpdate()})),document.fonts.onloadingdone=()=>{jt.trace("Font loading complete"),this._heightUpdate()}}updateFitRec(t){var i,o,n,r,s,a,l,d,c,u;return l=this,d=void 0,u=function*(){const l=null==this?void 0:this.styleId;if(!l)return void(this._fitRec=void 0);const d=yield Ti([l],"rollup");let c;l.startsWith("tfTest-")||(c=yield function(e){return t=this,i=void 0,n=function*(){const{storeKey:t}=$t(),i=rt(),o=null==i?void 0:i.locale,n=o?`locale=${encodeURIComponent(o)}`:"",r=yield ri({path:`/profile/public/v4/${t}/products/${e}?${n}`});if(r.ok)return yield r.json()},new((o=void 0)||(o=Promise))((function(e,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(s,a)}l((n=n.apply(t,i||[])).next())}));var t,i,o,n}(l));const u=(null==d?void 0:d.locale)||$t().locale;u&&(yield Bi(u));const f=Di(l);this._fitRec=(null==f?void 0:f.productResult)||(null===(i=null==d?void 0:d.productResults)||void 0===i?void 0:i[l]),this._isKidsProduct=(null===(o=this._fitRec)||void 0===o?void 0:o.ageGroup)===Be.Child,this._kidsRollupWidgetEnabled=null==d?void 0:d.configs.feature.kidsRollupWidgetEnabled,this._rollupWidgetMode=null==d?void 0:d.configs.feature.rollupWidgetMode;const{widgets:g={}}=po((null==d?void 0:d.configs.widget)||{},["product","fonts","rollup"]),{widgetLocation:p}=dt();if(p&&p!==((null===(n=g.rollup)||void 0===n?void 0:n.widgetLocation)||"A"))return void(this._widgetTemplate=void 0);var h;ho(g,this.style).then((()=>{jt.info("Fonts loaded. Updating size sampling widget height."),this._heightUpdate()})),g.product&&vo(g.product,this.style),g.rollup&&this._updateConfigProperties(g.rollup),this._universalGuidance=f?null===(r=this._fitRec)||void 0===r?void 0:r.universalGuidance:null==c?void 0:c.universalGuidance,this._fitRec&&(this._fitRec.universalGuidance=void 0,this._fitRec.heightWeightRecSizeName=void 0),this._recipientAlias=(null==f?void 0:f.alias)||(null===(s=null==d?void 0:d.profiles)||void 0===s?void 0:s.recipient.alias),this._fitRec&&Si(this._fitRec)?(this._widgetTemplate=e.dy` <product-widget-element
        .styleId=${this.styleId}
        .recipientAlias=${this._recipientAlias}
        .fitRec=${this._fitRec}
        .productWidgetConfigs=${g.product}
        .sendOpenEvent=${()=>this._sendOpenEvent(this._fitRec)}
      ></product-widget-element>`,this.styleId&&bo(this.styleId,"rollup",this._universalGuidance)):this._widgetTemplate=void 0,!f&&(h=null==d?void 0:d.productResults)&&Object.values(h).some((e=>e.status===w.EstimationInProgress))?(jt.debug("There is at least one estimation in progress. Queueing a delayed poll."),setTimeout((()=>this.updateFitRec(t)),3e3)):jt.debug("All widget estimations settled.");const v=null===(a=this._fitRec)||void 0===a?void 0:a.status;t&&v!==w.EstimationInProgress&&this._sendOpenEvent(this._fitRec)},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{n(u.next(e))}catch(e){t(e)}}function o(e){try{n(u.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}n((u=u.apply(l,d||[])).next())}))}updated(e){e.has("styleId")&&this.styleId&&this.updateFitRec(!1),this._heightUpdate()}render(){var t,i,o,n,r;if(!this.styleId||!this._fitRec||"Hidden"===this._rollupWidgetMode||this._isKidsProduct&&!this._kidsRollupWidgetEnabled||!this._widgetTemplate)return e.dy``;const s=(null===(o=null===(i=null===(t=this._productWidgetConfigs)||void 0===t?void 0:t.univGuidance)||void 0===i?void 0:i.scale)||void 0===o?void 0:o.style)||"Gradient",a=null===(n=this._universalGuidance)||void 0===n?void 0:n.social,l=null===(r=this._universalGuidance)||void 0===r?void 0:r.source,d=l&&["BrandCategory","BrandClass"].includes(l),c=["MinimalWithUgText","GradientWithUgText","BarWithUgText"].includes(s);return jt.debug("starting render",performance.now()),e.dy`<div class="rollup-widget-wrapper">
      <div class="rollup-widget">
        <button @click=${()=>this._sendOpenEvent(this._fitRec)}>
          <div class="ug-text-wrapper ${c?"hide-ug-text":""}">
            <ug-text .ugDetails=${this._universalGuidance}></ug-text>
          </div>
          <div class="social-text-wrapper">
            ${(null==a?void 0:a.isAtMaxDataCount)?(0,h.WI)(e.dy`Based on what shoppers bought & kept.`):d&&(null==a?void 0:a.dataCount)?(0,h.WI)(e.dy`Based on similar items ${null==a?void 0:a.dataCount} shoppers
                  bought & kept.`):(null==a?void 0:a.dataCount)?(0,h.WI)(e.dy`Based on what ${null==a?void 0:a.dataCount} shoppers bought &
                  kept.`):e.dy``}
          </div>

          <div class="ug-scale-wrapper">
            ${this._ugScale(this._universalGuidance)}
          </div>
          <div class="rollup-widget-explanation">
            <div class="explanation-svg-wrapper">${_o}</div>

            ${(0,h.WI)("True Fit analyzes millions of purchases every day to learn how styles fit.")}
          </div>
          <div class="widget-wrapper">${this._widgetTemplate}</div>
        </button>
      </div>
    </div>`}_heightUpdate(){requestAnimationFrame((()=>{const e=this.getBoundingClientRect().height;if(e!==this._lastHeight){this._lastHeight=e;const{iframeId:t}=Ct(),i={type:"widgetHeight",height:e,iframeId:t};jt.debug("updated",i,performance.now()),Qt(i)}}))}_sendOpenEvent(e){if(this.styleId&&Di(this.styleId))return;const{iframeId:t}=Ct(),i=(null==e?void 0:e.gender)&&(null==e?void 0:e.ageGroup)&&Pi(e.gender,e.ageGroup),o="true"===Pe.TFP_WIDGETS_OFFLINE?Pe.TFP_WIDGETS_OFFLINE_IFRAME_PATH||"":gi((e=>{let t;switch(null==e?void 0:e.status){case w.InvalidDepartment:t=Ai.InvalidDepartment;break;case w.Success:t=Ai.FitDetails;break;case w.SizeNotAvailable:t=Ai.SizeNotAvailable}return Object.assign(Object.assign({},Et()),{gender:(null==e?void 0:e.gender)&&mo(e.gender),ageGroup:null==e?void 0:e.ageGroup,category:null==e?void 0:e.category,department:i,productType:(null==e?void 0:e.category)&&i&&zi(e.category,e.classification,i),originWidget:"tfc-fitrec-rollup",style:(null==e?void 0:e.styleId)&&JSON.stringify([e.styleId]),productWidgetResult:JSON.stringify(e),ips:t})})(e)),n="true"===Pe.TFP_WIDGETS_OFFLINE?Pe.TFP_WIDGETS_OFFLINE_IFRAME_ORIGIN||"":xt,r=rt();Qt({type:"appOpen",iframeOrigin:n,iframeId:t,iframePathAndHash:o,widgetToken:Me()||("true"===Pe.TFP_WIDGETS_OFFLINE?"testtoken":void 0),mobileModalSize:null==r?void 0:r.configs.feature.mobileModalSize})}_updateConfigProperties(e){var t,i,o,n;const{primaryTextColor:r,primaryBackgroundColor:s,primaryBorderColor:a,explanationBackgroundColor:l,explanationTextColor:d,explanationIconColor:c,margin:u={},maxWidth:f}=e,g=this.style;g.setProperty("--rollup-primary-text-color",null!=r?r:null),g.setProperty("--rollup-primary-background-color",null!=s?s:null),g.setProperty("--rollup-primary-border-color",null!=a?a:null),g.setProperty("--rollup-explanation-background-color",null!=l?l:null),g.setProperty("--rollup-explanation-text-color",null!=d?d:null),g.setProperty("--rollup-explanation-icon-color",null!=c?c:null),g.setProperty("--rollup-max-width",null!=f?f:null),g.setProperty("--rollup-margin-top",null!==(t=null==u?void 0:u.top)&&void 0!==t?t:null),g.setProperty("--rollup-margin-right",null!==(i=null==u?void 0:u.right)&&void 0!==i?i:null),g.setProperty("--rollup-margin-bottom",null!==(o=null==u?void 0:u.bottom)&&void 0!==o?o:null),g.setProperty("--rollup-margin-left",null!==(n=null==u?void 0:u.left)&&void 0!==n?n:null)}};So.styles=e.iv`
    :host {
      --font-family: 'Montserrat', sans-serif;

      --rollup-margin-top: 0;
      --rollup-margin-right: 0;
      --rollup-margin-bottom: 0;
      --rollup-margin-left: 0;
      --rollup-max-width: 430px;

      --rollup-primary-background-color: #fff;
      --rollup-primary-text-color: #272932;
      --rollup-primary-border-color: #ddd;
      --rollup-explanation-background-color: #f8f8f8;
      --rollup-explanation-text-color: #2b2b2b;
      --rollup-explanation-icon-color: #000;

      --font-size: 12px;
      --t-logo-bg-color: #d31245;
      --t-logo-size-standard: 2.333em;
      --t-logo-size-button: 1.1667em;
      --t-logo-size-slim: 1em;
      --t-logo-text-color: #fff;
      --text-color: #000;
      --cta-text-color: #000;
      --cta-text-transform: none;
      --ug-scale-label-font-size: 11px;
      --ug-scale-ug-text-font-size: 10px;
      --ug-scale-ug-text-font-weight: 600;
      --ug-scale-ug-text-text-transform: uppercase;
      --ug-scale-label-text-color: #999;
      --ug-scale-label-text-transform: uppercase;
      --ug-scale-gradient-color: #000;
      --ug-scale-background-color: #ccc;
      --ug-scale-indicator-color: #d31145;
      --ug-scale-horizontal-spacing: 10px;
      --button-text-color: #000;
      --button-background-color: #fff;
      --button-border-color: #ddd;
      --button-border-radius: 5px;
      --button-box-shadow: 0px 0px 0px #ddd;
    }

    .rollup-widget-wrapper {
      padding: var(--rollup-margin-top) var(--rollup-margin-right)
        var(--rollup-margin-bottom) var(--rollup-margin-left);
    }

    .rollup-widget {
      font-family: var(--font-family);
      font-size: 12px;

      max-width: var(--rollup-max-width);
      background-color: var(--rollup-primary-background-color);
      color: var(--rollup-primary-text-color);
      border: 1px solid var(--rollup-primary-border-color);
    }

    button {
      width: 100%;
      height: 100%;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: transparent;
      border: 0;
      padding: 20px 10px 20px 10px;
      text-align: left;
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 0;
      -webkit-border-radius: 0;
    }

    button:active {
      color: inherit;
    }

    .rollup-widget-explanation {
      display: flex;
      align-items: center;
      gap: 10px;

      background-color: var(--rollup-explanation-background-color);
      color: var(--rollup-explanation-text-color);

      border-radius: 10px;
      padding: 15px 20px;
    }

    .widget-wrapper,
    .social-text-wrapper,
    .ug-scale-wrapper,
    .ug-text-wrapper {
      width: 100%;
      text-align: center;
    }

    .social-text-wrapper {
      margin-bottom: 10px;
    }

    .widget-wrapper {
      margin-top: 20px;
    }

    ug-scale {
      display: inline-block;
      margin-bottom: 20px;
    }

    .hide-ug-text {
      display: none;
    }

    svg {
      height: 30px;
      width: 30px;
    }
  `,xo([s()],So.prototype,"styleId",void 0),xo([a()],So.prototype,"_widgetTemplate",void 0),xo([a()],So.prototype,"_fitRec",void 0),xo([a()],So.prototype,"_universalGuidance",void 0),xo([a()],So.prototype,"_recipientAlias",void 0),xo([a()],So.prototype,"_isKidsProduct",void 0),xo([a()],So.prototype,"_kidsRollupWidgetEnabled",void 0),xo([a()],So.prototype,"_rollupWidgetMode",void 0),xo([a()],So.prototype,"_productWidgetConfigs",void 0),So=xo([t("tf-rollup-widget")],So);const _o=e.YP`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g clip-path="url(#clip0_318_178)">
<path d="M11.9 9.70001H8.5V28H6.9V15.2H3.5V28H3V29.1H3.6H6.9H8.6H11.9H23.6V28H11.9V9.70001ZM4.6 28V16.3H5.7V28H4.6ZM9.6 28V10.8H10.7V28H9.6Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M23.0002 16.4V5.20001H19.7002V15.2C20.1002 15.2 20.5002 15.2 20.8002 15.3V6.30001H21.9002V15.7C22.3002 15.9 22.7002 16.1 23.0002 16.4Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M17.4001 15.7V13.6H14.1001V20.8C14.1001 19.6 14.5001 18.4 15.2001 17.5V14.7H16.3001V16.4C16.7001 16.1 17.0001 15.9 17.4001 15.7Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M28.1001 28.2L24.6001 24.8C25.2001 23.9 25.6001 22.8 25.6001 21.7C25.6001 19.9 24.7001 18.3 23.4001 17.3C23.1001 17 22.7001 16.8 22.3001 16.6C21.9001 16.4 21.6001 16.3 21.2001 16.2C20.8001 16.1 20.5001 16.1 20.1001 16.1C19.3001 16.1 18.6001 16.3 17.9001 16.6C17.5001 16.8 17.1001 17 16.8001 17.3C16.4001 17.6 16.0001 18 15.7001 18.4C15.0001 19.3 14.6001 20.5 14.6001 21.7C14.6001 24.8 17.1001 27.3 20.2001 27.3C21.3001 27.3 22.3001 27 23.2001 26.4L26.6001 29.7C26.8001 30 27.1001 30.1 27.5001 30.1C27.7001 30.1 28.0001 30 28.2001 29.8C28.4001 29.4 28.4001 28.7 28.1001 28.2ZM19.9001 25C18.1001 25 16.6001 23.5 16.6001 21.7C16.6001 20.7 17.0001 19.8 17.7001 19.2C18.3001 18.7 19.1001 18.3 19.9001 18.3C21.7001 18.3 23.2001 19.8 23.2001 21.6C23.3001 23.5 21.8001 25 19.9001 25Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M14.5001 6.5L21.4001 1.9V3.1L22.5001 3.2L22.6001 0.1L19.6001 0L19.5001 1.1L20.5001 1.2L14.8001 5L12.6001 1.6L1.6001 9L2.2001 9.9L12.3001 3.2L14.5001 6.5Z" fill="var(--rollup-explanation-icon-color)"/>
</g>
<defs>
<clipPath id="clip0_318_178">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`;var $o=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Ro=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};let To=class extends e.oi{constructor(){super(),ti((e=>{this.updateFitRec(e,this._productInfo)}));const{productInfo:e}=Tt();this.updateFitRec(!1,e&&JSON.parse(e));const{retailerOrigin:t}=$t();Ee.addEventListener("message",(e=>Ro(this,void 0,void 0,(function*(){if(e.origin===t||e.origin===location.origin){const t=e.data;"productInfo"===t.type&&(jt.debug("productInfo event",e),this.updateFitRec(!1,JSON.parse(t.productInfo)))}})))),Ee.addEventListener("resize",(e=>{jt.trace("resize detected - trigger height update",e),this._heightUpdate()})),document.fonts.onloadingdone=()=>{jt.trace("Font loading complete"),this._heightUpdate()}}updateFitRec(t,i){var o,n;return Ro(this,void 0,void 0,(function*(){let r;try{r=sessionStorage.getItem("TFSizeSamplingBannerDismissed-"+this._storeKey)}catch(e){jt.error("sessionStorage not supported",e)}this._productInfo=i,this._cartInfo=this._getCartInfo(this._productInfo);const{iframeId:s}=Tt();if(!this._cartInfo||"true"===r)return this._fitRecs=void 0,void this._hideBanner();const a=yield Ti(Object.keys(this._cartInfo),"sizeSamplingBanner"),l=(null==a?void 0:a.locale)||$t().locale;if(l&&(yield Bi(l)),this._fitRecs=Object.keys(this._cartInfo).reduce(((e,t)=>{const i=Di(t),o=i?i.productResult:(null==a?void 0:a.productResults)&&(null==a?void 0:a.productResults[t]);return o&&o.recommendable&&o.status!==w.SizeNotAvailable&&bi.includes(o.status)&&this._cartInfo&&this._cartInfo[t]&&this._cartInfo[t].sizes.length>1&&(e[t]=o),e}),{}),this._index=this._index&&Object.keys(this._fitRecs)[this._index]?this._index:0,0===Object.keys(this._fitRecs).length)return void this._hideBanner();this._sizeSamplingBannerEnabled="off"!==(null==a?void 0:a.configs.feature.sizeSamplingBanner);const{widgets:d={}}=po((null==a?void 0:a.configs.widget)||{},["product","fonts","sizeSampling"]);if(this._bannerConfigMessage=null===(o=null==d?void 0:d.sizeSampling)||void 0===o?void 0:o.bannerMessageOverride,ho(d,this.style).then((()=>{jt.info("Fonts loaded. Updating size sampling widget height."),this._heightUpdate()})),d.product&&vo(d.product,this.style),d.sizeSampling&&this._updateConfigProperties(d.sizeSampling),this._fitRecs)for(const e in this._fitRecs)this._fitRecs[e].heightWeightRecSizeName=void 0;if(this._currentStyleId=Object.keys(this._fitRecs)[this._index],this._currentStyleId){this._currentFitRec=this._fitRecs[this._currentStyleId];const i=Di(this._currentStyleId);this._recipientAlias=(null==i?void 0:i.alias)||(null===(n=null==a?void 0:a.profiles)||void 0===n?void 0:n.recipient.alias),this._widgetTemplate=e.dy`<product-widget-element
        .styleId=${this._currentStyleId}
        .recipientAlias=${this._recipientAlias}
        .fitRec=${this._currentFitRec}
        .productWidgetConfigs=${d.product}
        .sendOpenEvent=${()=>this._sendOpenEvent(this._currentFitRec)}
      ></product-widget-element>`,!i&&(c=null==a?void 0:a.productResults)&&Object.values(c).some((e=>e.status===w.EstimationInProgress))?(jt.debug("There is at least one estimation in progress. Queueing a delayed poll."),setTimeout((()=>this.updateFitRec(t,this._productInfo)),3e3)):jt.debug("All widget estimations settled.");const o=this._currentFitRec.status;t&&o!==w.EstimationInProgress&&this._sendOpenEvent(this._currentFitRec),bo(this._currentStyleId,"sizeSamplingBanner");const r={type:"sizeSamplingBannerDisplay",isDisplayed:!0,iframeId:s};jt.debug("sizeSamplingBannerDisplayEvent",r),Qt(r),this._heightUpdate()}var c}))}render(){if(jt.debug("starting render tf-size-sampling-widget",performance.now()),this._fitRecs&&Object.keys(this._fitRecs).length&&void 0!==this._index&&this._cartInfo&&this._currentStyleId&&this._cartInfo[this._currentStyleId]&&this._sizeSamplingBannerEnabled){const t=Object.keys(this._fitRecs).length,i=t>1,o=(0,h.WI)("Dismiss"),n=(0,h.WI)("Dismiss all"),r=this._cartInfo[this._currentStyleId].sizes.length,s=this._cartInfo[this._currentStyleId].styleName,a=this._bannerConfigMessage?this._bannerConfigMessage.replace(/countPlaceholder|styleNamePlaceholder/g,(function(e){return"countPlaceholder"===e?r.toString():s})):(0,h.WI)(h.Bd`We see you have ${r} sizes of ${s} in your cart! Use True Fit to find the one that fits.`),l=this._index+1;return e.dy`<div class="size-sampling-banner">
        <div class="size-sampling-banner-wrapper">
          ${i?e.dy`<div class="size-sampling-banner-card-stack"></div>`:e.dy``}
          <div class="size-sampling-banner-card">
            <div
              data-element-id="size-sampling-message"
              class="size-sampling-banner-message"
            >
              ${a}
            </div>
            <div class="product-widget-container">${this._widgetTemplate}</div>
            <div class="link-wrapper">
              ${i?e.dy`<span class="page ${S()}"
                    >${1===l?e.dy`<span class="left-caret ${S()}"
                          ><svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.89795 0.615784L0.752125 5.49997L5.89795 10.4999"
                              stroke="var(--banner-caret-disabled-color)"
                              stroke-linecap="round"
                            /></svg
                        ></span> `:e.dy`<button
                          class="left-caret ${S()}"
                          @click="${()=>{void 0!==this._index&&(this._index--,this.updateFitRec(!1,this._productInfo))}}"
                        >
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.89795 0.615784L0.752125 5.49997L5.89795 10.4999"
                              stroke="var(--banner-caret-enabled-color)"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button> `}<span
                      >${this._index+1} / ${t}</span
                    >${l===t?e.dy`<span class="right-caret ${S()}"
                          ><svg
                            width="8"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.32007 0.615784L6.46589 5.49997L1.32007 10.4999"
                              stroke="var(--banner-caret-disabled-color)"
                              stroke-linecap="round"
                            /></svg
                        ></span> `:e.dy`<button
                          class="right-caret ${S()}"
                          @click="${()=>{void 0!==this._index&&(this._index++,this.updateFitRec(!1,this._productInfo))}}"
                        >
                          <svg
                            width="8"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.32007 0.615784L6.46589 5.49997L1.32007 10.4999"
                              stroke="var(--banner-caret-enabled-color)"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button> `}</span
                  >`:e.dy``}
              <span
                class="dismiss"
                data-element-id="size-sampling-dismiss-message"
                @click="${this._dismissBanner}"
                >${i?n:o}</span
              >
            </div>
          </div>
        </div>
      </div>`}return e.dy``}_heightUpdate(){requestAnimationFrame((()=>{const e=this.getBoundingClientRect().height;if(e!==this._lastHeight){this._lastHeight=e;const{iframeId:t}=Tt(),i={type:"widgetHeight",height:e,iframeId:t};jt.debug("updated",i,performance.now()),Qt(i)}}))}_getCartInfo(e){return null==e?void 0:e.reduce(((e,t)=>{const i=e[t.styleId]=e[t.styleId]||{},o=i.sizes=i.sizes||[];return t.size&&!o.includes(t.size)&&o.push(t.size),i.styleName=t.styleName,e}),{})}_sendOpenEvent(e){if(this._currentStyleId&&Di(this._currentStyleId))return;const{iframeId:t}=Tt(),i=(null==e?void 0:e.gender)&&(null==e?void 0:e.ageGroup)&&Pi(e.gender,e.ageGroup),o="true"===Pe.TFP_WIDGETS_OFFLINE?Pe.TFP_WIDGETS_OFFLINE_IFRAME_PATH||"":gi((e=>{let t;switch(null==e?void 0:e.status){case w.InvalidDepartment:t=Ai.InvalidDepartment;break;case w.Success:t=Ai.FitDetails;break;case w.SizeNotAvailable:t=Ai.SizeNotAvailable}return Object.assign(Object.assign({},Et()),{gender:(null==e?void 0:e.gender)&&mo(e.gender),ageGroup:null==e?void 0:e.ageGroup,category:null==e?void 0:e.category,department:i,productType:(null==e?void 0:e.category)&&i&&zi(e.category,e.classification,i),originWidget:"tfc-fitrec-size-sampling",style:(null==e?void 0:e.styleId)&&JSON.stringify([e.styleId]),productWidgetResult:JSON.stringify(e),ips:t})})(e)),n="true"===Pe.TFP_WIDGETS_OFFLINE?Pe.TFP_WIDGETS_OFFLINE_IFRAME_ORIGIN||"":xt,r=rt();Qt({type:"appOpen",iframeOrigin:n,iframeId:t,iframePathAndHash:o,widgetToken:Me()||("true"===Pe.TFP_WIDGETS_OFFLINE?"testtoken":void 0),mobileModalSize:null==r?void 0:r.configs.feature.mobileModalSize})}_dismissBanner(){try{sessionStorage.setItem("TFSizeSamplingBannerDismissed-"+this._storeKey,"true")}catch(e){jt.error("sessionStorage not supported",e)}this._hideBanner()}_hideBanner(){const{iframeId:e}=Tt(),t={type:"sizeSamplingBannerDisplay",isDisplayed:!1,iframeId:e};jt.debug("sizeSamplingBannerDisplayEvent",t),Qt(t);const i={type:"widgetHeight",height:0,iframeId:e};jt.debug("updated",i,performance.now()),Qt(i),this._heightUpdate()}_updateConfigProperties(e){var t,i,o,n;const{backgroundColor:r,borderColor:s,margin:a={},maxWidth:l,caretDisabledColor:d,caretEnabledColor:c,linkTextColor:u,textColor:f}=e,g=this.style;g.setProperty("--banner-background-color",null!=r?r:null),g.setProperty("--banner-border-color",null!=s?s:null),g.setProperty("--banner-max-width",null!=l?l:null),g.setProperty("--banner-link-text-color",null!=u?u:null),g.setProperty("--banner-text-color",null!=f?f:null),g.setProperty("--banner-caret-disabled-color",null!=d?d:null),g.setProperty("--banner-caret-enabled-color",null!=c?c:null),g.setProperty("--banner-margin-top",null!==(t=null==a?void 0:a.top)&&void 0!==t?t:null),g.setProperty("--banner-margin-right",null!==(i=null==a?void 0:a.right)&&void 0!==i?i:null),g.setProperty("--banner-margin-bottom",null!==(o=null==a?void 0:a.bottom)&&void 0!==o?o:null),g.setProperty("--banner-margin-left",null!==(n=null==a?void 0:a.left)&&void 0!==n?n:null)}};To.styles=e.iv`
    :host {
      --font-family: 'Montserrat', sans-serif;
      --banner-text-color: #000;
      --banner-link-text-color: #000;
      --banner-background-color: #fff;
      --banner-border-color: #ddd;
      --banner-max-width: auto;
      --banner-margin-top: 0;
      --banner-margin-right: 0;
      --banner-margin-bottom: 0;
      --banner-margin-left: 0;
      --banner-caret-disabled-color: #888;
      --banner-caret-enabled-color: #000;

      --font-size: 12px;
      --t-logo-bg-color: #d31245;
      --t-logo-size-standard: 2.333em;
      --t-logo-size-button: 1.1667em;
      --t-logo-size-slim: 1em;
      --t-logo-text-color: #fff;
      --text-color: #000;
      --cta-text-color: #000;
      --cta-text-transform: none;
      --ug-scale-label-font-size: 11px;
      --ug-scale-ug-text-font-size: 10px;
      --ug-scale-ug-text-font-weight: 600;
      --ug-scale-ug-text-text-transform: uppercase;
      --ug-scale-label-text-color: #999;
      --ug-scale-label-text-transform: uppercase;
      --ug-scale-gradient-color: #000;
      --ug-scale-background-color: #ccc;
      --ug-scale-indicator-color: #d31145;
      --ug-scale-horizontal-spacing: 10px;
      --button-text-color: #000;
      --button-background-color: #fff;
      --button-border-color: #ddd;
      --button-border-radius: 5px;
      --button-box-shadow: 0px 0px 0px #ddd;
    }

    .size-sampling-banner {
      max-width: var(--banner-max-width);
      padding: var(--banner-margin-top) var(--banner-margin-right)
        var(--banner-margin-bottom) var(--banner-margin-left);
    }

    .size-sampling-banner-wrapper {
      position: relative;
      padding: 0 7px 7px 0;

      .size-sampling-banner-card-stack {
        border: 1px solid var(--banner-border-color);
        background-color: var(--banner-background-color);
        position: absolute;
        width: calc(100% - 15px);
        height: calc(100% - 15px);
        right: 0;
        bottom: 0;
        z-index: -1;
        margin-bottom: 1px;
      }

      .size-sampling-banner-card {
        border: 1px solid var(--banner-border-color);
        background-color: var(--banner-background-color);
        font-family: var(--font-family);
        color: var(--banner-text-color);
        font-size: var(--font-size);
        padding: 10px;
      }

      .size-sampling-banner-message {
        line-height: 1.5em;
      }

      .product-widget-container {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .link-wrapper {
        overflow: hidden;

        .page.rtl {
          float: left;
        }

        .left-caret,
        .right-caret {
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          border: none;
          background: transparent;
        }

        .left-caret.rtl,
        .right-caret.rtl {
          transform: scaleX(-1);
        }

        .left-caret {
          padding-right: 5px;
          padding-left: 0;
        }

        .right-caret {
          padding-left: 5px;
          padding-right: 0;
        }

        .dismiss {
          float: right;
          color: var(--banner-link-text-color);
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  `,$o([a()],To.prototype,"_widgetTemplate",void 0),$o([a()],To.prototype,"_productInfo",void 0),$o([a()],To.prototype,"_index",void 0),$o([a()],To.prototype,"_cartInfo",void 0),$o([a()],To.prototype,"_currentStyleId",void 0),$o([a()],To.prototype,"_fitRecs",void 0),$o([a()],To.prototype,"_currentFitRec",void 0),$o([a()],To.prototype,"_recipientAlias",void 0),$o([a()],To.prototype,"_sizeSamplingBannerEnabled",void 0),$o([a()],To.prototype,"_storeKey",void 0),$o([a()],To.prototype,"_bannerConfigMessage",void 0),To=$o([t("tf-size-sampling-widget")],To);var Co=n(3379),Io=n.n(Co),Ao=n(7795),Lo=n.n(Ao),Oo=n(569),Eo=n.n(Oo),ko=n(3565),Po=n.n(ko),zo=n(9216),Uo=n.n(zo),Mo=n(4589),Wo=n.n(Mo),Fo=n(1577),Bo={};Bo.styleTagTransform=Wo(),Bo.setAttributes=Po(),Bo.insert=Eo().bind(null,"head"),Bo.domAPI=Lo(),Bo.insertStyleElement=Uo(),Io()(Fo.Z,Bo),Fo.Z&&Fo.Z.locals&&Fo.Z.locals;const{token:Go,screenSize:Do,type:No,locale:jo}=$t();if(jo&&Bi(jo),Go&&Ue(Go),et(Do),"tfc-fitrec-product"===No){const e=Rt();ct(function({userId:e,registered:t,widgetHidden:i,locale:o,storeExperimentKey:n,configSet:r,configOverride:s,colorId:a,recOnly:l,widgetLocation:d}){return{userId:e,registered:t,locale:o,widgetHidden:i,storeExperimentKey:n,configSet:r,configOverride:s,colorId:a,recOnly:l,widgetLocation:d}}(e)),jt.debug("before adding tf-product-widget to page",performance.now());const t=ke.createElement("tf-product-widget");t.setAttribute("styleId",e.styleId),ke.body.appendChild(t)}if("tfc-fitrec-size-sampling"===No){ct(At(Tt())),jt.debug("before adding tf-size-sampling-widget to page",performance.now());const e=ke.createElement("tf-size-sampling-widget");ke.body.appendChild(e)}if("tfc-fitrec-rollup"===No){const e=Ct();ct(At(e)),jt.debug("before adding tf-rollup-widget to page",performance.now());const t=ke.createElement("tf-rollup-widget");t.setAttribute("styleId",e.styleId),ke.body.appendChild(t)}if("api"===No){ti((()=>{Ti()}));const e=It(),{checkout:t,sessionInfo:i,otherWidgets:o}=e;t&&kt(JSON.parse(t)),i&&Ut(JSON.parse(i)),o&&(ct(function({userId:e,registered:t,widgetHidden:i,locale:o,storeExperimentKey:n}){return{userId:e,registered:t,locale:o,widgetHidden:i,storeExperimentKey:n}}(e)),Ti())}})()})();