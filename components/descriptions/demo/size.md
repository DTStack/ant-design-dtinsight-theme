---
order: 2
title:
  zh-CN: 自定义尺寸
  en-US: Custom size
---

## zh-CN

自定义尺寸，适应在各种容器中展示。
为组件添加类名dt-descriptions-custom-display 实现自定义尺寸展示


## en-US

Custom sizes to fit in a variety of containers.

```jsx
import { Descriptions, Radio, Button } from 'antd';

class Demo extends React.Component {
  state = {
    size: 'default',
  };

  onChange = e => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={this.state.size}>
          <Radio value="default">default</Radio>
          <Radio value="middle">middle</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
        <br />
        <br />
        <Descriptions
          bordered
          title="Custom Size"
          size={this.state.size}
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
            Storage space: 101 GB
            <br />
            Replication factor: 31
            <br />
            Region: East China 11
            <br />
            Storage space: 13 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 21
            <br />
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <Descriptions
          className='dt-descriptions-custom-display'
          title="Custom Size"
          size={this.state.size}
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
