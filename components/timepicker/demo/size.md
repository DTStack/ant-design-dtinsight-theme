---
order: 1
title:
  zh-CN: 两种大小
---

## zh-CN

定义了两种尺寸（默认、小），高度分别为 32px 和 28px。

```jsx
import { TimePicker } from '../../index';
import moment from 'dayjs';

ReactDOM.render(
  <div className="demo-time-picker-box">
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </div>,
  mountNode,
);
```
