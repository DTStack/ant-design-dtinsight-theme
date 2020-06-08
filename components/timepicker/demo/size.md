---
order: 1
title:
  zh-CN: 三种大小
---

## zh-CN

定义了三种尺寸（大、默认、小），高度分别为 36px、32px 和 28px。

```jsx
import { TimePicker } from 'antd';
import moment from 'moment';

ReactDOM.render(
  <div className="demo-time-picker-box">
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </div>,
  mountNode,
);
```
