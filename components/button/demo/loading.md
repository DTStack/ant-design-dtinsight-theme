---
order: 7
title:
  zh-CN: 加载按钮
  en-US: Loading Button
---

## zh-CN

primary 按钮在 loading 时，背景色为 #BBD6FF。

```jsx
import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div className="demo-button-type">
    <Button loading>加载中</Button>
    <Button loading type="primary">加载中</Button>
    <Button loading type="primary" size="small">加载中</Button>

    <Button icon={<ReloadOutlined />} loading type="primary"></Button>
    <Button icon={<ReloadOutlined />} loading type="primary" size="small"></Button>

    <Button loading type="link">按钮</Button>
  </div>,
  mountNode,
);
```
