import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './style.module.css';

const LoginValidation = (props) => {
    const {handleSubmitToFormik,initialState}=props;
    return (
        <>
        <main>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <section className={styles.header}>
                    <img src='./images/logo.webp'/>
                    <button>Signup</button>
                </section>
                <Formik
                initialValues={initialState}
                onSubmit={handleSubmitToFormik()}>
                    {(formikProps)=>{
                        console.log(formikProps);
                        return(
                            <Form >
                                <div className={styles.form}>
                                <h2 className={styles.title}>LOGIN TO YOUR ACCOUNT</h2>
                                <Field name='email' placeholder='Email address' className={styles.inputValue}/>
                                <ErrorMessage name='email'/>
                                <Field name='password' placeholder='Password' className={styles.inputValue}/>
                                <ErrorMessage name='password'/>
                                <div className={styles.notification}>
                                    <label>
                                        <Field type='checkbox' name='checkbox'/>
                                        Remember Me
                                    </label>
                                    <ErrorMessage name='checkbox'/>
                                    <a href='#' className={styles.forgotPass}>Forgot password</a>
                                </div>
                                <button type='submit' className={styles.loginButton}>LOGIN</button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
               
                
            </div> 
            </div>
                <div style={{margin:'10px 0px 60px 0px'}}>
                    <a href='#'className={styles.footer}><span>Sign with Google</span></a>   
                </div>   
        </main>
        
        </>
    );
}

export default LoginValidation;
