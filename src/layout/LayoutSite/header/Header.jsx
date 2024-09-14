import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import useScroll from '../../../hooks/useScroll';
import classNames from '../../../utils/classNames';
import {
    IconCart,
    IconCategory,
    IconHeart,
    IconLogout,
    IconUser,
} from '../../../components/icons';
import MainMenu from './MainMenu';
import useToggle from '../../../hooks/useToggle';
import CategoryMenu from './CategoryMenu';
import { useEffect, useState } from 'react';
import { useStore } from '../../../stores/cart';
import Search from './Search';

const Header = () => {
    const navigate = useNavigate();
    const { active } = useScroll();
    const { state, toggle } = useToggle();
    const [showUserAction, setShowUserAction] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const { cart, toggleStatusCartBar } = useStore((state) => state);
    const btnIconStyle =
        'relative block p-3 text-2xl text-textDark cursor-pointer select-none bg-primary rounded-xl';
    const user = JSON.parse(localStorage.getItem('user-info'));

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/sign-up');
    };
    useEffect(() => {
        let total = 0;
        [...cart].forEach((item) => (total += item.quantity));
        setTotalQuantity(total);
    }, [cart]);

    return (
        <>
            {state && (
                <div
                    className="fixed inset-0 z-50 bg-black/20 overlay"
                    onClick={() => toggle(state)}
                ></div>
            )}
            <header
                className={classNames(
                    'relative flex flex-col justify-center p-4 bg-white',
                    active ? 'sticky-top' : '',
                )}
            >
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div className="w-[500px] relative">
                        <Search />
                    </div>
                    <div className="flex items-center justify-evenly w-[20%]">
                        <span className={btnIconStyle}>
                            <IconHeart />
                        </span>
                        <span
                            className={btnIconStyle}
                            onClick={() => setShowUserAction(!showUserAction)}
                        >
                            <IconUser />
                            {user ? (
                                <ul
                                    className={classNames(
                                        'absolute top-[110%] px-3 left-0 text-base bg-white rounded-lg shadow-box text-textPrimary w-max z-10 opacity-0',
                                        showUserAction
                                            ? 'opacity-100 transition-all'
                                            : '',
                                    )}
                                >
                                    <li
                                        className="flex items-center py-2 cursor-pointer gap-x-3"
                                        onClick={handleLogOut}
                                    >
                                        <IconLogout />
                                        <span>Đăng xuất</span>
                                    </li>
                                </ul>
                            ) : (
                                <ul
                                    className={classNames(
                                        'absolute top-[110%] px-3 left-0 text-base bg-white rounded-lg shadow-box text-textPrimary w-max z-10 opacity-0',
                                        showUserAction
                                            ? 'opacity-100 transition-all'
                                            : '',
                                    )}
                                >
                                    <li
                                        className="flex items-center py-2 cursor-pointer gap-x-3 hover:text-primary"
                                        onClick={() => navigate('/sign-in')}
                                    >
                                        Đăng nhập
                                    </li>
                                    <li
                                        className="flex items-center py-2 cursor-pointer gap-x-3 hover:text-primary"
                                        onClick={() => navigate('/sign-up')}
                                    >
                                        Đăng kí
                                    </li>
                                </ul>
                            )}
                        </span>
                        <span
                            className={btnIconStyle}
                            onClick={toggleStatusCartBar}
                        >
                            <IconCart />
                            <span className="absolute w-[20px] text-center text-sm top-1 right-1 bg-textDark rounded-full text-primary font-semibold">
                                {totalQuantity}
                            </span>
                        </span>
                    </div>
                </div>
                <div className="h-[1px] my-2 bg-gray-200"></div>
                <div className="relative flex items-center mx-5 font-medium">
                    <div
                        className="flex items-center py-[6px] px-4 rounded-xl text-xl uppercase text-white gap-x-3 bg-primary cursor-pointer select-none mr-40 z-[100]"
                        onClick={() => toggle(state)}
                    >
                        <span>
                            <IconCategory />
                        </span>
                        <span>Category</span>
                    </div>
                    {/* Main list */}
                    {state && <CategoryMenu state={state} toggle={toggle} />}
                    <MainMenu />
                </div>
            </header>
        </>
    );
};

export default Header;
