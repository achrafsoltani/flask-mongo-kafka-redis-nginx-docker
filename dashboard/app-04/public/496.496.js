(self.webpackChunkcomprehensive_demo_react18_app_04=self.webpackChunkcomprehensive_demo_react18_app_04||[]).push([["496"],{558:function(t,e,n){"use strict";let r,o;function i(){}function u(t){return t()}function l(){return Object.create(null)}function a(t){t.forEach(u)}function s(t){return"function"==typeof t}function f(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}n.r(e),n.d(e,{SvelteComponent:function(){return H},append:function(){return p},attr:function(){return b},detach:function(){return _},element:function(){return g},init:function(){return S},insert:function(){return $},noop:function(){return i},safe_not_equal:function(){return f},set_data:function(){return v},text:function(){return m}});let d="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;class h{constructor(t){this.options=t,this._listeners="WeakMap"in d?new WeakMap:void 0}observe(t,e){return this._listeners.set(t,e),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){var t;return null!==(t=this._observer)&&void 0!==t?t:this._observer=new ResizeObserver(t=>{var e;for(let n of t)h.entries.set(n.target,n),null===(e=this._listeners.get(n.target))||void 0===e||e(n)})}}h.entries="WeakMap"in d?new WeakMap:void 0;function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t){r=t}let k=[],x=[],w=[],E=[],M=Promise.resolve(),O=!1;function C(t){w.push(t)}let T=new Set,A=0;function N(){if(0!==A)return;let t=r;do{var e;try{for(;A<k.length;){let t=k[A];A++,r=t,function(t){if(null!==t.fragment){t.update(),a(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}(t.$$)}}catch(t){throw k.length=0,A=0,t}for(e=null,r=null,k.length=0,A=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){let e=w[t];!T.has(e)&&(T.add(e),e())}w.length=0}while(k.length);for(;E.length;)E.pop()();O=!1,T.clear(),r=t}let W=new Set;function j(t,e){let n=t.$$;null!==n.fragment&&(!function(t){let e=[],n=[];w.forEach(r=>-1===t.indexOf(r)?e.push(r):n.push(r)),n.forEach(t=>t()),w=e}(n.after_update),a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e,n,o,f,c,d,h=[-1]){let p=r;r=t;let $=t.$$={fragment:null,ctx:[],props:c,update:i,not_equal:f,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:l(),dirty:h,skip_bound:!1,root:e.target||p.$$.root};d&&d($.root);let g=!1;if($.ctx=n?n(t,e.props||{},(e,n,...r)=>{let o=r.length?r[0]:n;if($.ctx&&f($.ctx[e],$.ctx[e]=o)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](o),g)){var i,u;i=t,u=e,-1===i.$$.dirty[0]&&(k.push(i),O||(O=!0,M.then(N)),i.$$.dirty.fill(0)),i.$$.dirty[u/31|0]|=1<<u%31}return n}):[],$.update(),g=!0,a($.before_update),$.fragment=!!o&&o($.ctx),e.target){if(e.hydrate){let t=Array.from(e.target.childNodes);$.fragment&&$.fragment.l(t),t.forEach(_)}else $.fragment&&$.fragment.c();if(e.intro){var m,b;(m=t.$$.fragment)&&m.i&&(W.delete(m),m.i(void 0))}!function(t,e,n,r){let{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),!r&&C(()=>{let e=t.$$.on_mount.map(u).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[]}),i.forEach(C)}(t,e.target,e.anchor,e.customElement);N()}r=p}"function"==typeof HTMLElement&&HTMLElement;class H{$destroy(){j(this,1),this.$destroy=i}$on(t,e){if(!s(e))return i;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}}}]);