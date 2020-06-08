---
order: 4
title:
  zh-CN: 包含表单
---

## zh-CN

弹框中包含表单

```jsx
import { Modal, Button, Form, Input, Select } from 'antd';

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
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
            <Form.Item label="项目标识" required>
              <Input placeholder="请输入项目标识" />
            </Form.Item>
            <Form.Item label="显示名称">
              <Input placeholder="请输入显示名称" />
            </Form.Item>
            <Form.Item label="数据源配置" required>
              <Select
                placeholder="请选择数据源配置"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
