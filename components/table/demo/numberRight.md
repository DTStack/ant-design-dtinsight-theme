---
order: 11
title:
  zh-CN: 数字列居右
---

## zh-CN

数字列内容和表头居右显示

- 为 Table 添加子产品自定义的类名，在类名下按如下示例写样式，`nth-child`的值为第几列，从1开始  

`
.my-custom-table-class-name {
    // 数字列表头居右显示
    .ant-table-thead {
        .ant-table-cell {
            &:nth-child(4), &:nth-child(5) {
                .ant-table-column-sorters .ant-table-column-title, .ant-table-filter-column .ant-table-column-title {
                    flex: 1;
                }
            }
        }
    }
}
`


```jsx
import { Table, Tag, Pagination, Row, Col, Button, Divider } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [
      {
        text: 'John',
        value: 'John',
      },
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    align: 'right'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'right',
    filters: [
      {
        text: 20,
        value: 20,
      },
      {
        text: 18,
        value: 18,
      },
    ],
  },
  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
    align: 'right',
    sorter: (a, b) => a.age - b.age,
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
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 20,
    height: 160,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 18,
    height: 178,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 18,
    height: 170,
    address: 'Sidney No. 1 Lake Park',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  })
};

tableFooter =  () => (
  <Row style={{ width: '100%' }}>
    <Col span={12}>
      <Button style={{ marginRight: 10 }} type="primary">冻结实验</Button>
      <Button>解冻实验</Button>
    </Col>
    <Col span={12}>
      <Pagination
        current={1}
        pageSize={10}
        size='small'
        total={30}
        style={{ float: 'right' }}
        showTotal={(total) => <span>
          共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示20条
        </span>}
      />
    </Col>
  </Row>
);

ReactDOM.render(
  <div>
    <Table
      bordered
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      className="my-custom-table-class-name"
      pagination={false}
      footer={tableFooter}
    />
  </div>
  , mountNode);
```
