import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/contact.scss";
Aos.init();

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      loading: true,
      status: "",
    };
  }

  componentDidMount() {
    $(".button").click(function () {
      $(".back").toggleClass("animate");
      $(".note").toggleClass("animate");
    });
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    Aos.init({ duration: 3000 });
    const { status } = this.state;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div class="contact" data-aos="fade-out">
              <div>
                <a class="button">OPEN</a>
                <div class="email">
                  <div class="envelope">
                    <div class="back paper"></div>
                    <div class="note">
                      <div class="form-wrapper">
                        <form
                          onSubmit={this.submitForm}
                          action="https://formspree.io/mpzpgevb"
                          method="POST"
                        >
                          <h2>Let's get in touch!</h2>
                          <label>Your Email:&nbsp;</label>
                          <input type="email" name="email" />
                          <br></br>
                          <label> Message:&nbsp;</label>
                          <input type="text" name="message" />
                          <br></br>
                          {status === "SUCCESS" ? (
                            <p>Thanks! I'll get back to you</p>
                          ) : (
                            <div class="col-md-12">
                              <button type="submit">Say hi!</button>
                            </div>
                          )}
                          {status === "ERROR" && (
                            <p>Ooops! There was an error.</p>
                          )}
                        </form>
                      </div>
                    </div>
                    <div class="front paper"></div>
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

export default Contact;
