---
order: 1
title:
  zh-CN: 灰色背景(仅默认主题下使用)
---

## zh-CN

灰色背景中的表单需添加投影，去掉外边框

仅默认主题下使用，暗黑主题下使用无效

- 为组件添加类名`dt-radio-group`

```jsx
import { Radio } from 'antd';

ReactDOM.render(
  <div className="demo-radio-shadow">
    <Radio.Group className="dt-radio-group" defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">杭州</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </div>,
  mountNode
);
```
