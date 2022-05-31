---
order: 6
title:
  zh-CN: 步骤运行错误
---

## zh-CN

使用 Steps 的 `status` 属性来指定当前步骤的状态。

```jsx
import { Steps } from 'antd';

const { Step } = Steps;

ReactDOM.render(
  <Steps current={1} status="error">
    <Step title="Finished" />
    <Step title="In Process" />
    <Step title="Waiting" />
  </Steps>,
  mountNode,
);
```
