---
order: 2
title:
  zh-CN: 灰色背景(仅默认主题下使用)
---

## zh-CN

灰色背景中的表单需添加投影，去掉外边框

仅默认主题下使用，暗黑主题下使用无效

- 为组件添加类名`dt-form-shadow-bg`

```jsx
import { TimePicker } from '../../index';
import moment from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div className="demo-timer-picker-shadow">
    <TimePicker className="dt-form-shadow-bg" defaultValue={moment('12:08:23', 'HH:mm:ss')} />
  </div>,
  mountNode
);
```
