---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```jsx
import { Button } from 'antd';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary" disabled>一级按钮</Button>
    <Button disabled>二级按钮</Button>
    <Button ghost disabled>幽灵按钮</Button>
    <Button type="link" disabled>文字按钮</Button>
  </div>,
  mountNode,
);
```
