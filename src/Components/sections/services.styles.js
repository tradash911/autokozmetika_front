import { animated } from "@react-spring/web";
import styled from "styled-components";

export const StyledServiceWrapper = styled(animated.section)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .services {
    background-color: var(--grey);
    padding: 10rem 5rem 3rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 700px) {
      padding: 5rem 3rem 3rem 3rem;
    }
    nav {
      display: flex;
      justify-content: space-between;
      @media (max-width: 629px) {
        flex-direction: column;
        gap: 5px;
      }
    }
    .category-wrapper {
      .category {
        h1 {
          font: 600 2.2rem "montserrat";
          border-bottom: 5px solid var(--dark-blue);
        }
        ul {
          font: 500 1.8rem "montserrat";
          @media (max-width: 629px) {
            font-size: 1.4rem;
          }
          li {
            display: flex;
            gap: 1rem;
            padding: 2rem 0;
            .wrapper {
              display: flex;
              justify-content: space-between;
              width: 100%;
              .price {
              }
            }
          }
        }
      }
    }
  }
`;

export const StyledTypeButton = styled.button`
  color: var(--white);
  font: 600 1.7rem "montserrat";
  padding: 1rem 2rem;
  border-radius: 2px;
  width: 160px;
  background-color: ${({ $active }) =>
    $active ? "var(--orange)" : "var(--dark-grey)"};
  img {
    margin: 0 auto;
  }
  @media (max-width: 629px) {
    font-size: 1.2rem;
    width: auto;
  }
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
