import { useEffect, useState } from 'react';
import { QuantityInput } from '../../../components/quantity-input';
import PropTypes from 'prop-types';
import { ProductService } from '../../../services';
import { urlImage } from '../../../config';
import handleChangeQuantity from '../../../utils/handleChangeQuantity';

// eslint-disable-next-line react/prop-types
const CartItem = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { productId, quantity } = data;
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState({});
    const { handleDecrease, handleIncrease, changeValue } =
        handleChangeQuantity(productId);
    const price =
        productItem?.pricesale > 0
            ? productItem?.pricesale
            : productItem?.price;

    useEffect(() => {
        (async () => {
            const { products } = await ProductService.getAllProduct(1000);
            setProducts(products);
        })();
    }, []);
    useEffect(() => {
        const findProduct = products.find(
            (product) => product.id === productId,
        );
        setProductItem(findProduct);
    }, [productId, products]);

    return (
        <div className="flex p-2 border rounded-lg gap-x-2 border-lightStrock">
            {/* Image */}
            <div className="size-[85px] rounded-[10px] overflow-hidden">
                <img
                    src={`${urlImage}product/${productItem?.image}`}
                    alt={productItem?.name}
                    className="object-cover w-full h-full"
                />
            </div>
            {/* Other */}
            <div className="flex flex-col flex-1">
                <h4 className="line-clamp-2">{productItem?.name}</h4>
                <div className="flex items-end mt-auto gap-x-2">
                    <span className="flex-1 text-sm font-medium text-textRed line-clamp-1">
                        {`${parseFloat(price * quantity).toLocaleString(
                            'VI-vi',
                        )} VNĐ`}
                    </span>
                    <QuantityInput
                        productId={productId}
                        quantity={quantity}
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                        changeValue={changeValue}
                        className={'w-2/5'}
                        size={'M'}
                    />
                </div>
            </div>
        </div>
    );
};

CartItem.proTypes = {
    data: PropTypes.object,
};

export default CartItem;
