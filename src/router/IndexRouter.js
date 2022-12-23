import React, { lazy } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Login from '@/views/login/Login'
import Home from '../views/sandbox/home/Home';
import UserList from '../views/sandbox/user-manage/UserList';
import RightList from '../views/sandbox/right-manage/RightList';
import RoleList from '../views/sandbox/right-manage/RoleList';
// import NotFound from '../views/error/NotFound';
import NewsSandBox from '../views/sandbox/NewsSandBox'

// 路由懒加载
const lazyLoad = (path) => {
  const Comp = lazy(() => import(`@/views/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}

export const routers = [
    {
        path: '/login',
        name: '登录',
        element: <Login /> // 注意，这里必须要放组件<Home /> 而不是 Home
    },
    {
        path: '/',
        name: '新闻中心',
        element: <NewsSandBox />,
        children: [

            {
                path: '/home',
                name: '首页',
                element: <Home />
            },
            {
                path: '/user-manage/list',
                element: <UserList />
            },
            {
                path: '/right-manage/right/list',
                element: <RightList />
            }, {
                path: '/right-manage/role/list',
                element: <RoleList />
            },{
                path: '*',
                element: lazyLoad('error/NotFound')
            }
        ]
    },
]

const ConsRouters = () => useRoutes(routers)

const IndexRouter = function () {
    return (
        <BrowserRouter>
            <ConsRouters/>
        </BrowserRouter>
    )
}

export default IndexRouter