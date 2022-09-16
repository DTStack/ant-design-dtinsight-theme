---
order: 8
title:
  zh-CN: 可伸缩列
---

## zh-CN

1、可伸缩列需要在表头中间显示分割线，需要为无边框类型表格添加类名`dt-resizable-table`，加上表头右侧分割线

```jsx
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import React from 'react';
class ResizableTitle extends React.Component {
  render() {
    const { onResize, width, ...restProps } = this.props;
    return !width ? (
      <th {...restProps} />
    ) : (
      <Resizable
        width={width}
        height={0}
        handle={
          <span
            className="react-resizable-handle"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        }
        onResize={onResize}
        draggableOpts={{
          enableUserSelectHack: false
        }}
      >
        <th {...restProps} />
      </Resizable>
    );
  }
}

class App extends React.Component {
  state = {
    columns: [
      {
        title: "Date",
        dataIndex: "date",
        width: 200
      },
      {
        title: "Amount",
        dataIndex: "amount",
        width: 100,
        sorter: (a, b) => a.amount - b.amount
      },
      {
        title: "Type",
        dataIndex: "type",
        width: 100
      },
      {
        title: "Note",
        dataIndex: "note",
        width: 100
      },
      {
        title: "Action",
        key: "action",
        render: () => <a>Delete</a>
      }
    ],
    data: [
      {
        key: 0,
        date: "2018-02-11",
        amount: 120,
        type: "income",
        note: "transfer"
      },
      {
        key: 1,
        date: "2018-03-11",
        amount: 243,
        type: "income",
        note: "transfer"
      },
      {
        key: 2,
        date: "2018-04-11",
        amount: 98,
        type: "income",
        note: "transfer"
      }
    ]
  };

  handleResize = (index) => (_, { size }) => {
    const newColumns = [...this.state.columns];
    newColumns[index] = { ...newColumns[index], width: size.width };
    this.setState({
      columns: newColumns
    });
  };

  render() {
    const mergeColumns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));
    return (
      <Table
        className="dt-resizable-table"
        components={{
          header: {
            cell: ResizableTitle
          }
        }}
        columns={mergeColumns}
        dataSource={this.state.data}
      />
    );
  }
}


ReactDOM.render(
  <App/>,
  mountNode,
);
```
