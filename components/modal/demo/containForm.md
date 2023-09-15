---
order: 4
title:
  zh-CN: 包含表单
---

## zh-CN

弹框中包含表单

```jsx
import { Modal, Button, Form, Input, Select } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showModalConfirm = () => {
    console.log(111)
    const options = [
      { label: '规则1', value: 1 },
      { label: '规则2', value: 2 },
    ]
    Modal.confirm({
      title: '确认删除吗？',
      icon: <CloseCircleFilled style={{ color: '#f96c5b' }} />,
      content: (
        <div>
          <p>删除当前规则后不再校验离线的任务SQL，无法约束代码SQL的规范性。</p>
          <p style={{ color: '#F96C5B', marginBottom: 16 }}>删除后规则信息将无法恢复，请谨慎操作！</p>
          <Form layout="vertical" preserve={false}>
            <Form.Item
              label="检查规则名称"
              name="ruleName"
            >
              <Select placeholder="请选择检查规则名称" options={options} />
            </Form.Item>
          </Form>
        </div>
      ),
      okType: 'danger',
      okText: '确认',
      cancelText: '取消',
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
        <div className="demo-modal-box">
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Button type="primary" onClick={this.showModalConfirm}>
            Contain Form By Modal.confirm
          </Button>
        </div>
        <Modal
          width={640}
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form labelCol={{ span: 7 }} layout='vertical'>
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
