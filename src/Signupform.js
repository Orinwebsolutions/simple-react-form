import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const validate = (values) => {
    const error = {};

    if (!values.firstname) {
      error.firstname = "Required";
    } else if (values.firstname.length > 15) {
      error.firstname = "Charactors should be less than 15";
    }

    if (!values.lastname) {
      error.lastname = "Required";
    } else if (values.lastname.length > 15) {
      error.lastname = "Charactors should be less than 15";
    }
    if (!values.email) {
      error.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = "Invalid email address";
    }
    return error;
  };
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='container'>
      <div className='row'>
        <h2 className="text-center m-3">Basic Form</h2>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
              <label>First Name</label>
              <input
                id='firstname'
                name='firstname'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.firstname}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {(formik.touched.firstname && formik.errors.firstname)?formik.errors.firstname : null}
            </div>
            <div className='form-group'>
              <label>Last Name</label>
              <input
                id='lastname'
                name='lastname'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.lastname}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {(formik.touched.lastname && formik.errors.lastname)?formik.errors.lastname : null}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {(formik.touched.email && formik.errors.email)?formik.errors.email : null}
            </div>

            <button className="btn btn-primary justify-con mt-2" type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
