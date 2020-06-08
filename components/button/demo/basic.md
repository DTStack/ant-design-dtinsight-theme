---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

数栈的按钮分为一级按钮，二级按钮，幽灵按钮，文字按钮等。

```jsx
import { Button } from 'antd';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary">一级按钮</Button>
    <Button>二级按钮</Button>
    <Button ghost>幽灵按钮</Button>
    <Button type="link">文字按钮</Button>
  </div>,
  mountNode,
);
```
