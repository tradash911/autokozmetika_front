import styled from "styled-components";
import {
  StyledArrow,
  StyledCta,
  StyledH1,
  StyledHero,
  StyledText,
  StyledWaterMark,
} from "./hero.styles";
import Navbar from "../layout/Navbar";

function Hero() {
  return (
    <StyledHero>
      <Navbar />
      {/* <StyledWaterMark>no dirty cars</StyledWaterMark> */}
      <StyledH1>Ahol az autód visszanyeri a ragyogását.</StyledH1>
      <StyledText>
        Prémium autómosási és autókozmetikai szolgáltatásokat kínálunk, amelyek
        ragyogóvá varázsolják autódat.
      </StyledText>
      <StyledCta>
        Szolgáltatásaink <img src="button_arrow.svg" alt="" />
      </StyledCta>
      <img src="down_arrow.svg" alt="" />
    </StyledHero>
  );
}

export default Hero;
