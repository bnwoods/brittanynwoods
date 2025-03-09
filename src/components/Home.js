const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                Brittany Woods <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Engineering Executive</span>
            </div>
            <div className="text">
              <p>
                {`I'm`} an Engineering Executive based in London, and {`I'm`} very
                passionate about DevOps, DevEx, and Platform Engineering.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Conference Talks{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a href="#">
                <img className="png" src="img/svg/social/linkedin.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="png" src="img/svg/social/github.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src={`img/hero/${dark ? 2 : 1}.jpg`} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
