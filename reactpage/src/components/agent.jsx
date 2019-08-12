import React, { Component } from 'react';

import AgentCard from "./agentCard";

class Agent  extends Component {
    render() { 
        const search = this.props.search
        let filteredAgents = this.props.agents.filter( agent =>
            agent.name.includes(search)
        )
        return ( 
            <div className="wrapper info-container">
                { filteredAgents.map( (agent)=> 
                    <AgentCard
                        key={agent.id} 
                        name={agent.name}
                        description={agent.description}
                        price={agent.price}>
                    </AgentCard> )}
            </div>
         );
    }
}
 
export default Agent;