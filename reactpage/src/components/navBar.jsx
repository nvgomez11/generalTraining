import React, { Component } from 'react';

import logo from "./../images/logo.png";
import './../scss/navBar.scss';
import './../scss/_header.scss';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-container">
                <header className="wrapper clearfix"> 
                    <img src={logo} alt="logo"></img>
                    <i className="fa fa-bars fa-3x"></i>
                    <nav>
                        <ul>
                            <li><a href="#">Directorio de agentes</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Ingresar</a></li>
                        </ul>
                    </nav>
                </header> 
            </div>
         );
    }
}
 
export default Navbar;