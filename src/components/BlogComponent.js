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


import { fetchPosts, submitPost, editPost, deletePost } from '../redux/ActionCreators';

import PostModal from './PostModalComponent';
import Loading from './LoadingComponent';


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createModal: false,
            editModal: false,
            editPost: {},
        }

        if ( typeof props.match.params.postId != "undefined")
            this.state.postId = props.match.params.postId;

        this.handleCreate = this.handleCreate.bind(this);
        this.toggleCreateModal = this.toggleCreateModal.bind(this);

        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        console.log(JSON.stringify(props));
        this.props.fetchPosts();
    }

    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    // componentDidUpdate() {
    //     this.props.fetchPosts();
    // }

    toggleCreateModal() {
        this.setState({ createModal: !this.state.createModal });
        console.log("In togglecreate, state: ", JSON.stringify(this.state));
    };

    toggleEditModal() {
        this.setState({ editModal: !this.state.editModal });
        console.log("In toggleEdit, state: ", JSON.stringify(this.state));

    };

    handleCreate(title, body, user) {
        this.toggleCreateModal();
        const newPost = {
            title: title,
            body: body,
            user: user,
        }
        this.props.submitPost(newPost);
        // this.props.fetchPosts();
    };

    handleEdit(title, body, user, id) {
        // edit post with id

        const newPost = {
            title: title,
            body: body,
            user: user,
            id: id
        }
        console.log("In handleEdit, newPost: ", JSON.stringify(newPost));
        this.props.editPost(newPost);
        // this.props.fetchPosts()
        this.toggleEditModal();
        this.setState({editPost: {}})


    }

    handleDelete(id) {

        console.log("In handleDelete", JSON.stringify(id));

        this.props.deletePost(id);

        this.toggleEditModal();
        this.setState({editPost: {}})
        // this.props.fetchPosts()


    }

    renderPosts () {
        // sort posts in descending time order

        if ( this.props.posts.isLoading === true) {
            /// got nothing to show
            return (<Loading/>)
        }

        if ( this.props.posts.errMess !== null ) {
            return (<div>{this.props.posts.errMess}</div>);
        }

        if ( typeof this.state.postId == "undefined" && Array.isArray(this.props.posts.posts.data)) {
            // render all posts
            console.log("How did we get here. Props: ", JSON.stringify(this.props));

            const sortedposts = this.props.posts.posts.data.sort((a, b) => {
                if (a.posted > b.posted)
                    return -1;
                else
                    return 1;
            })
            // render each post individually #####
            const renderedposts = sortedposts.map((post) => {
                return (
                    <div>
                        {this.renderPost(post)}
                    </div>
                )}
            )
            return (
                <Container>
                    {renderedposts}
                </Container>
            )
        } else if ( typeof this.state.postId != "undefined" && this.props.posts.posts !== []) {
            // render single post
            let post = this.props.posts.posts.data.filter((post) => post.id === parseInt(this.state.postId))[0];
            return(
                <Container>
                    {this.renderPost(post)}
                </Container>
            );
        }
        console.log("How did we get here. Props: ", JSON.stringify(this.props));
    }
    
    renderPost (post) {
        return (
            <Card className="postcard">
                <CardBody>
                    <Media>
                        <Media left href="#"><Media object src="/static/favicon-32x32.png" alt="placeholder" className="avatar"/></Media>
                        <Media body>
                            <Media heading>
                                {post.title}
                            </Media>
                            {post.body}
                        </Media>
                    </Media>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col>
                            {post.user} --- {new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(post.posted)))}
                        </Col>
                        <Col className="text-right">
                            <Button color="link"><NavLink to={"/blog/" + post.id}>Link</NavLink></Button>---<Button color="link" onClick={() => {this.setState({editPost: post}); this.toggleEditModal();}}>Edit</Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        )
    }

    render() {

        return(
            <Container>
                <Row>
                    <Col className="text-left">
                        {this.state.postId ? <Button color="link"><NavLink to="/blog">&lt; Back to all posts</NavLink></Button>
                                            : null }
                    </Col>
                    <Col className="text-right">
                        <Button onClick={() => {console.log("Create post button clicked"); this.toggleCreateModal()}} color="primary">Create Post</Button>
                    </Col>
                        {this.props.isLoading ? <Loading /> : this.renderPosts()}
                        {/* {this.props.errMess} */}
                </Row>
                    {this.state.createModal ? <PostModal handleSubmit={this.handleCreate}
                                                            toggle={this.toggleCreateModal}
                                                            type="create"/> 
                                            : null }
                    {this.state.editModal ? <PostModal handleSubmit={this.handleEdit}
                                                        toggle={this.toggleEditModal}
                                                        type="edit" 
                                                        post={this.state.editPost}
                                                        handleDelete={this.handleDelete} />
                                            : null }
            </Container>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPosts: () => {dispatch(fetchPosts())},
        submitPost: (newPost) => {dispatch(submitPost(newPost))},
        editPost: (post) => {dispatch(editPost(post))},
        deletePost: (postId) => {dispatch(deletePost(postId))},
    })
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));