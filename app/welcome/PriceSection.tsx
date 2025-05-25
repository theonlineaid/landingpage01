import React from "react";
import TitleSection from "./TitleSection";

const plans = [
  {
    name: "Kickstart!",
    description:
      "Voor ondernemers die net beginnen en meteen goed van start willen.",
    features: [
      "Volledige koppeling met [APP]",
      "Tot 50 orders per maand",
      "Automatische facturen zonder technische kennis",
      "3 dagen gratis proef",
    ],
    price: "Gratis starten",
    subtext: "€X / jaar*",
    highlight: false,
  },
  {
    name: "Groei+",
    description:
      "Voor webshops die tempo maken en hun administratie willen bijhouden zonder stress.",
    features: [
      "Alles van Kickstart",
      "Tot 500 orders per maand",
      "Prioritaire synchronisatie",
      "Aanpasbare instellingen per ordertype",
      "E-mail support",
    ],
    price: "Gratis starten",
    subtext: "€X / jaar*",
    highlight: true,
  },
  {
    name: "ProFlow",
    description: "Voor booming businesses die niets aan het toeval overlaten.",
    features: [
      "Alles van Groei+",
      "Onbeperkt aantal orders",
      "Extra logging en foutdetectie",
      "API-opties voor integratie met externe systemen",
      "Premium support (met SLA)",
    ],
    price: "Gratis starten",
    subtext: "€X / jaar*",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <TitleSection
          title=" Kies het plan dat "
          highlight="bij je past"
          subtitle=" AppName verdient zichzelf terug vanaf de eerste bestelling."
        />

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition shadow-xl ${
                plan.highlight
                  ? "border-[#F41DA4] bg-gray-900 shadow-pink-500/30"
                  : "border-gray-800 bg-gray-900"
              }`}
            >
              <h3 className="text-2xl font-bold text-[#F41DA4] mb-3">
                {plan.name}
              </h3>
              <p className="text-gray-300 mb-6">{plan.description}</p>

              <ul className="mb-6 space-y-3 text-gray-200">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#F41DA4] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button className="w-full bg-[#F41DA4] text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition">
                  {plan.price}
                </button>
                {plan.subtext && (
                  <p className=" text-gray-400 mt-2 text-2xl">{plan.subtext}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
