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

const loading = () => {
  const hide = message.loading('Action in progress..', 0);
  setTimeout(hide, 2500);
};

ReactDOM.render(
  <div className="demo-message-box">
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
    <Button onClick={loading}>Loading</Button>
  </div>,
  mountNode,
);
```
