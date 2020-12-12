---
order: 4
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件添加类名`dt-form-light-bg`
- 设置组件的属性 `dropdownClassName` 为`dt-form-light-bg`

```jsx
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div className="demo-datepicker-light demo-datepicker-box">
    <DatePicker className="dt-form-light-bg" dropdownClassName="dt-form-light-bg" defaultValue={moment('2015-06-06', dateFormat)} />
    <br />
    <MonthPicker className="dt-form-light-bg" dropdownClassName="dt-form-light-bg" defaultValue={moment('2015-06', 'YYYY-MM')} />
    <br />
    <RangePicker
      className="dt-form-light-bg"
      dropdownClassName="dt-form-light-bg"
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
    />
  </div>,
  mountNode
);
```
