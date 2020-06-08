---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

```jsx
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div className="demo-datepicker-box">
    <DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" />
  </div>,
  mountNode,
);
```
