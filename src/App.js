import React, { Component } from 'react';
import BusinessCard from './BusinessCard/BusinessCard';
import BusinessCardForm from './BusinessCardForm/BusinessCardForm';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      cards: [
        {id: 1, name: "Pontus", surName: "Gavelin", telephone: "7070707", email: "pontus@asd", img: "https://novare.se/wp-content/uploads/2017/04/blank-profile-picture-973460_960_720.png" },
        {id: 2, name: "John", surName: "Doe", telephone: "132123123", email: "John@doe", img: "https://novare.se/wp-content/uploads/2017/04/blank-profile-picture-973460_960_720.png"},
      ],
    };
    
  }

  

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


{/* 
  Stuff that's commented out for now

  <div className="controlPanel">
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