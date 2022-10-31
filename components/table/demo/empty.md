---
order: 0
title:
  zh-CN: 无数据
---

## zh-CN

固定高度 400，缺省图标未垂直居中展示，而是离顶 32px

```jsx
import { Table } from 'antd';

class App extends React.Component {
  state = {};

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
    ];
    const data = [];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ height: 400 }}
          className="dt-table-border dt-table-last-row-noborder"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
