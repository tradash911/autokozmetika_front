import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../api/settings";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";
import {
  GalleryFullWrapper,
  StyledGalleryFullWrapper,
} from "./galleryFull.styles";
import { StyledGaleryWrapper } from "./gallery.styles";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useEffect, useRef, useState } from "react";
import { StyledHamburger } from "./hero.styles";
import Hamburger from "../layout/Hamburger";
import { useSpring } from "@react-spring/web";

function GalleryFull({ isOpen, setIsOpen }) {
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
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
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
  const { isLoading: isSettingsLoading, data: settingsData } = useQuery({
    queryFn: getSettings,
    queryKey: ["getSettings"],
  });
  function handleOpenLightbox(e) {
    const index = e.currentTarget.dataset.index;
    setIndex(Number(index));
    setOpen(true);
  }
  if (isSettingsLoading) return <h1>das</h1>;
  return (
    <GalleryFullWrapper style={fadeIn}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} ref={navRef} />

      <Hamburger
        color="#141414"
        onClick={(e) => {
          e.stopPropagation;
          setIsOpen(!isOpen);
        }}
      />
      <Lightbox
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "work_done_01.webp" },
          { src: "work_done_02.webp" },
          { src: "work_done_03.png" },
          { src: "work_done_04.png" },
          { src: "work_done_05.png" },
          { src: "work_done_06.png" },
        ]}
      />
      <StyledGalleryFullWrapper>
        <img
          data-index="0"
          onClick={(e) => {
            handleOpenLightbox(e);
          }}
          src="work_done_01.webp"
          alt=""
        />
        <img
          data-index="1"
          onClick={(e) => {
            handleOpenLightbox(e);
          }}
          src="work_done_02.webp"
          alt=""
        />
        <img
          data-index="2"
          onClick={(e) => {
            handleOpenLightbox(e);
          }}
          src="work_done_03.png"
          alt=""
        />
        <img
          data-index="3"
          onClick={(e) => {
            handleOpenLightbox(e);
          }}
          src="work_done_04.png"
          alt=""
        />
        <img
          data-index="4"
          onClick={(e) => {
            handleOpenLightbox(e);
          }}
          src="work_done_05.png"
          alt=""
        />
        <img
          data-index="5"
          onClick={(e) => {
            handleOpenLightbox(e);
          }}
          src="work_done_06.png"
          alt=""
        />
      </StyledGalleryFullWrapper>
      <Footer settingsData={settingsData} />
    </GalleryFullWrapper>
  );
}

export default GalleryFull;
