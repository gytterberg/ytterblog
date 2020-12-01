import React from 'react';
import { Col, Container, Jumbotron } from 'reactstrap';


const Photojumbo = () => {
    return(
        <Container className="jumbo-text ">
            <Jumbotron  className="" style={{ backgroundImage: "url(/static/photosquat-cropped.jpg)", backgroundSize: 'cover' }}>

                <Col className="header header-text col-md-5 offset-md-6" >
                    <h3>ytterblog</h3>
                    <p>A blog app and portfolio project by Gabriel Ytterberg</p>
                </Col>

            </Jumbotron>
        </Container>
    )
}

export default Photojumbo;