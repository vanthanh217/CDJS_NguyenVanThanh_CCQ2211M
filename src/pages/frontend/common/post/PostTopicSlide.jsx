import PropTypes from 'prop-types';
import { Button } from '../../../../components/button';
import { urlImage } from '../../../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../../assets/css/PostTopic.scss';

const PostTopicSlide = ({ list = [] }) => {
    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="h-full overflow-hidden rounded-xl"
        >
            {list &&
                list.length > 0 &&
                list.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative h-full">
                            <div className="rounded-[10px] overflow-hidden">
                                <img
                                    src={`${urlImage}post/${item.image}`}
                                    alt={item.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute bottom-0 z-10 w-full p-5 text-textDark bg-black/25">
                                <div className="flex items-center justify-between gap-5 pb-3">
                                    <div className="pb-3">
                                        <h3 className="text-xl font-medium line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div>
                                        <Button
                                            to={`/tin-tuc/abc`}
                                            kind={'ghost-white'}
                                            className={
                                                'py-2 px-5 min-w-32 font-medium'
                                            }
                                        >
                                            Đọc thêm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

PostTopicSlide.propTypes = {
    list: PropTypes.array,
};

export default PostTopicSlide;
