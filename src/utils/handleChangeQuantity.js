import { useStore } from '../stores/cart';

export default function (productId) {
    const { updateQuantity } = useStore((state) => state);

    const handleDecrease = (productId, currentQuantity) => {
        updateQuantity(productId, currentQuantity - 1);
    };

    const changeValue = (e) => {
        updateQuantity(productId, parseInt(e.target.value));
    };

    const handleIncrease = (productId, currentQuantity) => {
        updateQuantity(productId, currentQuantity + 1);
    };

    return {
        handleDecrease,
        handleIncrease,
        changeValue,
    };
}
