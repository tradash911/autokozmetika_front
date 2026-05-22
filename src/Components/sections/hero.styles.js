import { animated } from "@react-spring/web";
import styled from "styled-components";

export const StyledHero = styled.header`
  background-color: red;
  height: 100dvh;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.24) 0%,
      rgba(26, 155, 220, 0.41) 100%
    ),
    url("hero_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  position: relative;
  @media (max-width: 1400px) {
    gap: 2.4rem;
    padding-top: 15rem;
  }
  @media (max-width: 600px) {
    padding-top: 5rem;
  }
  @media (max-width: 432px) {
    gap: 4rem;
  }
`;

export const StyledH1 = styled(animated.h1)`
  font-size: 6.734rem;
  font-family: "oswald";
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  span {
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      width: 108%;
      height: 95%;
      background-color: var(--blue);
      position: absolute;
      right: -6%;
      bottom: 0;
      z-index: -1;
      clip-path: polygon(0 0, 93% 0, 100% 100%, 0% 100%);
    }
  }
  @media (max-width: 1400px) {
    font-size: 5.5rem;
  }

  @media (max-width: 1082px) {
    font-size: 4.5rem;
  }
  @media (max-width: 842px) {
    font-size: 5.3rem;
    width: 90%;
    text-align: center;
  }
  @media (max-width: 842px) {
    font-size: 7rem;
  }
  @media (max-width: 842px) {
    font-size: 6rem;
  }
  @media (max-width: 432px) {
    font-size: 5rem;
    width: 94%;
  }

  &::after {
    content: "NO DIRTY CARS";
    font-size: 15rem;
    font-family: "oswald";
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: absolute;
    left: 0;
    bottom: 20%;
    letter-spacing: 14%;
    opacity: 20%;
    z-index: -2;
    @media (max-width: 1400px) {
      font-size: 11rem;
    }
    @media (max-width: 1100px) {
      font-size: 9.5rem;
      letter-spacing: 18%;
    }
    @media (max-width: 842px) {
      display: none;
    }
  }
`;

export const StyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "montserrat";
  color: var(--white);
  text-transform: uppercase;
  width: 35%;
  text-align: center;
  @media (max-width: 1400px) {
    font-size: 1.3rem;
  }
  @media (max-width: 842px) {
    width: 70%;
  }
  @media (max-width: 432px) {
    font-size: 1rem;
  }
`;

export const StyledCta = styled.button`
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

  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }
  @media (max-width: 432px) {
    font-size: 1.3rem;
    padding: 0.4rem 1rem;
  }
`;

export const StyledDownArrow = styled.img`
  cursor: pointer;
  @media (max-width: 432px) {
    transform: scale(0.7);
  }
`;

export const StyledArrow = styled.img``;

export const StyledHamburger = styled.img`
  position: absolute;
  right: 2rem;
  top: 2rem;
  display: none;
  pointer-events: none;

  @media (max-width: 1100px) {
    display: block;
    pointer-events: all;
  }
  @media (max-width: 432px) {
    transform: scale(0.7);
  }
`;
