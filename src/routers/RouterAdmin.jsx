import Banner from '../pages/backend/Banner';
import BannerCreate from '../pages/backend/Banner/BannerCreate';
import Brand from '../pages/backend/Brand';
import Category from '../pages/backend/Category';
import Contact from '../pages/backend/Contact';
import Menu from '../pages/backend/Menu';
import MenuCreate from '../pages/backend/Menu/MenuCreate';
import Order from '../pages/backend/Order';
import OrderDetail from '../pages/backend/OrderDetail';
import Post from '../pages/backend/Post';
import PostCreate from '../pages/backend/Post/PostCreate';
import Product from '../pages/backend/Product';
import ProductCreate from '../pages/backend/Product/ProductCreate';
import Topic from '../pages/backend/Topic';
import User from '../pages/backend/User';
import UserCreate from '../pages/backend/User/UserCreate';

// Vì sử dụng React bằng ViteJS nên phải .jsx để support cho element chứa tag <> </>

const RouterAdmin = [
    {
        path: 'banner',
        element: <Banner />,
    },
    {
        path: 'banner/create',
        element: <BannerCreate />,
    },
    {
        path: 'brand',
        element: <Brand />,
    },
    {
        path: 'category',
        element: <Category />,
    },
    {
        path: 'contact',
        element: <Contact />,
    },
    {
        path: 'menu',
        element: <Menu />,
    },
    {
        path: 'menu/create',
        element: <MenuCreate />,
    },
    {
        path: 'order',
        element: <Order />,
    },
    {
        path: 'orderdetail',
        element: <OrderDetail />,
    },
    {
        path: 'product',
        element: <Product />,
    },
    {
        path: 'product/create',
        element: <ProductCreate />,
    },
    {
        path: 'post',
        element: <Post />,
    },
    {
        path: 'post/create',
        element: <PostCreate />,
    },
    {
        path: 'topic',
        element: <Topic />,
    },
    {
        path: 'user',
        element: <User />,
    },
    {
        path: 'user/create',
        element: <UserCreate />,
    },
];

export default RouterAdmin;
