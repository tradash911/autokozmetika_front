import { animated } from "@react-spring/web";
import styled from "styled-components";

export const StyledGaleryWrapper = styled(animated.section)`
  display: grid;
  grid-template-columns: 100px 300px 1fr;
  grid-template-rows: 78px 95px 140px 140px 140px;
  column-gap: 3rem;
  row-gap: 3rem;
  width: 100%;

  transform: ${({ $isGalleryOpen }) =>
    $isGalleryOpen ? "translateX(100%)" : "translateX(0%)"} !important;
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
  pointer-events: ${({ $isGalleryOpen }) => ($isGalleryOpen ? "none" : "auto")};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-rows: 78px repeat(4, auto);
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .title-wrapper {
    width: 100%;
    background-color: var(--blue);
    clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
    display: flex;
    align-items: center;
    padding-left: 5rem;
    border-radius: 2px;
    grid-column: 2/4;
    height: 78px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 1;
      grid-column: 1/-1;
    }
    @media (max-width: 500px) {
      padding-left: 2rem;
    }
    h1 {
      font-family: "oswald";
      color: var(--white);
      text-transform: uppercase;
      font-weight: 500;
      font-size: 3.6rem;
      letter-spacing: 4%;
      @media (max-width: 500px) {
        font-size: 3.1rem;
      }
    }
  }
  button {
    background-color: var(--orange);
    font-family: "montserrat";
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--white);
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    grid-column: 2;
    grid-row: 2;
    align-self: start;
    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 5;
      grid-column: 1/3;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      width: 100%;
    }
  }
  p {
    grid-row: 2;
    grid-column: 3;
    font: 500 1.8rem "montserrat";

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 2;
      grid-column: 1/-1;
    }
  }
  h2 {
    grid-column: 1;
    grid-row: 1/6;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 7.45rem;
    text-transform: uppercase;
    letter-spacing: 25%;
    color: transparent;
    -webkit-text-stroke: 1px black;
    font-family: "oswald";
    opacity: 25%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
      pointer-events: none;
    }
  }
  .car-01,
  .car-02,
  .car-03,
  .car-04 {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .car-01 {
    grid-column: 2;
    grid-row: 3;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 3;
      grid-column: 1;
    }
  }
  .car-02 {
    grid-column: 2;
    grid-row: 4;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 3;
      grid-column: 2;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      display: none;
      pointer-events: none;
    }
  }
  .car-03 {
    grid-column: 2;
    grid-row: 5;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 4;
      grid-column: 1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      display: none;
      pointer-events: none;
    }
  }
  .car-04 {
    grid-column: 3;
    grid-row: 3/6;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-row: 4;
      grid-column: 2;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      display: none;
      pointer-events: none;
    }
  }
`;

export const StyledWrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

export const StyledInlineGallery = styled.div`
  font-size: 18px;
  background-color: red;
  transform: ${({ $isGalleryOpen }) => {
    return $isGalleryOpen ? "translateX(0%)" : "translateX(100%)";
  }};
  pointer-events: ${({ $isGalleryOpen }) => ($isGalleryOpen ? "auto" : "none")};
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
  position: absolute;
  inset: 0;
`;
