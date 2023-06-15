---
order: 3
title:
  zh-CN: 无数据横向滚动的表格，缺省图居中
---

## zh-CN

固定高度 300 横向滚动的表格，缺省图标默认垂直居中展示

```jsx
import { Table } from 'antd';

class App extends React.Component {
  state = {};

  render() {
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
    return (
      <div>
        <Table
          columns={columns}
          dataSource={[]}
          pagination={false}
          style={{ height: '300px' }}
          scroll={{ x: 1300, y: true }}
          className="dt-table-border dt-table-last-row-noborder dt-table-fixed-contain-footer"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
