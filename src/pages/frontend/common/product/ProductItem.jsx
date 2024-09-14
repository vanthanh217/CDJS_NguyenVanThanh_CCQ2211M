import classNames from '../../../../utils/classNames';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { IconHeart } from '../../../../components/icons';
import { urlImage } from '../../../../config';
import { useStore } from '../../../../stores/cart';
import { Button } from '../../../../components/button';

const ProductItem = (props) => {
    const { item } = props;
    const { addToCart } = useStore((state) => state);
    const price = item?.pricesale > 0 ? item?.pricesale : item?.price;

    const handleAddToCart = () => {
        addToCart({ productId: item.id, price, quantity: 1 });
    };
    const renderPrice = (item) => {
        if (item.pricesale > 0 && item.pricesale < item.price) {
            return (
                <>
                    <span className="font-medium text-textRed">
                        {parseFloat(item.pricesale).toLocaleString('vi-VI')} VNĐ
                    </span>
                    <span className="text-sm text-text2nd">
                        <del>
                            {parseFloat(item.price).toLocaleString('vi-VI')} VNĐ
                        </del>
                    </span>
                </>
            );
        } else {
            return (
                <span className="font-medium text-textRed">
                    {parseFloat(item.price).toLocaleString('vi-VI')} VNĐ
                </span>
            );
        }
    };

    return (
        <div
            className={classNames(
                'w-full max-w-[280px] relative overflow-hidden bg-[#fff] rounded-[10px]',
                styles.wrap,
            )}
        >
            <div className="mb-2">
                <Link to={`/san-pham/${item.slug}`} className="block h-[244px]">
                    <img
                        src={`${urlImage}product/${item.image}`}
                        alt=""
                        className="object-contain w-full h-full"
                    />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <h4 className="w-full text-center hover:text-primary line-clamp-2">
                    <Link to={`/san-pham/${item.slug}`} className="block">
                        {item.name}
                    </Link>
                </h4>
                {/* Price */}
                <div className="w-full">
                    <div
                        className={classNames(
                            'flex items-center justify-center mb-2 gap-x-3',
                            styles.priceBox,
                        )}
                    >
                        {renderPrice(item)}
                    </div>
                    <div
                        className={classNames(
                            'absolute flex items-center justify-center gap-x-5',
                            styles.action,
                        )}
                    >
                        <Button className="px-4 py-2" onClick={handleAddToCart}>
                            Thêm vào giỏ
                        </Button>
                        <span className="p-2 text-white rounded-lg cursor-pointer bg-primary">
                            <IconHeart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    item: PropTypes.object,
};

export default ProductItem;
