import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TitleSection from "./TitleSection";

const testimonials = [
  {
    name: "Jasper de Vries",
    role: "WooCommerce-gebruiker",
    message:
      "Ik was binnen 10 minuten live. Alles werkt meteen zoals het hoort – echt top!",
  },
  {
    name: "Sofie van Dongen",
    role: "WooCommerce-gebruiker",
    message:
      "AppName bespaart me dagelijks uren. Geen handmatig gedoe meer, wat een verademing.",
  },
  {
    name: "Liam Bakker",
    role: "Webshop eigenaar",
    message:
      "De automatisering is verbluffend. Ik raad AppName aan iedereen aan!",
  },
  {
    name: "Emma Jansen",
    role: "Online ondernemer",
    message:
      "Ik hoef geen seconde meer aan facturen te denken. Alles gaat vanzelf.",
  },
  {
    name: "Noah Visser",
    role: "eCommerce-specialist",
    message:
      "AppName past zich aan mijn wensen aan. Flexibel en krachtig tegelijk.",
  },
  {
    name: "Mila Hendriks",
    role: "Retailer",
    message:
      "Het bespaart me zoveel tijd. Echt een gamechanger voor mijn business.",
  },
];

const groupPairs = (arr: typeof testimonials) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2));
  }
  return pairs;
};

const StarRating = () => (
  <div className="flex gap-1 text-[#FBBF24] mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} fill="#FBBF24" stroke="none" />
    ))}
  </div>
);

const CustomNavigation = () => (
  <>
    <div className="swiper-button-prev-custom absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white text-[#F41DA4] rounded-full p-2 shadow hover:bg-[#F41DA4] hover:text-white transition">
      <ChevronLeft size={20} />
    </div>
    <div className="swiper-button-next-custom absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white text-[#F41DA4] rounded-full p-2 shadow hover:bg-[#F41DA4] hover:text-white transition">
      <ChevronRight size={20} />
    </div>
  </>
);

const TestimonialSection: React.FC = () => {
  const pairs = groupPairs(testimonials);

  return (
    <section className="bg-gray-900 text-white py-20 relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <TitleSection title="Testimonials" />
        <div className="relative">
          <CustomNavigation />
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            // pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={1}
            className="pb-14"
          >
            {pairs.map((pair, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row gap-6">
                  {pair.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gray-800 bg-opacity-40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
                    >
                      <StarRating />
                      <p className="text-lg text-gray-200 mb-6">
                        “{item.message}”
                      </p>
                      <div>
                        <h4 className="text-xl font-semibold text-[#F41DA4]">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
