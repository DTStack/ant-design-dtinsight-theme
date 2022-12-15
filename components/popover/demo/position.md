---
order: 1
title:
  zh-CN: 位置
  en-US: Position
---

## zh-CN

位置有六个方向。

## en-US
There are 6 placement options available.


```jsx
import { Popover, Button } from 'antd';

const text = <span>Title</span>;
const content = (
  <div style={{ fontSize: '12px', color:'#8B8FA8', fontWeight: 500 }}>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const lineMargin = 20;

ReactDOM.render(
  <div className="position-demo">
    <div style={{ whiteSpace: 'nowrap' }}>
      <Popover placement="topLeft" title={text} content={content} trigger="click">
        <Button>TL</Button>
      </Popover>
      <Popover placement="top" title={text} content={content} trigger="click">
        <Button>Top</Button>
      </Popover>
      <Popover placement="topRight" title={text} content={content} trigger="click">
        <Button>TR</Button>
      </Popover>
    </div>
    
    <div style={{ clear: 'both', whiteSpace: 'nowrap', marginTop: lineMargin }}>
      <Popover placement="bottomLeft" title={text} content={content} trigger="click">
        <Button>BL</Button>
      </Popover>
      <Popover placement="bottom" title={text} content={content} trigger="click">
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <Button>BR</Button>
      </Popover>
    </div>
  </div>,
  mountNode,
);
```

<style>
.position-demo .ant-btn{
  margin-right: 8px;
}
</style>
