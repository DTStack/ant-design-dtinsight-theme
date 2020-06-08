---
order: 2
title:
  zh-CN: 确认对话框
---

## zh-CN

使用 `confirm()` 可以快捷地弹出确认框

```jsx
import { Modal, Button } from 'antd';

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    title: '确认要删除该大屏？',
    content: '此操作后不可逆，确认要将对应文件删除？',
    okText: '删除',
    okType: 'danger',
    cancelText: '取消',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

ReactDOM.render(
  <div className="demo-modal-box">
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
  </div>,
  mountNode,
);
```
