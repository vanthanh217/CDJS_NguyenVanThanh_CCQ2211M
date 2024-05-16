import { Link } from 'react-router-dom';
import { IconHeart } from '../icons';
import PropTypes from 'prop-types';

const CardItem = (props) => {
    const { url = '', title = '', price = '', salePrice = '' } = props;
    return (
        <div className="w-full max-w-[250px]">
            <div>
                <Link to="#" className="block w-[250px] h-[250px]">
                    <img
                        src={url}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <h4 className="hover:text-primary">
                    <Link to="#">{title}</Link>
                </h4>
                {/* Price */}
                <div>
                    <div className="flex items-center justify-center mb-2 gap-x-3">
                        <span className="text-red-600">
                            {parseInt(price, 10)}đ
                        </span>
                        {salePrice && (
                            <span className="text-gray-500">
                                <del>{parseInt(salePrice)}đ</del>
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-x-5">
                        <button className="px-4 py-2 text-white bg-primary rounded-xl">
                            Add to cart
                        </button>
                        <span className="p-2 text-white rounded-lg bg-primary">
                            <IconHeart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    salePrice: PropTypes.string,
};

export default CardItem;
