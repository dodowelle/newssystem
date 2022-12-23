import React, {useState, memo} from 'react';
import {Outlet} from 'react-router-dom'
import TopHeader from './../../components/sandbox/TopHeader';
import SideMenu from './../../components/sandbox/SideMenu';
import AuthRouter from '@/router/AuthRouter';
import { Layout } from 'antd';
import './NewsSandBox.scss'

const {Content} = Layout;
const NewsSandBox = () => {
    const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <AuthRouter>
            <Layout>
                <SideMenu collapsed={collapsed} />
                <Layout className="site-layout">
                    <TopHeader collapsed={collapsed} changeCollapsed={changeCollapsed} />
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>

            </Layout>
        </AuthRouter>
    );
}

export default memo(NewsSandBox);
