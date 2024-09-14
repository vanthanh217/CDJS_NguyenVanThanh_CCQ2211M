import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FooterMenu = ({ list = [], title = '' }) => {
    const linkStyle =
        "relative inline-block py-1 text-textDark hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[1px] hover:after:bg-textDark hover:after:left-0 hover:after:bottom-[-1px] hover:after:transition-all";
    const h3TitleStyle =
        "relative inline-block mb-4 font-semibold uppercase after:content-[''] after:absolute after:w-3/5 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1";

    return (
        <div>
            <h3 className={h3TitleStyle}>{title}</h3>
            <ul>
                {list &&
                    list.length > 0 &&
                    list.map((item, index) => (
                        <li key={index}>
                            <Link to={item?.link} className={linkStyle}>
                                {item?.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

FooterMenu.propTypes = {
    list: PropTypes.array,
    title: PropTypes.string,
};

export default FooterMenu;
