import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";
import classes from "../projectRouting/feedback.module.css";
import { useRef } from 'react';

function SignUp(props) {
    const email = useRef();
    const password = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        const mailInputRef = email.current.value;
        const passwordInputRef = password.current.value;
        const body = {
            email: mailInputRef,
            password: passwordInputRef
        }
        fetch('/api/auth/signUp', {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then(res => {
            console.log(res)
            if (res.ok) {
                return res.json()
            }
        }).then(data => {
            console.log(data)
        })
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
                    <button className={classes.btnSubmit} onClick={props.onSubmit}>signup</button>
                </form>
            </div>

        </Fragment>
    )
}

export default SignUp