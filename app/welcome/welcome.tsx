import BlogSection from "./BlogSection";
import FaqSection from "./FaqsSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestmonialSection";
import TitleSection from "./TitleSection";
import PriceSection from "./PriceSection";
import { useNavigate } from "react-router";

export function Welcome() {
  const router = useNavigate();
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />

      <TitleSection
        title="Dit is waarom ondernemers voor "
        highlight="AppName kiezen"
      />

      <FeatureSection
        subtitle="Facturen die zichzelf schrijven"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur in [APP] – precies zoals jij dat wil."
        bullets={[
          "Lorem ipsum dolor sit amet",
          "consectetur adipiscing elit",
          "Vivamus laoreet rutrum lobortis",
          "Etiam lobortis auctor velit tempus posuere",
          "Vestibulum sodales turpis rutrum velit",
          "rhoncus gravida. Aliquam mollis ligula eros",
        ]}
        image="https://cdn.dribbble.com/userupload/16089877/file/original-dcd8b1527022ba216f4d85029545f833.png?resize=752x&vertical=center"
        imageRight={false}
      />

      <FeatureSection
        subtitle="Facturen die zichzelf schrijven"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur in [APP] – precies zoals jij dat wil."
        bullets={[
          "Lorem ipsum dolor sit amet",
          "consectetur adipiscing elit",
          "Vivamus laoreet rutrum lobortis",
          "Etiam lobortis auctor velit tempus posuere",
          "Vestibulum sodales turpis rutrum velit",
          "rhoncus gravida. Aliquam mollis ligula eros",
        ]}
        image="https://cdn.dribbble.com/userupload/16089877/file/original-dcd8b1527022ba216f4d85029545f833.png?resize=752x&vertical=center"
        imageRight={true}
      />

      <FeatureSection
        subtitle="Facturen die zichzelf schrijven"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur in [APP] – precies zoals jij dat wil."
        bullets={[
          "Lorem ipsum dolor sit amet",
          "consectetur adipiscing elit",
          "Vivamus laoreet rutrum lobortis",
          "Etiam lobortis auctor velit tempus posuere",
          "Vestibulum sodales turpis rutrum velit",
          "rhoncus gravida. Aliquam mollis ligula eros",
        ]}
        image="https://cdn.dribbble.com/userupload/16089877/file/original-dcd8b1527022ba216f4d85029545f833.png?resize=752x&vertical=center"
        imageRight={false}
      />

      <TestimonialSection />

      <main className="flex items-center justify-center pt-16 pb-4"></main>

      <FeatureSection
        subtitle="Facturen die zichzelf schrijven"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur."
        bullets={[
          "Volledige automatisering",
          "Geen technische kennis nodig",
          "Flexibel aan te passen",
        ]}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iXiVHxJdepZ9PormoKMWyP-9oWCnqkXrkw&s"
        imageRight={true}
      />

      <FeatureSection
        subtitle="Facturen die zichzelf schrijven"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur."
        bullets={[
          "Volledige automatisering",
          "Geen technische kennis nodig",
          "Flexibel aan te passen",
        ]}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iXiVHxJdepZ9PormoKMWyP-9oWCnqkXrkw&s"
        imageRight={false}
        button={{
          label: "Meer weten",
          onClick: () => router("/order"), // ✅ Go to order page
        }}
      />

      <FeatureSection
        subtitle="Facturen die zichzelf schrijven"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur."
        bullets={[
          "Volledige automatisering",
          "Geen technische kennis nodig",
          "Flexibel aan te passen",
        ]}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iXiVHxJdepZ9PormoKMWyP-9oWCnqkXrkw&s"
        imageRight={true}
      />

      <PriceSection />
      <FaqSection />
      <BlogSection />

      <Footer />
    </>
  );
}
