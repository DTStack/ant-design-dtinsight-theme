---
order: 6
title:
  zh-CN: 右侧菜单，基础用法
---

## zh-CN

1、添加type="line"

2、添加tabPosition="right"

3、增加`dt-tabs-right-menu`类名

```jsx
import { Tabs } from 'antd';

const { TabPane } = Tabs;

ReactDOM.render(
  <Tabs type="line" tabPosition="right" className="dt-tabs-right-menu dt-tabs-content-padding">
    <TabPane tab="Tab1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  mountNode,
);
```
