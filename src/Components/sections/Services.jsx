import { useState } from "react";
import StyledSectionTitle from "../layout/SectionTitle";
import { StyledServiceWrapper, StyledTypeButton } from "./services.styles";
import switchPrice from "../../utils/switchPrice";

function Services({ data }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("normal");
  console.log(data);

  return (
    <StyledServiceWrapper id="szolgaltatasok">
      <StyledSectionTitle>Szolgáltatásaink</StyledSectionTitle>
      <div className="services">
        <nav className="nav">
          <StyledTypeButton
            onClick={() => {
              setSelected("normal");
            }}
            $active={selected === "normal"}
          >
            <span>Személy autó</span>
            <img src="car.svg" alt="" />
          </StyledTypeButton>
          <StyledTypeButton
            onClick={() => {
              setSelected("medium");
            }}
            $active={selected === "medium"}
          >
            <span>SUV</span>
            <img src="suv_car.svg" alt="" />
          </StyledTypeButton>
          <StyledTypeButton
            onClick={() => {
              setSelected("large");
            }}
            $active={selected === "large"}
          >
            <span>Nagy autó</span>
            <img src="big_car.svg" alt="" />
          </StyledTypeButton>
        </nav>
        <div>
          {data.map((data, index) => {
            return (
              <div key={index}>
                <h1> {data.main_category_name}</h1>
                <ul>
                  {data.subcategory.map((subcat, index) => (
                    <li key={index}>
                      <span>{subcat.subcategory_name}</span>{" "}
                      <span>{switchPrice(selected, subcat)}</span>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </StyledServiceWrapper>
  );
}

export default Services;
