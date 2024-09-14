import {
    BannerCreate,
    BannerEdit,
    BannerList,
    BannerShow,
} from '../pages/backend/Banner';
import { BrandEdit, BrandList, BrandShow } from '../pages/backend/Brand';
import {
    CategoryEdit,
    CategoryList,
    CategoryShow,
} from '../pages/backend/Category';
import { ContactList, ContactShow } from '../pages/backend/Contact';
import { MenuEdit, MenuList, MenuShow } from '../pages/backend/Menu';
import { OrderList, OrderShow } from '../pages/backend/Order';
import {
    PostCreate,
    PostEdit,
    PostList,
    PostShow,
} from '../pages/backend/Post';
import {
    ProductCreate,
    ProductEdit,
    ProductList,
    ProductShow,
} from '../pages/backend/Product';
import { TopicEdit, TopicList, TopicShow } from '../pages/backend/Topic';
import {
    UserCreate,
    UserEdit,
    UserList,
    UserShow,
} from '../pages/backend/User';

// Vì sử dụng React bằng ViteJS nên phải .jsx để support cho element chứa tag <> </>

const RouterAdmin = [
    {
        path: 'banner',
        element: <BannerList />,
    },
    {
        path: 'banner/create',
        element: <BannerCreate />,
    },
    {
        path: 'banner/show/:id',
        element: <BannerShow />,
    },
    {
        path: 'banner/edit/:id',
        element: <BannerEdit />,
    },
    {
        path: 'brand',
        element: <BrandList />,
    },
    {
        path: 'brand/edit/:id',
        element: <BrandEdit />,
    },
    {
        path: 'brand/show/:id',
        element: <BrandShow />,
    },
    {
        path: 'category',
        element: <CategoryList />,
    },
    {
        path: 'category/edit/:id',
        element: <CategoryEdit />,
    },
    {
        path: 'category/show/:id',
        element: <CategoryShow />,
    },
    {
        path: 'contact',
        element: <ContactList />,
    },
    {
        path: 'contact/show/:id',
        element: <ContactShow />,
    },
    {
        path: 'menu',
        element: <MenuList />,
    },
    {
        path: 'menu/edit/:id',
        element: <MenuEdit />,
    },
    {
        path: 'menu/show/:id',
        element: <MenuShow />,
    },
    {
        path: 'order',
        element: <OrderList />,
    },
    {
        path: 'order/show/:id',
        element: <OrderShow />,
    },
    {
        path: 'product',
        element: <ProductList />,
    },
    {
        path: 'product/create',
        element: <ProductCreate />,
    },
    {
        path: 'product/edit/:id',
        element: <ProductEdit />,
    },
    {
        path: 'product/show/:id',
        element: <ProductShow />,
    },
    {
        path: 'post',
        element: <PostList />,
    },
    {
        path: 'post/create',
        element: <PostCreate />,
    },
    {
        path: 'post/edit/:id',
        element: <PostEdit />,
    },
    {
        path: 'post/show/:id',
        element: <PostShow />,
    },
    {
        path: 'topic',
        element: <TopicList />,
    },
    {
        path: 'topic/edit/:id',
        element: <TopicEdit />,
    },
    {
        path: 'topic/show/:id',
        element: <TopicShow />,
    },
    {
        path: 'user',
        element: <UserList />,
    },
    {
        path: 'user/create',
        element: <UserCreate />,
    },
    {
        path: 'user/edit/:id',
        element: <UserEdit />,
    },
    {
        path: 'user/show/:id',
        element: <UserShow />,
    },
];

export default RouterAdmin;
