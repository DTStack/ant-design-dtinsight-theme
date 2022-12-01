---
order: 0
title:
  zh-CN: 典型卡片
  en-US: Basic card
---

## zh-CN

包含标题、内容、操作区域。

- 为组件添加类名`dt-card-shadow`增加典型卡片样式边1px#EAF0FC，投影 0px 2px 30px 0px #EAECF4;

```jsx
import { Card } from 'antd';

ReactDOM.render(
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }} className="dt-card-shadow" >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>,
  mountNode,
);
```

