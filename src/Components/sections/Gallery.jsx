import { useInView } from "@react-spring/web";
import {
  StyledGaleryWrapper,
  StyledInlineGallery,
  StyledWrapper,
} from "./gallery.styles";
import Footer from "./Footer";
import { useNavigate } from "react-router";

function Gallery({ isGalleryOpen, setIsGalleryOpen }) {
  const navigate = useNavigate();
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      once: true,
    },
  );

  const [ref2, move] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        duration: 3000, // ✅ IDE kell
      },
    }),
    {
      once: true,
    },
  );

  return (
    <StyledGaleryWrapper
      ref={ref}
      style={springs}
      id={"galéria"}
      $isGalleryOpen={isGalleryOpen}
    >
      <div className="title-wrapper">
        <h1>Munkáink</h1>
      </div>
      <h2 ref={ref2} style={move}>
        no dirty cars
      </h2>
      <button
        onClick={() => {
          navigate("/galéria");
        }}
      >
        Galéria <img src="button_arrow.svg" alt="" />
      </button>
      <p>
        Nézd meg korábbi munkáinkat, és győződj meg róla, milyen különbséget
        jelent a precíz autókozmetika.Minden autónál a részletekre figyelünk – a
        végeredmény pedig magáért beszél.
      </p>
      <img
        className="car-01"
        src="car_01.png"
        alt="Kép egy kitakaított autóról"
      />
      <img
        className="car-02"
        src="car_02.png"
        alt="Kép egy kitakaított autóról"
      />
      <img
        className="car-03"
        src="car_03.png"
        alt="Kép egy kitakaított autóról"
      />
      <img
        className="car-04"
        src="car_04.png"
        alt="Kép egy kitakaított autóról"
      />
    </StyledGaleryWrapper>
  );
}

export default Gallery;
