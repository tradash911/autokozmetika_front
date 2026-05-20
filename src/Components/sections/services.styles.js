import styled from "styled-components";

export const StyledServiceWrapper = styled.section`
  font-size: 2rem;
  .services {
    nav {
      background-color: red;
      button {
      }
    }
  }
`;

export const StyledTypeButton = styled.button`
  color: var(--white);
  font: 600 1.7rem "montserrat";
  background-color: ${({ $active }) =>
    $active ? "var(--orange)" : "var(--grey)"};
`;

export const StyledDecoration = styled.h2`
  font-family: "oswald";
  font-size: 8.7rem;
  text-transform: uppercase;
  transform: rotate(270deg);
  height: auto;
  /*   grid-column: 1/2;
  grid-row: 1/5; */
`;
