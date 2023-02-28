(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1675:function(n,s,a){n.exports={content:{"zh-CN":[["p","基本用法"]],"en-US":[["h2","zh-CN"],["p","基本用法"]]},meta:{order:0,title:{"zh-CN":"基本使用"},filename:"components/transfer/demo/basic.md",id:"components-transfer-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Transfer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mockData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    length<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`content</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`description of content</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    disabled<span class="token punctuation">:</span> i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> initialTargetKeys <span class="token operator">=</span> mockData<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>targetKeys<span class="token punctuation">,</span> setTargetKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialTargetKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'0\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>nextTargetKeys<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> moveKeys<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'targetKeys:\'</span><span class="token punctuation">,</span> nextTargetKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'direction:\'</span><span class="token punctuation">,</span> direction<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'moveKeys:\'</span><span class="token punctuation">,</span> moveKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTargetKeys</span><span class="token punctuation">(</span>nextTargetKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">const</span> onSelectChange <span class="token operator">=</span> <span class="token punctuation">(</span>sourceSelectedKeys<span class="token punctuation">,</span> targetSelectedKeys<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'sourceSelectedKeys:\'</span><span class="token punctuation">,</span> sourceSelectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'targetSelectedKeys:\'</span><span class="token punctuation">,</span> targetSelectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>sourceSelectedKeys<span class="token punctuation">,</span> <span class="token operator">...</span>targetSelectedKeys<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> pagination <span class="token operator">=</span> <span class="token punctuation">{</span>\n        current<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        pageSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n        size<span class="token punctuation">:</span> <span class="token string">\'small\'</span><span class="token punctuation">,</span>\n        total<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n        showTotal<span class="token punctuation">:</span> <span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n        共<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#3F87FF\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>条数据，每页显示<span class="token number">15</span>条\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    \n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>\n            <span class="token attr-name">showSearch</span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>dt-transfer-without-header-count<span class="token punctuation">\'</span></span>\n            <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>mockData<span class="token punctuation">}</span></span>\n            <span class="token attr-name">titles</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Source\'</span><span class="token punctuation">,</span> <span class="token string">\'Target\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">targetKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>targetKeys<span class="token punctuation">}</span></span>\n            <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onSelectChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelectChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n    mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Transfer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mockData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">content</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">description of content</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token literal-property property">disabled</span><span class="token operator">:</span> i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> initialTargetKeys <span class="token operator">=</span> mockData<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>targetKeys<span class="token punctuation">,</span> setTargetKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialTargetKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'0\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nextTargetKeys<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> moveKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'targetKeys:\'</span><span class="token punctuation">,</span> nextTargetKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'direction:\'</span><span class="token punctuation">,</span> direction<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'moveKeys:\'</span><span class="token punctuation">,</span> moveKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTargetKeys</span><span class="token punctuation">(</span>nextTargetKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">const</span> <span class="token function-variable function">onSelectChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sourceSelectedKeys<span class="token punctuation">,</span> targetSelectedKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'sourceSelectedKeys:\'</span><span class="token punctuation">,</span> sourceSelectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'targetSelectedKeys:\'</span><span class="token punctuation">,</span> targetSelectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>sourceSelectedKeys<span class="token punctuation">,</span> <span class="token operator">...</span>targetSelectedKeys<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> pagination <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">\'small\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">showTotal</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">total</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n        共<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">\'#3F87FF\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>条数据，每页显示<span class="token number">15</span>条\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    \n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span>\n            <span class="token attr-name">showSearch</span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>dt-transfer-without-header-count<span class="token punctuation">\'</span></span>\n            <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>mockData<span class="token punctuation">}</span></span>\n            <span class="token attr-name">titles</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Source\'</span><span class="token punctuation">,</span> <span class="token string">\'Target\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">targetKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>targetKeys<span class="token punctuation">}</span></span>\n            <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onSelectChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelectChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n    mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(29),a(161)),t=a(0);function p(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,s){return function(n){if(Array.isArray(n))return n}(n)||function(n,s){var a=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==a)return;var t,p,o=[],e=!0,c=!1;try{for(a=a.call(n);!(e=(t=a.next()).done)&&(o.push(t.value),!s||o.length!==s);e=!0);}catch(n){c=!0,p=n}finally{try{e||null==a.return||a.return()}finally{if(c)throw p}}return o}(n,s)||e(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,s){if(n){if("string"==typeof n)return c(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);return"Object"===a&&n.constructor&&(a=n.constructor.name),"Map"===a||"Set"===a?Array.from(n):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(n,s):void 0}}function c(n,s){(null==s||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}var u=Array.from({length:20}).map((function(n,s){return{key:s.toString(),title:"content".concat(s+1),description:"description of content".concat(s+1),disabled:s%3<1}})),l=u.filter((function(n){return Number(n.key)>10})).map((function(n){return n.key})),i=function(){var a=o((0,t.useState)(l),2),e=a[0],c=a[1],i=o((0,t.useState)(["0"]),2),k=i[0],r=i[1];return n.createElement(s.Transfer,{showSearch:!0,className:"dt-transfer-without-header-count",dataSource:u,titles:["Source","Target"],targetKeys:e,selectedKeys:k,onChange:function(n,s,a){console.log("targetKeys:",n),console.log("direction:",s),console.log("moveKeys:",a),c(n)},onSelectChange:function(n,s){console.log("sourceSelectedKeys:",n),console.log("targetSelectedKeys:",s),r([].concat(p(n),p(s)))},render:function(n){return n.title}})};return n.createElement(i,null)}}}}]);