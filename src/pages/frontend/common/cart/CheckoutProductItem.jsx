import { Link } from 'react-router-dom';
import { IconXMark } from '../../../../components/icons';
import { useEffect, useState } from 'react';
import { CategoryService, ProductService } from '../../../../services';
import PropTypes from 'prop-types';
import { urlImage } from '../../../../config';

const CheckoutProductItem = ({ data, onClick }) => {
    const { productId, quantity } = data;
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState({});
    const cateId = productItem?.category_id;
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
    useEffect(() => {
        (async () => {
            const { category } = await CategoryService.getById(cateId);
            setCategory(category);
        })();
    }, [cateId]);

    return (
        <li className="relative flex p-2 border border-lightStrock rounded-xl gap-x-3">
            <Link
                to={`/san-pham/${productItem?.slug}`}
                className="w-[95px] block"
            >
                <img
                    src={`${urlImage}product/${productItem?.image}`}
                    alt={productItem?.name}
                    className="object-cover w-full h-full rounded-xl"
                />
            </Link>
            <div className="flex flex-col justify-center flex-1 gap-y-1">
                <div>
                    <span className="inline-block text-sm text-text2nd">
                        {category?.name}
                    </span>
                    <h4 className="pr-7 line-clamp-2">
                        <Link to={`/san-pham/${productItem?.slug}`}>
                            {productItem?.name}
                        </Link>
                    </h4>
                </div>
                {/* Total Price */}
                <span className="inline-block font-medium text-textRed">
                    {parseFloat(price * quantity).toLocaleString('VI-vi')} VNĐ
                </span>
            </div>
            <span
                className="absolute z-10 cursor-pointer select-none right-3 top-3"
                onClick={onClick}
            >
                <IconXMark />
            </span>
        </li>
    );
};

CheckoutProductItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default CheckoutProductItem;
