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
import Hamburger from "../layout/Hamburger";

function Hero({ isOpen, setIsOpen }) {
  /* const [isOpen, setIsOpen] = useState(false); */
  const navRef = useRef(null);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      tension: 120,
      friction: 14,
      duration: 400,
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
    <StyledHero style={fadeIn}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} ref={navRef} />
      <Hamburger
        color="#ffffff"
        onClick={(e) => {
          e.stopPropagation;
          setIsOpen(!isOpen);
        }}
      />

      <StyledH1 style={fadeIn}>
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
