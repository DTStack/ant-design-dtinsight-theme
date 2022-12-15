---
order: 2
title:
  en-US: Disabled
  zh-CN: 禁用标签
---

## zh-CN

- 为 Tag 添加类名 `dt-tag-disabled` ，使得 Tag 呈现禁用样式

```jsx
import { Tag } from 'antd';

const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

ReactDOM.render(
  <div>
    <Tag className="dt-tag-disabled" closable onClose={log}>Tag 1</Tag>
    <Tag className="dt-tag-disabled">标签内容</Tag>
  </div>,
  mountNode,
);
```
