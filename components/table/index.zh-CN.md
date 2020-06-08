---
category: Components
cols: 1
type: 数据展示
title: Table
subtitle: 表格
---

展示行列数据。

## 设计规则

列表分为表头、表内容、和底部分页器、操作按钮组成，表头高度 44px,底色#FAFAFA，列名字体 Medium,内容区域列表高度 56px，字体 12px #333。规范中分页 Pagination 都需设置 `size="small"`

## API

|类名  |说明  |使用示例  |
|---------|---------|---------|
|.dt-table-border  | 设置表格的外边框  | 基本用法、可选择可操作 |
|.dt-table-last-row-noborder  | 为表格设置最后一行去掉下边框，一般在表格存在外边框时使用  | 基本用法 |
|.dt-table-fixed-contain-footer  | 用于单屏表格的父元素或者表格本身，使得表格固定头部与尾部，中间滚动。特别的，此类名用于底部分页通过 footer 实现的表格   | 固定高度表（footer 中带分页）   |
|.dt-table-fixed-base  | 用于单屏表格的父元素或者表格本身，使得表格固定头部与尾部，中间滚动。特别的，此类名用于自带分页的表格  | 固定高度表（自带分页）   |
|.dt-table-fixed-overflowx-auto  | 用于固定高度表中，当表格存在固定列且无数据时，去除固定列底部滚动条  | 固定高度表（footer 中带分页）、固定高度表（自带分页）   |
|.dt-table-scrollbar  | 一般用于 windows 中，设置表格中滚动条的样式  | 固定高度表（footer 中带分页）   |
|.dt-pagination-lower  | 设置表格中的分页所占高度为 44px  | 紧凑型 |
