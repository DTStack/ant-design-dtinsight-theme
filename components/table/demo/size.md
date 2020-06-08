---
order: 3
title:
  en-US: size
  zh-CN: 紧凑型
---

## zh-CN

紧凑型的列表，用于弹窗、侧边栏或者其他浮层里的，这种根据比例，相应改小列表高度为 44px,其他参数保持不变。

- 设置表格 `size="middle"`
- 为表格添加类名 `dt-pagination-lower` ，使得表格的分页行高为 44px

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
    <Table
      columns={columns}
      dataSource={data}
      size={'middle'}
      className="dt-pagination-lower dt-table-border"
      pagination={pagination}
    />
  </div>,
  mountNode,
);
```
