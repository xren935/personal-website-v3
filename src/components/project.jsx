import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Badge} from "react-bootstrap";

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
                    <iframe src="https://giphy.com/embed/StqYIr8lW7LCHDN6Ix" class="giphy-embed" allowFullScreen style={{borderRadius: "30px"}} frameBorder="0"></iframe>
                      <Card.Body>
                        <Card.Title>Colt Express</Card.Title>
                        <Card.Text>
                          An online version of Colt Express, a multi-player turn-based board game.  
                          This Unity game contains all features of the original game and a lobby, implemented using <a href="https://github.com/kartoffelquadrat/LobbyService">LobbyService</a>,
                          that allows palyers to create, join, play, save, load a game, chat and play with other users.
                        </Card.Text>
                        <div style={{padding: "10px", fontSize: "20px"}}>
                          <Badge variant="info">C#</Badge><Badge variant="primary">Java</Badge><Badge variant="secondary">Unity</Badge>
                        </div>
                        <Button variant="primary"><a href="https://github.com/a-a-lohn/colt-express">Code</a></Button>&nbsp;&nbsp;<Button variant="secondary">Demo</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md">
                    <Card>
                      <iframe src="https://giphy.com/embed/AtxGLcVGAG00EHCxbP" class="giphy-embed" allowFullScreen style={{borderRadius: "30px"}} frameBorder="0"></iframe>
                      <Card.Body>
                        <Card.Title>OneSwipe News</Card.Title>
                        <Card.Text>
                          One Swipe News is a Tinder-like news app. It provides users with the freshest news and allows users to easily like(save)/dislike(unsave) news feeds
                          by swiping to the right/left or search the keywords that they're interested in reading about. It also supprots an offline mode. 
                        </Card.Text>
                        <div style={{padding: "10px", fontSize: "20px"}}>
                          <Badge variant="primary">Java</Badge><Badge variant="success" style={{backgroundColor: "#43d6d1"}}>Android Studio</Badge>
                        </div>
                        <Button variant="primary"><a href="https://github.com/xren935/android-news">Code</a></Button>&nbsp;&nbsp;<Button variant="primary">Visit</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md">
                    <Card>
                      <iframe src="https://giphy.com/embed/nxLyDBVanVwwaJ9llh" style={{borderRadius: "30px"}} frameBorder="0" allowFullScreen></iframe>
                      <Card.Body>
                        <Card.Title><a href="https://xren935.github.io/wongs-langley/"><u>Wong's Langley</u></a></Card.Title>
                        <Card.Text>
                          A responsive and interactive website built for Wong's Chinese Restaurant in Langley, BC.
                          Google Analytics is used to analyze the website's traffic to help improve customer experience. 
                        </Card.Text>
                        <div style={{padding: "10px", fontSize: "20px"}}>
                          <Badge variant="light">React</Badge>
                        </div>
                        <Button variant="primary"><a href="https://github.com/xren935/wongs-langley">Code</a></Button>&nbsp;&nbsp;<Button variant="primary">Visit</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="row" data-aos="flip-up">
                  <div className="col-md">
                    <Card>
                    <iframe src="https://giphy.com/embed/M9cRCb5T8bDI4Qqz9j" style={{borderRadius: "30px"}} frameBorder="0" allowFullScreen></iframe>
                      <Card.Body>
                        <Card.Title>CleverrMount</Card.Title>
                        <Card.Text>
                          A responsive website built for CleverrMout, a company that sells (almost) all the mounting eqipments you need. 
                        </Card.Text>
                        <div style={{padding: "10px", fontSize: "20px"}}>
                          <Badge variant="light">React</Badge><Badge style={{backgroundColor: "#CDB7F6"}}>MongoDB</Badge>
                        </div>
                        <Button variant="primary"><a href="https://github.com/xren935/cleverr-mount-website">Code</a></Button>&nbsp;&nbsp;<Button variant="secondary">Demo</Button>
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
                      <Card.Body>
                        <Card.Title><a href="https://xren935.github.io/wongs-langley/">Wong's Langley</a></Card.Title>
                        <Card.Text>
                          A responsive and interactive website built for Wong's Chinese Restaurant in Langley, BC.
                          Google Analytics is used to analyze the website's traffic to help improve customer experience. 
                        </Card.Text>
                        <Button variant="primary">Code</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
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
                      <Card.Body>
                        <Card.Title><a href="https://xren935.github.io/wongs-langley/">McGill CS</a></Card.Title>
                        <Card.Text>
                          Website built for the CS Department at McGill University
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
