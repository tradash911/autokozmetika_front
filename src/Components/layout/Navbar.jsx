import { StyledMenu, StyledNavbar } from "./navbar.styles";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">LOGO</div>
      <StyledMenu>
        <li>Bemutatkozás</li>
        <li>Szolgáltatások</li>
        <li>Galéria</li>
        <li>Elérhetőségek</li>
        <li>ÁSZF</li>
        <li>ÁRLISTA</li>
      </StyledMenu>
    </StyledNavbar>
  );
}

export default Navbar;
