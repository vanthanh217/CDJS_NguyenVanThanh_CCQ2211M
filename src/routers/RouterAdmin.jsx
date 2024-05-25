import Banner from '../pages/backend/Banner';
import Brand from '../pages/backend/Brand';
import Category from '../pages/backend/Category';
import Contact from '../pages/backend/Contact';
import Menu from '../pages/backend/Menu';
import Order from '../pages/backend/Order';
import OrderDetail from '../pages/backend/OrderDetail';
import Post from '../pages/backend/Post';
import Product from '../pages/backend/Product';
import Topic from '../pages/backend/Topic';
import User from '../pages/backend/User';

// Vì sử dụng React bằng ViteJS nên phải .jsx để support cho element chứa tag <> </>

const RouterAdmin = [
    {
        path: '/admin/banner',
        element: <Banner />,
    },
    {
        path: '/admin/brand',
        element: <Brand />,
    },
    {
        path: '/admin/category',
        element: <Category />,
    },
    {
        path: '/admin/contact',
        element: <Contact />,
    },
    {
        path: '/admin/menu',
        element: <Menu />,
    },
    {
        path: '/admin/order',
        element: <Order />,
    },
    {
        path: '/admin/orderdetail',
        element: <OrderDetail />,
    },
    {
        path: '/admin/product',
        element: <Product />,
    },
    {
        path: '/admin/post',
        element: <Post />,
    },
    {
        path: '/admin/topic',
        element: <Topic />,
    },
    {
        path: '/admin/user',
        element: <User />,
    },
];

export default RouterAdmin;
