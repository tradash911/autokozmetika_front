import {
  StyledFooter,
  StyledFooterNav,
  StyledSocialWrapper,
} from "./footer.styles";

function Footer({ settingsData }) {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <li>
          <a href="#bemutatkozas">Bemutatkozás</a>
        </li>
        <li>
          <a href="#szolgaltatasok">Szolgáltatások</a>
        </li>
        <li>
          <a href="#galéria">Galéria</a>
        </li>
        <li>
          <a href="#kapcsolat">Elérhetőségek</a>
        </li>
        <li>
          <a href="#hírek">Hírek</a>
        </li>
        <li>
          <a href="">ÁSZF</a>
        </li>
        <li>
          <a href="">ÁRLISTA</a>
        </li>
      </StyledFooterNav>
      <StyledSocialWrapper>
        <img src="facebook.svg" alt="Facebook elérhetőségünk." />
        <img src="instagram.svg" alt="Instagram elérhetőségünk" />
      </StyledSocialWrapper>
    </StyledFooter>
  );
}

export default Footer;
