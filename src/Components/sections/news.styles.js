import styled from "styled-components";

export const StyledNewsWrapper = styled.section`
  .next-btn,
  .prev-btn {
    position: absolute;
    z-index: 999;
    top: 50%;
  }
  .next-btn {
    right: -5%;
    @media (max-width: 650px) {
      right: -6%;
    }
  }
  .prev-btn {
    left: -5%;
    @media (max-width: 650px) {
      left: -6%;
    }
  }
  position: relative;
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
