---
order: 0
title:
  zh-CN: 基本用法
---

## zh-CN

简单的表格，最后一列是各种操作。

- 添加类名 `dt-table-border` 为表格设置外边框
- 添加类名 `dt-table-last-row-noborder` 为表格设置最后一行去掉下边框，一般在表格存在外边框时使用

```jsx
import { Table, Divider, Switch } from 'antd';

class App extends React.Component {
  state = { isShowPage: false };

  handleChangeShowPage = (checked) => {
    this.setState({
      isShowPage: checked
    })
  }

  render() {
    const { isShowPage } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      }
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
      }
    ];
    const pagination = {
      current: 1,
      pageSize: 10,
      size: 'small',
      total: 30,
      showTotal: (total) => <span>
        共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示15条
      </span>
    };
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
            <Switch checked={isShowPage} onChange={this.handleChangeShowPage} />
            <span style={{ marginLeft: 8 }}>是否展示分页</span>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={isShowPage ? pagination : false}
          className="dt-table-border dt-table-last-row-noborder"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
