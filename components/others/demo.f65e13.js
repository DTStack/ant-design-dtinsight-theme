(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1291:function(n,s,a){n.exports={content:{"zh-CN":[["p",["code","dt-scrollbar-base"]," 用于美化滚动条样式，一般用于 Windows 系统中"],["p","若果你想要美化应用中所有的滚动条样式，可以直接在 body 或者 根节点 添加此样式"]],"en-US":[["h2","zh-CN"],["p",["code","dt-scrollbar-base"]," 用于美化滚动条样式，一般用于 Windows 系统中"],["p","若果你想要美化应用中所有的滚动条样式，可以直接在 body 或者 根节点 添加此样式"]]},meta:{order:0,title:{"zh-CN":"自定义滚动条样式"},filename:"components/others/demo/basic.md",id:"components-others-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    setScrollbar<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n\n  handleSwitchChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> setScrollbar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token string">\'Racing car sprays burning fuel into crowd.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Japanese princess to wed commoner.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Australian walks 100km after outback crash.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Man charged over missing wedding girl.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setScrollbar<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSwitchChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">\'setScrollbar\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0px 8px 8px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>设置dt<span class="token operator">-</span>table<span class="token operator">-</span>scrollbar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">\'auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setScrollbar <span class="token operator">?</span> <span class="token string">\'dt-scrollbar-base\'</span> <span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n            <span class="token attr-name">bordered</span>\n            <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n            <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    setScrollbar<span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleSwitchChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> setScrollbar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token string">\'Racing car sprays burning fuel into crowd.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Japanese princess to wed commoner.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Australian walks 100km after outback crash.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Man charged over missing wedding girl.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setScrollbar<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSwitchChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">\'setScrollbar\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">\'0px 8px 8px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>设置dt<span class="token operator">-</span>table<span class="token operator">-</span>scrollbar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">\'auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setScrollbar <span class="token operator">?</span> <span class="token string">\'dt-scrollbar-base\'</span> <span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n            <span class="token attr-name">bordered</span>\n            <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n            <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(9),a(113));function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function o(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(n,s){return(e=Object.setPrototypeOf||function(n,s){return n.__proto__=s,n})(n,s)}function c(n,s){return!s||"object"!==t(s)&&"function"!=typeof s?l(n):s}function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function k(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}var r=function(a){!function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),s&&e(n,s)}(h,a);var t,r,g,d,m=(t=h,function(){var n,s=i(t);if(u()){var a=i(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return c(this,n)});function h(){var n;p(this,h);for(var s=arguments.length,a=new Array(s),t=0;t<s;t++)a[t]=arguments[t];return k(l(n=m.call.apply(m,[this].concat(a))),"state",{setScrollbar:!1}),k(l(n),"handleSwitchChange",(function(s){n.setState(k({},s,!n.state[s]))})),n}return r=h,(g=[{key:"render",value:function(){var a=this.state.setScrollbar;return n.createElement("div",null,n.createElement("div",{style:{marginBottom:20}},n.createElement(s.Switch,{checked:a,onChange:this.handleSwitchChange.bind(this,"setScrollbar")}),n.createElement("span",{style:{margin:"0px 8px 8px"}},"设置dt-table-scrollbar")),n.createElement("div",{style:{height:200,overflow:"auto"},className:a?"dt-scrollbar-base":""},n.createElement(s.List,{bordered:!0,dataSource:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires.","Los Angeles battles huge wildfires.","Los Angeles battles huge wildfires."],renderItem:function(a){return n.createElement(s.List.Item,null,a)}})))}}])&&o(r.prototype,g),d&&o(r,d),h}(n.Component);return n.createElement(r,null)}}}}]);