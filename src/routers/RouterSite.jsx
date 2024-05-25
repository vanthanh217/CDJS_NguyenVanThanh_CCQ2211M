import Cart from '../pages/frontend/Cart';
import Contact from '../pages/frontend/Contact';
import Home from '../pages/frontend/Home';
import Post from '../pages/frontend/Post';
import PostDetail from '../pages/frontend/PostDetail';
import Product from '../pages/frontend/Product';
import ProductBrand from '../pages/frontend/ProductBrand';
import ProductCategory from '../pages/frontend/ProductCategory';
import ProductDetail from '../pages/frontend/ProductDetail';

// Vì sử dụng React bằng ViteJS nên phải .jsx để support cho element chứa tag <> </>

const RouterSite = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: '/san-pham',
        element: <Product />,
    },
    {
        path: '/san-pham/:slug',
        element: <ProductDetail />,
    },
    {
        path: '/danh-muc/:slug',
        element: <ProductCategory />,
    },
    {
        path: '/thuong-hieu/:slug',
        element: <ProductBrand />,
    },
    {
        path: '/tin-tuc',
        element: <Post />,
    },
    {
        path: '/tin-tuc/:slug',
        element: <PostDetail />,
    },
    {
        path: 'gio-hang',
        element: <Cart />,
    },
    {
        path: 'lien-he',
        element: <Contact />,
    },
];

export default RouterSite;
