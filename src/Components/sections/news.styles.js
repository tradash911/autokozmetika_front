import { animated } from "@react-spring/web";
import styled from "styled-components";

export const StyledNewsWrapper = styled(animated.div)`
  .next-btn,
  .prev-btn {
    position: absolute;
    z-index: 999;
    top: 50%;
    transform: translateY(100%);
  }
  .next-btn {
    right: -5%;
    @media (max-width: 1200px) {
      right: -2%;
    }
    @media (max-width: 444px) {
      right: -4%;
    }
  }
  .prev-btn {
    left: -5%;
    @media (max-width: 1200px) {
      left: -2%;
    }
    @media (max-width: 444px) {
      left: -4%;
    }
  }
  position: relative;
  @media (max-width: 1200px) {
    padding: 0 3rem;
  }
  @media (max-width: 444px) {
    padding: 0 2rem;
  }
  figure {
    display: grid;
    grid-template-rows: auto 3px auto 300px;
    background-color: var(--grey);
    padding: 1rem;
    row-gap: 1rem;
    border-radius: 2px;
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
      border-radius: 2px;
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

export const StyledNewsEmptyWrapper = styled.div`
  font: 500 2.5rem "montserrat";
`;
