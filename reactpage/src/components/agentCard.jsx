import React, { Component } from 'react';

import certified from "./../images/certified.png";
import chuck from "./../images/chuck6.jpg";

class AgentCard extends Component {
    state = { 
        name: this.props.name,
        description: this.props.description,
        price: this.props.price
     }
    render() { 
        return (
            <div className="agent-container">
                <div className="information-header">
                    <h1>{this.state.name}</h1>
                    <div className="certified-container">
                            <img src={certified}></img>
                    </div>                            
                </div>
                <div className="information-body">
                    <img src={chuck} alt="chuck"></img>
                    <p className="agent-description">{this.state.description}</p>
                </div>
                <div className="information-footer">
                    <h3>{this.state.price}</h3>
                    <button className="contratar-button">Contratar</button>
                </div>
            </div>
         );
    }
}
 
export default AgentCard;