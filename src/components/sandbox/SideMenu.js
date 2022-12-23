import React,{useEffect, useState, memo} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Memucss from './index.module.scss';
import { HomeOutlined, UserOutlined, UsergroupDeleteOutlined, FileImageOutlined, AuditOutlined,FilePptOutlined  } from '@ant-design/icons';
import axios from 'axios'
import WithRouter from '@/router/withRouter';
function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

// const menuList = [
//     {path:'/home', name:'首页', icon: (<HomeOutlined />)},
//     {path:'/user-manage/list', name:'用户管理', icon: (<UserOutlined/>)},
//     {path:'/right-manage/role', name:'权限管理', icon: (<UsergroupDeleteOutlined />), children: [
//         {path:'/right-manage/role/list', name:'角色列表', icon: ''},
//         {path:'/left-manage/role/list', name:'角色管理2', icon: ''}
//     ]}
// ]
const iconList = {
    "/home": <HomeOutlined />,
    "/user-manage": <UserOutlined/>,
    "/right-manage": <UsergroupDeleteOutlined />,
    "/news-manage": <FileImageOutlined />,
    "/audit-manage": <AuditOutlined />,
    "/publish-manage": <FilePptOutlined />
}

const checkPagePermission = (item) => {
    return item.pagepermisson === 1
}

const renderItem = (menuList) => {
    return menuList.map((item, index) => {

        if(item.children && item.children.length > 0 && checkPagePermission(item)) {
            return getItem((<Link to={item.key}>{item.title}</Link>), item.key, iconList[item.key], renderItem(item.children))
        } else {
           return checkPagePermission(item) && getItem((<Link to={item.key}>{item.title}</Link>), item.key, iconList[item.key])
        }
    })
}

// console.log('菜单管理', renderItem(menuList))

const SideMenu = (props) => {
    const {Sider} = Layout;
    const [menuList, setMenuList] = useState([])
    const location = props.history.useLocation()
    const selectKeys = [location.pathname]
    const openKeys = ['/' + location.pathname.split('/')[1]]
    // console.log('useEffelc', openKeys, selectKeys)

    useEffect(() => {
        axios.get('http://localhost:3000/rights?_embed=children').then(res => {
            setMenuList(res.data)
        })
        
    }, []);
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div style={{display: 'flex', height: '100%', "flexDirection": 'column'}}>
                <div className={Memucss.logo}>全球新闻发布管理系统</div>
                <div style={{'flex':1, overflow: 'auto'}}>
                    <Menu mode="inline" theme="dark" defaultSelectedKeys={selectKeys} defaultOpenKeys={openKeys} items={renderItem(menuList)}></Menu>
                </div>
            </div>
        
        </Sider>
    );
}

export default WithRouter(memo(SideMenu));
