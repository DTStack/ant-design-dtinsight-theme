---
order: 6
title:
  en-US: size
  zh-CN: 紧凑型
---

## zh-CN

size为small，列表及表头高度均为36px，其他参数保持不变
- 设置表格 `size="small"`
- 为表格添加类名 `dt-pagination-small` ，使得表格的分页行高为 36px

```jsx
import { Table } from 'antd';

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

ReactDOM.render(
  <div>
    <h4 style={{padding: '15px'}}>Small size table</h4>
    <Table
      columns={columns}
      dataSource={data}
      size={'small'}
      className="dt-pagination-small dt-table-border"
      pagination={pagination}
    />
  </div>,
  mountNode,
);
```
