---
order: 6
title:
  zh-CN: 带单位输入框
  en-US: unit input 
---

## zh-CN

带单位输入框。

## en-US

unit input example.

```jsx
import { Input } from 'antd';

ReactDOM.render(
  <div>
   <div>
        <Input addonAfter="%" placeholder="小数保留后两位"/>
    </div>
    <div style={{ marginTop: '16px'}}>
        <Input addonBefore="¥" placeholder="小数保留后两位"/>
    </div>
  </div>,
  mountNode
);
```
