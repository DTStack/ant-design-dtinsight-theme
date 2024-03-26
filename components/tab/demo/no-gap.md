---
order: 3
title:
  zh-CN: 消除间隙
  en-US: no gap
---

## zh-CN

需要将 tabs 和导航栏拼接展示，不需要有间隙

## en-US

In order to fit in more tabs, they can slide left and right (or up and down).

```jsx
import { useState } from "react";
import { Tabs, Space, Switch, Menu } from 'antd';

const { TabPane } = Tabs;

const TopTabsDemo = () => {
  const [className, setClassName]= useState("");

  return (
    <div>
      <Switch onChange={(checked) => setClassName(checked ? 'dt-tabs-nav-no-gap' : '')} />
      <span>设置dt-tabs-nav-no-gap</span>
      <Menu mode="horizontal" defaultSelectedKeys={['One']}>
        <Menu.Item key="One">
          Navigation One
        </Menu.Item>
        <Menu.Item key="Two">
          Navigation Two
        </Menu.Item>
      </Menu>
      <div style={{ background: '#F2F7FA', padding:16 }}>
        <Tabs defaultActiveKey="1" className={className}>
          <TabPane tab="项目 1" key="item-1">
            内容 1
          </TabPane>
          <TabPane tab="项目 2" key="item-2">
            内容 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

ReactDOM.render(<TopTabsDemo />, mountNode);
```
