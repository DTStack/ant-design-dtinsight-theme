---
order: 6
title:
  zh-CN: 超长 Title
---

## zh-CN

弹框中包含表格

```jsx
import { Modal, Button, Table } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="xixiixixixixiixxixiix超长名字嘻嘻超长名字嘻嘻超长名字嘻嘻超长名字嘻嘻超长名字嘻嘻"
          width={520}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          内容
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
