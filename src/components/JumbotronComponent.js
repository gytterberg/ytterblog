import React from 'react';
import { Container, Jumbotron } from 'reactstrap';


const Footer = () => {
    return(
        <Container className="jumbo-text ">
            <Jumbotron  className="" style={{ backgroundImage: "url(/static/photosquat-cropped.jpg)", backgroundSize: 'cover' }}>

                <div className="header header-text   offset-6" >
                    <h3>ytterblog</h3>
                    <p>A blog app and portfolio project by Gabriel Ytterberg</p>
                </div>

            </Jumbotron>
        </Container>
    )
}

export default Footer;