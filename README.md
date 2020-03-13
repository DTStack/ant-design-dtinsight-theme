

<h1 align="center">DT Theme</h1>

<p align="center">
  数栈UI4.0规范样式
</p>

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
