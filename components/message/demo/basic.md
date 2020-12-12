---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

最简单的用法，适用于信息提醒反馈。

共有四种样式 infor、success、warning、error。

```jsx
import { message, Button } from 'antd';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

const info = () => {
  message.info('This is a normal message');
};

ReactDOM.render(
  <div className="demo-message-box">
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </div>,
  mountNode,
);
```
