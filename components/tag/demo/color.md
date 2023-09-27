---
order: 3
title:
  en-US: Color
  zh-CN: 多彩标签
---

## zh-CN

- 支持多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足需求，可以设置为具体的色值。

```jsx
import { Tag } from 'antd';


ReactDOM.render(
  <div>
    <p style={{ fontSize: '16px', fontWeight: 500, padding: '0 0 12px' }}>预设色彩</p>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>

    <Tag color="success">success</Tag>
    <Tag color="processing">processing</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="default">default</Tag>

    <p style={{ fontSize: '16px', fontWeight: 500, padding: '24px 0 12px' }}>自定义颜色</p>
    <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
  </div>,
  mountNode,
);
```
