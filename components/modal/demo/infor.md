---
order: 3
title:
  zh-CN: 信息提示
---

## zh-CN

各种类型的信息提示，只提供一个按钮用于关闭。

```jsx
import { Modal, Button } from 'antd';

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    title: 'This is an success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

function onlyTitle() {
  Modal.info({
    title: 'This is an only title message',
  });
}

function onlyContent() {
  Modal.info({
    content: 'This is an only content message. This is an only content message. This is an only content message.',
  });
}

ReactDOM.render(
  <div className="demo-modal-box">
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
    <Button onClick={onlyTitle}>Only title</Button>
    <Button onClick={onlyContent}>Only content</Button>
  </div>,
  mountNode,
);
```
