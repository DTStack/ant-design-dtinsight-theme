---
category: Components
cols: 1
type: 通用
title: Icon
subtitle: 图标
---

使用 antd 的图标时，部分 antd 图标不符合数栈的图标规范，所以在 theme 里进行统一处理。

## 设计规范

- 数栈的图标有一定圆角，比如观察 antd 对比替换图标的 `CloseCircleFilled` 和 `StarOutlined`。

## 何时使用

- 使用设计提供的图标替换 antd 的图标
- 子产品不需要主动做什么，theme 统一处理；部分图标需要添加 theme 的自定义 className 配合使用，如：`CheckCircleFilled`、`ExclamationCircleFilled`。
