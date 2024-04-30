# 开发指南

本文档介绍了如何进行本项目的开发，指导你如何为本项目贡献一份自己的力量，请你在要提 **issue** 或者 **pull request** 之前花几分钟阅读这篇指南。

## 本地开发

我们提供了一篇详细的 [theme 项目开发指南](./docs/react/develop.zh-CN.md) 提供阅读，详情请点击链接。

### 相关命令语句

#### 启动

```bash
npm install // 安装项目依赖

npm run dev // 启动项目
```

#### 发版

```bash
npm run release // 版本发布

npm run changelog // 生成changelog

npm run build // 打包项目、静态文件生成目录为当前目录的 dist
```

#### 部署

```bash
npm run deploy // 推送 dist 目录下的静态文件至 gh-pages 分支
```

### 分支管理

本项目有三个如下所示的主要分支：

- **mater** ：主干分支，用于生成环境的发布

- **dev_build** ：研发侧用于打包构建静态文件分支

- **gh-pages** ：研发侧用于演示分支

### 开发流程

#### 功能开发

如需开发功能，请遵循以下流程：

1、请从 **master** 分支中新建 **feat** 分支进行开发，分支命名用下划线加上版本号，如：**feat_1.1.0_xxx**

2、**feat** 分支开发完毕后请向相应负责人提 pr，待相应负责人 review 代码后和入 **master** 分支

3、在开发过程中如需对代码进行部署，先将开发完成的代码和入 **dev_build** 分支，然后执行 **npm run deploy** 命令即可推送最新打包后的代码至 **gh-pages** 分支

4、本次迭代功能全部开发和测试完毕后，基于 **master** 分支进行发版


#### Bugs

我们使用 GitHub issues 来做 bug 追踪。

如若你在使用过程中发现需要修复的问题，可以在本项目中向我们提 **issue**，请描述问题的具体复现方法，同时我们也欢迎你提 pr，请遵循以下流程：

1、请从 **master** 中新建 **fix** 分支进行修复，分支命名用下划线加上版本号，如：**hotfix_1.1.0_xxx**

2、问题修复完毕后，请向相应负责人提 pr, 待相应负责人 review 代码后和入 **master** 分支，我们在后续迭代版本中会进行发版

## 部署相关

如需部署本项目，详情请参考 [Nginx 配置示例](./default.conf)

### 注意事项

- 模板文件路径 `./theme/static/template.html`

- 首页为空白页，需用 **nginx rewrite** 至指定页面

- 目前仅支持中文，如需使用其他语言请自行解决
