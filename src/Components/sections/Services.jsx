import { useState } from "react";
import StyledSectionTitle from "../layout/SectionTitle";
import { StyledServiceWrapper, StyledTypeButton } from "./services.styles";
import switchPrice from "../../utils/switchPrice";

import Test from "../../styles/animatedElements.jsx";
import { useInView } from "@react-spring/web";

function Services({ data }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("normal");
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
    <StyledServiceWrapper ref={ref} style={springs} id="szolgaltatasok">
      <StyledSectionTitle>Szolgáltatásaink</StyledSectionTitle>
      <div className="services">
        <nav className="nav">
          <StyledTypeButton
            onClick={() => {
              setSelected("normal");
            }}
            $active={selected === "normal"}
          >
            <span>Kis autó</span>
            <img src="car.svg" alt="Logo kis autóhoz" />
          </StyledTypeButton>
          <StyledTypeButton
            onClick={() => {
              setSelected("medium");
            }}
            $active={selected === "medium"}
          >
            <span>Családi autó</span>
            <img src="suv_car.svg" alt="Logó középméretű autóhoz" />
          </StyledTypeButton>
          <StyledTypeButton
            onClick={() => {
              setSelected("large");
            }}
            $active={selected === "large"}
          >
            <span>SUV</span>
            <img src="big_car.svg" alt="Logó nagyméretű autóhoz" />
          </StyledTypeButton>
        </nav>
        <div className="category-wrapper">
          {data.map((data, index) => {
            console.log(data);
            const isCategoryHaveActiveCat = data.subcategory.every(
              (item) => item.is_active === true,
            );
            return (
              isCategoryHaveActiveCat && (
                <div className="category" key={index}>
                  <h1> {data.main_category_name}</h1>
                  <ul>
                    {data.subcategory.map((subcat, index) => {
                      return (
                        subcat.is_active && (
                          <li key={index}>
                            <img src="corner_arrow.svg" alt="" />
                            <div className="wrapper">
                              <span>{subcat.subcategory_name}</span>
                              <span className="price">
                                {switchPrice(selected, subcat)} Forint
                              </span>
                            </div>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              )
            );
          })}
        </div>
      </div>
    </StyledServiceWrapper>
  );
}

export default Services;
