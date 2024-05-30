import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LatestPostItem = (props) => {
    const {
        to = '',
        image = '',
        author = '',
        date = '',
        title = '',
        desc = '',
    } = props;
    return (
        <div className="flex gap-x-4">
            <Link
                to={to}
                className="block w-2/5 rounded-[10px] overflow-hidden"
            >
                <img
                    src={image}
                    alt={image}
                    className="object-cover w-full h-full"
                />
            </Link>
            <div className="w-1/2">
                <span className="inline-block text-sm text-text2nd">
                    {author} • {date}
                </span>
                <h2 className="mb-1 text-xl font-semibold text-textPrimary hover:text-primary line-clamp-2">
                    <Link to={''} className="block">
                        {title}
                    </Link>
                </h2>
                <p className="text-sm line-clamp-3">{desc}</p>
            </div>
        </div>
    );
};

LatestPostItem.propTypes = {
    to: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default LatestPostItem;
