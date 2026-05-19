import styled from "styled-components";
import Hero from "../Components/sections/Hero";
import Footer from "../Components/sections/Footer";
import { useQuery } from "@tanstack/react-query";
import { getMainCategoriesWithSubcategories } from "../api/services";

const StyledMain = styled.main`
  color: var(--brown);
`;

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
      <StyledMain>valami</StyledMain>
      <Footer />
    </>
  );
}

export default Main;
