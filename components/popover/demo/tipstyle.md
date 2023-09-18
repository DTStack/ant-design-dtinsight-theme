---
order: 3
title:
  zh-CN: 弹出窗样式
  en-US: Popover style
---

## zh-CN

弹出窗不同

## en-US

The most basic example. The size of the floating layer depends on the contents region.

```jsx
import { Popover, Button, Popconfirm } from 'antd';

const content = (
  <div style={{ fontSize: '12px', color:'#8B8FA8', fontWeight: 500 }}>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const cancel = () => {
    console.log("cancel");
}
const confirm = () => {
    console.log('confirm');
}


ReactDOM.render(
   <div className='tip-style'>
    <Popover content={content} title="Title" trigger="click" overlayStyle={{ fontSize: '14px', color: '#3D446E' }}>
      <Button style={{marginRight: 8}}>弹出框【带标题】</Button>
    </Popover>
    <Popconfirm
        title="Are you sure delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
    >
        <Button style={{marginRight: 8}}>弹出框【带标题与按钮】</Button>
    </Popconfirm>
    <Popover content={content} trigger="click">
      <Button style={{marginRight: 8}}>弹出框【不带标题】</Button>
    </Popover>
    <Popconfirm
        title="Are you sure delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
    >
        <Button style={{marginRight: 8}}>弹出框【不带标题但带按钮】</Button>
    </Popconfirm>
  </div>,
  mountNode,
);
```

<style>
.ant-popover-content p {
  margin: 0;
}
.tip-style .ant-btn {
  margin-bottom: 8px;
}
</style>
