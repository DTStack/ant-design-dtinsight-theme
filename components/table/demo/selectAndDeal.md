---
order: 4
title:
  zh-CN: 可选择可操作
---

## zh-CN

可选择行，进行一系列操作

- 添加类名 `dt-table-border` 为表格设置外边框

```jsx
import React, { useState } from 'react';
import { Table, Tag, Pagination, Row, Col, Button, Divider, Radio } from 'antd';

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
  <Row style={{ width: '100%', alignItems: 'center' }}>
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
          共<span className="dt-pagination-totalCount">{total}</span>条数据，每页显示20条
        </span>}
      />
    </Col>
  </Row>
);

const App: React.FC = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  return (
    <div>
      <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
      </Radio.Group>
      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
        className="dt-table-border"
        pagination={false}
        footer={tableFooter}
      />
    </div>
  )
}

ReactDOM.render(<App />, mountNode);
```
