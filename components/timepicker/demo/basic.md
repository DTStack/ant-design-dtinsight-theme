---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

```jsx
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
  mountNode,
);
```
