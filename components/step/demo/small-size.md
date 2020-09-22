---
order: 1
title:
  zh-CN: 迷你版
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用

```jsx
import { Steps } from 'antd';

const { Step } = Steps;

ReactDOM.render(
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>,
  mountNode,
);
```
