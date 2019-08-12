import React, { Component } from 'react';

import Navbar from './components/navBar';
import Agent from './components/agent';
import Footer from './components/footer';

import './scss/_media-queries.scss';
import './scss/_content.scss';
import './scss/_base.scss';
import './scss/_general.scss';
import './scss/_footer.scss';
import './scss/_header.scss';


class App extends Component {
  state = { 
	search : '',
    agents: [
      	{
        	"id" : 1,
        	"name" : "Chuck Norri's Bodyguards",
        	"description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id
                        velit tristique accumsan nec at enim. Etiam posuere tellusat
                        ligula feugiat auctor. Morbi ut quam aliquet, viverra purus
                        in, convallis ante.`,
        	"price" : "$15 12/hrs"
      	},
		{
			"id" : 2,
			"name" : "Power Rangers Squad",
			"description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id
							velit tristique accumsan nec at enim. Etiam posuere tellusat
							ligula feugiat auctor. Morbi ut quam aliquet, viverra purus
							in, convallis ante.`,
			"price" : "$15 12/hrs"
		},
		{
			"id" : 3,
			"name" : "Kame Security Ltda",
			"description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id
							velit tristique accumsan nec at enim. Etiam posuere tellusat
							ligula feugiat auctor. Morbi ut quam aliquet, viverra purus
							in, convallis ante.`,
			"price" : "$15 12/hrs"
		},
		{
			"id" : 4,
			"name" : "Capsule Corp",
			"description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id
							velit tristique accumsan nec at enim. Etiam posuere tellusat
							ligula feugiat auctor. Morbi ut quam aliquet, viverra purus
							in, convallis ante.`,
			"price" : "$15 12/hrs"
		},
		{
			"id" : 5,
			"name" : "Raptor Squad",
			"description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id
							velit tristique accumsan nec at enim. Etiam posuere tellusat
							ligula feugiat auctor. Morbi ut quam aliquet, viverra purus
							in, convallis ante.`,
			"price" : "$15 12/hrs"
		},
		{
			"id" : 6,
			"name" : "Donuts Security",
			"description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id
							velit tristique accumsan nec at enim. Etiam posuere tellusat
							ligula feugiat auctor. Morbi ut quam aliquet, viverra purus
							in, convallis ante.`,
			"price" : "$15 12/hrs"
		}
		]
  }

  handleOnChange = (search) => {
	this.setState({
		search: search.target.value
	});
  }

  render() { 
    return ( 
      <div className="App">
        <Navbar></Navbar>

        <div className="banner-container">
          <div className="search-wrapper-banner">
              <h1 className="search-title">Los Mejores agentes de seguridad</h1>
              <div className="search">
                  <input type="text" 
                          className="searchTerm" 
						  placeholder="Buscar por ubicación" 
						  onChange={this.handleOnChange}
                          >    
                  </input>
              </div>
          </div>
        </div>

		<Agent 	search = {this.state.search}
				agents ={ this.state.agents} 
		>		
		</Agent>
        <Footer></Footer>
      </div>
     );
  }
}
 
export default App;

