import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
import './style.scss';

export default class LayoutPreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        return (
            <Layout className="layout-preview">
                <Header className="header my-layout-header">
                    <div className="logo" />
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1">数据源</Menu.Item>
                        <Menu.Item key="2">数据开发</Menu.Item>
                        <Menu.Item key="3">运维中心</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={180} className="my-layout-sider">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                        >
                            <Menu.Item key="1"><Icon type="appstore" />数据源管理</Menu.Item>
                            <Menu.Item key="2"><Icon type="appstore" />实体管理</Menu.Item>
                            <Menu.Item key="3"><Icon type="book" />关系管理</Menu.Item>
                            <Menu.Item key="4"><Icon type="book" />字典管理</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}