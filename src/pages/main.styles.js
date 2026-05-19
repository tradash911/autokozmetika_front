import styled from "styled-components";

export const StyledMain = styled.main`
  color: var(--brown);
  padding: 0 15rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 20rem;

  @media (max-width: 1400px) {
    padding: 0 10rem;
  }
  @media (max-width: 1300px) {
    padding: 0 5rem;
  }
  @media (max-width: 1200px) {
    padding: 0 2rem;
  }
  @media (max-width: 1100px) {
    padding: 0 2rem;
  }
`;
