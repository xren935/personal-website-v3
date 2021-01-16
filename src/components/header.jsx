import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/header.css";
Aos.init();

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    Aos.init({ duration: 3000 });
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="header" data-aos="fade-in">
              <h1>
                Hi, I'm <div id="name">Annie Ren</div>
              </h1>
              <br></br>
              <div class="row">
                <div class="col-lg-2 col-md-12">
                  <h1>I am &nbsp;</h1>
                </div>
                <div class="col-lg-10 col-md-12">
                  <div className="list">
                    <h1>
                      <div>
                        <ul>
                          <li>a Developer</li>
                          <li>a McGillian</li>
                          <li>an Engineer-in-training</li>
                          <li>a Language Lover</li>
                          <li>a Philomath</li>
                          <li>a Conscientious Explorer</li>
                          <li>an Astronomy Enthusiast</li>
                          <li>a Good Daughter/Friend</li>
                          <li>a Part-time Foodie</li>
                          <li>hardworking & determined</li>
                        </ul>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Header;
