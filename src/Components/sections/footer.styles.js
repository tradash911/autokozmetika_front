import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--dark-black);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 0;
  P {
    font: 400 1.2rem "montserrat";
    color: var(--white);
    text-transform: uppercase;
  }
`;

export const StyledFooterNav = styled.ul`
  color: var(--white);
  font: 300 1.2rem "montserrat";
  display: flex;
  gap: 2rem;
  text-transform: uppercase;
  @media (max-width: 730px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledSocialWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;
