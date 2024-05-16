import PropTypes from 'prop-types';

const NewItem = (props) => {
    const { url = '', author = '', date = '', title = '', desc = '' } = props;
    return (
        <div className="relative mb-8 transition-[all_.4s_ease] item-blog">
            {/* Thumb */}
            <div className="overflow-hidden rounded-lg">
                <a href="#">
                    <img
                        src={url}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </a>
            </div>
            {/* Content */}
            <div className="absolute p-[10px] bg-secondary text-white w-[calc(100%-30px)] left-0 bottom-[-25px] rounded-[0px_20px_0px_20px]">
                <h3 className="mb-2">
                    <a href="#" className="block font-semibold h-11">
                        {title}
                    </a>
                </h3>
                {/* Author & Dates */}
                <p className="flex items-center justify-between text-sm text-white">
                    <span>{author}</span>
                    <span>{date}</span>
                </p>
                <div className="block h-0 overflow-hidden box-blog-hid">
                    <p className="mb-[5px] font-normal text-white transition-[all_1s_ease] overflow-hidden h-[66px] line-clamp-3">
                        {desc}
                    </p>
                    <span className="relative bg-white mt-[5px] w-1/3 h-1 inline-block"></span>
                </div>
            </div>
        </div>
    );
};

NewItem.propTypes = {
    url: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default NewItem;
