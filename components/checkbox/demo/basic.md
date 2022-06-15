---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

```jsx
import { Checkbox } from 'antd';
class NormalCheckBox extends React.Component {
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

  render() {
    const options = [
        {
            label: 'Apple',
            value: 'Apple',
            disabled: true,
        },
        {
            label: 'Pear',
            value: 'Pear',
        },
        {
            label: 'Orange',
            value: 'Orange',
            disabled: true,
        },
    ];

    return (
      <Checkbox.Group options={options} defaultValue={['Pear', 'Orange']} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(<NormalCheckBox />, mountNode);
```
