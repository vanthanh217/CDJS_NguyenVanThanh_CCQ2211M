import { useRoutes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import LayoutAdmin from './layout/LayoutAdmin';
import LayoutSite from './layout/LayoutSite';
import Routers from './routers';
import SignIn from './pages/frontend/SignIn';
import SignUp from './pages/frontend/SignUp';
import Login from './pages/backend/Login';

function App() {
    const { RouterSite, RouterAdmin } = Routers;
    let element = useRoutes([
        {
            path: '/',
            element: <LayoutSite />,
            children: RouterSite,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
        },
        {
            path: '/sign-up',
            element: <SignUp />,
        },
        {
            path: '/admin/',
            element: <LayoutAdmin />,
            children: RouterAdmin,
        },
        {
            path: '/admin/login',
            element: <Login />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);

    return element;
}

export default App;
