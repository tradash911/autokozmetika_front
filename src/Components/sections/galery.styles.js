import styled from "styled-components";

export const StyledGaleryWrapper = styled.section`
  display: grid;
  grid-template-columns: 100px 300px 1fr;
  grid-template-rows: 78px 65px 140px 140px 140px;
  column-gap: 3rem;
  row-gap: 3rem;

  font-size: 1.8rem;
  .title-wrapper {
    width: 100%;
    background-color: var(--blue);
    clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
    display: flex;
    align-items: center;
    padding-left: 5rem;
    border-radius: 2px;
    grid-column: 2/4;
    h1 {
      font-family: "oswald";
      color: var(--white);
      text-transform: uppercase;
      font-weight: 500;
      font-size: 3.6rem;
      letter-spacing: 4%;
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
    &:hover {
      transform: scale(1.02);
    }
  }
  p {
    grid-row: 2;
    grid-column: 3;
    font-family: "montserrat";
    font-weight: 500;
  }
  h2 {
    grid-column: 1;
    grid-row: 1/6;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 6.95rem;
    text-transform: uppercase;
    letter-spacing: 25%;
    color: transparent;
    -webkit-text-stroke: 1px black;
    font-family: "oswald";
    opacity: 25%;
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
  }
  .car-02 {
    grid-column: 2;
    grid-row: 4;
  }
  .car-03 {
    grid-column: 2;
    grid-row: 5;
  }
  .car-04 {
    grid-column: 3;
    grid-row: 3/6;
  }
`;
