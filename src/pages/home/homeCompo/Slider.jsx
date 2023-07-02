import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import english from '../../../assets/images/slider/engilsh.jpg'
import french from '../../../assets/images/slider/french.jpg'
import portugese from '../../../assets/images/slider/porutogese.jpg'
import japanese from '../../../assets/images/slider/japanese.jpg'
import arabic from '../../../assets/images/slider/arabic.jpg'
const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper select-none"  >
        <SwiperSlide><img src={french} className="h-[500px] w-full object-cover bg-gray-400 " /></SwiperSlide>
        <SwiperSlide><img src={portugese} className="h-[500px] w-full object-cover bg-gray-400 " /></SwiperSlide>
        <SwiperSlide><img src={japanese} className="h-[500px] w-full object-cover bg-gray-400 " /></SwiperSlide>
        <SwiperSlide><img src={arabic} className="h-[500px] w-full object-cover bg-gray-400 " /></SwiperSlide>
        <SwiperSlide><img src={english} className="h-[500px] w-full object-cover bg-gray-400 " /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;