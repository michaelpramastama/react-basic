import React, { useState } from 'react';
// import {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
// } from '@ant-design/icons';
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import pageRoutes from '../../../config/router/index';
import './style.css';


const { Header, Content, Footer, Sider } = Layout;

const Dasboard = () => {
    const [collapsed, setCollapsed] = useState(true);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Sider 
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0
            }}collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                    {pageRoutes.map((data, i) => {
                        return (
                            <Menu.Item key={i}>
                                <Link to={data.link}>
                                    <Icon type={data.icon} />
                                    <span className="nav-text">{data.name}</span>
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>
            <Layout>
                <Header  style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', marginLeft: '100px' }}>
                    <div style={{ background: '#fff',padding: 24, textAlign: 'center' }}>
                        <Switch>
                            {pageRoutes.map((data, i) => {
                                return (
                                    <Route path={data.path} component={data.component} exact/>
                                );
                            })}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Dasboard;