---
order: 2
title: theme 项目开发指南
---

> 前言： 在后续子应用 UI 改造过程中，可能需要添加新的样式规范，可参照以下进行开发。

项目目录介绍：

```bash

ant-design-dtinsight-theme
│
├── components    // Components 展示内容
│   └── treeselect    // 单个组件 预览文件
│       ├── demo    // 代码演示
│       │   ├── basic.md    // 单个 demo 文件
│       │   └── shadow.md
│       └── index.zh-CN.md    // 组件说明文档
├── docs
│   └── react   // 全局说明文档
│       ├── change-log.zh-CN.md
│       ├── color.zh-CN.md
│       ├── develop.zh-CN.md
│       ├── font.zh-CN.md
│       └── getting-started.zh-CN.md
├── theme   // 本站主题文档
│   ├── dt-theme    // 数栈UI规范样式文件
│   │   ├── dark    // 暗黑版规范样式文件
│   │   │   ├── alert.less
│   │   │   ├── button.less
│   │   │   ├── card.less
│   │   │   ├── collapse.less
│   │   │   ├── comm.less
│   │   │   ├── descriptions.less
│   │   │   ├── drawer.less
│   │   │   ├── form.less
│   │   │   ├── index.less
│   │   │   ├── layout.less
│   │   │   ├── list.less
│   │   │   ├── message.less
│   │   │   ├── modal.less
│   │   │   ├── notification.less
│   │   │   ├── popover.less
│   │   │   ├── resetDark.less    // 覆盖antd变量文件
│   │   │   ├── steps.less
│   │   │   ├── tab.less
│   │   │   ├── table.less
│   │   │   ├── tree.less
│   │   │   └── upload.less
│   │   ├── default    // 基础版规范样式文件
│   │   │   ├── breadcrumb.less
│   │   │   ├── button.less
│   │   │   ├── card.less
│   │   │   ├── comm.less
│   │   │   ├── form.less
│   │   │   ├── index.less
│   │   │   ├── layout.less
│   │   │   ├── modal.less
│   │   │   ├── notice.less
│   │   │   ├── reset.less    // 覆盖antd变量文件
│   │   │   ├── tab.less
│   │   │   └── table.less
│   │   ├── const.less    // 全局变量文件
│   │   └── index.less    // 入口文件
│   ├── static    //说明文档样式
│   └── utils
└── bisheng.config.js // bisheng 文档工具基本配置

```

- 以基础版为例

1、 添加样式

规范样式都是放在`/theme/dt-theme/default`目录下的，可在对应的组件文件或添加新的文件进行样式的添加，特别的新添加的样式文件需要在`/theme/dt-theme/default/index.less`中导入。（自定义样式名规范见文章末尾）


2、 组件说明文档开发

`/components`目录下存放的是所有组件的说明文档，根据组件类型进行目录的划分。

新添加的组件文件需要在`/components`目录下新建目录存放。新目录中需包含`demo`文件夹用于存放代码演示示例，以及`index.zh-CN.md`文件用于对组件进行说明。

3、 index.zh-CN.md

在组件说明文件开头，必须添加组件相关的一些配置，具体配置如下。

```text
---
category: Components    // 侧边栏导航所属分类
type: 通用    // 组件类型
title: Button    // 组件名称
subtitle: 按钮    // 组件中文名称
cols: 1 // 每行展示代码演示列数
---
```

之后就可以在文件中添加其他组件信息说明文字了。

4、 demo

`demo`文件夹用于存放代码演示示例，在该目录中添加的 md 文档用于对组件使用进行举例。但这类 md 文档有一定的编写规范。

下面就 Button 示例文件进行举例说明。

```text
---
order: 0    // 代码演示中的顺序
title:
  zh-CN: 按钮类型    // 代码演示名称
---

## zh-CN

数栈的按钮分为一级按钮，二级按钮，幽灵按钮，文字按钮等。

```

```jsx
import { Button } from 'antd';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary">一级按钮</Button>
    <Button>二级按钮</Button>
    <Button ghost>幽灵按钮</Button>
    <Button type="link">文字按钮</Button>
  </div>,
  mountNode,
);
```

```css
.demo {
    background: '#fff';
}
```

- 在示例文档开头,定义示例的一些配置
- `## zh-CN` 后面对代码示例进行说明
- 添加 jsx 编辑示例代码
- 添加 css 对样式进行展示说明

#### 附：CSS 命名规范

**基本规则：**

> 前缀 - 组件名（模块名）- 修饰词（可接多个单词以 ‘-’ 进行分隔）

基本样式名由前缀、组件名（模块名）、修饰词组成，以 ’-‘ 进行连接。其中统一前缀为 `dt` 。

如样式名：`dt-table-fixed` , `dt-pagination-padding-smaller` , `dt-status-danger`
