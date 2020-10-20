# ant-design-dtinsight-theme

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

[如何在数栈应用中使用](./docs/react/getting-started.zh-CN.md)

## 本地开发

[theme 项目开发指南](./docs/react/develop.zh-CN.md)

### 项目启动&打包

- `npm install // 安装项目依赖`

- `npm run dev // 启动项目`

- `npm run clean // 清除 dist 目录下的静态文件`

- `npm run release // 版本发布`

- `npm run changelog // 生成changelog`

- `npm run build // 打包项目、静态文件生成目录为当前目录的 dist`

### Nginx 配置

[Nginx 配置示例](./default.conf)

### 注意事项

- 模板文件路径 `./theme/static/template.html`

- 首页为空白页，需用 nginx rewrite 至指定页面

- 目前仅支持中文，如需使用其他语言请自行解决

## 变更记录

[更新日志](./docs/react/change-log.zh-CN.md)
