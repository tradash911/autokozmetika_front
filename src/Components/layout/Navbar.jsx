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
          <a
            onClick={() => {
              setIsOpen(false);
            }}
            href="#bemutatkozas"
          >
            Bemutatkozás
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(false);
            }}
            href="#szolgaltatasok"
          >
            Szolgáltatások
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(false);
            }}
            href="#galéria"
          >
            Galéria
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(false);
            }}
            href="#kapcsolat"
          >
            Elérhetőségek
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(false);
            }}
            href="#hírek"
          >
            Hírek
          </a>
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
