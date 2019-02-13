import React, { Component } from 'react';
import './BusinessCardForm.css';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class BusinessCardForm extends Component{
    constructor(props){
        super(props);
        this.state={
        modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render(props){
        return(
            <div>
                <Button outline block={true} color="primary" onClick={this.toggle}>+</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter email here" />
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