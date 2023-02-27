---
order: 8
title:
  zh-CN: 前缀和后缀
  en-US: prefix and suffix
---

## zh-CN

在输入框上添加前缀或后缀图标。

## en-US

Add a prefix or suffix icons inside input.

```tsx
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Input
      placeholder="小数保留后两位"
      suffix={
        <Tooltip title="小数保留后两位">
          <InfoCircleOutlined />
        </Tooltip>
      }
    />
  </>
);

ReactDOM.render(
  <App />,
  mountNode,
);
```
