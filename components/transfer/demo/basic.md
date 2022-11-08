---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

基本用法

```jsx
import { Transfer } from 'antd';
import { useState } from 'react';

const mockData = Array.from({
    length: 20,
}).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
}));
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const App = () => {
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);

    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };
    
    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };
    const pagination = {
        current: 1,
        pageSize: 10,
        size: 'small',
        total: 20,
        showTotal: (total) => <span>
        共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示15条
        </span>
    };

    
    return (
        <Transfer
            showSearch
            className='dt-transfer-without-header-count'
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            render={(item) => item.title}
        />
    );
}

ReactDOM.render(
    <App />,
    mountNode,
);
```
