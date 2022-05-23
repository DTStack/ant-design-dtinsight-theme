---
order: 3
title:
  en-US: Icon Usage
  zh-CN: 带背景图标
---

## zh-CN

背景标签，图标只做示例


```jsx
import { Tag } from 'antd';
import {
  TwitterOutlined
} from '@ant-design/icons';


ReactDOM.render(
  <div>
    <Tag icon={<TwitterOutlined />} color="geekblue">
      Twitter
    </Tag>
     <Tag icon={<TwitterOutlined />} color="orange">
      Twitter
    </Tag>
  </div>,
  mountNode,
);
```