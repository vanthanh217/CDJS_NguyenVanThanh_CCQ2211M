import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarProduct = (props) => {
    const listItem = 'relative';
    const listItemLink =
        'block py-2 font-normal border-b hover:text-primary text-textPrimary border-lightStrock';

    const { title = '', list = [], link = '' } = props;
    return (
        <div className="rounded-[10px] bg-white shadow-box overflow-hidden mb-7">
            <h2 className="px-5 py-2 mb-4 text-xl font-medium text-white uppercase bg-primary">
                <span className="block">{title}</span>
            </h2>
            <ul className="p-[0_20px_20px]">
                {list &&
                    list.length > 0 &&
                    list.map((item, index) => (
                        <li className={listItem} key={index}>
                            <Link
                                to={`${link}/${item.slug}`}
                                className={listItemLink}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

SidebarProduct.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    link: PropTypes.string,
};

export default SidebarProduct;
