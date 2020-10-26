# 开发指南

本文档介绍了如何进行本项目的开发。

## 本地开发

[theme 项目开发指南](./docs/react/develop.zh-CN.md)

### 项目启动&打包

```bash
npm install // 安装项目依赖

npm run dev // 启动项目

npm run clean // 清除 dist 目录下的静态文件

npm run release // 版本发布

npm run changelog // 生成changelog

npm run build // 打包项目、静态文件生成目录为当前目录的 dist
```

## 部署

[Nginx 配置示例](./default.conf)

## 注意事项

- 模板文件路径 `./theme/static/template.html`

- 首页为空白页，需用 nginx rewrite 至指定页面

- 目前仅支持中文，如需使用其他语言请自行解决
