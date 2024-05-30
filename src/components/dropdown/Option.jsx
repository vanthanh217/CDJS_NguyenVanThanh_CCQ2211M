import { useDropdown } from './dropdown-context';
import PropTypes from 'prop-types';

const Option = (props) => {
    const { onClick, children } = props;
    const { setShow } = useDropdown();

    const handleClick = () => {
        onClick && onClick();
        setShow(false);
    };
    return (
        <div
            className="flex items-center justify-center px-4 py-3 text-sm capitalize transition-all cursor-pointer hover:bg-primary hover:text-white"
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

Option.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Option;
