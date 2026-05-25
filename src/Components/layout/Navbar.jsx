import { forwardRef } from "react";
import {
  StyledCloseMobilMenu,
  StyledMenu,
  StyledNavbar,
} from "./navbar.styles";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

const Navbar = forwardRef(({ isOpen, setIsOpen }, ref) => {
  const navigate = useNavigate();
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
        <li
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("hey");

            console.log(setIsOpen);
          }}
        >
          <HashLink smooth to={"/#bemutatkozas"}>
            Bemutatkozás
          </HashLink>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HashLink smooth to={"/#szolgaltatasok"}>
            Szolgáltatások
          </HashLink>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* <HashLink
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            smooth
            to={"/#galéria"}
          >
            Galéria
          </HashLink> */}
          <a
            onClick={(e) => {
              navigate("/galéria");
            }}
          >
            Galéria
          </a>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HashLink smooth to={"/#kapcsolat"}>
            Kapcsolat
          </HashLink>
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HashLink smooth to={"/#hírek"}>
            Hírek
          </HashLink>
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
