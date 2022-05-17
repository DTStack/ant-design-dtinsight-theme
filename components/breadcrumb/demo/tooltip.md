---
order: 1
title:
  zh-CN: 文本标签截断
---

## zh-CN

使用省略号截断内容 ，鼠标 hover 后使用 tooltip 展示全部内容。

```jsx
import { Breadcrumb, Tooltip } from 'antd';

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item>
        <a href="">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
        <Tooltip title="Application Center Application Center ">
            <a>Application Center...</a>
        </Tooltip>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```
