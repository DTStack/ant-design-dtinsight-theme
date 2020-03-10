import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider } = Layout;

import menuList from '../consts/menu';
import { Link, hashHistory } from 'react-router';
import styled from 'styled-components';
const Content = styled.div`
    min-height: calc(100vh - 104px);;
    width: 100%;
`;

export default class Contrainer extends React.Component<any, any> {

    state: any = {
        current: 'layout'
    }

    componentDidMount() {
        this.initCurrent();
    }

    initCurrent = () => {
        const { location } = this.props;
        if (location.pathname) {
            let currentPath = location.pathname.split('/')[1];
            this.setState({
                current: currentPath === '' ? 'layout' : currentPath
            })
            if (currentPath === '') {
                hashHistory.push('/layout');
            };
        }
    }

    handleMenuClick = (e: any) => {
        this.setState({
            current: e.key || 'layout'
        })
    }

    render() {
        const { children } = this.props;
        const { current } = this.state;
        return (
            <Layout className="Contrainer">
                <Header className="my-layout-header">
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
                            selectedKeys={[current]}
                            onClick={this.handleMenuClick}
                        >   
                            {
                                menuList.map((item: any) => {
                                    return (<Menu.Item key={item.id}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Menu.Item>)
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '20px', background: '#fff', minHeight: 480 }}>
                        <Content>
                            {children || ''}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}