import React, { Component } from 'react';

import AgentCard from "./agentCard";

class Agent  extends Component {
    render() { 
        const search = this.props.search
        let filteredAgents = this.props.agents.filter( agent =>
            agent.name.toLowerCase().includes(search.toLowerCase())
        )
        return ( 
            <div className="wrapper info-container">
                { filteredAgents.map( (agent)=> 
                    <AgentCard
                        key={agent.name} 
                        name={agent.name}
                        description={agent.description}
                        rate={agent.rate}
                        hours={agent.hours}
                        isCertified={agent.isCertified}>
                    </AgentCard> )}
            </div>
         );
    }
}
 
export default Agent;