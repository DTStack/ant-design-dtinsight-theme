---
order: 2
title:
  zh-CN: 无数据 - 缺省图距顶部 20%
---

## zh-CN

固定高度 400，缺省图标距顶部 20%
- 添加 `dt-table-empty-top-20-percent` 类名，可以让缺省图距顶部 20%，大部分场景适用，不适用时使用默认的 margin 间距即可。

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
          className="dt-table-border dt-table-empty-top-20-percent"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
