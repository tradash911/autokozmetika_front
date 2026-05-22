import { StyledNewsWrapper } from "./news.styles";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SlideNextButton from "../layout/NextBtn";
import SlidePrevButton from "../layout/PrevBtn";
import SectionTitle from "../layout/SectionTitle";
import { Navigation } from "swiper/modules";
import ButtonArrow from "../../assets/button_arrow.svg?react";
import styled from "styled-components";
import { useInView } from "@react-spring/web";

const StyledNextBtn = styled(ButtonArrow)`
  svg {
    width: 124px;
    height: 124px;
  }
  svg,
  path {
    fill: var(--black);
  }
`;
const StyledPrevBtn = styled(ButtonArrow)`
  svg,
  path {
    fill: var(--black);
  }
  transform: rotate(180deg);
`;

const StyledNextBtnWrapper = styled.button``;
function News({ newsData }) {
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
  const btn = useSwiper();
  const sorted = newsData?.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <StyledNewsWrapper ref={ref} style={springs} id={"hírek"}>
      <SectionTitle>Hírek</SectionTitle>
      <button className="next-btn">
        <StyledNextBtn />
      </button>
      <button className="prev-btn">
        <StyledPrevBtn />
      </button>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        style={{ height: "400px", marginTop: "30px" }}
        breakpoints={{
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          200: {
            slidesPerView: 1,
          },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sorted.map((data) => {
          const date = new Date(data.created_at);
          const formatted = new Intl.DateTimeFormat("hu-HU", {
            day: "numeric",
            month: "long",
          }).format(date);
          return (
            <SwiperSlide>
              <figure>
                <div>
                  <span className="date">{formatted}</span>
                  <figcaption>{data.title}</figcaption>
                </div>
                <span className="line"></span>
                <p>{data.body}</p>
                <div className="bg-img">
                  <img src={data.img_url} alt="" />
                </div>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledNewsWrapper>
  );
}

export default News;
