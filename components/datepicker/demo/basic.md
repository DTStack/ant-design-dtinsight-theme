---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

```jsx
import { DatePicker } from '../../index';
import moment from 'moment';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

ReactDOM.render(
  <div className="demo-datepicker-box">
    <DatePicker onChange={onChange} className="dt-ant-datepicker-basic" />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" className="dt-ant-datepicker-basic" />
    <br />
    <RangePicker onChange={onChange} className="dt-ant-datepicker-basic" />
    <br />
    <WeekPicker disabledDate={disabledDate} onChange={onChange} placeholder="Select week" className="dt-ant-datepicker-basic" />
  </div>,
  mountNode,
);
```
