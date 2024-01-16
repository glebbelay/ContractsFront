import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import "../css/auth.css"

function AddComment({ handleDropdownToggle1 }) {
  const [formData, setFormData] = useState({
    user: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle your form submission logic here
    console.log(values);
    handleDropdownToggle1();
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={formData} onSubmit={handleSubmit}>
        <Form className="form">

          <label className="row">Текст</label>
          <Field
            as="textarea"
            className="input"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button className="submit-button" type="submit">
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddComment;