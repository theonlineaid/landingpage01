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
        image="https://www.mspy.com/static/mspy/public/assets/images/redesign/features/websiteBookmarks/en/bookmarks@2x.png?v=v2"
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
        image="https://i.ibb.co/C3sB4sMD/Gril-image.png"
        // image="https://cdn3d.iconscout.com/3d/premium/thumb/woman-sitting-chart-and-showing-growth-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--successful-success-achievement-leader-boss-women-business-pack-people-illustrations-3821328.png"
        imageRight={true}
      />

      <FeatureSection
        subtitle="Alles werkt zoals jij gewend bent"
        description="Geen handmatige fouten, geen dubbel werk. Elke bestelling wordt automatisch omgezet naar een correcte factuur in [APP] – precies zoals jij dat wil."
        bullets={[
          "Lorem ipsum dolor sit amet",
          "consectetur adipiscing elit",
          "Vivamus laoreet rutrum lobortis",
          "Etiam lobortis auctor velit tempus posuere",
          "Vestibulum sodales turpis rutrum velit",
          "rhoncus gravida. Aliquam mollis ligula eros",
        ]}
        image="https://emplifi.io/wp-content/uploads/2024/10/header-nav-img-4.png"
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
        image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/834404108113299.5fb6bb0a6877a.png"
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
        image="https://miro.medium.com/v2/resize:fit:2000/1*iBK-mVMjetmSZBjpQSgRdw.png"
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
        image="https://www.mspy.com/static/mspy/public/assets/images/redesign/features/common/access@2x.png?v=v2"
        imageRight={true}
      />

      <PriceSection />
      <FaqSection />
      <BlogSection />

      <Footer />
    </>
  );
}
