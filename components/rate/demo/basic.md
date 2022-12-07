---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

基本用法

```jsx
import { Rate } from 'antd';
import { useState } from 'react';

const App = () => {
    const [value, setValue] = useState(2);

    return (
        <div>
            <Rate value={value} onChange={setValue} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    mountNode,
);
```
