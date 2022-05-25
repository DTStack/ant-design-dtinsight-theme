---
order: 1
title:
  zh-CN: 用户头像
  en-US: Avatar
---

## zh-CN

点击上传用户头像，并使用 `beforeUpload` 限制用户上传的图片格式和大小。
## 设计规范
* 添加类名 dt-upload-button 为上传按钮设置样式
* 上传可点击区域默认80px x 80px ，大小根据场景可适配不同尺寸
* 可点击区域内的文字和图标颜色均为#B1B4C5，文字字号12px Regular，图标尺寸24px X 24px
* 默认状态下点击区域矩形框描边为虚线，虚线颜色为#D8DAE2，内部填充颜色为#F9F9FA，矩形框圆角半径4px

## en-US

Click to upload user's avatar, and validate size and format of picture with `beforeUpload`.


```jsx
import { Upload,  message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div className="dt-upload-button">
        {this.state.loading ? <LoadingOutlined/> : <PlusOutlined />}
        <div>Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}
ReactDOM.render(<Avatar />, mountNode);
```


```css
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
```
