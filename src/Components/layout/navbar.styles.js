import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 71px;
  background-color: #ffffff9c;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 55;
  @media (max-width: 1100px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100dvh;
    width: 50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};

    transition: transform 0.5s ease;
  }
`;

export const StyledMenu = styled.ul`
  font-size: 1.8rem;
  font-family: "oswald";
  text-transform: uppercase;
  letter-spacing: 5%;
  font-weight: 500;
  color: var(--white);
  display: flex;
  gap: 4rem;
  margin: 0 auto;
  color: var(--black);
  li {
    /* transform: scale(1);
    transition: transform 0.3s ease-in-out; */
    padding: 5px 10px;
    border-radius: 2px;
    &:hover {
      /* transform: scale(1.1); */
      color: var(--white);
      background-color: var(--orange);
      &:after {
        /* ontent: url("/button_arrow.svg"); */
      }
    }
  }
  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const StyledCloseMobilMenu = styled.img`
  display: none;
  @media (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const StyledLogo = styled.div``;
