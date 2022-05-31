---
order: 2
title:
  zh-CN: 卡片式列表
  en-US: Card list
---

## zh-CN

强化主次，信息分级，卡片作为一个独立的容器，可以在内容上进行良好的布局组织，将信息分块，突出重点，从视觉感知上就对内容进行了分隔，分明的层级能够引导用户的浏览视线，有秩序地阅读与点击。

## en-US

Basic list.

```jsx
import { List, Card } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

ReactDOM.render(
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />,
  mountNode,
);
```
