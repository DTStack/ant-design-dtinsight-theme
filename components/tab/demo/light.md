---
order: 5
title:
  zh-CN: 浅色背景下使用
---

## zh-CN

浅色背景下使用效果

## en-US

Default activate first tab.

```jsx
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <div className="demo-select-light">
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" disabled key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </div>
);

ReactDOM.render(<Demo />, mountNode);
```
