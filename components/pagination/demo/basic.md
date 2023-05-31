---
order: 0
title:
  zh-CN: 基础分页
  en-US: Basic
---

## zh-CN

最多显示 5 页内容，当数量多时默认显示前 5 页。

- 为分页器总条数添加类名 `dt-pagination-totalCount`，高亮显示

## en-US

The basic example.

```jsx
import React from 'react';
import { Pagination } from 'antd';

ReactDOM.render(
  <Pagination 
    showTotal={total => <span>
        共<span className="dt-pagination-totalCount">{total}</span>条数据，每页5条
    </span>}
    defaultCurrent={1} 
    pageSize={5}
    total={40} />,
  mountNode,
);
```
