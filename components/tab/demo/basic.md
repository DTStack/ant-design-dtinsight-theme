---
order: 0
title:
  zh-CN: 基础样式
  en-US: Basic
---

## zh-CN

大号页签用在页头区域或主功能切换，小号用在弹出框等较狭窄的容器内。

- 为组件添加类名`dt-tabs-nav-padding-16`可以增加左右两边16px的边距

## en-US

Large tabs are used for header areas or main function switches, and small tabs are used in narrower containers such as pop-ups.

```jsx
import { Tabs, Switch } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

class App extends React.Component {
    state = { classname: '' };

    callback(key) {
        console.log(key);
    }

    handleChangeTabsPadding = (checked: boolean) => {
        this.setState({
            classname: checked ? 'dt-tabs-nav-padding-16' : '',
        });
    };

    render() {
        const { classname } = this.state;
        return (
            <div>
                <div style={{ marginBottom: 20 }}>
                    <Switch onChange={this.handleChangeTabsPadding} />
                    <span className="demo-switch-desc">设置dt-tabs-nav-padding-16</span>
                </div>
                <h3 style={{ margin: '12px 0' }}>Size Large</h3>
                <Tabs
                    defaultActiveKey="1"
                    size="large"
                    onChange={this.callback}
                    className={classname}
                    items={[
                        {
                            label: (<span>
                                <AppleOutlined />
                                Tab 1
                            </span>),
                            key: '1',
                            children: 'Tab 1 Content',
                        },
                        {
                            label:(<span>
                                <AndroidOutlined />
                                Tab 2
                            </span>),
                            key: '2',
                            children: 'Tab 2 Content',
                        }
                    ]}
                />
                <h3 style={{ margin: '12px 0' }}>Size Defalt</h3>
                <Tabs defaultActiveKey="1" onChange={this.callback} className={classname}
                items={[
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
                    ]}
                />
                <h3 style={{ margin: '12px 0' }}>无 Icon</h3>
                <Tabs defaultActiveKey="1" onChange={this.callback} className={classname}
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

ReactDOM.render(<App />, mountNode);
```
