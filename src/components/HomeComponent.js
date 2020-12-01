import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    } from 'reactstrap';

class Home extends Component {

    render() {
        return (
            <Container>
                <h2>Hello!</h2>
                <p>This is a demonstration project developed by Gabriel Ytterberg.</p>
                <p>Gabriel Ytterberg is a software developer with experience in JavaScript, Python, and Java. This site is written in ES6 JavaScript using the React framework, and the back end is written in Python using the Django framework.</p>
                <p>The blog page does not use authentication, so anyone can experiment with the features. For more details and code, see the <Link to="/about">About</Link> page, or inspect the code at my <a className="" href="https://github.com/gytterberg">GitHub page.</a></p>

            </Container>
        )
    }
}

export default Home;