import styled from "styled-components";

export const StyledContactWrapper = styled.section``;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  nav {
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 5rem 0;
    @media (max-width: 610px) {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 1rem 0;
      gap: 6rem;
    }
    figure {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: repeat(2, auto);
      row-gap: 5px;
      column-gap: 10px;
      position: relative;

      @media (max-width: 610px) {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;

        &::after {
          content: "";
          height: 3px;
          width: 100%;
          position: absolute;
          bottom: -30%;

          border-radius: 2px;
          background-color: var(--dark-blue);
        }
      }
      img {
        grid-column: 1;
        grid-row: 1/3;
        align-self: center;
        justify-self: end;
      }
      figcaption {
        font: 500 2rem "montserrat";
        color: var(--black);
        grid-column: 2;
        grid-row: 1;
      }

      span {
        font: 400 1.7rem "montserrat";
        color: var(--soft-black);
        grid-column: 2;
        grid-row: 2;
      }
    }
  }
  .work-flow {
    background-color: var(--dark-blue);
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;
    @media (max-width: 610px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6rem;
      padding: 5rem 0;
    }
    .arrow {
      @media (max-width: 610px) {
        transform: rotate(90deg);
      }
    }
    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      figcaption {
        font: 500 1.8rem "montserrat";
        color: var(--white);
      }
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--black);
    @media (max-width: 610px) {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    h2 {
      font: 500 2.6rem "montserrat";
    }
    .opening-hours {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: start;
      gap: 3rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 50%;
      @media (max-width: 985px) {
        width: 80%;
      }

      li {
        font: 500 2rem "montserrat";
        display: grid;
        grid-template-columns: auto, auto;
        .day {
          grid-column: 1;
        }
        .data {
          grid-column: 2;
          justify-self: end;
        }
      }
    }
  }
`;
