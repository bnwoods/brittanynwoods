import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent talks
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/herding-cats.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">
                        <span>ChefConf 2018 - Herding Cats</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=LJ1c1QJfH1c"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2019keynote.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">
                        <span>ChefConf 2019 - Keynote</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://youtube.com/watch?v=CmLUxCzxq3c?t=763"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/dod-texas.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">
                        <span>DevOpsDays Texas 2021 - Unpaving the Road to Ruin</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://youtube.com/watch?v=Ji_Dl92D6ps?t=15238"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/config-mgmt-isnt-dead.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">
                        <span>ChefConf 2022 - Config Management Isnt Dead</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://youtube.com/watch?v=irm5EvM1KRw"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/qconlondon.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">
                        <span>QCon London 2024 - Bits, Bots, and Banter</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup_youtube"
                      href="https://www.infoq.com/presentations/devops-teams/?utm_source=linkedin&utm_medium=social&utm_campaign=post_0108_idsboston25"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/full-talk-list.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Details</span>
                      <h3 className="title">
                        <span>Full List of Past Talks</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
