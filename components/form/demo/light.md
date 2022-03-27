---
order: 1
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件添加类名`dt-form-light-bg`
- 为存在浮层的组件相关属性设置类名`dt-form-light-bg`

```jsx
import { Form, Input, Button, Checkbox, InputNumber, Radio, Switch, Cascader, Select } from 'antd';
const { Option } = Select;
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
      <Form name="normal_login" {...formItemLayout} className="demo-form-light dt-form-light-bg" onSubmit={this.handleSubmit}>
        <Form.Item name="username" label={'用户名'} rules={[{ required: true, message: 'It is required!' }]}>
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item name="role" label={'角色'} rules={[{ required: true, message: 'It is required!' }]}>
          <Select dropdownClassName="dt-form-light-bg" placeholder="Please select">
              <Option value="1">项目所有者</Option>
              <Option value="2">数据分析师</Option>
              <Option value="3">管理员</Option>
            </Select>
        </Form.Item>
        <Form.Item name="password" label={'密码'} rules={[{ required: true, message: 'It is required!' }]}>
          <Input.Password placeholder="Password"/>
        </Form.Item>
        <Form.Item name="count" label={'次数限制'} rules={[{ required: false, message: 'It is required!' }]}>
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
          <Cascader dropdownClassName="dt-form-light-bg" options={options} placeholder="Please select" />
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
