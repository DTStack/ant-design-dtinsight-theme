---
order: 1
title: 开发前必读
---

本站为数栈 UI 5.0 规范样式说明展示文档。

在本站你可以：

- 查看组件预览及其相关代码实现
- 自定义样式使用及预览

## 快速上手

##### 0、 准备

本项目使用的是 antd 版本为 `4.18.9`，故在子项目使用前也需升级 antd 至相同版本。

额外的，依赖的`dt-common`包也需改为升级了 antd 的版本。

##### 1、 package.json 中添加依赖

``` json
{
    "dependencies": {
        "ant-design-dtinsight-theme": "2.0.0"
    }
}
```

##### 2、 src/root.tsx 文件中导入 theme/dt-theme 中样式文件

``` javascript

// index.less 中已经引入了 antd.less，故在项目中无需再引入 antd 样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/index.less';

```

- 暗黑版样式则引入方式如下

``` javascript

// index.less中已经引入了antd.less，故在项目中无需再引入antd样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less';

```

暗黑版本还处于自测阶段，敬请期待。

- 若想要实现动态切换默认和暗黑主题样式，则需要将默认主题样式和暗黑版样式都引入。具体切换主题实现请参考文档 [基于 ant-design 的网站主题切换功能的实现](https://github.com/Erindcl/antd-theme-switch-demo/blob/master/doc.md) 中的方案三。

``` javascript

import 'ant-design-dtinsight-theme/theme/dt-theme/default/index.less';
import 'ant-design-dtinsight-theme/theme/dt-theme/dark/index.less';

```

**特别的** ：数栈子应用中需放弃之前那一套自定义 antd 主题的方式（否则主题样式会被 antd 原样式覆盖），需修改点如下：

- 去掉 css-loader 中关于 antd theme 的相关配置
- 去掉 babel.config 中 antd 样式的按需引入配置

## 样式变量

使用方式：在 scss 文件中导入此项目中的 const.scss 文件

``` scss
@import 'ant-design-dtinsight-theme/theme/dt-theme/const.scss';
```

变量详解( **颜色预览可查看颜色规范** )：

```scss
// 共有变量
// ==== 基础色 ====
$primaryColor: #1D78FF; // 主色
$hoverColor: #0A67F2; // 按钮 hover
$clickColor: #005CE6; // 按钮 点击
$disabledColor: #BBD6FF; // Disable, 用于主按钮底色，描边按钮，可操作项的不可用状态填充色
$bg1Color: #BBD6FF; // 用于小模块切换背景，提示背景
$bg1Color: #BBD6FF; // 用于小模块切换背景，提示背景
// ==== 字体大小  ====
$font12: 12px; // 主字体大小 应用于列表内容、下拉、选择、输入框、弹窗等控件文字
$font14: 14px; // 左侧菜单栏字体、主标题字体、弹窗标题字体大小
$font16: 16px; // 顶部导航字体、部分需要强调标题字体大小
$font20: 20px; // 较少使用，引用与部分大标题

// 默认主题特有
// ==== 基础色 ====
$deriveColor: #DDEBFF; // 衍生色 列表选中底色 部分tab选中底色
// ==== DTinsight navy  ====
$black_title: #3D446E; // 标题 主文字颜色
$black_Desc: #64698B; // 用于表单标题备注说明文字颜色
$black_pageMsg: #8B8FA8; // 用于分页器提示文字颜色
$black_msg: #B1B4C5; // 用于文本框内的提示文字颜色
$black_border: #D8DAE2; // 用于表单边框颜色，图表线条颜色
$black_readonly: #EBECF0; // 用于分割线、失效按钮状态颜色
$black_titleBg: #F5F5F8; // 用于模块标题背景色
$black_navBg: #F9F9FA; // 用于二级导航底色
$white: #FFFFFF; // 一级按钮文字颜色
// ==== Functional Color 功能色  ====
$blue: #1D78FF; // 用于运行中状态颜色
$green: #11D7B2; // 用于成功状态颜色
$red: #F96C5B; // 用于失败状态、校验错误信息文字、必填项图标颜色
$yellow: #FBB310; // 用于下线状态、警告提示颜色
$purple: #AC9DFF; // 用于取消、冻结状态提示颜色
// ==== Other Color 图表/插图配色  ====
// Blue
$blue1: #DDEBFF;
$blue2: #5D9EFF;
$blue3: #1D78FF;
// Green
$green1: #E7FBF7;
$green2: #50E2C6;
$green3: #11D7B2;
// Yellow
$yellow1: #FFF4D9;
$yellow2: #FFC749;
$yellow3: #FBB310;
// Red
$red1: #FDE9E7;
$red2: #FFA297;
$red3: #F96C5B;
// Purple
$purple1: #EAE6FF;
$purple2: #BDB1FF;
$purple3: #AC9DFF;
// Cyan
$cyan1: #E7F8FA;
$cyan2: #88E1EB;
$cyan3: #2CCCDF;
// Pink
$pink1: #FFE6EF;
$pink2: #FFB4CE;
$pink3: #FF82AE;

// ==== 多色场景：环形、树形图表  ====
$other1: #AC9DFF;
$other2: #888DFF;
$other3: #6A87FF;
$other4: #4B81FF;
$other5: #2D7BFF;
$other6: #1D78FF;
$other7: #1A94E9;
$other8: #17A6D9;
$other9: #15BACA;
$other10: #11D7B2;



// 黑色主题特有
// ==== 基础色 ====
$deriveColor_dark: #292D42; // 黑色主题：列表选中底色，部分tab选中底色，disable按钮底色
// ==== 无色相  ====
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

## 贡献
目前该项目还在初期阶段，如有更好地意见欢迎提 [Issue](https://github.com/DTStack/ant-design-dtinsight-theme/issues/new) 或 [Pull Request](https://github.com/DTStack/ant-design-dtinsight-theme/pulls)
