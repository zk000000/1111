import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
//路由配置信息
export default [
    {
        path: '/ShopCart',
        component: ShopCart,
        meta: { show: true },
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        //路由元信息,控制当前路由是否需要Footer组件
        meta: { show: true },
    },
    {
        name: 'detail',  // 标识名称
        path: '/detail/:skuId',
        component: Detail,
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true },


    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    }, {
        path: '/register',
        component: Register,
        meta: { show: false }
    }, {
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        name: "search"
    }
    ,
    {
        path: '*',
        redirect: "/home"
    }
]