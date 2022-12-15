---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

点击可进行页面跳转

```jsx
import { Breadcrumb } from 'antd';
import { RightOutlined } from '@ant-design/icons'

ReactDOM.render(
  <Breadcrumb separator={<RightOutlined />}>
    <Breadcrumb.Item>
      <a href="">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```
