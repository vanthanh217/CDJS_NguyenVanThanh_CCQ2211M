import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import classNames from '../../../../utils/classNames';
import { Link } from 'react-router-dom';
import { urlImage } from '../../../../config';

const PostItem = (props) => {
    const { item } = props;
    const createdAt = item?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;

    return (
        <div className={classNames('relative mb-8 item-blog', styles.postItem)}>
            {/* Thumb */}
            <div className="overflow-hidden rounded-lg">
                <Link to={`/tin-tuc/${item.slug}`} className="block">
                    <img
                        src={`${urlImage}post/${item.image}`}
                        alt={item.image}
                        className="object-cover w-full h-full"
                    />
                </Link>
            </div>
            {/* Content */}
            <div className="absolute p-[10px] bg-secondary text-white w-[calc(100%-30px)] left-0 bottom-[-25px] rounded-[0px_20px_0px_20px]">
                <h3 className="mb-2">
                    <Link
                        to={`/tin-tuc/${item.slug}`}
                        className="block font-semibold h-11 line-clamp-2"
                    >
                        {item.title}
                    </Link>
                </h3>
                {/* Dates */}
                <p className="flex items-center justify-between text-sm text-white">
                    <span>{newCreatedAt}</span>
                </p>
                <div
                    className={classNames(
                        'block h-0 overflow-hidden',
                        styles.boxContentHid,
                    )}
                >
                    <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                        className="mb-[5px] font-normal text-white transition-[all_1s_ease] overflow-hidden h-[66px] line-clamp-3"
                    />
                    <span className="relative bg-white mt-[5px] w-1/3 h-1 inline-block"></span>
                </div>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    item: PropTypes.object,
};

export default PostItem;
