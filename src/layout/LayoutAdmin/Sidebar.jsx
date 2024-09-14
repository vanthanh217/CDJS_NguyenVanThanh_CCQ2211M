import { NavLink } from 'react-router-dom';
import {
    IconBanner,
    IconBrand,
    IconCategory,
    IconContact,
    IconMenu,
    IconOrder,
    IconPost,
    IconProduct,
    IconTopic,
    IconUser,
} from '../../components/icons';

const sidebarList = [
    {
        label: 'Banner',
        icon: <IconBanner />,
        url: '/banner',
    },
    {
        label: 'Brand',
        icon: <IconBrand />,
        url: '/brand',
    },
    {
        label: 'Category',
        icon: <IconCategory />,
        url: '/category',
    },
    {
        label: 'Product',
        icon: <IconProduct />,
        url: '/product',
    },
    {
        label: 'Post',
        icon: <IconPost />,
        url: '/post',
    },
    {
        label: 'Topic',
        icon: <IconTopic />,
        url: '/topic',
    },
    {
        label: 'Order',
        icon: <IconOrder />,
        url: '/order',
    },
    {
        label: 'User',
        icon: <IconUser />,
        url: '/user',
    },
    {
        label: 'Contact',
        icon: <IconContact />,
        url: '/contact',
    },
    {
        label: 'Menu',
        icon: <IconMenu />,
        url: '/menu',
    },
];

const Sidebar = () => {
    return (
        <aside className="w-[240px]">
            <ul className="flex flex-col flex-shrink-0 p-3 overflow-hidden capitalize bg-white rounded-lg shadow-outer gap-y-2">
                {sidebarList
                    .sort((a, b) => (a.label > b.label ? 1 : -1))
                    .map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={`/admin${item.url}`}
                                className={({ isActive }) => {
                                    return (
                                        'flex items-center px-4 py-2 gap-x-5 hover:bg-primary rounded-[10px] text-text2nd hover:text-white' +
                                        ' ' +
                                        (isActive
                                            ? 'bg-primary text-white'
                                            : '')
                                    );
                                }}
                            >
                                <span>{item.icon}</span>
                                <span className="flex-1 font-medium">
                                    {item.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
