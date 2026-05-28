import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 81px;
  background-color: #f3f4f6b4;
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
    width: 70%;
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
  font: 500 1.8rem "oswald";
  text-transform: uppercase;
  letter-spacing: 5%;
  color: var(--white);
  display: flex;
  gap: 4rem;
  margin: 0 auto;
  color: var(--black);
  li {
    padding: 5px 10px;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      color: var(--white);
      background-color: var(--orange);
    }
  }
  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 2rem;
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
