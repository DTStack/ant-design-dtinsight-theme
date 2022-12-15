---
order: 3
title:
  en-US: Status Usage
  zh-CN: 状态标签
---

## zh-CN

应用于表格，列表等描述状态标签

边框#D8DAE2，字号 12px,字体颜色#3D446E，圆点显示对应状态；
预设五种状态颜色
- 圆点样式通过 color 为 success、 processing、error、default、warning 来代表不同的状态。


```jsx
import { Tag } from 'antd';


ReactDOM.render(
  <div>
    <Tag color="success">
        标签文字
    </Tag>
    <Tag color="processing">
      标签文字
    </Tag>
    <Tag color="error">
      标签文字
    </Tag>
    <Tag color="warning">
      标签文字
    </Tag>
    <Tag color="default">
      标签文字
    </Tag>
  </div>,
  mountNode,
);
```
