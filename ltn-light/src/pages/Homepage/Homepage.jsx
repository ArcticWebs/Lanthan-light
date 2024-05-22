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
      <Section
        firstTxt={"Seba jest super wszystko umie, pracował w MLC"}
        secondTxt={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        thirdTxt={"Milion lat doświadczenia robi swoje!"}
        isReversed={true}
        imageSrc={unplugged}
        id={"about"}
      />
      <About />
    </>
  );
};

export default Homepage;
