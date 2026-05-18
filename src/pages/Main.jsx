import styled from "styled-components";
import Hero from "../Components/sections/Hero";
import Footer from "../Components/sections/Footer";

const StyledMain = styled.main`
  color: var(--brown);
`;

function Main() {
  return (
    <>
      <Hero />
      <StyledMain>valami</StyledMain>
      <Footer />
    </>
  );
}

export default Main;
