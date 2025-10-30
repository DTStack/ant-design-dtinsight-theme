---
order: 7
title:
  zh-CN: 侧边菜单
---

## zh-CN

1、添加type="line"

2、添加tabPosition="right"为右侧菜单，tabPosition="left"为左侧菜单

3、增加`dt-tabs-sider-menu`类名

4、增加tab内容的内边距增加类名`dt-tabs-content-padding`

```jsx
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'right',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="right">right</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
        </Radio.Group>
        <Tabs type="line" tabPosition={mode} className="dt-tabs-sider-menu dt-tabs-content-padding"
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
                />
      </div>
    );
  }
}

ReactDOM.render(<SiderMenu />, mountNode);
```
