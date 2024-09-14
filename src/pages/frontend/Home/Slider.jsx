import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../assets/css/Slide.scss';
import { useEffect, useState } from 'react';
import { BannerService } from '../../../services';
import { urlImage } from '../../../config';

const Slider = () => {
    const [sliders, setSlides] = useState([]);

    useEffect(() => {
        (async () => {
            const { banners } = await BannerService.getListSlider(
                'slideshow',
                5,
            );
            setSlides(banners);
        })();
    }, []);

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
            {sliders &&
                sliders.length > 0 &&
                sliders.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={`${urlImage}banner/${item.image}`}
                            alt={item.image}
                            className="object-cover w-full h-[450px]"
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Slider;
