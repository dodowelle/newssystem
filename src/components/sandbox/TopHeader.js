import React, {useState, memo} from 'react';
import {Layout, Dropdown, Avatar} from 'antd'
import {UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

const items = [
    {
        key: '1',
        label: '超级管理员'
    }, 
    {
        key: '2',
        label: '退出'
    }
]
const TopHeader = (props) => {
    const {Header} = Layout;
    
    return (
        <Header className="site-layout-background" style={{padding: '0 16px'}}>
            {props.collapsed? <MenuUnfoldOutlined onClick={props.changeCollapsed} /> : <MenuFoldOutlined onClick={props.changeCollapsed} />}
            <div style={{float: 'right'}}>
                <Dropdown menu={{items}}>
                    <Avatar size="large" icon={<UserOutlined />}></Avatar>
                </Dropdown>
            </div>
        </Header>
    );
}

export default memo(TopHeader);
