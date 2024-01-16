import React from "react";
import {Formik, Form, Field} from 'formik'
import "../css/auth.css"


function AuthForm(){
    return(
        <div className="container-form">
        <Form className="form">
            <label className="row">Логин</label>
            <Field className="input" name="login" required/>
            <label className="row">Пароль</label>
            <Field className="input" type="password" name="password" required/>
            <button className="submit-button" type="submit">Отправить</button>
        </Form>
        </div>
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