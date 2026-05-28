import { useInView } from "@react-spring/web";
import SectionTitle from "../layout/SectionTitle";
import {
  StyledContact,
  StyledContactWrapper,
  StyledFAQWrapper,
  StyledPhoneIcon,
} from "./contact.styled";
import FAQ from "../layout/Accordion";
import { useSpring } from "framer-motion";

function Contact({ settingsData }) {
  const data = settingsData[0];
  const faqArr = [
    {
      title: "Kell időpontot foglalnom?",
      body: "Igen, előzetes bejelentkezés szükséges, hogy biztosítani tudjuk a megfelelő időt és figyelmet az autód számára.",
    },
    {
      title: "Mennyibe kerül egy autókozmetika?",
      body: "Az ár az autó méretétől és a választott szolgáltatástól függ. Pontos árakat az árlistában találsz.",
    },
    {
      title: "Esőben is érdemes hozni az autót?",
      body: "Igen, a belső tisztítás ilyenkor is elvégezhető, a külső tisztítás eredménye viszont rövidebb ideig maradhat tartós.",
    },
    {
      title: "Milyen szereket használtok?",
      body: "Minőségi, autóipari tisztítószereket használunk, amelyek kíméletesek a felületekhez, mégis hatékonyak.",
    },
  ];
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
    <StyledContactWrapper ref={ref} style={springs} id={"kapcsolat"}>
      <SectionTitle>Foglalj Időpontot</SectionTitle>
      <StyledContact>
        <nav>
          <a href={`tel:${data?.phone}`}>
            <figure>
              <img src="phone.svg" alt="Hívj minket telefonon" />
              <figcaption>Telefonon</figcaption>
              <span>{data.phone}</span>
            </figure>
          </a>
          <a href="https://maps.app.goo.gl/ertNTX9QkVE5RExW7" target="_blank">
            <figure>
              <img src="map_pin.svg" alt="Keress minket személyesen" />
              <figcaption>Személyesen</figcaption>
              <span>{data.address}</span>
            </figure>
          </a>
          <a href={`mailto:${data?.email}`}>
            <figure>
              <img src="mail.svg" alt="Írj nekünk emailt" />
              <figcaption>Emailben</figcaption>
              <span>{data.email}</span>
            </figure>
          </a>
        </nav>
        <div className="work-flow">
          <figure>
            <figcaption>Időpont egyeztetés</figcaption>
            <img src="clock.svg" alt="Óra ikon az időpont egyeztetéshez" />
          </figure>

          <img className="arrow" src="arrow_short.svg" alt="" />

          <figure>
            <figcaption>Tisztítás / Polírozás</figcaption>
            <img
              src="droplets.svg"
              alt="Vízcseppek ikon a tisztítás és polírozás jelzésére"
            />
          </figure>

          <img className="arrow" src="arrow_short.svg" alt="" />

          <figure>
            <figcaption>Átadás</figcaption>
            <img
              src="sparkles.svg"
              alt="Csillogás ikon a kész munka átadásához"
            />
          </figure>
        </div>
        <div className="wrapper">
          <div className="opening-hours">
            <h2>Nyitvatartás:</h2>
            <ul>
              <li>
                <span className="day">Hétfő:</span>
                <span className="data">{data.opening_hours.hétfő}</span>
              </li>
              <li>
                <span className="day">Kedd:</span>
                <span className="data">{data.opening_hours.kedd}</span>
              </li>
              <li>
                <span className="day">Szerda:</span>
                <span className="data">{data.opening_hours.szerda}</span>
              </li>
              <li>
                <span className="day">Csütörtök:</span>
                <span className="data">{data.opening_hours.csütörtök}</span>
              </li>
              <li>
                <span className="day">Péntek:</span>
                <span className="data">{data.opening_hours.péntek}</span>
              </li>
              <li>
                <span className="day">Szombat:</span>
                <span className="data">{data.opening_hours.szombat}</span>
              </li>
              <li>
                <span className="day">Vasárnap:</span>
                <span className="data">{data.opening_hours.vasárnap}</span>
              </li>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.9690309503475!2d21.92754843803774!3d47.958119473937494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389d24dc67e56f%3A0x87880a990de796d7!2sNo%20Dirty%20Cars%20Aut%C3%B3kozmetika!5e0!3m2!1shu!2shu!4v1779351683203!5m2!1shu!2shu"
            width="600"
            height="450"
            style={{ border: "none", width: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </StyledContact>
      <StyledFAQWrapper>
        <h3 className="title">Gyakran ismételt kérdések</h3>
        {faqArr.map((item, index) => (
          <FAQ key={index} title={item.title} body={item.body} />
        ))}
      </StyledFAQWrapper>
    </StyledContactWrapper>
  );
}

export default Contact;
