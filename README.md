# DT Theme

本项目为数栈 UI4.0 规范样式

项目预览地址：http://172.16.100.225:8989/docs/react/getting-started-cn (内网访问)

## 目录结构
<br/>

```bash

├── .
├── .gitignore         // git 忽略
├── README.md          // 文档说明
├── bisheng.config.js  // 全局配置文件
├── components         // 组件功能
├── dist               // 打包后静态文件输出目录
├── docs               // markdown 文件
├── default.conf       // docker nignx 配置文件
├── package.json       // 项目依赖
└── theme              // 基于 Ant Desgin 的主题（子目录中的dt-theme为UI4.0定制样式）

```
<br/>

## 项目启动&打包
<br/>


- `npm install // 安装项目依赖`

- `npm run dev // 启动项目`

- `npm run clean // 清除 dist 目录下的静态文件`

- `npm run release // 版本发布`

- `npm run changelog // 生成changelog`

- `npm run build // 打包项目、静态文件生成目录为当前目录的 dist`

<br/>

## Nginx 配置
<br/>

```bash

server {
  listen       8989;
  underscores_in_headers on;
  charset utf-8;
  gzip on;
  gzip_comp_level 9;
  gzip_min_length 1k;
  gzip_types text/plain text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json application/javascript;
  gzip_vary on;
  gzip_http_version 1.1;
  gzip_disable "MSIE [1-6]\.(?!.*SV1)";
  proxy_set_header Host $host;
  proxy_set_header RealIP $remote_addr;
  proxy_set_header REMOTE-HOST $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

  proxy_read_timeout 300;

  location / {
    try_files $uri /index.html;
    location ~ .*\.(ico|js|css|gif|jpg|jpeg|png|bmp|swf)$ {}
    root /home/app/ant-design-dtinsight-theme/dist;
    rewrite ^/$ /docs/react/getting-started.html redirect;
  }
  error_page  500 502 503 504 404 http://172.16.100.225:8989/docs/react/getting-started.html;

}

```
<br/>

## 注意事项
<br/>

- 模板文件路径 `./theme/static/template.html`

- 首页为空白页，需用 nginx rewrite 至指定页面

- 目前仅支持中文，如需使用其他语言请自行解决
