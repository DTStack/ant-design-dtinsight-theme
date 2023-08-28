---
order: 2
title:
  zh-CN: 确认对话框
---

## zh-CN

使用 `confirm()` 可以快捷地弹出确认框；添加了 `dt-modal-delete-icon` 自定义类名，用法如 Delete 示例。

```jsx
import { Modal, Button } from 'antd';
import { CloseCircleFilled, InfoCircleTwoTone } from '@ant-design/icons'

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

function showCustomConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <InfoCircleTwoTone />,
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
    icon: <CloseCircleFilled className="dt-modal-delete-icon" />,
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showFooterDanger() {
  confirm({
    title: '确认要删除该大屏？',
    content: '此操作后不可逆，确认要将对应文件删除？',
    okText: '取消',
    cancelText: '删除',
    icon: <CloseCircleFilled className="dt-modal-delete-icon" />,
    okType: 'primary',
    cancelButtonProps: {
        danger: true,
        type: 'default',
        style: {
            background: '#FFFFFF',
            color: '#F96C5B',
        },
    },
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
    <Button onClick={showCustomConfirm}>Custom Icon Confirm</Button>
    <Button onClick={showFooterDanger}>Footer Danger</Button>
  </div>,
  mountNode,
);
```
