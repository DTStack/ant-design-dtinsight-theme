---
order: 6
title:
  zh-CN: 仅 Icon 按钮
  en-US: Only Icon Button
---

## zh-CN

重要操作时添加 `dt-btn-icon-primary` 类名展示蓝色 icon；

次要操作时添加 `dt-btn-icon` 类名展示灰色 icon；

```jsx
import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div className="demo-button-type">
    <Button icon={<ReloadOutlined />} className="dt-btn-icon-primary"></Button>
    <Button icon={<ReloadOutlined />} disabled className="dt-btn-icon-primary"></Button>
    <Button icon={<ReloadOutlined />} className="dt-btn-icon"></Button>
    <Button icon={<ReloadOutlined />} disabled className="dt-btn-icon"></Button>
  </div>,
  mountNode,
);
```
