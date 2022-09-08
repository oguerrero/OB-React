import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is Required'),
    password: Yup.string().required('Password is required')
})

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h1>Log In</h1>
            <Formik
                // Initial Data
                initialValues={initialCredentials}
                // YUP validation Schema
                validationSchema={loginSchema}
                // onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                    localStorage.setItem('credentials', values)
                }}>
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => (
                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field
                            id='email'
                            name='email'
                            placeholder='example@example.com'
                            type='email'
                        />
                        {/* Email Errors */}
                        {errors.email && touched && (
                            <ErrorMessage component='div' name='email' />
                        )}
                        <label htmlFor='password'>Password</label>
                        <Field
                            id='password'
                            name='password'
                            placeholder='password'
                            type='password'
                        />
                        {/* Password Errors */}
                        {errors.password && touched && (
                            <ErrorMessage component='div' name='password' />
                        )}
                        <button type='submit'>Submit</button>
                        {isSubmitting ? <p>Login your credentials</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginFormik
