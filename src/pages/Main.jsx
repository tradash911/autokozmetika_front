import styled from "styled-components";
import Hero from "../Components/sections/Hero";
import Footer from "../Components/sections/Footer";
import { useQuery } from "@tanstack/react-query";
import { getMainCategoriesWithSubcategories } from "../api/services";
import AboutUs from "../Components/sections/AbutUs";
import { StyledMain } from "./main.styles";
import SectionTitle from "../Components/layout/SectionTitle";
import Services from "../Components/sections/Services";
import Gallery from "../Components/sections/Gallery";
import Contact from "../Components/sections/Contact";
import { getSettings } from "../api/settings";
import News from "../Components/sections/News.jsx";
import { getNews } from "../api/news.js";
import GalleryFull from "../Components/sections/GalleryFull.jsx";
import { useState } from "react";

function Main() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { isLoading, data } = useQuery({
    queryFn: getMainCategoriesWithSubcategories,
    queryKey: ["getMainCategoriesWithSubcategoires"],
  });
  const { isLoading: isSettingsLoading, data: settingsData } = useQuery({
    queryFn: getSettings,
    queryKey: ["getSettings"],
  });
  const { isLoading: isNewsLoading, data: newsData } = useQuery({
    queryFn: getNews,
    queryKey: ["getNews"],
  });

  if (isLoading || isSettingsLoading || isNewsLoading) return <h1>das</h1>;
  return (
    <>
      <Hero />
      <StyledMain>
        <AboutUs />
        <Services data={data} />
        <Gallery
          isGalleryOpen={isGalleryOpen}
          setIsGalleryOpen={setIsGalleryOpen}
        />
        <Contact settingsData={settingsData} />
        <News newsData={newsData} />
      </StyledMain>
      <Footer settingsData={settingsData} />
    </>
  );
}

export default Main;
