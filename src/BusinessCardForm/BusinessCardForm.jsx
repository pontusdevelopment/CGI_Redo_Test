import React, { Component } from 'react';
import './BusinessCardForm.css';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class BusinessCardForm extends Component{
    constructor(props){
        super(props);
        this.state={
            newCardContent: '',
            modal: false,
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleUserInput(e){
        this.setState({
            newCardContent: e.target.value,
        })
    }

    render(props){
        return(
            <div>
                <Button block={true} color="primary" className="formButton" onClick={this.toggle}>+</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a new business card</ModalHeader>
                    <ModalBody>
                    <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text"
                           id="name" 
                           placeholder="Enter name here"
                           value={this.state.newCardContent}
                           onChange={this.handleUserInput} />
                    <Label for="email">Email:</Label>
                    <Input type="email"
                           id="email" 
                           placeholder="Enter email here"
                           value={this.state.newCardContent}
                           onChange={this.handleUserInput} />
                    <Label for="telephone">Phone Number:</Label>
                    <Input type="tel" 
                           id="telephone" 
                           placeholder="Enter phone number here"
                           value={this.state.newCardContent}
                           onChange={this.handleUserInput} />
                    <Button color="primary" className="mt-2" onClick={this.toggle}>Add Card</Button>{' '}
                    <Button color="secondary" className="mt-2" onClick={this.toggle}>Cancel</Button>
                    </FormGroup>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

BusinessCardForm.propTypes = {

}

export default BusinessCardForm;