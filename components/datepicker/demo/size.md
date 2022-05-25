---
order: 1
title:
  zh-CN: 两种大小
---

## zh-CN

定义了两种尺寸（默认、小），高度分别为 32px 和 28px。

```jsx
import { Radio } from 'antd';
import { DatePicker } from '../../index';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div className="demo-datepicker-box">
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <DatePicker className="dt-ant-datepicker-basic" size={size} />
        <br />
        <MonthPicker className="dt-ant-datepicker-basic" size={size} placeholder="Select Month" />
        <br />
        <RangePicker className="dt-ant-datepicker-basic" size={size} />
        <br />
        <WeekPicker className="dt-ant-datepicker-basic" size={size} placeholder="Select Week" />
      </div>
    );
  }
}

ReactDOM.render(<PickerSizesDemo />, mountNode);
```
