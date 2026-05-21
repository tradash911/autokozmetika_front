import styled from "styled-components";
import Hero from "../Components/sections/Hero";
import Footer from "../Components/sections/Footer";
import { useQuery } from "@tanstack/react-query";
import { getMainCategoriesWithSubcategories } from "../api/services";
import AboutUs from "../Components/sections/AbutUs";
import { StyledMain } from "./main.styles";
import SectionTitle from "../Components/layout/SectionTitle";
import Services from "../Components/sections/Services";
import Galery from "../Components/sections/Gallery";
import Contact from "../Components/sections/Contact";

function Main() {
  const { isLoading, data } = useQuery({
    queryFn: getMainCategoriesWithSubcategories,
    queryKey: ["getMainCategoriesWithSubcategoires"],
  });

  if (isLoading) return <h1>das</h1>;
  return (
    <>
      <Hero />
      <StyledMain>
        <AboutUs />
        <Services data={data} />
        <Galery />
        <Contact />
      </StyledMain>
      <Footer />
    </>
  );
}

export default Main;
