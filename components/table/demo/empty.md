---
order: 1
title:
  zh-CN: 无数据，缺省图距顶部 32px
---

## zh-CN

固定高度 300，缺省图标未垂直居中展示，而是默认距顶部 32px

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
          style={{ height: 300 }}
          className="dt-table-border dt-table-last-row-noborder"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
