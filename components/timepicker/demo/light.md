---
order: 4
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件添加类名`dt-form-light-bg`
- 设置组件属性 `popupClassName` 为 `dt-form-light-bg`

```jsx
import { TimePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div className="demo-timer-picker-light">
    <TimePicker className="dt-form-light-bg" popupClassName="dt-form-light-bg" defaultValue={moment('12:08:23', 'HH:mm:ss')} />
  </div>,
  mountNode
);
```
