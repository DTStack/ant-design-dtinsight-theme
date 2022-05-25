---
order: 1
title:
  zh-CN: 基础使用
---

## zh-CN

- 基础使用


```jsx
import { Radio } from 'antd';

ReactDOM.render(
  <div>
    <div style={{ marginBottom: '16px' }}>
        <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button disabled value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
    </div>
    <div style={{ marginBottom: '16px' }}>
        <Radio.Group defaultValue="a" size="middle">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button disabled value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
    </div>
    <div style={{ marginBottom: '16px' }}>
        <Radio.Group defaultValue="a" size="small">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button disabled value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
    </div>
    <div style={{ marginBottom: '16px' }}>
        <Radio.Group defaultValue="a" size="small">
            <Radio disabled value="a">Hangzhou</Radio>
            <Radio disabled value="b">Shanghai</Radio>
            <Radio value="c">Beijing</Radio>
            <Radio value="d">Chengdu</Radio>
        </Radio.Group>
    </div>
  </div>,
  mountNode
);
```
