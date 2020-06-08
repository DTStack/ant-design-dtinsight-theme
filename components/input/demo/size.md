---
order: 3
title:
  zh-CN: 三种大小
---

## zh-CN

我们为输入框定义了三种尺寸（大、默认、小），高度分别为 36px、32px 和 28px。

```jsx
import { Input } from 'antd';

ReactDOM.render(
  <div className="demo-input-size">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>,
  mountNode,
);
```
