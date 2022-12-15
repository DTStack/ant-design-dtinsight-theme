---
order: 5
title:
  zh-CN: 多选
---

## zh-CN

多选，从已有条目中选择；禁用样式。

```jsx
import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <div>
    <Select
      mode="multiple"
      style={{ width: 200, marginRight: 20 }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      dropdownClassName="dt-ant-select-dropdown-default"
    >
      {children}
    </Select>

    <Select
      disabled
      mode="multiple"
      style={{ width: 200, marginTop: 20 }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
    >
      {children}
    </Select>
  </div>,
  mountNode,
);
```
