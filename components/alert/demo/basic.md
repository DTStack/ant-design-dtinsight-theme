---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

最简单的用法，适用于简短的警告提示。

共有三种样式 success、warning、error。

可关闭。

```jsx
import { Alert } from 'antd';

ReactDOM.render(
  <div>
    <Alert style={{ marginBottom: 20 }} message="Success Text" type="success" closable />
    <Alert style={{ marginBottom: 20 }} message={<span>Waring Text!  <a>前去处理</a></span>} type="warning" closable />
    <Alert style={{ marginBottom: 20 }} message="Error Text" type="error" closable />
  </div>,
  mountNode,
);
```
