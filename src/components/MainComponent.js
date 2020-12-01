import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Blog from './BlogComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Photojumbo from './JumbotronComponent';

const Main = (props) => {
    return (
        <div>
            <Header />
            <Photojumbo />
            <Switch location={props.location}>
                <Route path='/home' component={Home} />
                <Route exact path='/blog' component={withRouter(Blog)} />
                <Route path='/blog/:postId' component={withRouter(Blog)} />
                <Route path='/blog/edit/:postId' component={withRouter(Blog)} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;