import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import useScroll from '../../../hooks/useScroll';
import classNames from '../../../utils/classNames';
import {
    IconCart,
    IconCategory,
    IconHeart,
    IconMoon,
    IconSearch,
    IconUser,
} from '../../../components/icons';
import db from '../../../data.json';

const Header = () => {
    const { menu } = db;
    const { active } = useScroll();
    return (
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
                    <input
                        type="text"
                        placeholder="Find collection..."
                        className="w-full bg-[#f0f0f0] pl-3 pr-20 h-[44px] text-sm rounded-xl"
                    />
                    <button className="absolute flex items-center justify-center text-white bg-primary w-14 h-9 rounded-xl top-1 right-[5px]">
                        <IconSearch />
                    </button>
                </div>
                <div className="flex items-center justify-between w-[20%]">
                    <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                        <IconMoon />
                    </span>
                    <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                        <IconHeart />
                    </span>
                    <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                        <IconUser />
                    </span>
                    <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                        <IconCart />
                    </span>
                </div>
            </div>
            <div className="h-[1px] my-2 bg-gray-200"></div>
            <div className="flex items-center font-medium">
                <div className="flex items-center py-[6px] px-4 rounded-xl text-xl uppercase text-white gap-x-3 bg-primary cursor-pointer select-none mr-40">
                    <span>
                        <IconCategory />
                    </span>
                    <span>Category</span>
                </div>
                <ul className="flex items-center text-lg uppercase gap-x-10">
                    {menu.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.link}
                                className="p-2 hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
