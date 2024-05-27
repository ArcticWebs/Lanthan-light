import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import fixing from "assets/fixing.jpg";
import SectionWithBcg from "pages/Homepage/components/SectionWithBcg/SectionWithBcg";
import ProductsSection from "pages/Homepage/components/ProductsSection/ProductsSection";
import { products } from "data/products";
import { otherProducts } from "data/otherProducts";
import { services } from "data/services";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <Services
        firstTxt={"Specjalizujemy sie w naprawach trudnych przypadków."}
        secondTxt={
          "Serwisujemy przede wszystkim sprzęt muzyczny - gitary elektryczne, wzmacniacze gitarowe, sprzęt estradowy i studyjny."
        }
        thirdTxt={
          "Dzięki skutecznym naprawom, od lat cieszymy się dobrą opinią i zaufaniem muzyków."
        }
        isReversed={false}
        imageSrc={fixing}
        id={"service"}
        data={services}
      />
      <SectionWithBcg />
      <ProductsSection
        title={"NASZE EFEKTY GITAROWE"}
        data={products}
        id={"products"}
      />
      <ProductsSection title={"POZOSTAŁE PRODUKTY"} data={otherProducts} />

      <About />
    </>
  );
};

export default Homepage;
