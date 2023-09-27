---
order: 4
title:
  en-US: Icon Usage
  zh-CN: 带背景图标
---

## zh-CN

背景标签，图标只做示例

为组件添加类名`dt-ant-tag-icon`


```jsx
import { Tag } from 'antd';
import {
  TwitterOutlined
} from '@ant-design/icons';


ReactDOM.render(
  <div>
    <Tag icon={<TwitterOutlined />} color="geekblue" className="dt-ant-tag-icon">
      Twitter
    </Tag>
     <Tag icon={<TwitterOutlined />} color="orange" className="dt-ant-tag-icon">
      Twitter
    </Tag>
  </div>,
  mountNode,
);
```
