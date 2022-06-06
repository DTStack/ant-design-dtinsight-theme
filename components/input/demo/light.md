---
order: 7
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件或其父组件添加类名`dt-form-light-bg`

```jsx
import { Input } from 'antd';

ReactDOM.render(
  <div className="demo-input-light dt-form-light-bg">
    <Input placeholder="shadow input" />
    <Input disabled style={{ marginTop: 20 }} placeholder="disable shadow input" />
  </div>,
  mountNode
);
```
