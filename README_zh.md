# ant-design-dtinsight-theme

[英文](./README.md) | 中文

## 文档
- [v1.x](https://liuxy0551.github.io/ant-design-dtinsight-theme/docs/react/getting-started-cn)
- [v2.x-beta](https://dtstack.github.io/ant-design-dtinsight-theme/docs/react/introduce-cn)

本项目基于 antd 3.x 实现数栈 UI4.0 规范样式的编写，基于 bisheng 框架实现组件样式预览。

在本项目你可以：

- 查看组件预览及其相关代码实现
- 自定义样式使用及预览

## 安装

```javascript
npm install ant-design-dtinsight-theme --save

或

yarn add ant-design-dtinsight-theme
```

## 使用

[如何在数栈应用中使用](https://github.com/DTStack/ant-design-dtinsight-theme/blob/master/docs/react/introduce-cn.zh-CN.md)

## 替换 antd 图标

将 iconfont 上设计提供的 svg 文件下载放到 `custom-icons/iconfont-svgs`，然后执行 `yarn generate` 命令，生成 `theme/dt-theme/default/custom-icons.less` 文件，antd 图标名与 className 的对应关系配置在 `fileNameToClassName.js`，`basic.md` 下的 fileNameToClassName 常量应与 `fileNameToClassName.js` 文件保持一致；部分特殊的图标需要特殊处理，因为 Dom 结构不同，查看 `getCssContent` 方法。

## 变更记录

[更新日志](https://github.com/DTStack/ant-design-dtinsight-theme/blob/master/docs/react/change-log.zh-CN.md)

## 贡献

目前该项目还在初期阶段，如有更好地意见欢迎提 [Issue](https://github.com/DTStack/ant-design-dtinsight-theme/issues/new) 或 [Pull Request](https://github.com/DTStack/ant-design-dtinsight-theme/pulls)
