import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Container,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { baseURL } from '../shared/baseUrl';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
      }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                   <div className="container">

                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={"/static/favicon-32x32.png"} height="32" width="32" alt='GY' /></NavbarBrand>
                        {console.log(process.env.PUBLIC_URL + "favicon-32x32.png")}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/blog'><span className="fa fa-info fa-lg"></span> Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={{ backgroundImage: "url(/static/photosquat-cropped.jpg)", backgroundSize: 'cover' }}>
                    <Container className="jumbo-text col-md-offset-4">
                        <div className="header header-text">
                            <h3>ytterb.org</h3>
                            <p>The blog and portfolio of Gabriel Ytterberg</p>
                        </div>
                    </Container>
                </Jumbotron>
            </div>


        )
    }
}

export default Header;