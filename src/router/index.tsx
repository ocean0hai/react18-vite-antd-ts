import { COLUMNTYPE, CommonTable } from '@react18-vite-antd-ts/components'
// 初始化路由
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { AdminLayout } from '../layout'
import Login from '../modules/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: (
          <CommonTable
            dataCfg={{
              getUrl: 'https://jsonplaceholder.typicode.com/users',
              columns: [
                {
                  title: 'id',
                  key: 'id',
                },
                {
                  title: '名字',
                  key: 'name',
                },
                {
                  title: '公司',
                  key: 'company.name',
                },
                {
                  type: COLUMNTYPE.TIME,
                  title: '创建时间',
                  key: 'createTime',
                },
              ],
            }}
          />
        ),
      },
    ],
  },
])

export default router
