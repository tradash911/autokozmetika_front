import SectionTitle from "../layout/SectionTitle";
import { StyledContact, StyledContactWrapper } from "./contact.styled";

function Contact({ settingsData }) {
  const data = settingsData[0];

  return (
    <StyledContactWrapper id={"kapcsolat"}>
      <SectionTitle>Foglalj Időpontot</SectionTitle>
      <StyledContact>
        <nav>
          <a href={`tel:${data?.phone}`}>
            <figure>
              <img src="phone.svg" alt="" />
              <figcaption>Telefonon</figcaption>
              <span>{data.phone}</span>
            </figure>
          </a>
          <a href="https://maps.app.goo.gl/ertNTX9QkVE5RExW7" target="_blank">
            <figure>
              <img src="map_pin.svg" alt="" />
              <figcaption>Személyesen</figcaption>
              <span>{data.address}</span>
            </figure>
          </a>
          <a href={`mailto:${data?.email}`}>
            <figure>
              <img src="mail.svg" alt="" />
              <figcaption>Emailben</figcaption>
              <span>{data.email}</span>
            </figure>
          </a>
        </nav>
        <div className="work-flow">
          <figure>
            <figcaption>Időpont egyeztetés</figcaption>
            <img src="clock.svg" alt="" />
          </figure>
          <img className="arrow" src="arrow_short.svg" alt="" />
          <figure>
            <figcaption>Tisztítás / Polírozás</figcaption>
            <img src="droplets.svg" alt="" />
          </figure>
          <img className="arrow" src="arrow_short.svg" alt="" />

          <figure>
            <figcaption>Átadás</figcaption>
            <img src="sparkles.svg" alt="" />
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
    </StyledContactWrapper>
  );
}

export default Contact;
