import React, { Component } from 'react';
import './BusinessCardForm.css';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class BusinessCardForm extends Component{
    constructor(props){
        super(props);
        this.state={
            newNameContent: '',
            newEmailContent: '',
            newNumberContent: '',
            modal: false,
        };
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleNumberInput = this.handleNumberInput.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleNameInput(e){
        this.setState({
            newNameContent: e.target.value,
        })
    }
    handleEmailInput(e){
        this.setState({
            newEmailContent: e.target.value,
        })
    }
    //TODO: This doesn't take any input - find out why and fix it
    handleNumberInput(e){
        this.setState({
            newNumberContent: e.target.value,
        })
    }
    //TODO: Find out why app crashes on addCard()
    //      Refactor this code and make it more DRY
    addCard(){
        let {newNameContent} = this.state;
        let {newEmailContent} = this.state;
        let {newNumberContent} = this.state;
        this.setState({
            newNameContent,
            newEmailContent,
            newNumberContent,
            modal: false,
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
                           value={this.state.newNameContent}
                           onChange={this.handleNameInput} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email"
                           id="email" 
                           placeholder="Enter email here"
                           value={this.state.newEmailContent}
                           onChange={this.handleEmailInput} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="telephone">Phone Number:</Label>
                    <Input type="tel" 
                           id="telephone" 
                           placeholder="Enter phone number here"
                           value={this.state.newNumberContent}
                           onChange={this.handlePhoneInput} />
                    </FormGroup>
                    <Button color="primary" className="mt-2" onClick={this.addCard}>Add Card</Button>{' '}
                    <Button color="secondary" className="mt-2" onClick={this.toggle}>Cancel</Button>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

BusinessCardForm.propTypes = {

}

export default BusinessCardForm;