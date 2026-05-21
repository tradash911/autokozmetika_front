import styled from "styled-components";
import { useSwiper } from "swiper/react";

const StyledButton = styled.button`
  height: 200px;
  width: 200px;
`;

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <StyledButton onClick={() => swiper.slidePrev()}>
      {" "}
      <img src="down_arrow.svg" alt="" />{" "}
    </StyledButton>
  );
}
