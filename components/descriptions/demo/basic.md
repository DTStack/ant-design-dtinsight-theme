---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

无边框情况。

## 何时使用
展示区域有限的情况下，使用有边框的样式不能提高内容利用率，采用无边框样式
内容跟随标题移动，整行左对齐，标题色号#8B8FA8，内容色号#3D446E
- 为组件添加类名`dt-descriptions-vertical-display`
实现竖向排列

## en-US


Simplest Usage.

```jsx
import { Descriptions } from 'antd';

ReactDOM.render(
  <Descriptions className='dt-descriptions-vertical-display'>
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>,
  mountNode,
);
```
