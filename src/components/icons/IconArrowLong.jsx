import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const IconArrowLong = ({ kind = 'left' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classNames(
                'size-6',
                kind === 'right' ? 'rotate-180' : '',
                kind === 'up' ? 'rotate-90' : '',
                kind === 'down' ? '-rotate-90' : '',
            )}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
        </svg>
    );
};

IconArrowLong.propTypes = {
    kind: PropTypes.oneOf(['left', 'right', 'up', 'down']),
};

export default IconArrowLong;
