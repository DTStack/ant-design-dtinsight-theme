---
order: 8
title:
  zh-CN: 自定义点状步骤条
---

## zh-CN

为点状步骤条增加自定义展示。

```jsx
import { Steps, Popover } from 'antd';

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

ReactDOM.render(
  <Steps current={1} progressDot={customDot}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
    <Step title="Waiting" />
  </Steps>,
  mountNode,
);
```
