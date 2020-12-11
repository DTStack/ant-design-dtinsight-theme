---
order: 0
title: 开发前必读
---

本站为数栈 UI4.0 规范样式说明展示文档。

在本站你可以：

- 查看组件预览及其相关代码实现
- 自定义样式使用及预览

## 如何在数栈应用中使用

##### 0、 准备

本项目使用的是 antd 版本为 `3.26.13`，故在子项目使用前也需升级 antd 至相同版本。

- 子应用升级指南： https://dtstack.yuque.com/clg3qc/egh9u1/vszq5d

额外的，依赖的`dt-common`包也需改为升级了 antd 的版本。

> 目前 `未升级dt-common` 、`升级后dt-common` 以及 `ant-design-dtinsight-theme` 版本对应如下：
>  - 3.10.14 (未升级 dt-common) -> 4.1.0 (升级后 dt-common) -> 1.0.9 (ant-design-dtinsight-theme) (当前最新版本)
>  - 3.12.1-temp (未升级 dt-common) -> 4.2.1-temp (升级后 dt-common) -> 1.0.9 (ant-design-dtinsight-theme)

##### 1、 package.json 中添加依赖

``` json
{
    "dependencies": {
        "ant-design-dtinsight-theme": "1.0.9"
    }
}
```

##### 2、 src/root.tsx 文件中导入 theme/dt-theme 中样式文件

- 其中基础版引入的方式有两种 

``` javascript

// 第一种方式
// reset.less中已经引入了antd.less，故在项目中无需再引入antd样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/reset.less';
import 'ant-design-dtinsight-theme/theme/dt-theme/index.less';

// 第二种方式
// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/default/index.less';

```

- 暗黑版样式则引入方式如下

``` javascript

// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less';

```

基础版本两种引入方式只能存在一种，其中暗黑版本还处于自测阶段，敬请期待。

- 若想要实现动态切换默认和暗黑主题样式，则需要将默认主题样式和暗黑版样式都引入。具体切换主题实现请参考文档 [基于 ant-design 的网站主题切换功能的实现](https://github.com/Erindcl/antd-theme-switch-demo/blob/master/doc.md) 中的方案三。

``` javascript

import 'ant-design-dtinsight-theme/theme/dt-theme/default/index.less';
import 'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less';

```

**特别的** ：数栈子应用中需放弃之前那一套自定义 antd 主题的方式（否则主题样式会被 antd 原样式覆盖），需修改点如下：

- 去掉 css-loader 中关于 antd theme 的相关配置
- 去掉 babel.config 中 antd 样式的按需引入配置

## 可用样式变量

使用方式：在 scss 文件中导入此项目中的 const.scss 文件

``` scss
@import 'ant-design-dtinsight-theme/theme/dt-theme/const.scss';
```

变量详解( **颜色预览可查看颜色规范** )：

```scss
// 共有变量
// ==== 基础色 ====
$primaryColor: #3F87FF; // 主色
$hoverColor: #5C99FF; // 按钮 hover
$clickColor: #2672F0; // 按钮 点击
// ==== 字体大小  ====
$font12: 12px; // 主字体大小 应用于列表内容、下拉、选择、输入框、弹窗等控件文字
$font14: 14px; // 左侧菜单栏字体、主标题字体、弹窗标题字体大小
$font16: 16px; // 顶部导航字体、部分需要强调标题字体大小
$font20: 20px; // 较少使用，引用与部分大标题

// 默认主题特有
// ==== 基础色 ====
$deriveColor: #F2F9FF; // 衍生色 列表选中底色 部分tab选中底色
// ==== 无相色  ====
$black3: #333333; // 标题 主文字颜色
$black6: #666666; // 次要信息 tab未选中颜色
$black9: #999999; // 默认状态输入框内提示信息 按钮内icon颜色
$blackBF: #BFBFBF; // disable 字体颜色
$blackDD: #DDDDDD; // border颜色
$blackE8: #E8E8E8; // 列表里分割线颜色 disable按钮底色
$blackFA: #FAFAFA; // 灰色底色
// ==== 辅助色  ====
$red: #FF5F5C; // 错误提示文字、按钮色 运行失败提示色 必填项*颜色
$yellow: #FFB310; // 警示提示icon 待运行等状态颜色
$green: #16DE9A; // 成功icon 运行/发布成功状态颜色
// ==== 图表配色 1  ====
$color01: #6384F0;
$color02: #339CFF;
$color03: #00C3E5;
$color04: #16DFB4;
$color05: #15D275;
$color06: #86E159;
// ==== 图表配色 2  ====
$color11: #BA68F0;
$color12: #6F75EE;
$color13: #1FB1F1;
$color14: #17C992;
$color15: #FFA93C;
$color16: #FF7F6B;

// 黑色主题特有
// ==== 基础色 ====
$deriveColor_dark: #292D42; // 黑色主题：列表选中底色，部分tab选中底色，disable按钮底色
// ==== 无相色  ====
$whiteF2: #F2F2F2; // 最亮的白色，用于大标题、弹窗标题、选中tab文字以及图标等的高亮颜色
$whiteBF: #BFBFBF; // 最常用主文字颜色，用于列表文字、表单文字、tab未选中等的颜色
$white8C: #8C8C8C; // 辅助灰色，用于部分图标式按钮的颜色、次要文字颜色
$white6: #666666; // 次级灰色，主要用于表单里提示文字的颜色等次要信息
$white4D: #4D4D4D; // 置灰不可点击的控件等颜色
// ==== 蓝灰色  ====
$blue1: #0E0E17; // 较深背景色，用于IDE,左右侧边栏未选中底色，图表底色等
$blue2: #1A1C29; // 较浅背景色，用于任务列表模块底色，左右侧边栏展开底色、列表底色、表单底色等
$blue3: #272A40; // 浅色分割线颜色、表单描边颜色、弹窗表头分割线颜色等
$blue4: #090A0F; // 深色分割线颜色
// ==== 辅助色  ====
$red_dark: #E25F5D; // 用于错误提示文字、按钮色，运行失败等指示
$yellow_dark: #C28C3A; // 用于警示提示icon、待运行等状态颜色
$green_dark: #00A755; // 用于成功icon，运行/发布成功状态颜色
// ==== 图表配色 1  ====
$color01_dark: #5F7EE6;
$color02_dark: #3092ED;
$color03_dark: #00B9D9;
$color04_dark: #1ABD9A;
$color05_dark: #1DB86C;
$color06_dark: #85C963;
// ==== 图表配色 2  ====
$color11_dark: #AE61E0;
$color12_dark: #6469D6;
$color13_dark: #1C9FD9;
$color14_dark: #17C992;
$color15_dark: #DE9335;
$color16_dark: #E86651;

// 项目中常用
$minWidth: 1260px;
```
