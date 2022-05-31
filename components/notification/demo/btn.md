---
order: 0
title:
  zh-CN: 带操作按钮
---

## zh-CN

带操作按钮

```jsx
import { Button, notification } from 'antd';

const openNotificationWithIcon = type => {
    const btn = (
        <>
            <Button size="small" onClick={() => notification.close(key)} style={{ marginRight: 12 }}>
                Cancle
            </Button>
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        </>
    );
  notification[type]({
    message: '提示信息',
    btn,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  });
};

ReactDOM.render(
  <div className="demo-notification-box">
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
  </div>,
  mountNode,
);
```
