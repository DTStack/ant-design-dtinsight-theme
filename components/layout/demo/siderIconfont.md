---
order: 3
title:
  zh-CN: 侧边导航(自定义图标)
---

## zh-CN

包含可伸缩侧边导航，侧边栏图标使用 iconfront 中的

注意：使用自定义图标时，要按照示例方式进行使用，否则 antd sider 的收缩隐藏菜单文字样式无法生效

- 添加类名 `.dt-header-log-wrapper` 可设置 logo 以及标题样式

```jsx
import { Layout, Menu, Icon, Dropdown } from 'antd';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        mode: 'inline'
    }
    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed, mode: !this.state.collapsed ? 'vertical' : 'inline' });
    };
    render () {
        const { collapsed, mode } = this.state;
        const menu = <Menu
            selectedKeys={['1']}
            className="dt-header-project-select-menu"
        >
            <Menu.Item key='1' title={'项目1'}>项目1</Menu.Item>
            <Menu.Item key='2' title={'项目2'}>项目2</Menu.Item>
        </Menu>;
        return (
            <Layout style={{ position: "relative" }}>
                <Header className="dt-layout-header" style={{ width: "100%", minWidth: 100 }}>
                    <div className="logo dt-header-log-wrapper" style={{ float: 'left' }}>
                        {/* <img src='/logo' /> 此处添加 logo */}
                        <span className='c-header__title'>DTInsight-Theme</span>
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <SubMenu key='sub-menu-item' title={
                            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                                <span style={{ display: 'inline-block', height: '61px' }}>
                                    <span className="dt-menu-text-ellipsis" title={'当前项目名称'} >
                                        {'当前项目名称'}
                                    </span>
                                    &nbsp;
                                    <Icon style={{ fontSize: '12px' }} type="caret-down" />
                                </span>
                            </Dropdown>
                        }>
                        </SubMenu>
                        <Menu.Item key="1"><a>数据源</a></Menu.Item>
                        <Menu.Item key="2">数据开发</Menu.Item>
                        <Menu.Item key="3">运维中心</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{ marginTop: 64 }}>
                    <Sider className="dt-layout-sider" collapsed={collapsed}>
                        <div className="dt-slider-top-icon" onClick={this.onCollapse}>
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </div>
                        <Menu
                            mode={mode}
                            defaultSelectedKeys={['approval']}
                            defaultOpenKeys={['sub1']}
                        >
                            <Menu.Item key='approval' >
                                <a href={`javascript:;`}>
                                    <span className="anticon">
                                        <i className="iconfont iconshenpi"></i>
                                    </span>
                                    <span>审批授权</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key='security'>
                                <a href={`javascript:;`}>
                                    <span className="anticon">
                                        <i className="iconfont iconAPItiaoyong"></i>
                                    </span>
                                    <span>安全组</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key='permission'>
                                <a href={`javascript:;`}>
                                    <span className="anticon">
                                        <i className="iconfont iconhangjiquanxian"></i>
                                    </span>
                                    <span>行级权限</span>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '20px' }}>
                        <Content style={{ background: '#fff', padding: 20, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
ReactDOM.render(
    <SiderDemo />,
    mountNode,
);
```
