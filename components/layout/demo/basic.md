---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基本用法
---

## zh-CN

基本的页面布局

- 添加类名 `.dt-header-log-wrapper` 可设置 logo 以及标题样式

```jsx
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

ReactDOM.render(
    <div style={{ height: 150 }}>
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
                    <Menu.Item key="1"><a>数据源</a></Menu.Item>
                    <Menu.Item key="2">数据开发</Menu.Item>
                    <Menu.Item key="3">运维中心</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Content style={{ minWidth: 200, width: '100%', padding: 20 }} className="dt-container">
                        Content
                </Content>
            </Layout>
        </Layout>
    </div>,
    mountNode,
);
```
