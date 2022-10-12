(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1506:function(n,a,s){n.exports={content:{"zh-CN":[["p","基本使用。"]],"en-US":[["p","Basic usage example."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic usage"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">NormalCheckBox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    onChange <span class="token operator">=</span> <span class="token punctuation">(</span>checkedValues<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checked = \'</span><span class="token punctuation">,</span> checkedValues<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'Apple\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'Apple\'</span><span class="token punctuation">,</span>\n            disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'Pear\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'Pear\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'Orange\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'Orange\'</span><span class="token punctuation">,</span>\n            disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox.Group</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Pear\'</span><span class="token punctuation">,</span> <span class="token string">\'Orange\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NormalCheckBox</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">NormalCheckBox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedValues</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checked = \'</span><span class="token punctuation">,</span> checkedValues<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Apple\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'Apple\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Pear\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'Pear\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Orange\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'Orange\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox.Group</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Pear\'</span><span class="token punctuation">,</span> <span class="token string">\'Orange\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NormalCheckBox</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0);s(29);function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var t=s(151);function p(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(n,a){return(e=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function c(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=r(n);if(a){var p=r(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return u(this,s)}}function u(n,s){if(s&&("object"===a(s)||"function"==typeof s))return s;if(void 0!==s)throw new TypeError("Derived constructors may only return object or undefined");return l(n)}function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function i(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var k=function(a){!function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&e(n,a)}(f,a);var s,u,r,k=c(f);function f(){var n;p(this,f);for(var a=arguments.length,s=new Array(a),t=0;t<a;t++)s[t]=arguments[t];return i(l(n=k.call.apply(k,[this].concat(s))),"onChange",(function(n){console.log("checked = ",n)})),n}return s=f,(u=[{key:"render",value:function(){return n.createElement(t.Checkbox.Group,{options:[{label:"Apple",value:"Apple",disabled:!0},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],defaultValue:["Pear","Orange"],onChange:this.onChange})}}])&&o(s.prototype,u),r&&o(s,r),Object.defineProperty(s,"prototype",{writable:!1}),f}(n.Component);return n.createElement(k,null)}}}}]);