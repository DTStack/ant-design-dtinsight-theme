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
import { PlusSquareOutlined, ReloadOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div className="demo-button-type">
    <Button type="primary" className="dt-btn-custom-icon">
        <span className="anticon">
            <i className="iconfont iconAPItiaoyong"></i>
        </span>
        一级按钮
    </Button>
    <Button ghost className="dt-btn-custom-icon">
        <span className="anticon">
            <i className="iconfont iconAPItiaoyong"></i>
        </span>
        ghost 按钮
    </Button>
    <Button className="dt-btn-highlight">
        <span className="anticon">
            <i className="iconfont iconAPItiaoyong"></i>
        </span>
        图标按钮
    </Button>

    <br/>

    <Button className="dt-btn-custom-icon" style={{ color: "#1D78FF" }} size="large" icon={<PlusSquareOutlined />}>一级按钮</Button>
    <Button className="dt-btn-custom-icon" size="middle" icon={<PlusSquareOutlined />}>一级按钮</Button>
    <Button className="dt-btn-custom-icon" size="small" icon={<PlusSquareOutlined />}>一级按钮</Button>

    <br/>

    <Button className="dt-btn-custom-icon" type="link" size="large" icon={<PlusSquareOutlined />}>一级按钮</Button>
    <Button className="dt-btn-custom-icon" type="link" size="middle" icon={<PlusSquareOutlined />}>一级按钮</Button>
    <Button className="dt-btn-custom-icon" type="link" size="small" icon={<PlusSquareOutlined />}>一级按钮</Button>
  </div>,
  mountNode,
);
```
