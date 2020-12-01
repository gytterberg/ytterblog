import React from 'react';
import {
    Container, Card, CardHeader, CardImg, CardBody
    } from 'reactstrap';

const About = () => {
    return (
        <Container>
            <h2>About this site</h2>
            <Card className="col-md-4 card">
                <CardHeader className="">The stack</CardHeader>
                <CardBody>
                    <dl>
                        <dt>React</dt>
                        <dd>Provides the front end UI.</dd>
                        <dt>Redux</dt>
                        <dd>Provides a persistent data store available to various components. Redux Logger tracks state changes and provides import debugging information.</dd>
                        <dt>Axios</dt>
                        <dd>Communicates with the back end via REST API.</dd>
                        <dt>Django</dt>
                        <dd>Provides the back end REST API and manages the SQL database, while serving the front end and static files.</dd>
                    </dl>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Front end components and routing</CardHeader>
                <CardImg src="/static/Main_w_routing.png" style={{width: "686px"}} ></CardImg>
                <CardBody>
                    <p>Front end routing is done in Main.js shown here. Each page is its own component, along with the header, footer and jumbotron image. The jumbotron is separate from the header so that the navbar remains sticky at the top, while the jumbotron can be scrolled past. <br/>
                    The "/blog/:postId' and "/blog/edit/:postId" routes pass the ID number of the post in question to the Blog component, so an individual post can be viewed on its own and edited.<br/>
                    There is another component, PostModal, which handles the modal on the blog page. PostID is passed in through the Blog component, along with a prop indicating if the modal should render as a create post view or an edit post view.</p>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Back end components and routing</CardHeader>
                <CardBody>
                    <p>The Django back end is set up to serve the front end, as well as manage the database and serve static files.</p>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Database setup and model</CardHeader>
            </Card>
            <Card>
                <CardHeader>Redux store</CardHeader>
            </Card>
            <Card>
                <CardHeader>Axios accessing the back end API</CardHeader>
            </Card>
        </Container>
    )
}

export default About;