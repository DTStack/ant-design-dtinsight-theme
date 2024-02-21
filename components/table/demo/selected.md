---
order: 15
title:
  zh-CN: 选中样式
---

## zh-CN

点开详情后，表格上选中的数据增加选中样式

- 为 Table 添加 rowClassName `dt-row-selected`


```jsx
import React, { useState } from 'react';
import { Table, Button, Drawer } from 'antd';

const App = () => {
  const [selectedKey, setSelectedKey] = useState(undefined);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Button type="link" onClick={() => setSelectedKey(record?.key)}>
            {text}
        </Button>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      align: 'right',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      align: 'right',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 20,
      height: 160,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 18,
      height: 178,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 18,
      height: 170,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  return (
    <div>
      <Table
        rowKey="key"
        rowClassName={(record) => {
          if (record?.key === selectedKey) {
              return 'dt-row-selected';
          }
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Drawer title="Basic Drawer" 
        placement="right" 
        onClose={() => setSelectedKey(undefined)} 
        visible={selectedKey}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

ReactDOM.render(<App />, mountNode);
```
