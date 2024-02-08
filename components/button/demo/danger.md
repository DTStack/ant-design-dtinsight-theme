---
order: 2
title:
  zh-CN: 危险按钮
  en-US: Danger Buttons
---

## zh-CN

危险按钮

```jsx
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <div className="demo-button-type">
      <Button type="primary" danger>危险按钮</Button>
      <Button danger>按钮</Button>
      <Button type="dashed" danger>按钮</Button>
      <Button type="text" danger>按钮</Button>
      <Button type="link" danger>按钮</Button>
    </div>
    <div className="demo-button-type">
      <Button type="primary" danger loading>危险按钮</Button>
      <Button danger loading>按钮</Button>
      <Button type="dashed" danger loading>按钮</Button>
      <Button type="text" danger loading>按钮</Button>
      <Button type="link" danger loading>按钮</Button>
    </div>
  </div>,
  mountNode,
);
```
