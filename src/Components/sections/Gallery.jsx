import { StyledGaleryWrapper } from "./gallery.styles";

function Gallery() {
  return (
    <StyledGaleryWrapper id={"galéria"}>
      <div className="title-wrapper">
        <h1>Munkáink</h1>
      </div>
      <h2>no dirty cars</h2>
      <button>
        Galéria <img src="button_arrow.svg" alt="" />
      </button>
      <p>
        Nézd meg korábbi munkáinkat, és győződj meg róla, milyen különbséget
        jelent a precíz autókozmetika.Minden autónál a részletekre figyelünk – a
        végeredmény pedig magáért beszél.
      </p>
      <img className="car-01" src="car_01.png" alt="" />
      <img className="car-02" src="car_02.png" alt="" />
      <img className="car-03" src="car_03.png" alt="" />
      <img className="car-04" src="car_04.png" alt="" />
    </StyledGaleryWrapper>
  );
}

export default Gallery;
