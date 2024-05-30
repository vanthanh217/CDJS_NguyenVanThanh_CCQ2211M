import { useRoutes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import LayoutAdmin from './layout/LayoutAdmin';
import LayoutSite from './layout/LayoutSite';
import Routers from './routers';

function App() {
    const { RouterSite, RouterAdmin } = Routers;
    let element = useRoutes([
        {
            path: '/',
            element: <LayoutSite />,
            children: RouterSite,
        },
        {
            path: '/admin/',
            element: <LayoutAdmin />,
            children: RouterAdmin,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);

    return element;
}

export default App;
