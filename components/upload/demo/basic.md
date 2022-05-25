---
order: 0
title:
  zh-CN: 点击上传
  en-US: Upload by clicking
---

## zh-CN

经典款式，用户点击按钮弹出文件选择框。
## 设计规范
- 提示文本距离上传按钮间距8px，上传按钮样式同次要按钮Button的icon+文字按钮样式
- 上传以后的回显部分，文件名字体12px Regular，色号#64698B，回显部分的矩形背景宽度默认264px，长度可根据场景自行调整，圆角半径4px，填充色#F5F5F8。

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.

```jsx
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

ReactDOM.render(
  <Upload {...props}>
    <Button icon={<UploadOutlined />}> Click to Upload</Button>
  </Upload>,
  mountNode,
);
```
