(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),s&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=s):p[4]="".concat(s)),e.push(p))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",p="year",u="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:p,w:o,d:a,D:u,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=h;var g=function(t){return t instanceof M},$=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,s=o}return!i&&s&&(y=s),s||!i&&y},w=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},D=_;D.l=$,D.i=g,D.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function h(t){this.$L=$(t.locale,null,!0),this.parse(t)}var m=h.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,c=!!D.u(e)||e,d=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(a)},v=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case p:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case o:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return f(c?_-g:_+(6-g),m);case a:case u:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,c=D.p(t),d="set"+(this.$u?"UTC":""),f=(o={},o[a]=d+"Date",o[u]=d+"Date",o[l]=d+"Month",o[p]=d+"FullYear",o[r]=d+"Hours",o[s]=d+"Minutes",o[i]=d+"Seconds",o[n]=d+"Milliseconds",o)[c],v=c===a?this.$D+(e-this.$W):e;if(c===l||c===p){var h=this.clone().set(u,1);h.$d[f](v),h.init(),this.$d=h.set(u,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[D.p(t)]()},m.add=function(n,c){var u,d=this;n=Number(n);var f=D.p(c),v=function(t){var e=w(d);return D.w(e.date(e.date()+Math.round(t*n)),d)};if(f===l)return this.set(l,this.$M+n);if(f===p)return this.set(p,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[f]||1,m=this.$d.getTime()+n*h;return D.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,p=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return D.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:p(n.monthsShort,o,c,3),MMMM:p(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:p(n.weekdaysMin,this.$W,l,2),ddd:p(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:u(1),hh:u(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(t,e){return e||h[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,u,d){var f,v=D.p(u),h=w(n),m=(h.utcOffset()-this.utcOffset())*t,_=this-h,y=D.m(this,h);return y=(f={},f[p]=y/12,f[l]=y,f[c]=y/3,f[o]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/e,f[s]=_/t,f[i]=_/1e3,f)[v]||_,d?y:D.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return b[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=$(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),C=M.prototype;return w.prototype=C,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",p],["$D",u]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,M,w),t.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(t){return w(1e3*t)},w.en=b[y],w.Ls=b,w.p={},w}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],o=0;o<t.length;o++){var l=t[o],c=i.base?l[0]+i.base:l[0],p=r[c]||0,u="".concat(c," ").concat(p);r[c]=p+1;var d=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var v=s(f,i);i.byIndex=o,e.splice(o,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var l=i(t,s),c=0;c<r.length;c++){var p=n(r[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";function t(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";if(!(t instanceof y))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function e(t,e){if(!(t instanceof y&&e instanceof y))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var i=n(379),s=n.n(i),r=n(795),a=n.n(r),o=n(569),l=n.n(o),c=n(565),p=n.n(c),u=n(216),d=n.n(u),f=n(589),v=n.n(f),h=n(10),m={};m.styleTagTransform=v(),m.setAttributes=p(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),s()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const _="shake";class y{#t=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),t?.()}),600)}}var b=n(484),g=n.n(b);function $(t,e){return t?g()(t).format(e):""}function w(t,e){if(t<0||e<0)return NaN;const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e)),s=Math.random()*(i-n+1)+n;return Math.floor(s)}function D(){return{basePrice:0,dateFrom:new Date,dateTo:new Date,destination:0,offers:[],type:"flight"}}class M extends y{#e=null;#n=null;#i=null;#s=null;#r=null;constructor(t){let{point:e=D(),tripDestinations:n,allOffers:i,onFormSubmit:s,onRollupClick:r}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#s=s,this.#r=r,this.element.querySelector(".event__save-btn").addEventListener("submit",this.#a),this.element.querySelector(".event__rollup-btn")&&this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o)}get template(){return function(t,e,n){const{basePrice:i,type:s,destination:r,offers:a,dateFrom:o,dateTo:l}=t,c=e.find((t=>t.id===r)),p=n.find((t=>t.type===s)).offers,u=c?.pictures,d=u?.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.description}">`)).join(""),f=n.map((e=>{return`<div class="event__type-item">\n      <input id="event-type-${e.type}-${t.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.type}" ${s===e.type?"checked":""}>\n      <label class="event__type-label  event__type-label--${e.type}" for="event-type-${e.type}-${t.id}">${n=e.type,n.charAt(0).toUpperCase().concat(n.slice(1))}</label>\n    </div>`;var n})).join(""),v=p.map((t=>`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t.title}-${t.id}" type="checkbox" name="event-offer-${t.title}" ${a.includes(t.id)?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${t.title}-${t.id}">\n          <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </label>\n      </div>`)).join(""),h=e.map((t=>`<option value="${t.name}"></option>`)).join("");return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${f}\n              </fieldset>\n            </div>\n          </div>\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${s}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c?.name??""}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${h}\n            </datalist>\n          </div>\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${$(o,"YY/MM/DD HH:mm")}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${$(l,"YY/MM/DD HH:mm")}">\n        </div>\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n        </div>\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        ${Object.hasOwn(t,"id")?'<button class="event__reset-btn" type="reset">Delete</button>\n  <button class="event__rollup-btn" type="button">\n<span class="visually-hidden">Open event</span>\n</button>':'<button class="event__reset-btn" type="reset">Cancel</button>'}\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n    <section class="event__details">\n    ${v.length>0?`<section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n        <div class="event__available-offers">\n        ${v}\n\n      </section>`:""}\n</section>\n\n  ${c?.description.length>0?`<section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${c?.description}</p>\n          <div class="event__photos-container">\n          <div class="event__photos-tape">\n          ${d}\n          </div>\n        </div>\n        </div>\n        </section>`:""}\n    </section>\n  </form>\n</li>`}(this.#e,this.#n,this.#i)}#a=t=>{t.preventDefault(),this.#s()};#o=t=>{t.preventDefault(),this.#r()}}class C extends y{#e=null;#n=null;#i=null;#l=null;constructor(t){let{point:e,tripDestinations:n,allOffers:i,onEventRollupClick:s}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#l=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c)}get template(){return function(t,e,n){const{basePrice:i,destination:s,type:r,offers:a,dateFrom:o,dateTo:l}=t,c=e.find((t=>t.id===s)),p=n.find((t=>t.type===r)).offers.filter((t=>a.includes(t.id)));return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${o.toISOString()}">${$(o,"MMM DD")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${r}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${r} ${c.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${o.toISOString()}">${$(o,"HH:mm")}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${o.toISOString()}">${$(l,"HH:mm")}</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${i}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${0===p.length?'<li class="event__offer">\n          <span class="event__offer-title">No additional offers</span>\n        </li>':p.map((t=>`<li class="event__offer">\n          <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </li>`)).join("")}\n        </ul>\n        <button class="event__favorite-btn event__favorite-btn--active" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n             <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n              </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.#e,this.#n,this.#i)}#c=t=>{t.preventDefault(),this.#l()}}class E extends y{get template(){return'<ul class="trip-events__list">\n    </ul>'}}class A extends y{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" disabled>\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}}class S extends y{get template(){return'<section class="trip-events">\n      <h2 class="visually-hidden">Trip events</h2>\n    </section>'}}class x extends y{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}class k extends y{get template(){return'<form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}}class O extends y{get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled>New event</button>'}}class T extends y{get template(){return'<div class="trip-main__trip-controls  trip-controls">\n        <div class="trip-controls__filters">\n        </div>\n      </div>'}}class F extends y{get template(){return'<div class="trip-main">\n      <section class="trip-main__trip-info  trip-info">\n        <div class="trip-info__main">\n          <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n          <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n        </div>\n\n          <p class="trip-info__cost">\n            Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n          </p>\n      </section>\n    </div>'}}const H=[{type:"taxi",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]},{type:"bus",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]},{type:"train",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]},{type:"ship",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]},{type:"drive",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]},{type:"flight",offers:[{id:1,title:"Choose seats",price:5},{id:2,title:"Upgrade to a business class",price:140},{id:3,title:"Add meal",price:15}]},{type:"check-in",offers:[{id:1,title:"Choose seats",price:5},{id:2,title:"Add meal",price:15}]},{type:"sightseeing",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]},{type:"restaurant",offers:[{id:1,title:"Choose the radio station",price:120},{id:2,title:"Upgrade to a business class",price:140}]}],L=[{id:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${w(1,10)}`,description:"Chamonix parliament building"}]},{id:2,description:"Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",name:"Geneve",pictures:[{src:`https://loremflickr.com/248/152?random=${w(1,10)}`,description:"Geneve parliament building"}]},{id:3,description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${w(1,10)}`,description:"Amsterdam parliament building"}]}],B=[{id:"0",type:"taxi",offers:[1,2],destination:2,basePrice:500,dateFrom:new Date("2019-07-11:20:35"),dateTo:new Date("2019-07-12:11:25")},{id:"1",type:"bus",offers:[1,2],destination:1,basePrice:40,dateFrom:new Date("2019-07-10:21:50"),dateTo:new Date("2019-07-11:22:13")},{id:"2",type:"train",offers:[1,2],destination:1,basePrice:200,dateFrom:new Date("2019-07-09:22:55"),dateTo:new Date("2019-07-10:12:22")},{id:"3",type:"ship",offers:[1,2],destination:2,basePrice:80,dateFrom:new Date("2019-07-10:22:50"),dateTo:new Date("2019-07-11:22:10")},{id:"4",type:"drive",offers:[1,2],destination:3,basePrice:90,dateFrom:new Date("2019-07-11:10:55"),dateTo:new Date("2019-07-11:22:13")},{id:"5",type:"flight",offers:[1,2,3],destination:1,basePrice:150,dateFrom:new Date("2019-07-10:22:55"),dateTo:new Date("2019-07-10:11:23")},{id:"6",type:"check-in",offers:[1,2],destination:3,basePrice:150,dateFrom:new Date("2019-07-10:12:55"),dateTo:new Date("2019-07-10:22:22")},{id:"7",type:"sightseeing",offers:[1,2],destination:2,basePrice:100,dateFrom:new Date("2019-07-10:22:55"),dateTo:new Date("2019-07-11:11:22")},{id:"8",type:"restaurant",offers:[1,2],destination:1,basePrice:100,dateFrom:new Date("2019-07-10:22:55"),dateTo:new Date("2019-07-11:11:22")}],P=()=>{return(t=B)[Math.floor(Math.random()*t.length)];var t},I=document.querySelector(".page-body__page-main").querySelector(".page-body__container"),U=document.querySelector(".page-header__container"),V=new class{#p=Array.from({length:3},P);#n=L;#u=H;get points(){return this.#p}get tripDestinations(){return this.#n}get offersByType(){return this.#u}},j=new class{#d=null;#f=null;#v=new S;#h=new E;#p=[];#m=[];#_=[];constructor(t){let{container:e,pointsModel:n}=t;this.#d=e,this.#f=n}init(){if(this.#p=[...this.#f.points],this.#m=[...this.#f.tripDestinations],this.#_=[...this.#f.offersByType],0!==this.#p.length){for(const t of this.#p)this.#y(t,this.#m,this.#_);t(new A,this.#v.element),t(this.#h,this.#v.element),t(this.#v,this.#d)}else t(new x,this.#d)}#y(n){const i=t=>{t.key.startsWith("Esc")&&(t.preventDefault(),o.call(this),document.removeEventListener("keydown",i))},s=new C({point:n,tripDestinations:this.#m,allOffers:this.#_,onEventRollupClick:()=>{a.call(this),document.addEventListener("keydown",i)}}),r=new M({point:n,tripDestinations:this.#m,allOffers:this.#_,onFormSubmit:()=>{o.call(this),document.removeEventListener("keydown",i)},onRollupClick:()=>{o.call(this),document.addEventListener("keydown",i)}});function a(){e(r,s)}function o(){e(s,r)}t(s,this.#h.element)}}({container:I,pointsModel:V});new class{#d=null;#b=new F;#g=new T;constructor(t){let{container:e}=t;this.#d=e}init(){t(new k,this.#g.element),t(this.#g,this.#b.element),t(new O,this.#b.element),t(this.#b,this.#d)}}({container:U}).init(),j.init()})()})();
//# sourceMappingURL=bundle.ebc9f4872ff848104370.js.map