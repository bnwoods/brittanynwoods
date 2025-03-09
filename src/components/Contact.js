const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
                <img
                  className="anim_circle"
                  src="img/contact/lets-chat.png"
                  alt=""
                />
            </div>
            <div className="text">
              <h3>{`Interested`} in working together?</h3>
              <p>I am always open to chatting about how we can work together. Are you looking for a speaker for your conference or event? Are you looking for expertise in digital transformation, DevOps, or Cloud Automation? Feel free to get in touch!</p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="mailto:brittanywoods2008@gmail.com">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                      brittanywoods2008@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
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
                      <img
                        className="png"
                        src="img/svg/social/github.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
