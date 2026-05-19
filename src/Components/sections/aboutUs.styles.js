import styled from "styled-components";

export const StyledAbutUsWrapper = styled.section`
  display: flex;
  gap: 10rem;
  @media (max-width: 1100px) {
    gap: 5rem;
  }
  @media (max-width: 1000px) {
    gap: 2rem;
  }
  @media (max-width: 924px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const StyledImage = styled.img`
  @media (max-width: 924px) {
    width: 33%;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const StyledContent = styled.div`
  font-size: 1.8rem;
  font-family: "montserrat";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .title-wrapper {
    width: 100%;
    background-color: var(--blue);
    height: 78px;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
    display: flex;
    align-items: center;
    padding-left: 5rem;
    border-radius: 2px;
    h1 {
      font-family: "oswald";
      color: var(--white);
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 4%;
    }
  }
`;

export const StyledStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  .card {
    text-align: center;
    color: var(--white);
    background-color: var(--orange);
    padding: 1rem 2rem;
    border-radius: 2px;
    .wrapper {
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      font-size: 2.7rem;
      font-weight: 600;
    }
    h4 {
    }

    figcaption {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`;

export const StyledFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
  .feature {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 8px;
    justify-content: center;
  }
`;
