---
category: Components
cols: 1
type: 数据展示
title: Table
subtitle: 表格
---

表格是用行列的形式，结构化展示信息的组件；方便用户查看、分析数据。用于数据收集展示、分析整理、操作处理。

## 何时使用

- 需要展示数据时：当有大量结构化数据需要展示展示时可以使用表格对数据进行有序的展示，更有利于用户对于数据的获取。
- 需要对数据进行复杂操作时：当需要对数据进行排序、搜索、筛选等操作时，可以使用表格组件，利于对数据进行操作。
- 需要对数据进行对比，归纳与分类时：当需要对数据进行对比、归纳、分类等操作时，可以使用表格组件，使信息之间易于对比，便于用户快速查询其中的差异与变化、关联和区别。

## API

|类名  |说明  |使用示例  |
|---------|---------|---------|
|.dt-table-border  | 设置表格的外边框  | 基本用法、可选择可操作 |
|.dt-table-top-border  | 设置表格的上边框  | 基本用法 |
|.dt-table-last-row-noborder  | 为表格设置最后一行去掉下边框，一般在表格存在外边框时使用  | 基本用法 |
|.dt-table-fixed-contain-footer  | 用于单屏表格的父元素或者表格本身，使得表格固定头部与尾部，中间滚动。特别的，此类名用于底部分页通过 footer 实现的表格   | 固定高度表（footer 中带分页）   |
|.dt-table-fixed-base  | 用于单屏表格的父元素或者表格本身，使得表格固定头部与尾部，中间滚动。特别的，此类名 `有 border` 用于自带分页的表格  | 固定高度表（自带分页），有 border   |
|.dt-table-fixed-base-no-border  | 用于单屏表格的父元素或者表格本身，使得表格固定头部与尾部，中间滚动。特别的，此类名 `没有 border` 用于自带分页的表格  | 固定高度表（自带分页），没有 border   |
|.dt-table-fixed-overflowx-auto  | 用于固定高度表中，当表格存在固定列且无数据时，去除固定列底部滚动条  | 固定高度表（footer 中带分页）、固定高度表（自带分页）   |
|.dt-table-scrollbar  | 一般用于 windows 中，设置表格中滚动条的样式  | 固定高度表（footer 中带分页）   |
|.dt-resizable-table  | 设置可伸缩列表格中的表头有分割线 | 可伸缩列 |
|.dt-table-header-user-select-none  | 设置表头内容不可选中 | 可伸缩列 |
|.dt-table-empty-top-20-percent  | 无数据时，缺省图标距顶部 20%。 | 大部分场景适用，不适用时使用默认的 margin 间距即可 |
|.dt-table-cell-right  | 为 columns 添加该 className，与 align 属性配合使用，即可实现数据列表头和内容均居右显示 | 数据列居右 |
|.dt-table-multi-line  | 为 columns 添加该 className，使换行符合UI5.0规范 | 基本用法 |
|.dt-row-selected  | 为 Table 添加 rowClassName | 选中样式 |
