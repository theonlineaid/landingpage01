import React from "react";

interface FeatureSectionProps {
  subtitle: string;
  description: string;
  bullets?: string[];
  image: string;
  imageRight?: boolean;
  button?: {
    label: string;
    onClick: () => void;
  };
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  subtitle,
  description,
  bullets,
  image,
  imageRight = false,
  button,
}) => {
  return (
    <section className="py-16">
      <div
        className={`max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row ${
          imageRight ? "md:flex-row-reverse" : ""
        } items-center gap-12`}
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute -inset-10 bg-[#F41DA4]/10 rounded-full blur-3xl z-0" />
          <img
            src={image}
            alt="Feature"
            className="relative z-10 w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-white space-y-4">
          <h3 className="text-2xl font-semibold">{subtitle}</h3>
          <p className="text-gray-300">{description}</p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {button && (
            <div className="mt-6">
              <button
                onClick={button.onClick}
                className="bg-[#F41DA4] text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
              >
                {button.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
