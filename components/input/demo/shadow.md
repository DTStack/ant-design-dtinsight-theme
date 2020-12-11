---
order: 2
title:
  zh-CN: 灰色背景(仅默认主题下使用)
---

## zh-CN

灰色背景中的表单需添加投影，去掉外边框

仅默认主题下使用，暗黑主题下使用无效

- 为组件添加类名`dt-form-shadow-bg`

```jsx
import { Input } from 'antd';

ReactDOM.render(
  <div className="demo-input-shadow">
    <Input className="dt-form-shadow-bg" placeholder="shadow input" />
  </div>,
  mountNode
);
```
