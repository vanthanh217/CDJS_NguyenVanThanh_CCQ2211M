import classNames from '../../../utils/classNames';
import PropTypes from 'prop-types';
import { IconHeart } from '../../icons';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const { url = '', title = '', price = '', salePrice = '' } = props;
    return (
        <div
            className={classNames(
                'w-full max-w-[280px] relative overflow-hidden bg-[#fff] rounded-[10px]',
                styles.wrap,
            )}
        >
            <div className="mb-2">
                <Link to="/san-pham/abc" className="block">
                    <img
                        src={url}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <h4 className="w-full text-center hover:text-primary line-clamp-2">
                    <Link to="/san-pham/abc" className="block">
                        {title}
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
                        <span className="text-textRed">{parseInt(price)}đ</span>
                        {salePrice && (
                            <span className="text-text2nd">
                                <del>{parseInt(salePrice)}đ</del>
                            </span>
                        )}
                    </div>
                    <div
                        className={classNames(
                            'absolute flex items-center justify-center gap-x-5',
                            styles.action,
                        )}
                    >
                        <button className="px-4 py-2 text-white bg-primary rounded-xl">
                            Add to cart
                        </button>
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
    url: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    salePrice: PropTypes.string,
};

export default ProductItem;
