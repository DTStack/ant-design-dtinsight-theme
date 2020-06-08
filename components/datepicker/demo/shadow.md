---
order: 2
title:
  zh-CN: 灰色背景
---

## zh-CN

灰色背景中的表单需添加投影，去掉外边框

- 为组件添加类名`dt-form-shadow-bg`

```jsx
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div className="demo-datepicker-shadow demo-datepicker-box">
    <DatePicker className="dt-form-shadow-bg" defaultValue={moment('2015-06-06', dateFormat)} />
    <br />
    <MonthPicker className="dt-form-shadow-bg" defaultValue={moment('2015-06', 'YYYY-MM')} />
    <br />
    <RangePicker
      className="dt-form-shadow-bg"
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
    />
  </div>,
  mountNode
);
```
