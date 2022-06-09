---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，浮层的大小由内容区域决定。

## en-US

The most basic example. The size of the floating layer depends on the contents region.

```jsx
import { Popover, Button } from 'antd';

const content = (
  <div style={{ fontSize: '12px', color:'#8B8FA8', fontWeight: 500 }}>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
   <div>
    <Popover content={content} title="Title" trigger="hover" overlayStyle={{ fontSize: '14px', color: '#3D446E' }}>
      <Button style={{marginRight: 8}}>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button style={{marginRight: 8}}>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>,
  mountNode,
);
```

<style>
.ant-popover-content p {
  margin: 0;
}
</style>
