import styled from "styled-components";
import Hero from "../Components/sections/Hero";
import Footer from "../Components/sections/Footer";
import { useQuery } from "@tanstack/react-query";
import { getMainCategoriesWithSubcategories } from "../api/services";
import AboutUs from "../Components/sections/AbutUs";
import { StyledMain } from "./main.styles";
import SectionTitle from "../Components/layout/SectionTitle";
import Services from "../Components/sections/Services";

function Main() {
  const { isLoading, data } = useQuery({
    queryFn: getMainCategoriesWithSubcategories,
    queryKey: ["getMainCategoriesWithSubcategoires"],
  });
  console.log(data);
  if (isLoading) return <h1>das</h1>;
  return (
    <>
      <Hero />
      <StyledMain>
        <AboutUs />
        <Services />
      </StyledMain>
      <Footer />
    </>
  );
}

export default Main;
