import { forwardRef } from "react";
import {
  StyledCloseMobilMenu,
  StyledMenu,
  StyledNavbar,
} from "./navbar.styles";

const Navbar = forwardRef(({ isOpen, setIsOpen }, ref) => {
  return (
    <StyledNavbar $isOpen={isOpen} ref={ref}>
      <StyledCloseMobilMenu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        src="close.svg"
        alt="Mobil menü bezárása ikon"
      />
      <div className="logo">LOGO</div>
      <StyledMenu>
        <li>
          <a href="">Bemutatkozás</a>
        </li>
        <li>
          <a href="">Szolgáltatások</a>
        </li>
        <li>
          <a href="">Galéria</a>
        </li>
        <li>
          <a href="">Elérhetőségek</a>
        </li>
        <li>
          <a href="">ÁSZF</a>
        </li>
        <li>
          <a href="">ÁRLISTA</a>
        </li>
      </StyledMenu>
    </StyledNavbar>
  );
});

export default Navbar;
