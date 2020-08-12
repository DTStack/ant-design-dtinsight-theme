---
order: 4
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件或其父组件添加类名`dt-form-light-bg`

```jsx
import { Select } from 'antd';

const { Option } = Select;

ReactDOM.render(
  <div className="demo-select-light">
    <Select defaultValue="lucy" dropdownClassName="dt-form-light-bg" className="dt-form-light-bg" style={{ width: 200, marginRight: 20 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="disabled" disabled dropdownClassName="dt-form-light-bg" className="dt-form-light-bg" style={{ width: 200, marginTop: 20 }}>
      <Option value="disabled">disabled</Option>
    </Select>
  </div>,
  mountNode
);
```
