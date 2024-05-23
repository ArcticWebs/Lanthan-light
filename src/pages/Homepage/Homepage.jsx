import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Section from "../../components/Section/Section";
import fixing from "assets/fixing.jpg";
import unplugged from "assets/unplugged.jpg";
import SectionWithBcg from "components/SectionWithBcg/SectionWithBcg";
import ProductsSection from "components/ProductsSection/ProductsSection";
import { products } from "data/products";
import { otherProducts } from "data/otherProducts";

const Homepage = () => {
  return (
    <>
      <Header />

      <Section
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
