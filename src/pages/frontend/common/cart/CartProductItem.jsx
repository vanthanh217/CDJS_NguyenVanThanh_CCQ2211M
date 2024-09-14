/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuantityInput } from '../../../../components/quantity-input';
import { IconTrash } from '../../../../components/icons';
import handleChangeQuantity from '../../../../utils/handleChangeQuantity';
import { ProductService } from '../../../../services';
import PropTypes from 'prop-types';
import { urlImage } from '../../../../config';

const CartProductItem = ({ data, onClick }) => {
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
        <article className="flex border-b gap-x-4 py-7 border-graySoft">
            <Link
                to={`/san-pham/${productItem?.slug}`}
                className="w-[155px] h-[150px]"
            >
                <img
                    src={`${urlImage}product/${productItem?.image}`}
                    alt={productItem?.name}
                    className="object-cover w-full h-full rounded-xl"
                />
            </Link>
            <div className="flex flex-1">
                {/* Left */}
                <div className="flex-1">
                    <h3 className="max-w-[400px] font-medium text-lg">
                        <Link
                            to={`/san-pham/${productItem?.slug}`}
                            className="block"
                        >
                            {productItem?.name}
                        </Link>
                    </h3>
                    <span className="block my-4 text-lg font-medium text-text2nd">
                        {parseFloat(price).toLocaleString('VI-vi')} VNĐ
                    </span>
                    <QuantityInput
                        productId={productId}
                        quantity={quantity}
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                        changeValue={changeValue}
                        className={'w-32'}
                    />
                </div>
                {/* Right */}
                <div className="flex flex-col">
                    {/* Total price */}
                    <span className="block text-3xl font-semibold text-right text-textRed">
                        {parseFloat(price * quantity).toLocaleString('VI-vi')}{' '}
                        VNĐ
                    </span>
                    <span
                        className="flex items-center justify-end mt-auto cursor-pointer gap-x-3 text-text2nd"
                        onClick={onClick}
                    >
                        <IconTrash />
                        Remove
                    </span>
                </div>
            </div>
        </article>
    );
};

CartProductItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default CartProductItem;
