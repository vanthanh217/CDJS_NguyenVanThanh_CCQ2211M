import Cart from '../pages/frontend/Cart';
import Checkout from '../pages/frontend/Checkout';
import Contact from '../pages/frontend/Contact';
import Home from '../pages/frontend/Home';
import Pages from '../pages/frontend/Pages';
import Post from '../pages/frontend/Post';
import PostDetail from '../pages/frontend/PostDetail';
import PostTopic from '../pages/frontend/PostTopic';
import Product from '../pages/frontend/Product';
import ProductBrand from '../pages/frontend/ProductBrand';
import ProductCategory from '../pages/frontend/ProductCategory';
import ProductDetail from '../pages/frontend/ProductDetail';
import SearchResult from '../pages/frontend/SearchResult';

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
        path: '/pages/:slug',
        element: <Pages />,
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
        path: '/chu-de/:slug',
        element: <PostTopic />,
    },
    {
        path: '/gio-hang',
        element: <Cart />,
    },
    {
        path: '/thanh-toan',
        element: <Checkout />,
    },
    {
        path: '/lien-he',
        element: <Contact />,
    },
    {
        path: '/search',
        element: <SearchResult />,
    },
];

export default RouterSite;
