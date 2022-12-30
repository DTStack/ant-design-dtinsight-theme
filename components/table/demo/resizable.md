---
order: 11
title:
  zh-CN: 可伸缩列
---

## zh-CN

- 1、可伸缩列在使用时可以搭配 `dt-table-header-user-select-none`，让表头内容无法被选中，建议添加
- 2、可伸缩列需要在表头中间显示分割线，可为无边框类型表格添加类名 `dt-resizable-table`
- 3、拖动时可能误触发排序，只需要添加一个额外状态即可，判断是否在拖拽中，`tableColumnsResizing`，详见示例代码
- 4、width 必填，所有列占不满全部宽度时必须留一列不设置 width，让该列宽度自适应，建议任何时候都留一列不设宽度

> 复杂需求  
> 如果有树形表格、需要可伸缩列、大数据量时使用虚拟列表的需求，可以参考：https://react-jau5de.stackblitz.io/

```jsx
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import React from 'react';
class ResizableTitle extends React.Component {
  tableColumnsResizing: boolean;
  render() {
    const { onResize, width, onClick, ...restProps } = this.props;
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
        onResizeStart={() => (this.tableColumnsResizing = true)}
        onResizeStop={() => {
          setTimeout(() => {
            this.tableColumnsResizing = false;
          });
        }}
        onResize={onResize}
        draggableOpts={{
          enableUserSelectHack: false
        }}
      >
        <th
          onClick={(...args) => {
            // table column 在调整宽度时不响应 click 事件
            if (!this.tableColumnsResizing && onClick) {
              onClick(...args);
            }
          }}
          {...restProps}
        />
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
        width: 200,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        width: 200,
        minWidth: 140,
        sorter: (a, b) => a.amount - b.amount
      },
      {
        title: "Type",
        dataIndex: "type",
        width: 100,
        filters: [
          {
            text: 'income',
            value: 'income',
          },
        ],
      },
      {
        title: "Note",
        dataIndex: "note",
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
  getWidth = (width, column) => {
    const minWidth = column.minWidth || 80;
    const maxWidth = column.maxWidth || 1000;
    if (width > maxWidth) {
      return maxWidth;
    } else if (width < minWidth) {
      return minWidth;
    } else {
      return width;
    }
  }

  handleResize = (index) => (_, { size }) => {
    const newColumns = [...this.state.columns];
    newColumns[index] = { ...newColumns[index], width: this.getWidth(size.width, newColumns[index]) };
    this.setState({
      columns: newColumns
    });
  };

  render() {
    // disabledIdx 可选，3 表示禁用索引为 4 的列的可拖拽功能
    const disabledIdx = [3]
    const mergeColumns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: disabledIdx.includes(index) ? () => {} : (column) => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));
    return (
      <Table
        className="dt-resizable-table dt-table-header-user-select-none"
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
