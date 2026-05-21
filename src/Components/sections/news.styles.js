import styled from "styled-components";

export const StyledNewsWrapper = styled.section`
  /*  display: flex;
  flex-direction: column;
  gap: 3rem; */
  figure {
    display: grid;
    grid-template-rows: auto 3px auto 300px;
    background-color: var(--grey);
    padding: 1rem;
    row-gap: 1rem;
    div {
      display: flex;
      align-items: baseline;
      gap: 2rem;
      padding-bottom: 2rem;
      .date {
        font: 500 1.2rem "montserrat";
      }
      figcaption {
        font: 600 1.8rem "montserrat";
      }
    }
    .line {
      background-color: var(--dark-grey);
    }
    p {
      font: 500 1.7rem "montserrat";
    }
    .bg-img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
