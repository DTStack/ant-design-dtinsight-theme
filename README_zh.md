# ant-design-dtinsight-theme

[英文](./README.md) | 中文

## 文档
- [v2.x](https://dtstack.github.io/ant-design-dtinsight-theme/docs/react/introduce-cn)
- [v1.x](https://liuxy0551.github.io/ant-design-dtinsight-theme/docs/react/getting-started-cn)

本项目 v2.x 基于 antd 4.x 实现数栈 UI5.0 规范样式的编写，基于 bisheng 框架实现组件样式预览。

在本项目你可以：

- 查看组件预览及其相关代码实现
- 自定义样式使用及预览

## 安装

```javascript
npm install ant-design-dtinsight-theme --save

或

yarn add ant-design-dtinsight-theme
```

## 替换 antd 图标

将 iconfont 上设计提供的 svg 文件下载放到 `custom-icons/iconfont-svgs` 文件夹下，antd 图标名与 className 的对应关系配置在 `fileNameToClassName.js`，`/icon/basic.md` 下的 fileNameToClassName 常量应与 `fileNameToClassName.js` 文件保持一致，用于文档中展示数栈定制的 icon；部分特殊的图标需要特殊处理，是由于 Dom 结构的不同，具体可查看 `custom-icons/generate` 文件夹下的 `formSpecial.js`、 `rate.js`、`special.js` 文件。

执行 `yarn generate` 命令可生成 `theme/dt-theme/default/custom-icons.less` 文件。

## 贡献

目前该项目还在初期阶段，如有更好地意见欢迎提 [Issue](https://github.com/DTStack/ant-design-dtinsight-theme/issues/new) 或 [Pull Request](https://github.com/DTStack/ant-design-dtinsight-theme/pulls)
