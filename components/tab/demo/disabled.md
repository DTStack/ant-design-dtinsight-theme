---
order: 1
title:
  zh-CN: 禁用
  en-US: Disabled
---

## zh-CN

禁用某一项。

## en-US

Disabled a tab.

```jsx
import { Tabs } from 'antd';

ReactDOM.render(
  <Tabs defaultActiveKey="1"
  items={[
                        {
                            label: 'Tab 1',
                            key: '1',
                            children: 'Tab 1',
                        },
                        {
                            label:'Tab 2',
                            key: '2',
                            children: 'Tab 2',
                            disabled: true,
                        },
                        {
                            label:'Tab 3',
                            key: '3',
                            children: 'Tab 3',
                        }
                    ]}
  />,
  mountNode,
);
```
