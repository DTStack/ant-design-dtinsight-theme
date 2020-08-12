---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

```jsx
import { Form, Icon, Input, Button, Checkbox, InputNumber, Radio, Switch } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label={'用户名'}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'It is required!' }],
          })(
            <Input placeholder="Username"/>
          )}
        </Form.Item>
        <Form.Item label={'密码'}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'It is required!' }],
          })(
            <Input type="password" placeholder="Password"/>
          )}
        </Form.Item>
        <Form.Item label={'次数限制'}>
          {getFieldDecorator('count', {
            rules: [{ required: false, message: 'It is required!' }],
          })(
            <InputNumber min={1} style={{ width: '100%' }} max={10} />
          )}
        </Form.Item>
        <Form.Item label={'告警方式'}>
          {getFieldDecorator('way', {
            rules: [{ required: false, message: 'It is required!' }],
          })(
            <Checkbox.Group options={[{ label: '邮件', value: '1' }, { label: '短信', value: '2' }]} />
          )}
        </Form.Item>
        <Form.Item label={'存储类型'}>
          {getFieldDecorator('type', {
            rules: [{ required: false, message: 'It is required!' }],
          })(
            <Radio.Group>
              <Radio value={1}>orc</Radio>
              <Radio value={2}>text</Radio>
              <Radio value={3}>md</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label={'开关'}>
          {getFieldDecorator('switch', {
            rules: [{ required: false, message: 'It is required!' }],
          })(
            <Switch />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交表单
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
```
