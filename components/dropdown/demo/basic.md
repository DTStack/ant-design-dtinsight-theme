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

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
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
