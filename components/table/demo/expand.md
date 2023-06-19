---
order: 10
title:
  zh-CN: 展示每行数据更详细的信息
---

## zh-CN

- 修复内嵌表格数据为空展示问题

<br />


```jsx
import { Table, Badge, Menu, Dropdown, Icon, Pagination, Switch } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

class App extends React.Component {
  state = { isShowData: false };

expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
          title: 'Status',
          key: 'state',
          render: () => (
          <span>
              <Badge status="success" />
              Finished
          </span>
          ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          width: 200,
          fixed: 'right',
          render: () => (
          <span className="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <Dropdown overlay={menu}>
              <a>
                  More <Icon type="down" />
              </a>
              </Dropdown>
          </span>
          ),
      }
    ]

    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56',
      });
    }
    const { isShowData } = this.state

    return (<div>
      <div style={{ marginBottom: 20 }}>
        <Switch checked={isShowData} onChange={this.handleChangeShowData} />
        <span className="demo-switch-desc">是否展示数据</span>
      </div>
      <Table columns={columns} dataSource={isShowData ? data : []} pagination={false} />
    </div>)
  }

  handleChangeShowData = (checked) => {

    this.setState({
      isShowData: checked
    })
  }

  getData = () => {
    const data = [{
      key: 0,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00'
    }];
    return data
  }

  render() {
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name', width: 200, fixed: 'left' },
      { title: 'Platform', dataIndex: 'platform', key: 'platform' },
      { title: 'Version', dataIndex: 'version', key: 'version' },
      { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      { title: 'Creator', dataIndex: 'creator', key: 'creator' },
      { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
      { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
    ]
    const pagination = {
      current: 1,
      pageSize: 15,
      size: 'small',
      total: 30,
      showTotal: (total) => <span>
        共<span className="dt-pagination-totalCount">{total}</span>条数据，每页显示15条
      </span>
    }

    return (
      <Table
        className="dt-table-fixed-contain-footer"
        style={{ height: 'calc(100vh - 600px)' }}
        scroll={{ y: true, x: 1300 }}
        columns={columns}
        expandable={{expandedRowRender: () => this.expandedRowRender }}
        dataSource={this.getData()}
        pagination={false}
        footer={() => {
            return <Pagination {...pagination} />
        }}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
