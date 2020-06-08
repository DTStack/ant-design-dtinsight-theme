---
order: 1
title:
  zh-CN: 三种大小
---

## zh-CN

定义了三种尺寸（大、默认、小），高度分别为 36px、32px 和 28px。

```jsx
import { DatePicker, Radio } from 'antd';

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
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} placeholder="Select Month" />
        <br />
        <RangePicker size={size} />
        <br />
        <WeekPicker size={size} placeholder="Select Week" />
      </div>
    );
  }
}

ReactDOM.render(<PickerSizesDemo />, mountNode);
```
