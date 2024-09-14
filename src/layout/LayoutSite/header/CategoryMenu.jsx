import { useEffect, useState } from 'react';
import { MenuService } from '../../../services';
import PropTypes from 'prop-types';
import CategoryMenuItem from './CategoryMenuItem';

const CategoryMenu = ({ state, toggle }) => {
    const [listParentCate, setListParentCate] = useState([]);

    useEffect(() => {
        (async () => {
            const { menus } = await MenuService.getListMenuByType(
                'mainmenu',
                'category',
                0,
                20,
            );
            setListParentCate(menus);
        })();
    }, []);

    return (
        <>
            <ul className="absolute z-50 font-normal uppercase bg-white rounded-lg shadow-md top-16 w-max">
                {listParentCate &&
                    listParentCate.length > 0 &&
                    listParentCate.map((item) => (
                        <CategoryMenuItem
                            key={item.id}
                            menu={item}
                            state={state}
                            toggle={toggle}
                        />
                    ))}
            </ul>
        </>
    );
};

CategoryMenu.propTypes = {
    state: PropTypes.bool,
    toggle: PropTypes.func,
};

export default CategoryMenu;
