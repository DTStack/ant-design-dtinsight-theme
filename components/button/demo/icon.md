---
order: 4
title:
  zh-CN: 自定义 Icon 按钮
  en-US: Icon Button
---

## zh-CN
普通类型按钮可添加 `dt-btn-custom-icon` 类名使用自定义 Icon 按钮和添加图标。

图标按钮可添加 `dt-btn-highlight` 类名使用自定义 Icon 按钮和添加图标。
```jsx
import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary" className="dt-btn-custom-icon">
        <span className="anticon">
            <i className="iconfont iconAPItiaoyong"></i>
        </span>
        一级按钮
    </Button>
    <Button type="primary" icon={<ReloadOutlined />} className="dt-btn-custom-icon">一级按钮</Button>
    <Button ghost className="dt-btn-custom-icon">
        <span className="anticon">
            <i className="iconfont iconAPItiaoyong"></i>
        </span>
        幽灵按钮
    </Button>
    <Button className="dt-btn-highlight">
        <span className="anticon">
            <i className="iconfont iconAPItiaoyong"></i>
        </span>
        图标按钮
    </Button>
    <Button icon={<ReloadOutlined />} className="dt-btn-highlight">图标按钮</Button>
  </div>,
  mountNode,
);
```
