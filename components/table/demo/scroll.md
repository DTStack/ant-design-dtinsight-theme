---
order: 2
title:
  zh-CN: 内容超出范围
---

## zh-CN

当表格内容较多超出可视范围时，可左右、上下滚动。

宽度超出：

- 单元格内字数太多，超过后省略 hover 显示 ( columns 中添加 `ellipsis: true` 可直接设置超出显示省略，但仅限于该列内容为简单文字，如内容为其他复杂组件，则不生效)
- 如果列太多整体宽度超出最大宽度后固定最后一列，左边内容做滚动
- 若左边有多选框滑动时候也做固定，只中间部分做滚动。

高度超出：固定底部操作栏和表头内容区域做滚动。

```jsx
import { Table, Divider } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: 200, fixed: 'left', },
  { title: 'Age', dataIndex: 'age', key: 'age', width: 100 },
  { title: 'Address', dataIndex: 'address', key: 'address', width: 200, ellipsis: true },
  { title: 'description', dataIndex: 'description', key: 'description', width: 400 },
  {
    title: 'Action',
    dataIndex: '',
    width: 200,
    key: 'x',
    fixed: 'right',
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
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

const pagination = {
  current: 1,
  pageSize: 10,
  size: 'small',
  total: 80,
  showTotal: (total) => <span>
    共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示15条
  </span>
}

ReactDOM.render(
  <Table
    columns={columns}
    dataSource={data}
    className="dt-table-border"
    pagination={pagination}
    scroll={{ x: 1300, y: 500 }}
  />,
  mountNode,
);
```
