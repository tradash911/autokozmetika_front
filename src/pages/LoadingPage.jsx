import styled from "styled-components";
import { StyledH1, StyledText } from "../Components/sections/hero.styles";
import { BarLoader } from "react-spinners";

const StyledMain = styled.main`
  height: 100svh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function LoadingPage() {
  return (
    <StyledMain>
      <BarLoader color="var(--blue)" />
    </StyledMain>
  );
}

export default LoadingPage;
