---
order: 1
title:
  zh-CN: 按钮大小
---

## zh-CN

按钮高度分为 32px (常规尺寸)、 28px (小尺寸)两种。

```jsx
import { Button } from 'antd';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary">一级按钮</Button>
    <Button size="small" type="primary">一级按钮</Button>
  </div>,
  mountNode,
);
```
