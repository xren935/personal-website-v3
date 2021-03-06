import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/notes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Aos.init({ interval: 1000 });
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="notes" id="notes">
              <h3>My Notes</h3>
              <div className="content">
                <div className="row" data-aos="flip-down">
                  <div className="col-md">
                    <Card>
                      <Card.Img variant="top" src="" />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          {/* Some quick example text to build on the card title and
                          make up the bulk of the card's content. */}
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
                        <Card.Title></Card.Title>
                        <Card.Text>
                          {/* Some quick example text to build on the card title and
                          make up the bulk of the card's content. */}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md">
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          {/* Some quick example text to build on the card title and
                          make up the bulk of the card's content. */}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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

export default Notes;
