import PropTypes from 'prop-types';
import classNames from '../../../utils/classNames';

const CartInfoRow = ({ str = '', num, className = '' }) => {
    return (
        <p
            className={classNames(
                'flex items-center justify-between mt-3',
                className,
            )}
        >
            <span>{str}</span>
            <span>{num}</span>
        </p>
    );
};

CartInfoRow.propTypes = {
    str: PropTypes.string,
    num: PropTypes.any,
    className: PropTypes.string,
};

export default CartInfoRow;
