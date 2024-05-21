import { Outlet } from 'react-router-dom';
import { Footer, Header } from './site';

const LayoutSite = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayoutSite;
