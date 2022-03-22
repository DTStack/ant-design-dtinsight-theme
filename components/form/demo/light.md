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
import { Form, Icon, Input, Button, Checkbox, InputNumber, Radio, Switch, Cascader, Select } from 'antd';
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
      <Form {...formItemLayout} className="demo-form-light dt-form-light-bg" onSubmit={this.handleSubmit}>
        <Form.Item label={'用户名'}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'It is required!' }],
          })(
            <Input placeholder="Username"/>
          )}
        </Form.Item>
        <Form.Item label={'角色'}>
          {getFieldDecorator('role', {
            rules: [{ required: true, message: 'It is required!' }],
          })(
            <Select dropdownClassName="dt-form-light-bg" placeholder="Please select">
              <Option value="1">项目所有者</Option>
              <Option value="2">数据分析师</Option>
              <Option value="3">管理员</Option>
            </Select>
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
            rules: [{ required: true, message: 'It is required!' }],
          })(
            <InputNumber min={1} style={{ width: '100%' }} max={10} />
          )}
        </Form.Item>
        <Form.Item label={'告警方式'}>
          {getFieldDecorator('way', {
            rules: [{ required: true, message: 'It is required!' }],
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
        <Form.Item label={'位置'}>
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'It is required!' }],
          })(
            <Cascader dropdownClassName="dt-form-light-bg" options={options} placeholder="Please select" />
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
