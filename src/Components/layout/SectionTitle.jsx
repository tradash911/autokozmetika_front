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
  h1 {
    font-family: "oswald";
    color: var(--white);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3.6rem;
    letter-spacing: 4%;
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
