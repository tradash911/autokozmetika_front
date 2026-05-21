import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  background-color: var(--blue);
  height: 78px;
  clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
  display: flex;
  align-items: center;
  padding-left: 5rem;
  border-radius: 2px;
  @media (max-width: 500px) {
    padding-left: 2rem;
  }
  h1 {
    font-family: "oswald";
    color: var(--white);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3.6rem;
    letter-spacing: 4%;
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
`;

function SectionTitle({ children }) {
  return (
    <StyledWrapper>
      <h1>{children}</h1>
    </StyledWrapper>
  );
}

export default SectionTitle;
