---
order: 1
title:
  zh-CN: ghost
---

## zh-CN

使折叠面板透明且无边框，和下方 面板嵌套 的示例代码一致，但多了 ghost。


```jsx
import { Collapse } from 'antd';


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
     <Collapse ghost defaultActiveKey="1">
      <Panel header="This is panel header 1" key="1">
        <Collapse ghost defaultActiveKey="1">
          <Panel header="This is panel nest panel" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>,
  mountNode,
);
```
