---
order: 1
title:
  en-US: Controlled Usage
  zh-CN: 可操作标签
---

## zh-CN

标签中可以操作对其进行删除。可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件。

```jsx
import { Tag } from 'antd';

const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

ReactDOM.render(
  <div>
    <Tag closable onClose={log}>Tag 1</Tag>
    <Tag closable onClose={preventDefault}>
      标签内容
    </Tag>
  </div>,
  mountNode,
);
```
