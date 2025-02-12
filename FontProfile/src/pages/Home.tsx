import { benefitOne, benefitTwo } from "@/assets/data";
import { Benefits } from "@/component/Home/Benefits";
import Cta from "@/component/Home/Cta";
import Faq from "@/component/Home/Faq";
import Hero from "@/component/Home/Hero";
// import Testimonials from "@/component/Home/Testimonials";
import SectionTitle from "@/component/Shared/Main/SectionTitle";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Parinya";
  }, []);

  const benefitsRef = useRef<HTMLDivElement | null>(null);

  const scrollToBenefits = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Hero */}
      <Hero scrollToBenefits={scrollToBenefits} />

      {/* SectionTitle */}
      <SectionTitle
        preTitle="background"
        title="Who is him and why he is here"
        align="center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        excepturi ipsa necessitatibus tempora odit corrupti amet eligendi quas
      </SectionTitle>

      {/* Benefits */}
      <div ref={benefitsRef}>
        <Benefits imgPos="left" data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      {/* SectionTitle */}
      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* SectionTitle */}
      <SectionTitle preTitle="More skill" title="Additional Experience">
        In addition to the above abilities, there are other abilities in each
        filled as follows:
      </SectionTitle>

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <Cta />
    </div>
  );
}
