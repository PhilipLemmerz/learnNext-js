import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";
import classes from "../projectRouting/feedback.module.css";
import { useRef } from 'react';

function SignUp(props) {

    const email = useRef();
    const password = useRef();

    async function submitSignUpHandler(event) {
        event.preventDefault();
        const mailInputRef = email.current.value;
        const passwordInputRef = password.current.value;
        const body = {
            email: mailInputRef,
            password: passwordInputRef
        }
        const response = await fetch('/api/auth/signUp', {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        });
        const resJson = await response.json();
        if (response.ok) {
            // Success Case -> Handle user registration
            console.log(resJson)
        } else {
            // Error Case -> handle Error
            console.log(resJson)
        }
    }

    return (
        <Fragment>
            <AuthNavigation />
            <div className={classes.outerFormDiv}>
                <form onSubmit={submitSignUpHandler}>
                    <div className={classes.formGroup}>
                        <label className={classes.label}> E-Mail</label>
                        <input className={classes.input} ref={email} type="email" />
                    </div>
                    <div className={classes.formGroup}>
                        <label className={classes.label}> Password</label>
                        <input className={classes.input} ref={password} type="password" />
                    </div>
                    <button className={classes.btnSubmit} onClick={props.onSubmit}>signup</button>
                </form>
            </div>
        </Fragment>
    )
}

export default SignUp