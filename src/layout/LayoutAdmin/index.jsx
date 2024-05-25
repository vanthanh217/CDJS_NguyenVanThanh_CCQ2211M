import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const LayoutAdmin = () => {
    return (
        <>
            <Header />
            <main className="m-[0_30px_40px] flex gap-x-10">
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
