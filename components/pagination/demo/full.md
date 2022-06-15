---
order: 0
title:
  zh-CN: Full完整型
  en-US: full
---

## zh-CN

最多显示 5 页内容，当数量多时默认显示前 5 页。

## en-US

The basic example.

```jsx
import React from 'react';
import { Pagination } from 'antd';

ReactDOM.render(
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={total => `共条${total}数据`}
  />,
  mountNode,
);
```
