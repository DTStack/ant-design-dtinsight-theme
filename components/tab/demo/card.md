---
order: 5
title:
  zh-CN: 卡片式页签
  en-US: Card type tab
---

## zh-CN

另一种样式的页签，不提供对应的垂直样式。

## en-US

Another type of Tabs, which doesn't support vertical mode.

```jsx
import { Tabs } from 'antd';

function callback(key) {
  console.log(key);
}

ReactDOM.render(
  <Tabs onChange={callback} type="card"
  items={[
                        {
                            label: 'Tab 1',
                            key: '1',
                            children: 'Content of Tab Pane 1',
                        },
                        {
                            label:'Tab 2',
                            key: '2',
                            children: 'Content of Tab Pane 2',
                        },
                        {
                            label:'Tab 3',
                            key: '3',
                            children: 'Content of Tab Pane 3',
                        }
                    ]}
  />,
  mountNode,
);
```
