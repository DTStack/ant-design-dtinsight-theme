---
order: 3
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

- 为组件添加类名`dt-form-light-bg`
- 设置组件属性 `dropdownClassName` 为 `dt-form-light-bg`

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
      <div className="demo-tree-select-light">
          <TreeSelect
            showSearch
            className="dt-form-light-bg"
            style={{ width: '100%' }}
            value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={this.onChange}
            dropdownClassName="dt-form-light-bg"
          >
            <TreeNode value="parent 1" title="parent 1" key="0-1">
              <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                <TreeNode value="leaf1" title="my leaf" key="random" />
                <TreeNode value="leaf2" title="your leaf" key="random1" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                <TreeNode value="sss" title='sss' key="random3" />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
