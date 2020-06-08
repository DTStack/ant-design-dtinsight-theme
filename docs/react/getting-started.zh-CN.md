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

##### 1、 package.json 中添加依赖

``` json
{
    "dependencies": {
        "ant-design-dtinsight-theme": "1.0.2"
    }
}
```

##### 2、 src/root.tsx 文件中导入 theme/dt-theme 中的 index.less 以及 reset.less

``` javascript
// reset.less中已经引入了antd.less，故在项目中无需再引入antd样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/reset.less';
import 'ant-design-dtinsight-theme/theme/dt-theme/index.less';
```

**特别的** ：数栈子应用中需放弃之前那一套自定义 antd 主题的方式，需修改点如下：

- 去掉 css-loader 中关于 antd theme 的相关配置
- 去掉 babel.config 中 antd 样式的按需引入配置

## 可用样式变量

使用方式：在 scss 文件中导入此项目中的 const.scss 文件

``` scss
@import 'ant-design-dtinsight-theme/theme/dt-theme/const.scss';
```

变量详解(颜色预览可查看颜色规范)：

```scss
// 全局变量
// ==== 基础色 ====
$primaryColor: #3F87FF; // 主色
$hoverColor: #5C99FF; // 按钮 hover
$clickColor: #2672F0; // 按钮 点击
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

// ==== 字体大小  ====
$font12: 12px; // 主字体大小 应用于列表内容、下拉、选择、输入框、弹窗等控件文字
$font14: 14px; // 左侧菜单栏字体、主标题字体、弹窗标题字体大小
$font16: 16px; // 顶部导航字体、部分需要强调标题字体大小
$font20: 20px; // 较少使用，引用与部分大标题

// ==== 图表配色  ====
$color01: #6384F0;
$color02: #339CFF;
$color03: #00C3E5;
$color04: #16DFB4;
$color05: #15D275;
$color06: #86E159;

$color11: #BA68F0;
$color12: #6F75EE;
$color13: #1FB1F1;
$color14: #17C992;
$color15: #FFA93C;
$color16: #FF7F6B;

// 项目中常用
$minWidth: 1260px;
```
