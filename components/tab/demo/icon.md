---
order: 2
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

有图标的标签。

## en-US

The Tab with Icon.

```jsx
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

ReactDOM.render(
  <Tabs defaultActiveKey="2" items={[
                        {
                            label: (<span>
                                <AppleOutlined />
                                Tab 1
                            </span>),
                            key: '1',
                            children: 'Tab 1',
                        },
                        {
                            label:(<span>
                                <AndroidOutlined />
                                Tab 2
                            </span>),
                            key: '2',
                            children: 'Tab 2',
                        }
                    ]} />,
  mountNode,
);
```
