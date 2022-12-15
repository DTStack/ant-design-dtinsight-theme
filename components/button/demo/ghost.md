---
order: 5
title:
  zh-CN: 幽灵属性，使按钮背景透明
  en-US: ghost
---

## zh-CN

置于复杂或较深的背景中，避免按钮突兀地破坏背景的整体性。该场景下可灵活定制样式。`ghost 不与 danger 同时使用`

```jsx
import { Button } from 'antd';

ReactDOM.render(
  <div className="demo-button-type ghost">
    <Button ghost>ghost</Button>
    <Button ghost type="primary">ghost primary</Button>
    <Button ghost disabled>ghost disabled</Button>
    <Button ghost type="primary" disabled>ghost primary disabled</Button>
  </div>,
  mountNode,
);
```
