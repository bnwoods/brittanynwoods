const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">12</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Brittany Woods</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                Brittany Woods is an Engineering Director currently based in London. During her career
                in technical and leadership roles spanning verticals across the financial and 
                e-commerce sectors, Brittany has been a significant advocate for DevOps in the companies
                she works for and in the larger community. Brittany has worked in several technical and leadership
                roles focused on increasing developer experience, building platform engineering functions, and driving
                innovation. She has also put a significant focus on improving organizational culture, examples of which can
                be seen through her talks on the topic. Brittany has been featured in the book "97 Things Every Cloud Engineer Should Know"
                with her article on silos in modern tech teams.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/BrittanyWoods-CV-2025.pdf" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              <img src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
