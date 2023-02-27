---
order: 1
title:
  zh-CN: 搜索框
  en-US: Search box
---

## zh-CN

带有搜索按钮的输入框。

搜索带投影

- 为组件添加类名`dt-input-search-group-shadow`

按钮外置，用于页面中搜索为主功能时，强调搜索功能

- 为组件添加类名`dt-input-search-external`

## en-US

Example of creating a search box by grouping a standard input with a search button.

```jsx
import { Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

ReactDOM.render(
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search
      size="small"
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Input.Group compact>
      <Select defaultValue="1" style={{ width: 110 }}>
        <Option value="1">搜索项</Option>
      </Select>
      <Search
        placeholder="搜索提示"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </Input.Group>
    <br />
    <Input.Group compact className="dt-input-search-group-shadow">
      <Select defaultValue="1" style={{ width: 110 }}>
        <Option value="1">搜索项</Option>
      </Select>
      <Search
        placeholder="搜索提示"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select defaultValue="1" style={{ width: 110 }}>
        <Option value="1">搜索项</Option>
      </Select>
      <Search
        className="dt-input-search-external"
        placeholder="搜索提示"
        onSearch={value => console.log(value)}
        enterButton
        style={{ width: 300 }}
      />
    </Input.Group>
  </div>,
  mountNode,
);
```
