import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const QuantityInput = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const changeValue = (e) => {
        setQuantity(parseInt(e.target.value));
    };
    const { className = '' } = props;
    const btnStyle =
        'flex items-center justify-center w-10 h-10 cursor-pointer select-none text-2xl';
    return (
        <div
            className={classNames(
                'inline-flex items-center justify-center rounded-[10px] bg-white border border-lightStrock relative',
                className,
            )}
        >
            <span className={btnStyle} onClick={handleDecrement}>
                -
            </span>
            <input
                type="text"
                value={quantity}
                onChange={changeValue}
                className="w-10 h-10 text-center bg-white"
            />
            <span className={btnStyle} onClick={handleIncrement}>
                +
            </span>
        </div>
    );
};

QuantityInput.propTypes = {
    className: PropTypes.string,
};

export default QuantityInput;
