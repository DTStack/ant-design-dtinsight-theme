---
order: 7
title:
  zh-CN: 点状步骤条
---

## zh-CN

包含步骤点的进度条。

## en-US

Steps with progress dot style.

```jsx
import { Steps, Divider } from 'antd';

const { Step } = Steps;

ReactDOM.render(
  <>
    <Steps progressDot current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
    <Divider />
    <Steps progressDot current={1} direction="vertical">
      <Step title="Finished" />
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
      <Step title="Waiting" />
    </Steps>
  </>,
  mountNode,
);
```
