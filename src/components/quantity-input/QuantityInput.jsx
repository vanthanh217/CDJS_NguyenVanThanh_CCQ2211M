import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const QuantityInput = (props) => {
    const {
        className = '',
        size = 'L',
        productId,
        quantity,
        handleDecrease,
        handleIncrease,
        changeValue,
        withoutUseStore = false,
        setQuantity,
    } = props;
    const btnStyle =
        'flex items-center justify-center cursor-pointer select-none w-2/6';

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div
            className={classNames(
                'inline-flex items-center justify-center rounded-[10px] bg-white border border-lightStrock relative',
                className,
            )}
        >
            <span
                className={classNames(
                    btnStyle,
                    size === 'L' ? 'h-10 text-2xl' : '',
                    size === 'M' ? 'h-[30px] text-lg' : '',
                )}
                onClick={
                    withoutUseStore
                        ? handleDecrement
                        : () => handleDecrease(productId, quantity)
                }
            >
                -
            </span>
            <input
                type="text"
                value={quantity}
                onChange={
                    withoutUseStore
                        ? (e) => setQuantity(parseInt(e.target.value))
                        : changeValue
                }
                min={1}
                className={classNames(
                    'text-center bg-white w-2/6',
                    size === 'L' ? 'h-[38px]' : '',
                    size === 'M' ? 'h-[28px] text-sm' : '',
                )}
            />
            <span
                className={classNames(
                    btnStyle,
                    size === 'L' ? 'h-10 text-2xl' : '',
                    size === 'M' ? 'h-[30px] text-lg' : '',
                )}
                onClick={
                    withoutUseStore
                        ? handleIncrement
                        : () => handleIncrease(productId, quantity)
                }
            >
                +
            </span>
        </div>
    );
};

QuantityInput.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['M', 'L']),
    productId: PropTypes.number,
    quantity: PropTypes.number,
    handleDecrease: PropTypes.func,
    handleIncrease: PropTypes.func,
    changeValue: PropTypes.func,
    withoutUseStore: PropTypes.bool,
    setQuantity: PropTypes.func,
};

export default QuantityInput;
