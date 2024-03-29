---
order: 0
title:
  zh-CN: 数栈的图标
---

## zh-CN

以上图标使用数栈的图标替换了 antd 的图标，使用方法、参数按 antd 的使用建议即可。

大部分实底图标需要配合 theme 的自定义类名使用，具体使用方式可以点击上方图标示例复制代码：


```jsx
import {
  BarsOutlined,
  CalendarOutlined,
  CaretDownFilled,
  CaretRightFilled,
  CaretUpFilled,
  CheckCircleFilled,
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
  CloseOutlined,
  DeleteOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  DownOutlined,
  DownloadOutlined,
  DragOutlined,
  EditOutlined,
  EllipsisOutlined,
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
  ExportOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FilterFilled,
  HomeOutlined,
  ImportOutlined,
  LayoutOutlined,
  LeftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  MinusCircleFilled,
  MinusCircleOutlined,
  MinusOutlined,
  MinusSquareOutlined,
  MoreOutlined,
  PaperClipOutlined,
  PlusCircleFilled,
  PlusCircleOutlined,
  PlusOutlined,
  PlusSquareOutlined,
  QuestionCircleFilled,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  StarOutlined,
  StarFilled,
  SwapOutlined,
  SwapRightOutlined,
  UpOutlined,
  UploadOutlined,
  UserOutlined,
  WarningFilled,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import { message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

const fileNameToClassName = {
  BarsOutlined: 'anticon-bars',
  CalendarOutlined: 'anticon-calendar',
  CaretDownFilled: 'anticon-caret-down',
  CaretRightFilled: 'anticon-caret-right',
  CaretUpFilled: 'anticon-caret-up',
  CheckCircleFilled: 'dt-anticon-check-circle-fill',
  CheckCircleOutlined: 'anticon-check-circle',
  CheckOutlined: 'anticon-check',
  ClockCircleOutlined: 'anticon-clock-circle',
  CloseCircleFilled: 'anticon-close-circle',
  CloseOutlined: 'anticon-close',
  DeleteOutlined: 'anticon-delete',
  DoubleLeftOutlined: 'anticon-double-left',
  DoubleRightOutlined: 'anticon-double-right',
  DownOutlined: 'anticon-down',
  DownloadOutlined: 'anticon-download',
  DragOutlined: 'anticon-drag',
  EditOutlined: 'anticon-edit',
  EllipsisOutlined: 'anticon-ellipsis',
  ExclamationCircleFilled: 'dt-anticon-exclamation-circle-fill',
  ExclamationCircleOutlined: 'anticon-exclamation-circle',
  ExportOutlined: 'anticon-export',
  EyeInvisibleOutlined: 'anticon-eye-invisible',
  EyeOutlined: 'anticon-eye',
  FilterFilled: 'anticon-filter',
  HomeOutlined: 'anticon-home',
  ImportOutlined: 'anticon-import',
  LayoutOutlined: 'anticon-layout',
  LeftOutlined: 'anticon-left',
  MenuFoldOutlined: 'anticon-menu-fold',
  MenuUnfoldOutlined: 'anticon-menu-unfold',
  MessageOutlined: 'anticon-message',
  MinusCircleOutlined: 'anticon-minus-circle',
  MinusCircleFilled: 'dt-anticon-minus-circle-fill',
  MinusOutlined: 'anticon-minus',
  MinusSquareOutlined: 'anticon-minus-square',
  MoreOutlined: 'anticon-more',
  PaperClipOutlined: 'anticon-paper-clip',
  PlusCircleOutlined: 'anticon-plus-circle',
  PlusCircleFilled: 'dt-anticon-plus-circle-fill',
  PlusOutlined: 'anticon-plus',
  PlusSquareOutlined: 'anticon-plus-square',
  QuestionCircleFilled: 'dt-anticon-question-circle-fill',
  QuestionCircleOutlined: 'anticon-question-circle',
  ReloadOutlined: 'anticon-reload',
  RightOutlined: 'anticon-right',
  SearchOutlined: 'anticon-search',
  SettingOutlined: 'anticon-setting',
  StarOutlined: 'anticon-star',
  StarFilled: 'dt-anticon-star-fill',
  SwapOutlined: 'anticon-swap',
  SwapRightOutlined: 'anticon-swap-right',
  UpOutlined: 'anticon-up',
  UploadOutlined: 'anticon-upload',
  UserOutlined: 'anticon-user',
  WarningFilled: 'anticon-warning',
  ZoomInOutlined: 'anticon-zoom-in',
  ZoomOutOutlined: 'anticon-zoom-out',
}

const getCopyContent = (name) => {
  if (fileNameToClassName[name].includes('dt-')) {
    return `<${name} className="${fileNameToClassName[name]}" />`
  }
  return name
}

const getCustomIconItem = (name) => {
  const copyContent = getCopyContent(name)
  return (
    <div className="icon-item" key={name}>
      <CopyToClipboard
        text={copyContent}
        onCopy={() => {
          message.success(`${copyContent} 复制成功`)
        }}
      >
        <div className="icon-name">
          {
            React.createElement(Icon[name], { className: fileNameToClassName[name] })
          }
          <p>{name}</p>
        </div>
      </CopyToClipboard>
    </div>
  )
}

ReactDOM.render(
  <div className="icon-demo-content">
    <h3>替换后的图标</h3>
    <div className="icon-box">
      {
        Object.keys(fileNameToClassName).map(item => getCustomIconItem(item))
      }
    </div>
  </div>,
  mountNode,
);
```
