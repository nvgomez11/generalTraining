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
    agents: []
  }

  componentDidMount(){
	fetch("https://api.myjson.com/bins/uptto")
	.then(res => res.json())
	.then(
	  (result) => {
		  	console.log("Resultado API", result.companies);
			this.setState({
		  	agents: result.companies
			});
	  },
	  (error) => {
		this.setState({
		  isLoaded: true,
		  error
		});
	  }
	)
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
		<div className="search-wrapper">
			<h1 className="search-title">Los Mejores agentes de seguridad</h1>
			<div className="search">
				<input type="text" 
					className="searchTerm" 
					placeholder="Buscar por ubicación"
					onChange={this.handleOnChange}>
				</input>
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

