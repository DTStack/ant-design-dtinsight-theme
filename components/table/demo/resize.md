---
order: 8
title:
  zh-CN: 可伸缩列
---

## zh-CN

伸缩表格在表头中间显示分割线，表格移入显示鼠标变十字，用户可左右拖动表格列宽，内容跟随拉伸大小变化，内容显示超出最大显示范围需要打点；


```jsx
import { Table } from 'antd';
import { Resizable } from 'react-resizable';

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
const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};
const pagination = {
  current: 1,
  pageSize: 10,
  size: 'small',
  total: 30,
  showTotal: (total) => <span>
    共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示15条
  </span>
}

const columnsNew = columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: handleResize(index),
      }),
    }));
function handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
};
const components = {
    header: {
      cell: ResizeableTitle,
    },
};
ReactDOM.render(
  <Table
    columns={columnsNew}
    components={components}
    dataSource={data}
    // className="dt-table-border"
    pagination={pagination}
    scroll={{ x: 1300, y: 500 }}
  />,
  mountNode,
);
```
