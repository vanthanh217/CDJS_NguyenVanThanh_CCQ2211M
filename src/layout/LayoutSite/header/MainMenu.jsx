import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuService } from '../../../services';

const MainMenu = () => {
    const [mainMenu, setMainMenu] = useState([]);
    const headerMenu = [];
    const types = ['custom', 'post', 'page'];
    useEffect(() => {
        (async () => {
            const { menus } = await MenuService.getListMenu('mainmenu', 0, 100);
            setMainMenu(menus);
        })();
    }, []);
    mainMenu?.forEach((item) => {
        if (types.includes(item.type)) {
            headerMenu.push(item);
        }
    });

    return (
        <ul className="flex items-center text-lg uppercase gap-x-10">
            {headerMenu &&
                headerMenu.length > 0 &&
                headerMenu.map((item) => (
                    <li key={item.id}>
                        <Link to={item.link} className="p-2 hover:text-primary">
                            {item.name}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default MainMenu;
