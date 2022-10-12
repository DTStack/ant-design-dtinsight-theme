(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1421:function(n,s){n.exports={content:["article",["p","本站为数栈 UI 5.0 规范样式说明展示文档。"],["p","在本站你可以："],["ul",["li",["p","查看组件预览及其相关代码实现"]],["li",["p","自定义样式使用及预览"]]],["h2","快速上手"],["h5","0、 准备"],["p","本项目使用的是 antd 版本为 ",["code","4.18.9"],"，故在子项目使用前也需升级 antd 至相同版本。"],["p","额外的，依赖的",["code","dt-common"],"包也需改为升级了 antd 的版本。"],["h5","1、 package.json 中添加依赖"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n    <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"ant-design-dtinsight-theme"</span><span class="token operator">:</span> <span class="token string">"2.0.0"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n    "dependencies": {\n        "ant-design-dtinsight-theme": "2.0.0"\n    }\n}']],["h5","2、 src/root.tsx 文件中导入 theme/dt-theme 中样式文件"],["ul",["li",["p","其中基础版引入的方式有两种 "]]],["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">// 第一种方式</span>\n<span class="token comment" spellcheck="true">// reset.less中已经引入了antd.less，故在项目中无需再引入antd样式文件</span>\n<span class="token keyword">import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/reset.less\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/index.less\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 第二种方式</span>\n<span class="token comment" spellcheck="true">// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件</span>\n<span class="token keyword">import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/default/index.less\'</span><span class="token punctuation">;</span>'},["code","// 第一种方式\n// reset.less中已经引入了antd.less，故在项目中无需再引入antd样式文件\nimport 'ant-design-dtinsight-theme/theme/dt-theme/reset.less';\nimport 'ant-design-dtinsight-theme/theme/dt-theme/index.less';\n\n// 第二种方式\n// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件\nimport 'ant-design-dtinsight-theme/theme/dt-theme/default/index.less';"]],["ul",["li",["p","暗黑版样式则引入方式如下"]]],["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件</span>\n<span class="token keyword">import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less\'</span><span class="token punctuation">;</span>'},["code","// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件\nimport 'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less';"]],["p","基础版本两种引入方式只能存在一种，其中暗黑版本还处于自测阶段，敬请期待。"],["ul",["li",["p","若想要实现动态切换默认和暗黑主题样式，则需要将默认主题样式和暗黑版样式都引入。具体切换主题实现请参考文档 ",["a",{title:null,href:"https://github.com/Erindcl/antd-theme-switch-demo/blob/master/doc.md"},"基于 ant-design 的网站主题切换功能的实现"]," 中的方案三。"]]],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/default/index.less\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less\'</span><span class="token punctuation">;</span>'},["code","import 'ant-design-dtinsight-theme/theme/dt-theme/default/index.less';\nimport 'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less';"]],["p",["strong","特别的"]," ：数栈子应用中需放弃之前那一套自定义 antd 主题的方式（否则主题样式会被 antd 原样式覆盖），需修改点如下："],["ul",["li",["p","去掉 css-loader 中关于 antd theme 的相关配置"]],["li",["p","去掉 babel.config 中 antd 样式的按需引入配置"]]],["h2","样式变量"],["p","使用方式：在 scss 文件中导入此项目中的 const.scss 文件"],["pre",{lang:"scss",highlighted:'<span class="token keyword">@import</span> <span class="token string">\'ant-design-dtinsight-theme/theme/dt-theme/const.scss\'</span><span class="token punctuation">;</span>'},["code","@import 'ant-design-dtinsight-theme/theme/dt-theme/const.scss';"]],["p","变量详解( ",["strong","颜色预览可查看颜色规范"]," )："],["pre",{lang:"scss",highlighted:'<span class="token comment" spellcheck="true">// 共有变量</span>\n<span class="token comment" spellcheck="true">// ==== 基础色 ====</span>\n<span class="token property"><span class="token variable">$primaryColor</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1D78FF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 主色</span>\n<span class="token property"><span class="token variable">$hoverColor</span></span><span class="token punctuation">:</span> <span class="token hexcode">#0A67F2</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 按钮 hover</span>\n<span class="token property"><span class="token variable">$clickColor</span></span><span class="token punctuation">:</span> <span class="token hexcode">#005CE6</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 按钮 点击</span>\n<span class="token property"><span class="token variable">$disabledColor</span></span><span class="token punctuation">:</span> <span class="token hexcode">#BBD6FF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Disable, 用于主按钮底色，描边按钮，可操作项的不可用状态填充色</span>\n<span class="token property"><span class="token variable">$bg1Color</span></span><span class="token punctuation">:</span> <span class="token hexcode">#BBD6FF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于小模块切换背景，提示背景</span>\n<span class="token property"><span class="token variable">$bg1Color</span></span><span class="token punctuation">:</span> <span class="token hexcode">#BBD6FF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于小模块切换背景，提示背景</span>\n<span class="token comment" spellcheck="true">// ==== 字体大小  ====</span>\n<span class="token property"><span class="token variable">$font12</span></span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 主字体大小 应用于列表内容、下拉、选择、输入框、弹窗等控件文字</span>\n<span class="token property"><span class="token variable">$font14</span></span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 左侧菜单栏字体、主标题字体、弹窗标题字体大小</span>\n<span class="token property"><span class="token variable">$font16</span></span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 顶部导航字体、部分需要强调标题字体大小</span>\n<span class="token property"><span class="token variable">$font20</span></span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 较少使用，引用与部分大标题</span>\n\n<span class="token comment" spellcheck="true">// 默认主题特有</span>\n<span class="token comment" spellcheck="true">// ==== 基础色 ====</span>\n<span class="token property"><span class="token variable">$deriveColor</span></span><span class="token punctuation">:</span> <span class="token hexcode">#DDEBFF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 衍生色 列表选中底色 部分tab选中底色</span>\n<span class="token comment" spellcheck="true">// ==== DTinsight navy  ====</span>\n<span class="token property"><span class="token variable">$black_title</span></span><span class="token punctuation">:</span> <span class="token hexcode">#3D446E</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 标题 主文字颜色</span>\n<span class="token property"><span class="token variable">$black_Desc</span></span><span class="token punctuation">:</span> <span class="token hexcode">#64698B</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于表单标题备注说明文字颜色</span>\n<span class="token property"><span class="token variable">$black_pageMsg</span></span><span class="token punctuation">:</span> <span class="token hexcode">#8B8FA8</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于分页器提示文字颜色</span>\n<span class="token property"><span class="token variable">$black_msg</span></span><span class="token punctuation">:</span> <span class="token hexcode">#B1B4C5</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于文本框内的提示文字颜色</span>\n<span class="token property"><span class="token variable">$black_border</span></span><span class="token punctuation">:</span> <span class="token hexcode">#D8DAE2</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于表单边框颜色，图表线条颜色</span>\n<span class="token property"><span class="token variable">$black_readonly</span></span><span class="token punctuation">:</span> <span class="token hexcode">#EBECF0</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于分割线、失效按钮状态颜色</span>\n<span class="token property"><span class="token variable">$black_titleBg</span></span><span class="token punctuation">:</span> <span class="token hexcode">#F5F5F8</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于模块标题背景色</span>\n<span class="token property"><span class="token variable">$black_navBg</span></span><span class="token punctuation">:</span> <span class="token hexcode">#F9F9FA</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于二级导航底色</span>\n<span class="token property"><span class="token variable">$white</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FFFFFF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 一级按钮文字颜色</span>\n<span class="token comment" spellcheck="true">// ==== Functional Color 功能色  ====</span>\n<span class="token property"><span class="token variable">$bule</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1D78FF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于运行中状态颜色</span>\n<span class="token property"><span class="token variable">$green</span></span><span class="token punctuation">:</span> <span class="token hexcode">#11D7B2</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于成功状态颜色</span>\n<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> <span class="token hexcode">#F96C5B</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于失败状态、校验错误信息文字、必填项图标颜色</span>\n<span class="token property"><span class="token variable">$yellow</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FBB310</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于下线状态、警告提示颜色</span>\n<span class="token property"><span class="token variable">$purple</span></span><span class="token punctuation">:</span> <span class="token hexcode">#AC9DFF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于取消、冻结状态提示颜色</span>\n<span class="token comment" spellcheck="true">// ==== Other Color 图表/插图配色  ====</span>\n<span class="token comment" spellcheck="true">// Blue</span>\n<span class="token property"><span class="token variable">$bule1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#DDEBFF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$bule2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#5D9EFF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$bule3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1D78FF</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Green</span>\n<span class="token property"><span class="token variable">$green1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#E7FBF7</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$green2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#50E2C6</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$green3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#11D7B2</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Yellow</span>\n<span class="token property"><span class="token variable">$yellow1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FFF4D9</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$yellow2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FFC749</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$yellow3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FBB310</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Red</span>\n<span class="token property"><span class="token variable">$red1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FDE9E7</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$red2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FFA297</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$red3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#F96C5B</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Purple</span>\n<span class="token property"><span class="token variable">$purple1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#EAE6FF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$purple2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#BDB1FF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$purple3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#AC9DFF</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Cyan</span>\n<span class="token property"><span class="token variable">$cyan1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#E7F8FA</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$cyan2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#88E1EB</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$cyan3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#2CCCDF</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Pink</span>\n<span class="token property"><span class="token variable">$pink1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FFE6EF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$pink2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FFB4CE</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$pink3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#FF82AE</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// ==== 多色场景：环形、树形图表  ====</span>\n<span class="token property"><span class="token variable">$other1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#AC9DFF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#888DFF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#6A87FF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other4</span></span><span class="token punctuation">:</span> <span class="token hexcode">#4B81FF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other5</span></span><span class="token punctuation">:</span> <span class="token hexcode">#2D7BFF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other6</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1D78FF</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other7</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1A94E9</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other8</span></span><span class="token punctuation">:</span> <span class="token hexcode">#17A6D9</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other9</span></span><span class="token punctuation">:</span> <span class="token hexcode">#15BACA</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$other10</span></span><span class="token punctuation">:</span> <span class="token hexcode">#11D7B2</span><span class="token punctuation">;</span>\n\n\n\n<span class="token comment" spellcheck="true">// 黑色主题特有</span>\n<span class="token comment" spellcheck="true">// ==== 基础色 ====</span>\n<span class="token property"><span class="token variable">$deriveColor_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#292D42</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 黑色主题：列表选中底色，部分tab选中底色，disable按钮底色</span>\n<span class="token comment" spellcheck="true">// ==== 无色相  ====</span>\n<span class="token property"><span class="token variable">$whiteF2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#F2F2F2</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 最亮的白色，用于大标题、弹窗标题、选中tab文字以及图标等的高亮颜色</span>\n<span class="token property"><span class="token variable">$whiteBF</span></span><span class="token punctuation">:</span> <span class="token hexcode">#BFBFBF</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 最常用主文字颜色，用于列表文字、表单文字、tab未选中等的颜色</span>\n<span class="token property"><span class="token variable">$white8C</span></span><span class="token punctuation">:</span> <span class="token hexcode">#8C8C8C</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 辅助灰色，用于部分图标式按钮的颜色、次要文字颜色</span>\n<span class="token property"><span class="token variable">$white6</span></span><span class="token punctuation">:</span> <span class="token hexcode">#666666</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 次级灰色，主要用于表单里提示文字的颜色等次要信息</span>\n<span class="token property"><span class="token variable">$white4D</span></span><span class="token punctuation">:</span> <span class="token hexcode">#4D4D4D</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 置灰不可点击的控件等颜色</span>\n<span class="token comment" spellcheck="true">// ==== 蓝灰色  ====</span>\n<span class="token property"><span class="token variable">$blue1</span></span><span class="token punctuation">:</span> <span class="token hexcode">#0E0E17</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 较深背景色，用于IDE,左右侧边栏未选中底色，图表底色等</span>\n<span class="token property"><span class="token variable">$blue2</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1A1C29</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 较浅背景色，用于任务列表模块底色，左右侧边栏展开底色、列表底色、表单底色等</span>\n<span class="token property"><span class="token variable">$blue3</span></span><span class="token punctuation">:</span> <span class="token hexcode">#272A40</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 浅色分割线颜色、表单描边颜色、弹窗表头分割线颜色等</span>\n<span class="token property"><span class="token variable">$blue4</span></span><span class="token punctuation">:</span> <span class="token hexcode">#090A0F</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 深色分割线颜色</span>\n<span class="token comment" spellcheck="true">// ==== 辅助色  ====</span>\n<span class="token property"><span class="token variable">$red_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#E25F5D</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于错误提示文字、按钮色，运行失败等指示</span>\n<span class="token property"><span class="token variable">$yellow_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#C28C3A</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于警示提示icon、待运行等状态颜色</span>\n<span class="token property"><span class="token variable">$green_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#00A755</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 用于成功icon，运行/发布成功状态颜色</span>\n<span class="token comment" spellcheck="true">// ==== 图表配色 1  ====</span>\n<span class="token property"><span class="token variable">$color01_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#5F7EE6</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color02_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#3092ED</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color03_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#00B9D9</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color04_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1ABD9A</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color05_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1DB86C</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color06_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#85C963</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// ==== 图表配色 2  ====</span>\n<span class="token property"><span class="token variable">$color11_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#AE61E0</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color12_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#6469D6</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color13_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#1C9FD9</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color14_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#17C992</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color15_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#DE9335</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color16_dark</span></span><span class="token punctuation">:</span> <span class="token hexcode">#E86651</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 项目中常用</span>\n<span class="token property"><span class="token variable">$minWidth</span></span><span class="token punctuation">:</span> <span class="token number">1260</span>px<span class="token punctuation">;</span>'},["code","// 共有变量\n// ==== 基础色 ====\n$primaryColor: #1D78FF; // 主色\n$hoverColor: #0A67F2; // 按钮 hover\n$clickColor: #005CE6; // 按钮 点击\n$disabledColor: #BBD6FF; // Disable, 用于主按钮底色，描边按钮，可操作项的不可用状态填充色\n$bg1Color: #BBD6FF; // 用于小模块切换背景，提示背景\n$bg1Color: #BBD6FF; // 用于小模块切换背景，提示背景\n// ==== 字体大小  ====\n$font12: 12px; // 主字体大小 应用于列表内容、下拉、选择、输入框、弹窗等控件文字\n$font14: 14px; // 左侧菜单栏字体、主标题字体、弹窗标题字体大小\n$font16: 16px; // 顶部导航字体、部分需要强调标题字体大小\n$font20: 20px; // 较少使用，引用与部分大标题\n\n// 默认主题特有\n// ==== 基础色 ====\n$deriveColor: #DDEBFF; // 衍生色 列表选中底色 部分tab选中底色\n// ==== DTinsight navy  ====\n$black_title: #3D446E; // 标题 主文字颜色\n$black_Desc: #64698B; // 用于表单标题备注说明文字颜色\n$black_pageMsg: #8B8FA8; // 用于分页器提示文字颜色\n$black_msg: #B1B4C5; // 用于文本框内的提示文字颜色\n$black_border: #D8DAE2; // 用于表单边框颜色，图表线条颜色\n$black_readonly: #EBECF0; // 用于分割线、失效按钮状态颜色\n$black_titleBg: #F5F5F8; // 用于模块标题背景色\n$black_navBg: #F9F9FA; // 用于二级导航底色\n$white: #FFFFFF; // 一级按钮文字颜色\n// ==== Functional Color 功能色  ====\n$bule: #1D78FF; // 用于运行中状态颜色\n$green: #11D7B2; // 用于成功状态颜色\n$red: #F96C5B; // 用于失败状态、校验错误信息文字、必填项图标颜色\n$yellow: #FBB310; // 用于下线状态、警告提示颜色\n$purple: #AC9DFF; // 用于取消、冻结状态提示颜色\n// ==== Other Color 图表/插图配色  ====\n// Blue\n$bule1: #DDEBFF;\n$bule2: #5D9EFF;\n$bule3: #1D78FF;\n// Green\n$green1: #E7FBF7;\n$green2: #50E2C6;\n$green3: #11D7B2;\n// Yellow\n$yellow1: #FFF4D9;\n$yellow2: #FFC749;\n$yellow3: #FBB310;\n// Red\n$red1: #FDE9E7;\n$red2: #FFA297;\n$red3: #F96C5B;\n// Purple\n$purple1: #EAE6FF;\n$purple2: #BDB1FF;\n$purple3: #AC9DFF;\n// Cyan\n$cyan1: #E7F8FA;\n$cyan2: #88E1EB;\n$cyan3: #2CCCDF;\n// Pink\n$pink1: #FFE6EF;\n$pink2: #FFB4CE;\n$pink3: #FF82AE;\n\n// ==== 多色场景：环形、树形图表  ====\n$other1: #AC9DFF;\n$other2: #888DFF;\n$other3: #6A87FF;\n$other4: #4B81FF;\n$other5: #2D7BFF;\n$other6: #1D78FF;\n$other7: #1A94E9;\n$other8: #17A6D9;\n$other9: #15BACA;\n$other10: #11D7B2;\n\n\n\n// 黑色主题特有\n// ==== 基础色 ====\n$deriveColor_dark: #292D42; // 黑色主题：列表选中底色，部分tab选中底色，disable按钮底色\n// ==== 无色相  ====\n$whiteF2: #F2F2F2; // 最亮的白色，用于大标题、弹窗标题、选中tab文字以及图标等的高亮颜色\n$whiteBF: #BFBFBF; // 最常用主文字颜色，用于列表文字、表单文字、tab未选中等的颜色\n$white8C: #8C8C8C; // 辅助灰色，用于部分图标式按钮的颜色、次要文字颜色\n$white6: #666666; // 次级灰色，主要用于表单里提示文字的颜色等次要信息\n$white4D: #4D4D4D; // 置灰不可点击的控件等颜色\n// ==== 蓝灰色  ====\n$blue1: #0E0E17; // 较深背景色，用于IDE,左右侧边栏未选中底色，图表底色等\n$blue2: #1A1C29; // 较浅背景色，用于任务列表模块底色，左右侧边栏展开底色、列表底色、表单底色等\n$blue3: #272A40; // 浅色分割线颜色、表单描边颜色、弹窗表头分割线颜色等\n$blue4: #090A0F; // 深色分割线颜色\n// ==== 辅助色  ====\n$red_dark: #E25F5D; // 用于错误提示文字、按钮色，运行失败等指示\n$yellow_dark: #C28C3A; // 用于警示提示icon、待运行等状态颜色\n$green_dark: #00A755; // 用于成功icon，运行/发布成功状态颜色\n// ==== 图表配色 1  ====\n$color01_dark: #5F7EE6;\n$color02_dark: #3092ED;\n$color03_dark: #00B9D9;\n$color04_dark: #1ABD9A;\n$color05_dark: #1DB86C;\n$color06_dark: #85C963;\n// ==== 图表配色 2  ====\n$color11_dark: #AE61E0;\n$color12_dark: #6469D6;\n$color13_dark: #1C9FD9;\n$color14_dark: #17C992;\n$color15_dark: #DE9335;\n$color16_dark: #E86651;\n\n// 项目中常用\n$minWidth: 1260px;"]],["h2","贡献"],["p","目前该项目还在初期阶段，如有更好地意见欢迎提 ",["a",{title:null,href:"https://github.com/DTStack/ant-design-dtinsight-theme/issues/new"},"Issue"]," 或 ",["a",{title:null,href:"https://github.com/DTStack/ant-design-dtinsight-theme/pulls"},"Pull Request"]]],meta:{order:1,title:"开发前必读",filename:"docs/react/getting-started.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#快速上手",title:"快速上手"},"快速上手"]],["li",["a",{className:"bisheng-toc-h2",href:"#样式变量",title:"样式变量"},"样式变量"]],["li",["a",{className:"bisheng-toc-h2",href:"#贡献",title:"贡献"},"贡献"]]]}}}]);