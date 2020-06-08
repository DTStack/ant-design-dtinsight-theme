---
order: 1
title:
  zh-CN: 图标
---

## zh-CN

可口的图标让信息类型更加醒目。

```jsx
import { Alert } from 'antd';

ReactDOM.render(
  <div>
    <Alert style={{ marginBottom: 20 }} message="Success Text" type="success" showIcon closable />
    <Alert style={{ marginBottom: 20 }} message="Warning Text" type="warning" showIcon closable />
    <Alert style={{ marginBottom: 20 }} message="Error Text" type="error" showIcon closable />
  </div>,
  mountNode,
);
```
