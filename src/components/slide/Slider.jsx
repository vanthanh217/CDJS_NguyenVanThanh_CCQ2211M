import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide from '../../assets/images/slider_1.webp';

const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide>
                <img
                    src={Slide}
                    alt=""
                    className="object-cover w-full h-[450px]"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={Slide}
                    alt=""
                    className="object-cover w-full h-[450px]"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
