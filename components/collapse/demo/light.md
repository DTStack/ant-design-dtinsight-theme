---
order: 3
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件添加类名`dt-collapse-light-bg`
- 为存在浮层的组件相关属性设置类名`dt-collapse-light-bg`

```jsx
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <div className="demo-form-light">
    <Collapse className="dt-collapse-light-bg" defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
  </div>,
  mountNode,
);
```
