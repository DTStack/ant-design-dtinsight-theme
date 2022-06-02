---
order: 3
title:
  zh-CN: 两种大小
---

## zh-CN

我们为输入框定义了两种尺寸（默认、小），高度分别为 32px 和 24px。

```jsx
import { Input } from 'antd';

ReactDOM.render(
  <div className="demo-input-size">
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>,
  mountNode,
);
```
