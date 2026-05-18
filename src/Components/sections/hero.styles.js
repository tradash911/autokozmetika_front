import styled from "styled-components";

export const StyledHero = styled.header`
  background-color: red;
  height: 100dvh;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.24) 0%,
      rgba(26, 155, 220, 0.24) 100%
    ),
    url("hero_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
`;

export const StyledH1 = styled.h1`
  font-size: 6.734rem;
  font-family: "oswald";
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
  position: relative;
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
  }
`;

export const StyledWaterMark = styled.h2`
  font-size: 16rem;
  font-family: "oswald";
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px red;
`;

export const StyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "montserrat";
  color: var(--white);
  text-transform: uppercase;
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
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledArrow = styled.img``;
