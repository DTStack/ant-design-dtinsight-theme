---
category: Components
subtitle: 选择器
type: 数据录入
title: Select
---

当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。

## 设计规范

#### 默认主题

- 选择器常规高度为 32px，小尺寸的高度为 24px，边框颜色 #D8DAE2，填充色 #FFFFFF，圆角4px;
- 提示文字 12px,颜色 #B1B4C5，输入颜色 #3D446E；
- hover 状态边框颜色 #1D78FF;
- 点击状态边框颜色 #005CE6;
- 禁用状态底色 #EBECF0，禁用说明文字 #B1B4C5；
- 错误样式边框颜色 #F96C5B；

#### 暗黑主题

- 下拉框常规高度为 32px，小尺寸的高度为 24px，边框颜色 #2C3047，4px 圆角，宽度根据具体情况而定；
- 提示字颜色 #666666，输入颜色 #BFBFBF；

## API

|类名  |说明  |使用示例  |
|---------|---------|---------|
|.dt-ant-select-dropdown-default | 默认需设置 dropdownClassName 为 dt-ant-select-dropdown-default | UI5.0 额外样式  |
|.dt-form-shadow-bg  | 灰色背景,表单样式设置   | 灰色背景(仅默认主题下使用)   |
|.dt-form-light-bg  | 浅色背景上，显示深色控件   | 浅色背景(仅暗黑主题下使用)   |
