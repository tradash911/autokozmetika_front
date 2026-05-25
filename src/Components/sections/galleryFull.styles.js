import { animated } from "@react-spring/web";
import styled from "styled-components";

export const GalleryFullWrapper = styled(animated.div)``;

export const StyledGalleryFullWrapper = styled.main`
  padding: 15rem 5rem;
  min-height: 100dvh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  img {
    cursor: pointer;
  }
`;
