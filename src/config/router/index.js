import React, { Component } from 'react';
import Home from '../../containers/layout/pages/home';
import Contact from '../../containers/layout/pages/contact';
import About from '../../containers/layout/pages/about';
// import Tableku from '../../containers/layout/pages/table';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const pageRoutes = () => {
    return [
        {
            path: "/about",
            link: "/about",
            icon: <UserOutlined/>,
            name: "Table",
            component: About
        },
        {
            path: "/contact",
            link: "/contact",
            icon: <VideoCameraOutlined />,
            name: "Navigasi contact",
            component: Contact
        },
        {
            path: "/home",
            link: "/home",
            icon: <UploadOutlined />,
            name: "Navigasi home",
            component: Home
        }
    ];
};

export default pageRoutes();