---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

最简单的下拉菜单。

## en-US

The most basic dropdown menu.

```tsx
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const items = [
  {
    label: (<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>),
      key: '0',
  },
  {
    label: (<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>),
    key: '1',
  },
  {
    label: (<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>),
    key: '2',
  }
];

ReactDOM.render(
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>,
  mountNode,
);
```
