---
order: 0
title:
  zh-CN: 基本用法
---

## zh-CN

1、简单的表格，最后一列是各种操作。

- 添加类名 `dt-table-last-row-noborder` 为表格设置最后一行去掉下边框，一般在表格存在外边框时使用

- 添加类名 `dt-table-top-border` 为表格设置上边框

<br />

2、纯文本换行的情况，需要为 columns 添加`.dt-table-multi-line`，参考`Name`列，每次换行增加20px的高度

<br />


```jsx
import { Table, Switch, Divider, Input } from 'antd';

class App extends React.Component {
  state = { isShowPage: false, smallSize: false };

  handleChangeShowPage = (checked) => {
    this.setState({
      isShowPage: checked
    })
  }

  render() {
    const { isShowPage, smallSize } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        className: 'dt-table-multi-line',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: 'right',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text) => (<Input value={text} size={smallSize && 'small'} />),
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
        name: 'John Brownllllllll',
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
            <span className="demo-switch-desc">是否展示分页</span>
            <Switch checked={smallSize}  onChange={(checked) => this.setState({smallSize: checked})} />
            <span className="demo-switch-desc">展示最小size</span>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          size={smallSize && 'small'}
          pagination={isShowPage ? pagination : false}
          className={`${smallSize ? 'dt-pagination-small' : ''} dt-table-last-row-noborder dt-table-top-border`}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
