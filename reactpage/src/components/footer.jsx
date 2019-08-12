import React, { Component } from 'react';
import './../scss/footer.scss';

import './../scss/_media-queries.scss';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="footer-container">
                <footer className="wrapper">
                    <div className="info-footer">
                        <h3>Desarrollado por Akurey.com | Todos los derechos reservados.</h3>
                        <h3>Términos y condiciones</h3>
                    </div>
                </footer>
            </div>
          );
    }
}
 
export default Footer;