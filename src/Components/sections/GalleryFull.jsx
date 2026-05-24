import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../api/settings";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";
import {
  GalleryFullWrapper,
  StyledGalleryFullWrapper,
} from "./galleryFull.styles";
import { StyledGaleryWrapper } from "./gallery.styles";

function GalleryFull() {
  const { isLoading: isSettingsLoading, data: settingsData } = useQuery({
    queryFn: getSettings,
    queryKey: ["getSettings"],
  });
  if (isSettingsLoading) return <h1>das</h1>;
  return (
    <GalleryFullWrapper>
      <Navbar />
      <StyledGalleryFullWrapper>
        <img src="work_done_01.png" alt="" />
      </StyledGalleryFullWrapper>
      <Footer settingsData={settingsData} />
    </GalleryFullWrapper>
  );
}

export default GalleryFull;
