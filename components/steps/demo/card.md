---
order: 1
title:
  en-US: Card Usage
  zh-CN: Card 用法
---

## zh-CN

1、固定标准导航步骤页步骤条头部、操作栏尾部。中间内容区域可滚动。可作为单屏导航步骤条页展示使用
- 为导航步骤页的 `Card` 卡片容器的父元素或者直接在`Card`卡片容器上添加类名 `dt-steps-card-container`
- 计算当前导航步骤页面以外的元素所占高度（如 300px）
- 再为导航步骤页 `Card` 卡片容器设置 `style={{ height: 'calc(100vh - 300px)' }}`，添加 `Steps` 步骤条处理流程
- 最后设置导航步骤页的 `Steps` 步骤条后的第一个 `div` 元素为内容区域，第一个 `footer` 元素为操作栏

2、为导航步骤页`Card`卡片容器添加类名 `dt-card-shadow-bg` 可增加阴影

## en-US

Navigation steps.

```jsx
import { Steps, Card, Button, Select, message, Form,
  Input, Checkbox, InputNumber, Radio, Switch,
  Cascader } from 'antd';

const { Step } = Steps;
const { Option } = Select;

const formLayout = 'vertical'

class FirstStepForm extends React.Component {
  render () {
    return (
      <Form  layout={formLayout}>
        <Form.Item label={'用户名'} name="username">
          <Input placeholder="Username" rules={[{ required: true, message: 'It is required!' }]}/>
        </Form.Item>
        <Form.Item label={'角色'} name="role">
          <Select placeholder="Please select" rules={[{ required: true, message: 'It is required!' }]}>
            <Option value="1">项目所有者</Option>
            <Option value="2">数据分析师</Option>
            <Option value="3">管理员</Option>
          </Select>
        </Form.Item>
        <Form.Item label={'密码'} name="password">
            <Input.Password placeholder="Password" rules={[{ required: true, message: 'It is required!' }]}/>
        </Form.Item>
      </Form>
    )
  }
}

class SecondStepForm extends React.Component {
  render () {
    return (
      <Form layout={formLayout}>
        <Form.Item label={'次数限制'} name="count">
          <InputNumber min={1} style={{ width: '100%' }} max={10} rules={[{ required: false, message: 'It is required!' }]}/>
        </Form.Item>
        <Form.Item label={'告警方式'} name="way">
          <Checkbox.Group
          rules={[{ required: false, message: 'It is required!' }]}
            options={[{ label: '邮件', value: '1' }, { label: '短信', value: '2' }]} />
        </Form.Item>
      </Form>
    )
  }
}

class LastStepForm extends React.Component {
  render() {
    return (
      <Form layout={formLayout}>
        <Form.Item label={'存储类型'} name="type">
          <Radio.Group rules={[{ required: false, message: 'It is required!' }]}>
            <Radio value={1}>orc</Radio>
            <Radio value={2}>text</Radio>
            <Radio value={3}>md</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={'开关'} name="switch">
          <Switch rules={[{ required: false, message: 'It is required!' }]}/>
        </Form.Item>
      </Form>
    );
  }
}

const steps = [
  {
    title: '步骤一',
    content: <FirstStepForm />,
  },
  {
    title: '步骤二',
    content: <SecondStepForm />,
  },
  {
    title: '步骤三',
    content: <LastStepForm />,
  },
];

class Demo extends React.Component {
  state = {
    current: 0,
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <Card
        className="dt-card-shadow-bg dt-steps-card-container"
        style={{ height: 'calc(100vh - 300px)' }}
      >
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>
          {steps[current].content}
        </div>
        <footer>
          {current > 0 && <Button onClick={() => { this.prev() }}>取消</Button>}
          {current < steps.length - 1 && <Button type='primary' onClick={() => { this.next() }}>下一步</Button>}
          {current === steps.length - 1 && <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>}
        </footer>
      </Card>
    );
  }
}

ReactDOM.render(<div className="demo-input-shadow">
  <Demo />
</div>, mountNode);
```

<style>
[data-theme="dark"] .site-navigation-steps {
  border-bottom: 1px solid #303030;
  margin-bottom: 60px;
  box-shadow: none;
}
</style>
