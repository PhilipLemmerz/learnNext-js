import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";
import { signIn } from 'next-auth/client';
import classes from '../projectRouting/feedback.module.css';
import { useRef } from 'react';

function Login(props) {
    const email = useRef();
    const password = useRef();

    async function onSubmitHandler(event) {
        event.preventDefault();
        const mailInputRef = email.current.value;
        const passwordInputRef = password.current.value;
       
    }

    return (
        <Fragment>
            <AuthNavigation />
            <div className={classes.outerFormDiv}>
                <form onSubmit={onSubmitHandler}>
                    <div className={classes.formGroup}>
                        <label className={classes.label}> E-Mail</label>
                        <input className={classes.input} ref={email} type="text" />
                    </div>
                    <div className={classes.formGroup}>
                        <label className={classes.label}> Password</label>
                        <textarea className={classes.input} ref={password} type="text" />
                    </div>
                    <button className={classes.btnSubmit} onClick={props.onSubmit}>login</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Login