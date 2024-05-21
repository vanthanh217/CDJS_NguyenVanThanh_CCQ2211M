import Category from '../pages/backend/category/Category';
import News from '../pages/backend/new/News';
import Product from '../pages/backend/product/Product';

// Vì sử dụng React bằng ViteJS nên phải .jsx để support cho element chứa tag <> </>

const RouteAdmin = [
    {
        path: '/admin/product',
        element: <Product />,
    },
    {
        path: '/admin/category',
        element: <Category />,
    },
    {
        path: '/admin/new',
        element: <News />,
    },
];

export default RouteAdmin;
