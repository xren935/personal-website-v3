import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "../static/pop.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleClose (){
        this.setState({ show: false });
    };
    
    handleShow (){
        this.setState({ show: true });
    };
    
    render() {
        return(
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <div id="popup">
                    <Modal.Header closeButton>
                        <h3>Hi there! Thanks for visiting. This is a work in progress that will be finished before May 2021🦾🤓</h3>
                    </Modal.Header>
                    </div>
                </Modal>
                <div>{this.handleClose}</div>
            </div>
        );
    }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
export default Popup;