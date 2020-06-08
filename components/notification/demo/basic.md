---
order: 0
title:
  zh-CN: 基本用法
---

## zh-CN

基本使用(带图标)

```jsx
import { Button, notification } from 'antd';

const openNotificationWithIcon = type => {
  notification[type]({
    message: '提示信息',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <div className="demo-notification-box">
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </div>,
  mountNode,
);
```
