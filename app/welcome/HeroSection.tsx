import React from "react";
import { CheckCircle, Zap, Layers, Hand } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-950 text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#F41DA4]">Slim factureren</span>, nul gedoe
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            AppName voor WooCommerce
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Snel, automatisch & foutloos. Geen handmatig gedoe meer.
            <br />
            Koppel je WooCommerce shop aan <strong>[APP]</strong> en laat ons
            het saaie werk doen; meer tijd om te verkopen, minder tijd aan
            papierwerk.
          </p>

          {/* CTA Button */}
          <a
            href="#subscribe"
            className="inline-block bg-[#F41DA4] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition"
          >
            Test gratis – 5 dagen full access
          </a>

          {/* Selling Points */}
          <div className="mt-8 space-y-3">
            {[
              "100% WooCommerce integratie",
              "Automatische facturen & verzending",
              "Bespaar uren administratie per week",
            ].map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-[#F41DA4]" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image with more visible soft lighting background */}
        <div className="relative w-full">
          {/* Radial gradient light background */}
          <div
            className="absolute -inset-40 rounded-full z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(244,29,164,0.4) 0%, rgba(244,29,164,0.15) 40%, transparent 80%)",
              filter: "blur(120px)",
            }}
          />

          {/* Image stays normal size */}
          <img
            src="https://images.vexels.com/media/users/3/192431/isolated/preview/7f22ea54db73af152e941f40dd72853c-winter-online-shopping-illustration.png"
            alt="Vector illustration"
            className="relative z-10 w-full h-auto"
          />
        </div>
      </div>

      {/* Extra 3 Options Below */}
      <div className="max-w-[1440px] mx-auto px-6 mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[#F41DA4] transition">
          <Zap size={32} className="mx-auto mb-3 text-[#F41DA4]" />
          <h3 className="text-lg font-semibold">Razendsnelle flow</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[#F41DA4] transition">
          <Layers size={32} className="mx-auto mb-3 text-[#F41DA4]" />
          <h3 className="text-lg font-semibold">Alles netjes in [APP]</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[#F41DA4] transition">
          <Hand size={32} className="mx-auto mb-3 text-[#F41DA4]" />
          <h3 className="text-lg font-semibold">Geen handwerk meer</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
