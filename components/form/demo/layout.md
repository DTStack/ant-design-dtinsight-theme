---
order: 0
title:
  zh-CN: 垂直表单布局
  en-US: Vertical layout usage
---

## zh-CN

垂直表单布局。

## en-US

Basic usage example.

```jsx
import { Form, Input, Button, Checkbox, InputNumber, Radio, Switch, Cascader, Select } from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};
class NormalLoginForm extends React.Component {
  handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    const options = [
      {
        value: 'zhejiang',
        label: '浙江',
        children: [
          {
            value: 'hangzhou',
            label: '杭州',
            children: [
              {
                value: 'westLake',
                label: '西湖',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'zhongHuaMen',
                label: '中华门',
              },
            ],
          },
        ],
      },
    ];

    return (
      <Form name="normal_login" layout={"vertical"} {...formItemLayout} onFinish={this.handleSubmit} colon={false}>
        <Form.Item name="username" label={'用户名'} rules={[{ required: true, message: 'It is required!' }]}>
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item name="role" label={'角色'} rules={[{ required: true, message: 'It is required!' }]}>
          <Select placeholder="Please select">
              <Option value="1">项目所有者</Option>
              <Option value="2">数据分析师</Option>
              <Option value="3">管理员</Option>
            </Select>
        </Form.Item>
        <Form.Item name="password" label={'密码'} rules={[{ required: true, message: 'It is required!' }]}>
          <Input.Password placeholder="Password"/>
        </Form.Item>
        <Form.Item name="count" label={'次数限制'} tooltip='Tooltip with customize icon' rules={[{ required: false, message: 'It is required!' }]}>
          <InputNumber min={1} style={{ width: '100%' }} max={10} />
        </Form.Item>
        <Form.Item name="way" label={'告警方式'} rules={[{ required: false, message: 'It is required!' }]}>
          <Checkbox.Group options={[{ label: '邮件', value: '1' }, { label: '短信', value: '2' }]} />
        </Form.Item>
        <Form.Item name="type" label={'存储类型'} rules={[{ required: false, message: 'It is required!' }]}>
          <Radio.Group>
            <Radio value={1}>orc</Radio>
            <Radio value={2}>text</Radio>
            <Radio value={3}>md</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="switch" label={'开关'} rules={[{ required: false, message: 'It is required!' }]}>
          <Switch />
        </Form.Item>
        <Form.Item name="location" label={'位置'} rules={[{ required: false, message: 'It is required!' }]}>
          <Cascader options={options} placeholder="Please select" />
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

ReactDOM.render(<NormalLoginForm />, mountNode);
```
