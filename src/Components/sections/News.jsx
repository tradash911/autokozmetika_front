import { StyledNewsWrapper } from "./news.styles";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SlideNextButton from "../layout/NextBtn";
import SlidePrevButton from "../layout/PrevBtn";
import SectionTitle from "../layout/SectionTitle";
import { Navigation } from "swiper/modules";
function News({ newsData }) {
  const btn = useSwiper();
  const sorted = newsData?.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <StyledNewsWrapper>
      <SectionTitle>Hírek</SectionTitle>
      <button className="next-btn">next </button>
      <button className="prev-btn">prev </button>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        style={{ height: "400px" }}
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
