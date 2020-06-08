---
order: 1
title:
  zh-CN: 全部关闭
---

## zh-CN

有关闭全部按钮

- 为全部关闭按钮添加样式 `dt-notification-close-btn`

```jsx
import { Button, notification } from 'antd';

const openNotificationWithIcon = type => {
  notification[type]({
    message: <span>
        提示信息
        <a className='dt-notification-close-btn'>全部关闭</a>
    </span>,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <div className="demo-notification-box">
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
  </div>,
  mountNode,
);
```
