import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/sidebar.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Aos.init({ interval: 1000 });
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="sidebar">
                <a href="https://www.facebook.com/annie.ren.988/" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/annieren_v2.1/" class="insta"><i class="fa fa-instagram"></i></a>
                <a href="https://github.com/xren935" class="github"><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/annie-xingya-ren/" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Header;
