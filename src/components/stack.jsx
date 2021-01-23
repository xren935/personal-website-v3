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
                <div className="col"></div>
                <div className="col">
                    <div className="my-btns">
                        
                    </div>
                </div>
                <div className="col"></div>
               </div>
          </div>
      </div>
    );
  }
}

export default Stack;
