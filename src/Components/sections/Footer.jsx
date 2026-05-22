import {
  StyledFooter,
  StyledFooterNav,
  StyledSocialWrapper,
} from "./footer.styles";

function Footer({ settingsData }) {
  const year = new Date().getFullYear();
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
        <a href={settingsData[0].facebook} target="_blank">
          <img src="facebook.svg" alt="Facebook elérhetőségünk." />
        </a>
        <a href={settingsData[0].instagram} target="_blank">
          <img src="instagram.svg" alt="Instagram elérhetőségünk" />
        </a>
        <a href={settingsData[0].tiktok} target="_blank">
          <img src="tiktok.svg" alt="Instagram elérhetőségünk" />
        </a>
      </StyledSocialWrapper>
      <p> NO DIRTY CARS {year} minden jog fenntartarva. </p>
    </StyledFooter>
  );
}

export default Footer;
