import PropTypes from 'prop-types';
import { urlImage } from '../../../../config';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/button';
import { IconCart } from '../../../../components/icons';
import { useStore } from '../../../../stores/cart';

const ProductItemTypeList = ({ item }) => {
    const { addToCart } = useStore((state) => state);
    const price = item?.pricesale > 0 ? item?.pricesale : item?.price;

    const handleAddToCart = () => {
        addToCart({ productId: item.id, price, quantity: 1 });
    };
    const renderPrice = (item) => {
        if (item.pricesale > 0 && item.pricesale < item.price) {
            return (
                <p className="flex items-center gap-x-3">
                    <span className="text-xl font-medium text-textRed">
                        {parseFloat(item.pricesale).toLocaleString('vi-VI')} VNĐ
                    </span>
                    <span className="text-lg text-text2nd">
                        <del>
                            {parseFloat(item.price).toLocaleString('vi-VI')} VNĐ
                        </del>
                    </span>
                </p>
            );
        } else {
            return (
                <span className="text-xl font-medium text-textRed">
                    {parseFloat(item.price).toLocaleString('vi-VI')} VNĐ
                </span>
            );
        }
    };

    return (
        <div className="flex w-full p-4 bg-white gap-x-7 shadow-box rounded-xl">
            <Link
                to={`/san-pham/${item?.slug}`}
                className="w-[250px] h-[200px] rounded-xl overflow-hidden"
            >
                <img
                    src={`${urlImage}product/${item?.image}`}
                    alt=""
                    className="object-contain w-full h-full"
                />
            </Link>
            <div className="flex-1">
                <div className="mb-2">
                    <span className="inline-block uppercase text-text2nd">
                        {item?.brandName}
                    </span>
                    <h5>
                        <Link
                            to={`/san-pham/${item.slug}`}
                            className="text-2xl line-clamp-2 hover:text-primary"
                        >
                            {item?.name}
                        </Link>
                    </h5>
                    <p
                        dangerouslySetInnerHTML={{ __html: item?.detail }}
                        className="line-clamp-2 text-text2nd"
                    />
                </div>
                <div>
                    <div className="mb-3">{renderPrice(item)}</div>
                    <div className="flex items-center gap-x-7">
                        <Button
                            className={'w-56 py-2 text-lg'}
                            onClick={handleAddToCart}
                        >
                            <IconCart /> Thêm vào giỏ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductItemTypeList.propTypes = {
    item: PropTypes.object,
};

export default ProductItemTypeList;
