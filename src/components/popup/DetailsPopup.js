import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="portfolio_main_title">
          <h3>Full Talk History</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <ul> <h5>2025</h5>
              <li>
                DevOpsLive London Panel Discussion: Building Strong Foundations - The Importance of Cultivating a Healthy DevOps Culture for Collaboration
              </li>
              <li>
              DevOpsLive London Panel Discussion: From Diversity to Disruption - Shaping the Future of Tech
              </li>
              <li>
              DevOpsLive Keynote: The DevOps Umbrella - How Changing Needs Brought About Changing Teams
              </li>
            </ul>
            <p></p>
            <ul> <h5>2024</h5>
              <li>
              DevOpsCon Munich: DevOps Unleashed - Cracking the Code to Success with Culture, Structure, and Technology
              </li>
              <li>
              DevOpsCon Munich Keynote: The DevOps Umbrella - How Changing Needs Brought About Changing Teams
              </li>
              <li>
              InfoQ Engineering Culture Podcast: Enhancing Team Dynamics and Psychological Safety with Brittany Woods
              </li>
              <li>
              Cloud Expo Europe DevOpsLive: Cultivating Organisational Success - Unleashing the Human Element
              </li>
              <li>
              QCon London: Bits, Bots, and Banter - How Tech Teams Work in a DevOps World
              </li>
              <li>
                Progress Chef Roadshow London: Chef Journey Through Massive Scale
              </li>
              <li>
                Progress Chef Roadshow Texas: Chef Journey Through Massive Scale
              </li>
              <li>
                KCDC 2024: DevOps Unleashed - Cracking the Code to Success with Culture, Structure, and Technology
              </li>
            </ul>
            <p></p>
            <ul> <h5>2023</h5>
              <li>
                ChefConf Munich Session: The Three Little Pigs of DevOps
              </li>
              <li>
                ChefConf Munich Session: Into the Dataverse
              </li>
              <li>
                ChefConf Munich 2023 Keynote
              </li>
            </ul>
            <p></p>
            <ul> <h5>2022</h5>
              <li>
              jFrog: DevOps Cloud Days 2022 - Azure
              </li>
              <li>
              ChefConf Session: Config Management Isn’t Dead
              </li>
              <li>
              O’Reilly Learning: Implementing Chef in 4 Hours
              </li>
              <li>
              jFrog SwampUP: Toadal Team Enablement
              </li>
              <li>
              Pagerduty Community Panel: SRE for Women’s History Month
              </li>
            </ul>
            <p></p>
            <ul> <h5>2021</h5>
              <li>
              DevOpsDays Texas: Unpaving the Road to Ruin
              </li>
              <li>
              Podcast: Page it to the Limit
              </li>
              <li>
              ChefConf Session: Unofficially Official Guide to Config Management at Scale
              </li>
              <li>
              ChefConf 2021 Keynote
              </li>
              <li>
              Podcast: Observy McObservface - Building Clouds and Wrangling Robots with Brittany Woods
              </li>
            </ul>
            <p></p>
            <ul> <h5>2020</h5>
              <li>
              Webinar: Integrating Chef with ServiceNow
              </li>
              <li>
              ChefConf Session: Use Data You Must
              </li>
              <li>
              ChefLIVE! Twitch Stream
              </li>
              <li>
              ChefConf Panel: WomXn in Tech Panel
              </li>
              <li>
              ShuttleOps DevOps AMA: Automation, Security, and Compliance
              </li>
            </ul>
            <p></p>
            <ul> <h5>2019</h5>
              <li>
              ChefConf 2019 Keynote
              </li>
              <li>
              ChefConf Session: Bridging the Great Divide
              </li>
            </ul>
            <p></p>
            <ul> <h5>2018</h5>
              <li>
              ChefConf Session: Herding Cats
              </li>
              <li>
              The New Stack Makers: Chef
              </li>
              <li>
              ChefConf Customer Story: Quality Through Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;
