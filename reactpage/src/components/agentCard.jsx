import React, { Component } from 'react';

import certified from "./../images/certified.png";
import chuck from "./../images/chuck6.jpg";

class AgentCard extends Component {
    state = { 
        name: this.props.name,
        description: this.props.description,
        rate: this.props.price,
        hours: this.props.hours,
        isCertified: this.props.isCertified
     }

    render() { 
        return (
            <div className="agent-container">
                <div className="information-header">
                    <h1>{this.state.name}</h1>
                    <div className="certified-container">
                            {this.state.isCertified ? <img src={certified}></img> : false }
                    </div>                            
                </div>
                <div className="information-body">
                    <img src={chuck} alt="chuck"></img>
                    <p className="agent-description">{this.state.description}</p>
                </div>
                <div className="information-footer">
                    <h3>{this.state.rate}</h3>
                    <button className="contratar-button">Contratar</button>
                </div>
            </div>
         );
    }
}
 
export default AgentCard;