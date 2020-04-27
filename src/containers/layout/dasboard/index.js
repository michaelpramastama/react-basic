import React, { useState } from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Icon } from 'antd';
import './style.css';

const { Header, Content, Footer, Sider } = Layout;

const Dasboard = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Sider 
            style={{
                overflow: 'auto',
                height: '100vh',
                left: 0
            }}
                trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <UserOutlined />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <VideoCameraOutlined />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <UploadOutlined />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <UserOutlined />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <VideoCameraOutlined />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <UploadOutlined />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header  style={{ background: '#fff', padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ background: '#fff',padding: 24, textAlign: 'center' }}>
                        ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
            </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Dasboard;