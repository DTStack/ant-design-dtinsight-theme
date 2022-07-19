(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1326:function(n,a,s){n.exports={content:{"zh-CN":[["p","基础列表。"]],"en-US":[["p","Basic list."]]},meta:{order:1,title:{"zh-CN":"基础列表","en-US":"Basic list"},filename:"components/list/demo/basic.md",id:"components-list-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Ant Design Title 1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Ant Design Title 2\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Ant Design Title 3\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Ant Design Title 4\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n    <span class="token attr-name">itemLayout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n    <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Meta</span>\n          <span class="token attr-name">avatar={&lt;Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title={&lt;a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://ant.design<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          description<span class="token operator">=</span><span class="token string">"Ant Design, a design language for background applications, is refined by Ant UED Team"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Ant Design Title 1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Ant Design Title 2\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Ant Design Title 3\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Ant Design Title 4\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n    <span class="token attr-name">itemLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n    <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item.Meta</span></span>\n          <span class="token attr-name">avatar</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://ant.design<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Ant Design, a design language for background applications, is refined by Ant UED Team<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0),a=(s(39),s(130));return n.createElement(a.List,{itemLayout:"horizontal",dataSource:[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],renderItem:function(s){return n.createElement(a.List.Item,null,n.createElement(a.List.Item.Meta,{avatar:n.createElement(a.Avatar,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:n.createElement("a",{href:"https://ant.design"},s.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}})}}},1327:function(n,a,s){n.exports={content:{"zh-CN":[["p","列表拥有大、中、小三种尺寸。"],["p","通过设置 ",["code","size"]," 为 ",["code","large"]," ",["code","small"]," 分别把按钮设为大、小尺寸。若不设置 ",["code","size"],"，则尺寸为中。"],["p","可通过设置 ",["code","header"]," 和 ",["code","footer"],"，来自定义列表头部和尾部。"]],"en-US":[["p","Ant Design supports a default list size as well as a large and small size."],["p","If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size."],["p","Customizing the header and footer of list by setting ",["code","header"]," and ",["code","footer"]," property."]]},meta:{order:0,title:{"zh-CN":"简单列表","en-US":"Simple list"},filename:"components/list/demo/simple.md",id:"components-list-demo-simple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Typography<span class="token punctuation">,</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'Racing car sprays burning fuel into crowd.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Japanese princess to wed commoner.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Australian walks 100km after outback crash.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Man charged over missing wedding girl.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default Size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n      <span class="token attr-name">header={&lt;div</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      footer<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      bordered\n      dataSource<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span>\n      renderItem<span class="token operator">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Typography.Text</span> <span class="token attr-name">mark</span><span class="token punctuation">></span></span><span class="token punctuation">[</span>ITEM<span class="token punctuation">]</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Typography.Text</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>item<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small Size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n      <span class="token attr-name">header={&lt;div</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      footer<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      bordered\n      dataSource<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span>\n      renderItem<span class="token operator">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large Size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n      <span class="token attr-name">header={&lt;div</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      footer<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      bordered\n      dataSource<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span>\n      renderItem<span class="token operator">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Typography<span class="token punctuation">,</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'Racing car sprays burning fuel into crowd.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Japanese princess to wed commoner.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Australian walks 100km after outback crash.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Man charged over missing wedding girl.\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Los Angeles battles huge wildfires.\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default Size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Divider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n      <span class="token attr-name">header</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">bordered</span>\n      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n      <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Typography.Text</span></span> <span class="token attr-name">mark</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token constant">ITEM</span><span class="token punctuation">]</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Typography.Text</span></span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>item<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small Size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Divider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n      <span class="token attr-name">header</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">bordered</span>\n      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n      <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large Size<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Divider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n      <span class="token attr-name">header</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">bordered</span>\n      <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n      <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0),a=(s(39),s(130)),t=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];return n.createElement(n.Fragment,null,n.createElement(a.Divider,{orientation:"left"},"Default Size"),n.createElement(a.List,{header:n.createElement("div",null,"Header"),footer:n.createElement("div",null,"Footer"),bordered:!0,dataSource:t,renderItem:function(s){return n.createElement(a.List.Item,null,n.createElement(a.Typography.Text,{mark:!0},"[ITEM]")," ",s)}}),n.createElement(a.Divider,{orientation:"left"},"Small Size"),n.createElement(a.List,{size:"small",header:n.createElement("div",null,"Header"),footer:n.createElement("div",null,"Footer"),bordered:!0,dataSource:t,renderItem:function(s){return n.createElement(a.List.Item,null,s)}}),n.createElement(a.Divider,{orientation:"left"},"Large Size"),n.createElement(a.List,{size:"large",header:n.createElement("div",null,"Header"),footer:n.createElement("div",null,"Footer"),bordered:!0,dataSource:t,renderItem:function(s){return n.createElement(a.List.Item,null,s)}}))}}}}]);