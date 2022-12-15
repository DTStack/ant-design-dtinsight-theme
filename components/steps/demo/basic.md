---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基础用法
---

## zh-CN

1、为 Steps 组件添加类名 `dt-steps-header` 可以让 Steps 保持 1000px 的宽度，并且居中，步骤数字的颜色和背景色也会符合 UI5.0 的设计标准。

## en-US

Navigation steps.

```jsx
import { Steps, Button } from 'antd';
const { Step } = Steps;

class FirstStep extends React.Component {
  render () {
    return (
      <div style={{ width: '100%', height: 200, textAlign: 'center', paddingTop: 80 }}>步骤一的内容</div>
    )
  }
}
class SecondStep extends React.Component {
  render () {
    return (
      <div style={{ width: '100%', height: 200, textAlign: 'center', paddingTop: 80 }}>步骤二的内容</div>
    )
  }
}
class ThirdStep extends React.Component {
  render () {
    return (
      <div style={{ width: '100%', height: 200, textAlign: 'center', paddingTop: 80 }}>步骤三的内容</div>
    )
  }
}

const steps = [
  {
    title: '步骤一',
    content: <FirstStep />,
  },
  {
    title: '步骤二',
    content: <SecondStep />,
  },
  {
    title: '步骤三',
    content: <ThirdStep />,
  },
];

class Demo extends React.Component {
  state = {
    current: 1,
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
      <div>
        <Steps className="dt-steps-header" current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>
          {steps[current].content}
        </div>
        <div>
          {current > 0 && <Button style={{ marginRight: 12 }} onClick={() => { this.prev() }}>取消</Button>}
          {current < steps.length - 1 && <Button type='primary' onClick={() => { this.next() }}>下一步</Button>}
          {current === steps.length - 1 && <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>}
        </div>
      </div>
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
