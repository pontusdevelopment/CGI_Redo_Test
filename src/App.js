import React, { Component } from 'react';
import BusinessCard from './BusinessCard/BusinessCard';
import BusinessCardForm from './BusinessCardForm/BusinessCardForm';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import DB_CONFIG from './Config/config';

//TODO #1: Learn more React and make this work as intended!

class App extends Component {

  constructor(props){
    super(props);
    // TODO: Generate cards from Firebase instead of hard coded
    this.state ={
      cards: [{
        id: 1, name: "Pontus", surName: "Gavelin", telephone: "0733295577", email: "pontusdevelopment@gmail.com"
      },
    {
      id: 2, name: "John", surName: "Doe", telephone: "213123", email: "john@doe.doedoe"
    }],
    };
    
  }
//TODO: Add update and delete from Firebase to cards
  

  render() {
    return (
      <div className="container">
        <div className="header">
          <span>CGI</span> Test Pontus Gavelin
        </div>
        <div className="cardBody">
        {
          this.state.cards.map((card) => {
            return(
              <BusinessCard name={card.name} surName={card.surName} telephone={card.telephone} email={card.email} img={card.img}/>
            )
          })
        }
        </div>
        <div className="footer">
          <BusinessCardForm />
        </div>
      </div>
    );
  }
}

export default App;

//Remnants of tests, keeping them here for future reference for now
//TODO: See if anything is relevant - else, delete

{/* <div className="controlPanel">
            <Button color="primary" className="controlButton">Add New Card</Button>
            <Button color="primary" className="controlButton">Show All Cards</Button>
            <Button color="primary" className="controlButton">Edit Card By Id</Button>
            <Button color="primary" className="controlButton">Delete Card By Id</Button>
</div> 



  // <Container>
      //   <Row>
      //     <Col sm="12" md={{ size: 6, offset: 3 }}>
      //      <Card>
      //         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=200&h=180" alt="Card image cap" />
      //           <CardBody>
      //             <CardTitle>Card title</CardTitle>
      //             <p>Test Paragraph</p>
      //             <CardSubtitle>Card subtitle</CardSubtitle>
      //             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      //             <Button>Button</Button>
      //           </CardBody>
      //       </Card>
      //     </Col>
      //   </Row>
      //   <div className="test">
      //     <BusinessCard />
      //     <BusinessCardForm />
      //   </div>
      // </Container>*/}