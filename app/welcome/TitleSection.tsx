import React from "react";

interface TitleSectionProps {
  title: string;
  highlight?: string;
  align?: "left" | "center" | "right";
  subtitle?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  highlight,
  align = "center",
  subtitle,
}) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-wide text-white leading-tight">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-[#F41DA4]">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-gray-400 text-lg max-w-xl ${
            align === "center" ? "mx-auto text-center" : alignment
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSection;
