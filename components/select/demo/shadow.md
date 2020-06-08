---
order: 2
title:
  zh-CN: 灰色背景
---

## zh-CN

灰色背景中的表单需添加投影，去掉外边框

- 为组件添加类名`dt-form-shadow-bg`

```jsx
import { Select } from 'antd';

const { Option } = Select;

ReactDOM.render(
  <div className="demo-select-shadow">
    <Select defaultValue="lucy" className="dt-form-shadow-bg" style={{ width: 200 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  </div>,
  mountNode
);
```
