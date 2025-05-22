// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import SlideImage from '../assets/Desktop/Destaque/ImagemTitulo.png'
import SetaVoltar from '../assets/Desktop/Icones/SetaVoltar.png'
import SetaAvancar from '../assets/Desktop/Icones/SetaAvancar.png'

export default function Highlights() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <section className='flex flex-col justify-end gap-2'>
                <div className='flex justify-between items-center w-full'>
                    <h1 className='text-bold text-xl'>DESTAQUE:</h1>
                    <div className='bg-black h-0.5 w-82'></div>
                    <div className='flex justify-between w-18'>
                        <img src={SetaVoltar} ref={prevRef} className="cursor-pointer" />
                        <img src={SetaAvancar} ref={nextRef} className="cursor-pointer" />
                    </div>

                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-132.5 h-53">
                    <SwiperSlide><img src={SlideImage} className='SlideImages' /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage} className='SlideImages' /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage} className='SlideImages' /></SwiperSlide>
                </Swiper>
            </section>

        </>
    )
}