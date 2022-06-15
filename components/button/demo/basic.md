---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

数栈的按钮分为一级按钮，二级按钮，按钮，文字按钮等。

```jsx
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary">一级按钮</Button>
    <Button>二级按钮</Button>
    <Button ghost>按钮</Button>
    <Button type="link">文字按钮</Button>
    <Button icon={<SearchOutlined />}  className="dt-btn-highlight"></Button>
  </div>,
  mountNode,
);
```
