---
order: 3
title:
  zh-CN: 三种大小
---

## zh-CN

我们为下拉框定义了三种尺寸（大、默认、小），高度分别为 36px、32px 和 28px。

```jsx
import { Select } from 'antd';

const { Option } = Select;

ReactDOM.render(
  <div className="demo-select-size">
    <Select defaultValue="large" size="large">
      <Option value="large">large</Option>
    </Select>
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
