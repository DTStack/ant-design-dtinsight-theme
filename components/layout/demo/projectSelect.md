---
order: 1
title:
    zh-CN: 带项目选择
---

## zh-CN

顶部导航栏带项目选择

-   添加类名 `.dt-header-log-wrapper` 可设置 logo 以及标题样式

```jsx
import { Layout, Menu, Dropdown } from "antd";
import { CaretDownOutlined, EllipsisOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
    <Menu
        selectedKeys={["1"]}
        style={{
            maxHeight: "400px",
            overflowY: "auto",
            width: "170px",
        }}
    >
        <Menu.Item key="1" title={"项目1"}>
            项目1
        </Menu.Item>
        <Menu.Item key="2" title={"项目2"}>
            项目2
        </Menu.Item>
    </Menu>
);

ReactDOM.render(
    <div style={{ height: 150 }}>
        <Layout style={{ position: "relative" }}>
            <Header
                className="dt-layout-header"
                style={{ width: "100%", minWidth: 100 }}
            >
                <div
                    className="logo dt-header-log-wrapper"
                    style={{ float: "left" }}
                >
                    {/* <img src='/logo' /> 此处添加 logo */}
                    <span className="c-header__title">DTInsight-Theme</span>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Menu.Item key="sub-menu-item">
                        <Dropdown overlay={menu} trigger="click"
                            placement="bottomCenter">
                            <span style={{ display: 'inline-block', height: '64px' }}>
                                <span
                                    className="dt-menu-text-ellipsis"
                                    title={"当前项目名称"}
                                >
                                当前项目名称
                                </span>
                                <CaretDownOutlined
                                    style={{ fontSize: "12px" }}/>
                            </span>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="1">数据源</Menu.Item>
                    <Menu.Item key="2">数据开发</Menu.Item>
                    <Menu.Item key="3">运维中心</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Content
                    style={{ minWidth: 200, width: "100%", padding: 20 }}
                    className="dt-container"
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    </div>,
    mountNode
);
```
