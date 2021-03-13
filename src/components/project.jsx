import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Aos.init({ interval: 1000 });
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="project" id="project">
              <h3>My Projects</h3>
              <div className="content">
                <div className="row" data-aos="flip-up">
                  <div className="col-md">
                    <Card>
                      <Card.Img variant="top" src="" />
                      <Card.Body>
                        <Card.Title>BomBuggy</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Code</Button>
                        <Button variant="secondary">Demo</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md">
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>OiiLaundry</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md">
                    <Card>
                      <iframe src="https://giphy.com/embed/nxLyDBVanVwwaJ9llh" width="480" height="272" frameBorder="0"></iframe>
                      <Card.Body>
                        <Card.Title><a href="https://xren935.github.io/wongs-langley/">Wong's Langley</a></Card.Title>
                        <Card.Text>
                          A responsible and interactive website built for Wong's Chinese Restaurant in Langley, BC.
                          Google Analytics is used to analyze the website's traffic to help improve customer experience. 
                        </Card.Text>
                        <Button variant="primary">Code</Button>
                      </Card.Body>
                    </Card>
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

export default Project;
