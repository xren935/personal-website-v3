import React, { useState }from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/about.css";

var descEng = `Hello World! :) Thanks for visiting my personal website. My name is Annie, and I'm a 4th year software engineering student at McGill Univeristy. \
I'm not going to introduce myself here as I'm busy learning programming lol. I like to grab coffee with people, and I really need a job! \
So, whether you are a recuriter😍, and/or want a potential friend🎢, and/or just want to see if the contact form works, please feel free to reach out to me!`

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: 'hii'
     }
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    this.setState({ 
        title: 'HOO'
    });
   }

  render() {
    Aos.init({ interval: 1000 });
    return (
      <div className="about">
        <div id="smlstars"></div>
        <div id="midstars"></div>
        <div id="lrgstars"></div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    {descEng}
                {/* <div onClick={this.changeTitle}>{this.state.title}</div>
                <div>ma francaise</div>
                <div>ma francaise</div> */}
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div id="van-photo"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
