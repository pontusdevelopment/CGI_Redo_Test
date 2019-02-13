import React, { Component } from 'react';
import './BusinessCard.css';
import PropTypes from 'prop-types';

class BusinessCard extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.surName = props.surName;
        this.telephone = props.telephone;
        this.email = props.email;
        this.img = props.img;
    }

    render(props){
        return(
            <div className="businessCard">
                <h2 classname="fullName">Name: {this.name} {this.surName}</h2>
                <p className="telephone">Telephone: {this.telephone}</p>
                <p className="email">Email: {this.email}</p>
                {/*TODO - add img to card <img classname="image">{this.img}</img>*/}
            </div>
        )
    }
}

BusinessCard.propTypes = {
    name: PropTypes.string,
    surName: PropTypes.string,
    telephone: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string
}

export default BusinessCard;