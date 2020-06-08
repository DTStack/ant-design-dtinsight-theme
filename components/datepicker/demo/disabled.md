---
order: 3
title:
  zh-CN: 禁用
---

## zh-CN

选择框的不可用状态。

```jsx
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div className="demo-datepicker-box">
    <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
    <br />
    <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
    <br />
    <RangePicker
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
      disabled
    />
  </div>,
  mountNode,
);
```
