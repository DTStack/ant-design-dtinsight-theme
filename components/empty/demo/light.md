---
order: 2
title:
  zh-CN: 浅色背景(仅暗黑主题下使用)
  en-US: ConfigProvider
---

## zh-CN

浅色背景上，显示深色控件

仅暗黑主题下使用，默认主题下使用无效

## en-US

Use ConfigProvider set global Empty style.

```jsx
import {
  ConfigProvider,
  Switch,
  Divider,
  Icon,
  TreeSelect,
  Select,
  Cascader,
  Transfer,
  Table,
  List,
} from 'antd';

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <Icon type="smile" style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200, marginTop: 20 };

class Demo extends React.Component {
  state = {
    customize: false,
  };

  render() {
    const { customize } = this.state;
    return (
      <div className="demo-input-light">
        <Switch
          unCheckedChildren="default"
          checkedChildren="customize"
          checked={customize}
          onChange={val => {
            this.setState({ customize: val });
          }}
        />

        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h3>Select</h3>
            <Select dropdownClassName="dt-form-light-bg" className="dt-form-light-bg" style={style} />

            <h3>TreeSelect</h3>
            <TreeSelect dropdownClassName="dt-form-light-bg" className="dt-form-light-bg" style={style} treeData={[]} />

            <h3>Cascader</h3>
            <Cascader popupClassName="dt-form-light-bg"  className="dt-form-light-bg" style={style} options={[]} placeholder="Please select" />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>
