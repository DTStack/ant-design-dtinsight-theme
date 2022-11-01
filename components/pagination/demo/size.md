---
order: 1
title:
  en-US: Right
  zh-CN: 居右
---

## zh-CN

- 为分页器添加类名 `dt-pagination-right` ，使得分页器居右

```jsx
import React from 'react';
import { Pagination } from 'antd';

ReactDOM.render(
  <Pagination
    className="dt-pagination-right"
    total={40}
    pageSize={5}
    defaultCurrent={1}
    showTotal={total => `共条40数据，每页5条`}
  />,
  mountNode,
);
```
