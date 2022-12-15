---
order: 0
title:
  zh-CN: 基本用法
---

## zh-CN

简单的步骤条。


```jsx
import { Steps } from 'antd';

const { Step } = Steps;

ReactDOM.render(
  <Steps current={1}>
    <Step title="Finished" />
    <Step title="In Progress" subTitle="Left 00:00:08" />
    <Step title="Waiting" />
  </Steps>,
  mountNode,
);
```