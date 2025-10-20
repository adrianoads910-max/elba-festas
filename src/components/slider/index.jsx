import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSlider() {
  const slides = [
    {
      title: "Promoções Especiais 🎉",
      image: "/banner1.png",
      link: "/products", // link dentro do site
    },
    {
      title: "Siga no Instagram 📸",
      image: "/banner2.png",
      link: "https://www.instagram.com/elbacamilo.festas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // link externo
    },
    {
      title: "Monte sua Festa Conosco 🎂",
      image: "/banner3.png",
      link: "/contact", // link interno
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a
            href={slide.link}
            target={slide.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="block w-full h-full relative group"
          >
            {/* Imagem de fundo */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay escuro suave para destacar texto */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all"></div>

            {/* Título centralizado */}
            <h2 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white text-xl md:text-3xl font-bold drop-shadow-lg">
              {slide.title}
            </h2>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
