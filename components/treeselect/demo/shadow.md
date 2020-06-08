---
order: 1
title:
  zh-CN: 灰色背景
---

## zh-CN

灰色背景中的表单需添加投影，去掉外边框

- 为组件添加类名`dt-form-shadow-bg`

```jsx
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

class Demo extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <div className="demo-tree-select-shadow">
          <TreeSelect
            showSearch
            className="dt-form-shadow-bg"
            style={{ width: '100%' }}
            value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={this.onChange}
          >
            <TreeNode value="parent 1" title="parent 1" key="0-1">
              <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                <TreeNode value="leaf1" title="my leaf" key="random" />
                <TreeNode value="leaf2" title="your leaf" key="random1" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
