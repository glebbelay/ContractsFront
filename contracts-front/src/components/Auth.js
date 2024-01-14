import React from "react";
import {Formik, Form, Field} from 'formik'
import "../css/auth.css"


function AuthForm(){
    return(
        <Form className="form">
            <label className="row">Login</label>
            <Field className="row" name="login" required/>
            <label className="row">Password</label>
            <Field className="row" type="password" name="password" required/>
            <button className="submit-button" type="submit">Submit</button>
        </Form>

    )
}

function handleFormSubmit(values, formAPI){
    const date = new Date();
    const newLogin = {
        ...values,
        createdAt: date.toLocaleString(),
        key: date
    };
    formAPI.setSubmitting(false)
}
function Auth() {
    return(
        <div className="container">
            <Formik initialValues={{login: '', password: ''}} onSubmit={handleFormSubmit} component={AuthForm}/>
        </div>
    )

}

export default Auth