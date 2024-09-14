import { useEffect, useState } from 'react';
import { MenuService } from '../../../services';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryMenuItem = ({ menu, state, toggle }) => {
    const [cateSubMenu, setCateSubMenu] = useState([]);
    useEffect(() => {
        (async () => {
            const { menus } = await MenuService.getListMenu(
                'mainmenu',
                menu.id,
                20,
            );
            setCateSubMenu(menus);
        })();
    }, [menu.id]);

    if (cateSubMenu && cateSubMenu.length > 0) {
        return (
            <>
                <li className="relative" onClick={() => toggle(state)}>
                    <div className="main-category peer">
                        <Link
                            to={menu.link}
                            className="block px-3 py-1 text-2xl text-textPrimary"
                        >
                            {menu.name}
                        </Link>
                    </div>
                    <ul className="absolute top-0 right-0 invisible translate-x-[102%] bg-white rounded-lg shadow-md sub-menu peer-hover:visible hover:visible w-max">
                        {cateSubMenu.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="block px-3 py-1 text-2xl text-textPrimary"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </>
        );
    } else {
        return (
            <>
                <li className="relative" onClick={() => toggle(state)}>
                    <div className="main-category peer">
                        <Link
                            to={menu.link}
                            className="block px-3 py-1 text-2xl text-textPrimary"
                        >
                            {menu.name}
                        </Link>
                    </div>
                </li>
            </>
        );
    }
};

CategoryMenuItem.propTypes = {
    menu: PropTypes.object,
    toggle: PropTypes.func,
    state: PropTypes.bool,
};

export default CategoryMenuItem;
