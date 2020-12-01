import React, { Component } from 'react';
import { withRouter, } from 'react-router-dom';

import {
    Container, Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input,
    Button,
    } from 'reactstrap';

class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            user: 'gy',
            id: '',
        }

        this.handleChange = this.handleChange.bind(this);
        console.log(JSON.stringify(props));
    }

    componentDidMount() {
        if (this.props.type === "edit") {
            this.setState({
                title: this.props.post.title,
                body: this.props.post.body,
                user: this.props.post.user,
                id: this.props.post.id,
            })
        }
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
                        <ModalHeader toggle={this.props.toggle}>{this.props.type === "create" ? "Create Post" : "Edit Post"}</ModalHeader>
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
                                    <Button type="submit"
                                            onClick={() => {this.props.type === "create" ?
                                                            this.props.handleSubmit(this.state.title, this.state.body, this.state.user)
                                                            : this.props.handleSubmit(this.state.title, this.state.body, this.state.user, this.state.id)}}
                                            color="success">Submit</Button>
                                </Col>
                                <Col>
                                    {this.props.type === "edit" ? <Button type="submit" onClick={() => {this.props.handleDelete(this.state.id); this.props.history.push('/blog');}}>Delete</Button> : null}
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

export default withRouter(PostModal);