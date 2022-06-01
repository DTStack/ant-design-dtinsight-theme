---
order: 9
title:
  zh-CN: 可点击
---

## zh-CN

设置 `onChange` 后，Steps 变为可点击状态。

```jsx
import { Steps, Divider } from 'antd';

const { Step } = Steps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <>
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3"/>
        </Steps>

        <Divider />

        <Steps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
