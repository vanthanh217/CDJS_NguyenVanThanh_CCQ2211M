import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { urlImage } from '../../../../config';

const LatestPostItem = (props) => {
    const { item, topic = 'Kent' } = props;
    const createdAt = item?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;

    return (
        <div className="flex gap-x-4">
            <Link
                to={`/tin-tuc/${item.slug}`}
                className="block w-2/5 rounded-[10px] overflow-hidden"
            >
                <img
                    src={`${urlImage}post/${item?.image}`}
                    alt={item?.image}
                    className="object-cover w-full h-full"
                />
            </Link>
            <div className="flex-1">
                <span className="inline-block text-sm text-text2nd">
                    {topic} • {newCreatedAt}
                </span>
                <h2 className="mb-1 text-xl font-semibold text-textPrimary hover:text-primary line-clamp-2">
                    <Link to={''} className="block">
                        {item?.title}
                    </Link>
                </h2>
                <p
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="text-sm line-clamp-3"
                />
            </div>
        </div>
    );
};

LatestPostItem.propTypes = {
    item: PropTypes.object,
    topic: PropTypes.string,
};

export default LatestPostItem;
