---
order: 0
title:
  zh-CN: 基础抽屉
  en-US: Basic
---

## zh-CN

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭

## en-US

Basic drawer.

```tsx
import { Drawer, Button } from 'antd';

class App extends React.Component {
  state = { visible: false, largeVisible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  showLargeDrawer = () => {
    this.setState({
      largeVisible: true,
    });
  }

  showSmallDrawer = () => {
    this.setState({
      smallVisible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
      largeVisible: false,
      smallVisible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showSmallDrawer}>
          Open(small)
        </Button>
        <Button type="primary" onClick={this.showDrawer} style={{ marginLeft: 20 }}>
          Open(defalt)
        </Button>
        <Button type="primary" onClick={this.showLargeDrawer} style={{ marginLeft: 20 }}>
          Open(large)
        </Button>
        <Drawer
          title="Small Drawer"
          placement="right"
          onClose={this.onClose}
          visible={this.state.smallVisible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Basic Drawer"
          placement="right"
          width={1000}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Large Drawer"
          placement="right"
          width={1256}
          onClose={this.onClose}
          visible={this.state.largeVisible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
[data-theme='compact'] .ant-drawer-body p {
  margin-bottom: 0;
}
</style>
