import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, NavLink } from 'react-router-dom';

import {
    Container, Row, Col, Media,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input,
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter,
    Button,
    } from 'reactstrap';

class EditPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            user: 'gy'
        }

        this.handleChange = this.handleChange.bind(this);
        console.log(JSON.stringify(props));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

    render() {
        return(
            <Container>
                <Form className="form" onSubmit={this.props.handleSubmit}>
                    <Modal isOpen={true} toggle={this.props.toggle}>
                        <ModalHeader toggle={this.props.toggle}>Create Post</ModalHeader>
                        <ModalBody>
                                <Col>
                                    <FormGroup>
                                        <Label>Title</Label>
                                        <Input type="text" name="title" id="title" placeholder="Title"
                                                value={this.state.title}
                                                onChange={ (e) => {
                                                        this.handleChange(e) }}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Post</Label>
                                        <Input type="textarea" name="body" id="body" placeholder="Body"
                                                value={this.state.body}
                                                onChange={ (e) => {
                                                        this.handleChange(e) }}/>
                                    </FormGroup>
                                </Col>
                        </ModalBody>

                        <ModalFooter>
                            <Row margin-right={0} margin-left={0}>
                                <Col >
                                    <Button type="submit" onClick={() => this.props.handleSubmit(this.state.title, this.state.body, this.state.user)} color="success">Submit</Button>
                                </Col>
                                <Col>
                                    <Button type="button" onClick={this.props.toggle}>Cancel</Button>
                                </Col>
                            </Row>
                        </ModalFooter>
                    </Modal>
                </Form>
            </Container>
        );
    }
}

export default EditPostModal;