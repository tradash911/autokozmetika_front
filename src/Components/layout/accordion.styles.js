import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: var(--black);
  .header {
    font: 500 2.2rem "montserrat";
    background-color: var(--blue);
    color: var(--white);
    border-radius: 2px;
    &:hover {
      background-color: var(--orange);
    }
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
  .body {
    font: 500 1.8rem "montserrat";
    padding: 2rem 0;
  }
`;
