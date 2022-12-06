---
order: 5
title:
  zh-CN: 文本域
---

## zh-CN

文本域，可拖动

```jsx
import { Input } from 'antd';
const { TextArea } = Input;

ReactDOM.render(
  <TextArea placeholder="请输入描述，长度限制在200字符以内" maxLength={200} />,
  mountNode,
);
```
