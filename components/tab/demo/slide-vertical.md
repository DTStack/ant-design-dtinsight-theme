---
order: 4
title:
  zh-CN: 隐藏 `···` icon
  en-US: HiddenIcon
---

## zh-CN

可以使用 `dt-tabs-hidden-more-icon` 隐藏数量较多时左下角或右上角的 `···` icon

## en-US

You can use 'dt-tabs-hidden-more-icon' to hide the more icon in the bottom left or top right corner when there is a large quantity.

```jsx
import { Tabs, Radio } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs className="dt-tabs-hidden-more-icon" defaultActiveKey="1" tabPosition="left" style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={ i < 4 ? <span><AndroidOutlined />Tab-{i}</span> : `Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<SlidingTabsDemo />, mountNode);
```
