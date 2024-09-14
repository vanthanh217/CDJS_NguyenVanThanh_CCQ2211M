import PropTypes from 'prop-types';
import classNames from '../../../../utils/classNames';

const CartInfoRow = (props) => {
    const { str = '', num, className = '', quantity = false } = props;

    return (
        <p
            className={classNames(
                'flex items-center justify-between mt-3',
                className,
            )}
        >
            <span>{str}</span>
            <span>
                {parseFloat(num).toLocaleString('VI-vi')}
                {!quantity && ' VNĐ'}
            </span>
        </p>
    );
};

CartInfoRow.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
    className: PropTypes.string,
    quantity: PropTypes.bool,
};

export default CartInfoRow;
