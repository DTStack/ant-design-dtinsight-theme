---
order: 0
title:
  zh-CN: 自定义滚动条样式
---

## zh-CN

`dt-scrollbar-base` 用于美化滚动条样式，一般用于 Windows 系统中

若果你想要美化应用中所有的滚动条样式，可以直接在 body 或者 根节点 添加此样式

```jsx
import { List, Switch } from 'antd';

class App extends React.Component {
  state = {
    setScrollbar: false
  }

  handleSwitchChange = (key) => {
    this.setState({
      [key]: !this.state[key]
    })
  }

  render () {
    const { setScrollbar } = this.state;
    const data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
      'Los Angeles battles huge wildfires.',
      'Los Angeles battles huge wildfires.',
    ];
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
            <Switch checked={setScrollbar} onChange={this.handleSwitchChange.bind(this, 'setScrollbar')} />
            <span style={{ margin: '0px 8px 8px' }}>设置dt-table-scrollbar</span>
        </div>
        <div style={{ height: 200, overflow: 'auto' }} className={setScrollbar ? 'dt-scrollbar-base' : ''}>
          <List
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>{item}</List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
