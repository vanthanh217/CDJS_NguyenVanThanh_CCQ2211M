import { useRoutes } from 'react-router-dom';
import LayoutSite from './layout/LayoutSite';
import LayoutAdmin from './layout/LayoutAdmin';
import Routes from './routes';
import NotFound from './pages/NotFound';

function App() {
    const { RouteSite, RouteAdmin } = Routes;
    let element = useRoutes([
        {
            path: '/',
            element: <LayoutSite />,
            children: RouteSite,
        },
        {
            path: '/admin',
            element: <LayoutAdmin />,
            children: RouteAdmin,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);

    return element;
}

export default App;
