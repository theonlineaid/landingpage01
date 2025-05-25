import React from "react";
import TitleSection from "./TitleSection";

const services = [
  {
    title: "Geen code",
    description:
      "Installeer, verbind, klaar. Geen technische kennis vereist – gewoon klikken en gaan.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
  },
  {
    title: "Jouw [APP]",
    description:
      "Jouw instellingen, jouw regels. Wij factureren met jouw bestaande [APP]-configuratie.",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png", // app integration
  },
  {
    title: "Flexibel",
    description:
      "Pas eenvoudig aan wat je wil. Geen invloed op je webshop, wel meer controle voor jou.",
    image: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="py-40 text-gray-300">
      <div className="max-w-[1440px] mx-auto px-6">
        <TitleSection
          title="Dit is waarom ondernemers voor "
          highlight="AppName kiezen"
          subtitle="Geen hype. Gewoon resultaat waar je echt wat aan hebt."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {services.map(({ title, description, image }, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center bg-gray-800 bg-opacity-30 rounded-xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-pink-500/30 hover:ring-1 hover:ring-[#F41DA4]"
            >
              {/* Decorative light blur behind image on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#F41DA4]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <img
                src={image}
                alt={title}
                className="relative z-10 w-20 h-20 mb-6 object-contain filter brightness-125"
              />
              <h3 className="relative z-10 text-2xl font-semibold mb-4 text-[#F41DA4]">
                {title}
              </h3>
              <p className="relative z-10 text-center text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
