import { useInView } from "@react-spring/web";
import Counter from "../layout/Counter";
import SectionTitle from "../layout/SectionTitle";
import {
  StyledAbutUsWrapper,
  StyledContent,
  StyledFeatures,
  StyledImage,
  StyledStats,
} from "./aboutUs.styles";

function AboutUs() {
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

  return (
    <StyledAbutUsWrapper ref={ref} style={springs} id="bemutatkozas">
      <StyledImage src="work.png" />
      <StyledContent>
        <div className="title-wrapper">
          <h1>Kik vagyunk?</h1>
        </div>
        <p>
          Autókozmetikánk célja, hogy járműved mindig a legjobb formáját hozza,
          kívül-belül egyaránt. Legyen szó egy alapos külső mosásról, belső
          tisztításról vagy prémium detailing szolgáltatásról, nálunk minden
          autó maximális odafigyelést kap. Modern technológiákkal, minőségi
          anyagokkal és precíz munkával dolgozunk, hogy ne csak tiszta, hanem
          valóban újszerű hatást érjünk el. Számunkra a részletek számítanak — a
          ragyogó fényezéstől a makulátlan belső térig. Bízd ránk autódat, és
          tapasztald meg a különbséget.
        </p>
        <StyledStats>
          <Counter
            end={300}
            duration={3}
            label="Elégedett ügyfél"
            subtitle={"+"}
          />
          <Counter end={4} duration={3} label="Tapasztalat" subtitle={"év"} />
          <Counter
            end={500}
            duration={3}
            label="Kitakarított autó"
            subtitle={"+"}
          />
        </StyledStats>
        <StyledFeatures>
          <div className="feature">
            <img src="check.svg" alt="Kiváló minőségű szolgáltatás" />
            <p>Gyors kiszolgálás</p>
          </div>
          <div className="feature">
            <img src="check.svg" alt="Kiváló minőségű szolgáltatás" />
            <p>Prémium anyagok</p>
          </div>
          <div className="feature">
            <img src="check.svg" alt="Kiváló minőségű szolgáltatás" />
            <p>Képzett szakemberek</p>
          </div>
        </StyledFeatures>
      </StyledContent>
    </StyledAbutUsWrapper>
  );
}

export default AboutUs;
