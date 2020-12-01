import React, { Component } from 'react';
// import { Row, Col } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <div className="footer footer-text">
                <p><i className="fa fa-copyright"></i> Gabriel Ytterberg<br />
                    <i className="fa fa-envelope-square"></i> gytterberg [at] gmail [dot] com<br />
                <a className="btn btn-social-icon btn-github" href="https://github.com/gytterberg"><i className="fa fa-github"></i></a>
                <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/gytterberg/"><i className="fa fa-instagram"></i></a>
                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/gabriel-ytterberg-8ab87a14/"><i className="fa fa-linkedin"></i></a> </p>
            </div>
        )
    }
}

export default Footer;