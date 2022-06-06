---
order: 3
title:
  zh-CN: 两种大小
---

## zh-CN

我们为下拉框定义了两种尺寸（默认、小），高度分别为 32px 和 24px。

```jsx
import { Select } from 'antd';

const { Option } = Select;

ReactDOM.render(
  <div className="demo-select-size">
    <Select defaultValue="default" size="default">
      <Option value="default">default</Option>
    </Select>
    <Select defaultValue="small" size="small">
      <Option value="small">small</Option>
    </Select>
  </div>,
  mountNode,
);
```
