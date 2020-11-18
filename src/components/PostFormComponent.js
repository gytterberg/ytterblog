/// forget this


import React from 'react'
import { Control, Form, Errors, Label, actions, connectReduxForm } from 'react-redux-form';

let PostForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            Form body goes here
        </form>
    )
}
    
export default connectReduxForm({
    form: 'CreatePost'
})(PostForm)

// let createReduxForm = reduxForm({form: 'CreatePost'});

// PostForm = createReduxForm(PostForm);
