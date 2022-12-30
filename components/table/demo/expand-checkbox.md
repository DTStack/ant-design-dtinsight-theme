---
order: 10
title:
  zh-CN: 展开行，Checkbox
---

## zh-CN

可展开的行有 Checkbox，某些列可能换行显示，注意展开后样式是否正确

<br />


```jsx
import { Table } from 'antd';


class App extends React.Component {
  state = {
    columns: [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Description', dataIndex: 'desc', key: 'desc', width: 200 },
    ],
    data: [
      {
        key: 1,
        name: `This is first name 1`,
        date: '2014-12-24 23:12:00',
        desc: 'Upgraded: 44',
        children: [
          {
            key: 11,
            name: `This is second name 1`,
            date: '2014-12-24 23:12:00',
            desc: 'Upgraded: 144, Upgraded: 144',
          },
          {
            key: 12,
            name: `This is second name 2`,
            date: '2014-12-24 23:12:00',
            desc: 'Upgraded: 156',
          },
        ]
      },
      {
        key: 2,
        name: `This is first name 2`,
        date: '2014-12-24 23:12:00',
        desc: 'Upgraded: 56, Upgraded: 56, Upgraded: 56',
      },
    ],
    expandedRowKeys: [1],
  }

  onExpandedRowsChange = (expandedRows) => {
    this.setState({ expandedRowKeys: expandedRows })
  }

  render() {
    const { columns, data, expandedRowKeys } = this.state;

    return (
      <Table
        rowkey="key"
        columns={columns}
        dataSource={data}
        expandedRowKeys={expandedRowKeys}
        rowSelection={{}}
        onExpandedRowsChange={this.onExpandedRowsChange}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
