---
order: 8
title:
  zh-CN: 固定高度表（footer 中带分页）
---

## zh-CN

1、固定表格头部、尾部。中间视数据多少可滚动。可作为单屏表格数据展示使用

- 为表格父元素或者直接在表格上添加类名 `dt-table-fixed-contain-footer`
- 计算当前表格以外的元素所占高度（如 300px）
- 再为表格设置`style={{ height: 'calc(100vh - 300px)' }}`
- 特别的，`dt-table-fixed-contain-footer` 用于底部分页通过 footer 实现的表格
- 自带分页的表格请使用类名 `dt-table-fixed-base`
- 展示最小size, 设置size为 `samll`

<br />

2、由于 windows 与 MAC 系统存在滚动条样式问题，特别是在 windows 系统中

固定高度表中，当表格存在固定列且无数据时，固定列底部会出现滚动条，样式十分不美观

故此时需为表格添加类名`dt-table-fixed-overflowx-auto`，去除固定列底部滚动条

特别的，若添加了类名`dt-table-scrollbar`，则无需进行该样式的设置

<br />

3、添加类名`dt-table-scrollbar`，设置表格中滚动条的样式

一般用于 windows 中美化滚动条样式，MAC 系统中无需设置

为了兼容 MAC 和 Windows，可通过 navigator.userAgent 属性获取当前操作系统信息，从而进一步判断样式的使用

```jsx
import { Table, Pagination, Switch, Divider } from 'antd';

class App extends React.Component {
  state = {
    data: [
      {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 LakPark.',
      },
      {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Par',
      },
      {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Par',
      }
    ],
    isShowData: true,
    isColumnFixed: false,
    isMac: false,
    setOverflowX: false,
    setScrollBar: true,
    smallSize: false
  };

  componentDidMount () {
    this.setState({
      isMac: /macintosh|mac os x/i.test(navigator.userAgent)
    });
  }

  handleSwitchChange = (key) => {
    this.setState({
      [key]: !this.state[key]
    })
  }

  render() {
    const { data, isShowData, isColumnFixed, isMac, setScrollBar, setOverflowX, smallSize } = this.state;
    const columns = [
      { title: 'Name', fixed: isColumnFixed ? 'left' : false, dataIndex: 'name', key: 'name', width: 200 },
      { title: 'Age', dataIndex: 'age', key: 'age', width: 100 },
      { title: 'Address', dataIndex: 'address', key: 'address', width: 200, ellipsis: true },
      { title: 'description', dataIndex: 'description', key: 'description', width: 400 },
      {
        title: 'Action',
        dataIndex: '',
        width: 200,
        key: 'x',
        fixed: isColumnFixed ? 'right' : false,
        render: (text, record) => (
          <span>
            <a>Invite</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];
    const pagination = {
      current: 1,
      pageSize: 10,
      size: 'small',
      total: isShowData ? 30 : 0,
      showTotal: (total) => <span>
        共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示15条
      </span>
    };
    return (
      <div className={!isMac && setScrollBar ? 'dt-table-fixed-contain-footer dt-table-scrollbar' : 'dt-table-fixed-contain-footer'}>
        <div style={{ marginBottom: 20 }}>
            <Switch checked={isShowData} onChange={this.handleSwitchChange.bind(this, 'isShowData')} />
            <span className="demo-switch-desc">是否展示数据</span>
            <Switch checked={isColumnFixed} onChange={this.handleSwitchChange.bind(this, 'isColumnFixed')} />
            <span className="demo-switch-desc">是否存在固定列</span>
            <Switch checked={setOverflowX} onChange={this.handleSwitchChange.bind(this, 'setOverflowX')} />
            <span className="demo-switch-desc">设置dt-table-fixed-overflowx-auto</span>
            <Switch checked={smallSize} onChange={this.handleSwitchChange.bind(this, 'smallSize')} />
            <span className="demo-switch-desc">展示最小size</span>
        </div>
        <Table
          columns={columns}
          dataSource={isShowData ? data : []}
          scroll={{ y: true, x: 1300 }}
          className={!isShowData && isColumnFixed && setOverflowX ? 'dt-table-fixed-overflowx-auto' : ''}
          style={{ height: 'calc(100vh - 300px)' }}
          size={smallSize && 'small'}
          pagination={false}
          footer={() => {
            return <Pagination
              {...pagination}
            />
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
