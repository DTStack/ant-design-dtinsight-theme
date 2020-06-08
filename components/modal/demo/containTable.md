---
order: 5
title:
  zh-CN: 包含表格
---

## zh-CN

弹框中包含表格

```jsx
import { Modal, Button, Table } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ];

    const pagination = {
      current: 1,
      pageSize: 10,
      size: 'small',
      total: 30
    }
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          width={680}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Table
            columns={columns}
            dataSource={data}
            size={'middle'}
            style={{ border: '1px solid #dddddd' }}
            className="dt-pagination-lower"
            pagination={pagination}
          />
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
