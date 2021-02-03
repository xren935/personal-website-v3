import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/stack.scss";
import { Card, Button } from "react-bootstrap";

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Aos.init({ interval: 1000 });
    return (
      <div className="stack">
        <div id="smlstars"></div>
        <div id="midstars"></div>
        <div id="lrgstars"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6" id="my-btns">
                <div className="row" data-aos="slide-down">
                  <a
                    type="button"
                    href="#project"
                    class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded"
                  >
                    <i class="fa fa-cogs"></i>
                    <span class="spn">PROJECTS</span>
                  </a>
                </div>
                <div className="row" data-aos="flip-up">
                  <a
                    type="button"
                    href="#notes"
                    class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded"
                  >
                    <i class="fa fa-edit"></i>
                    <span class="spn">NOTES</span>
                  </a>
                </div>
                <div className="row" data-aos="slide-up">
                  <a
                    type="button"
                    href="#about"
                    class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded"
                  >
                    <i class="fa fa-heart"></i>
                    <span class="spn">ME</span>
                  </a>
                </div>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
