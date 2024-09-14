import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { CartSidebar } from './cart';

const LayoutSite = () => {
    return (
        <>
            <Header />
            <Outlet />
            <CartSidebar />
            <Footer />
        </>
    );
};

export default LayoutSite;
