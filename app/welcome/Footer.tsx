import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F41DA4] text-white py-16 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Inschrijven nieuwsbrief</h3>
          <p className="mb-4 text-white/90">Geen spam, beloofd!</p>
          <form className="flex max-w-sm">
            <input
              type="email"
              placeholder="Jouw e-mailadres"
              className="flex-grow px-4 py-3 rounded-l-full text-gray-900 placeholder-white border border-gray-300 focus:outline-none focus:border-white transition"
            />
            <button
              type="submit"
              className="bg-white text-[#F41DA4] hover:bg-gray-100 transition rounded-r-full px-6 py-3 font-semibold"
            >
              Inschrijven
            </button>
          </form>
        </div>

        {/* Contact Column */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Contact</h4>
          <a href="#" className="block hover:underline text-white/90">
            Nieuws
          </a>
          <a href="#" className="block hover:underline text-white/90">
            Voorwaarden
          </a>
          <a href="#" className="block hover:underline text-white/90">
            Klantenportaal
          </a>
        </div>

        {/* Extra Links Column */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Meer</h4>
          <a href="#" className="block hover:underline text-white/90">
            Over ons
          </a>
          <a href="#" className="block hover:underline text-white/90">
            Tarieven
          </a>
          <a href="#" className="block hover:underline text-white/90">
            FAQs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
