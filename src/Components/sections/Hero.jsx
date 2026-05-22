import styled from "styled-components";
import {
  StyledArrow,
  StyledCta,
  StyledDownArrow,
  StyledH1,
  StyledHamburger,
  StyledHero,
  StyledText,
} from "./hero.styles";
import Navbar from "../layout/Navbar";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "@react-spring/web";
import { transform } from "motion";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      tension: 120,
      friction: 14,
    },
  });
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <StyledHero>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} ref={navRef} />
      <StyledHamburger
        onClick={(e) => {
          e.stopPropagation;
          setIsOpen(!isOpen);
        }}
        src="hamburger.svg"
        alt="Open mobile menu"
      />
      <StyledH1 style={styles}>
        Ahol az autód visszanyeri a <span>ragyogását.</span>
      </StyledH1>
      <StyledText>
        Prémium autómosási és autókozmetikai szolgáltatásokat kínálunk, amelyek
        ragyogóvá varázsolják autódat.
      </StyledText>
      <a href="#szolgaltatasok">
        <StyledCta>
          <span>Szolgáltatásaink</span> <img src="button_arrow.svg" alt="" />
        </StyledCta>
      </a>
      <a href="#bemutatkozas">
        <StyledDownArrow src="down_arrow.svg" alt="" />
      </a>
    </StyledHero>
  );
}

export default Hero;
