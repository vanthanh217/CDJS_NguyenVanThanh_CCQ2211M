import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const IconArrow = ({ className = '', type = 'right' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={24}
            height={24}
            className={classNames(
                className,
                type === 'left' ? 'rotate-180' : '',
                type === 'up' ? '-rotate-90' : '',
                type === 'down' ? 'rotate-90' : '',
            )}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
        </svg>
    );
};

IconArrow.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['left', 'right', 'up', 'down']),
};

export default IconArrow;
