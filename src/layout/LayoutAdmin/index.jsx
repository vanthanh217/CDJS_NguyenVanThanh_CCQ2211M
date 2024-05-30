import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const LayoutAdmin = () => {
    return (
        <>
            <Header />
            <main className="flex m-[0_20px_40px_8px] gap-x-7">
                <Sidebar />
                <section className="flex-1">
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default LayoutAdmin;
