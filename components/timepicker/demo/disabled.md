---
order: 3
title:
  zh-CN: 禁用
---

## zh-CN

禁用时间选择。

```jsx
import { TimePicker } from '../../index';
import moment from 'dayjs';

ReactDOM.render(<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />, mountNode);
```
