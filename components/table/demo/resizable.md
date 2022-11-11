---
order: 10
title:
  zh-CN: 可伸缩列
---

## zh-CN

- 1、可伸缩列需要在表头中间显示分割线，需要为无边框类型表格添加类名`dt-resizable-table`，加上表头中间的分割线
- 2、具体使用可参考下方代码

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
        width: 300
      },
      {
        title: "Action",
        key: "action",
        width: 200,
        fixed: "right",
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

  // minWidth、maxWidth 可选
  getWidth = (width) => {
    const minWidth = 100;
    const maxWidth = 300;
    if (width > maxWidth) {
      return maxWidth;
    } else if (width < minWidth) {
      return minWidth;
    } else {
      return width;
    }
  }

  handleResize = (idx) => (_, { size }) => {
    const newColumns = [...this.state.columns];
    newColumns[idx] = { ...newColumns[idx], width: this.getWidth(size.width) };
    this.setState({
      columns: newColumns
    });
  };

  render() {
    // disabledIdx 可选，3 表示禁用索引为 4 的列的可拖拽功能
    const disabledIdx = [3]
    const mergeColumns = this.state.columns.map((col, idx) => ({
      ...col,
      onHeaderCell: disabledIdx.includes(idx) ? () => {} : (column) => ({
        width: column.width,
        onResize: this.handleResize(idx)
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
        scroll={{ x: 600 }}
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
