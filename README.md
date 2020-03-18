# DT Theme

数栈UI4.0规范样式

## 主要样式文件

- src/stylesheet/dt-theme (样式名覆盖)
- src/theme/dt-theme.js (样式变量覆盖)

## 如何在数栈应用中使用

1、build/loader/css-loader.js 文件中导入dt-theme.js文件

``` javascript
const theme = require('ant-design-dtinsight-theme/src/theme/dt-theme.js')(MY_PATH.BASE_NAME);
```

2、src/root.tsx 文件中导入 src/stylesheet/dt-theme

``` javascript
import 'ant-design-dtinsight-theme/src/stylesheet/dt-theme';
```

## 可用样式变量

使用方式：在scss文件中导入此项目中的const.scss文件

``` scss
@import 'ant-design-dtinsight-theme/src/stylesheet/dt-theme/const.scss';
```

变量详解：

``` css
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
$color1: #6384F0;
$color2: #339CFF;
$color3: #00C3E5;
$color4: #16DFB4;
$color5: #15D275;
$color6: #86E159;
```

## 升级记录

**1.0.0**

- 添加基本样式规范，包括form、table、modal、button、layout等

**1.0.1**

- 添加图表配色相关颜色变量
- 添加const.scss文件，便于项目中引用样式变量
- 修复 顶部导航菜单与侧边菜单栏差1px的样式 问题
