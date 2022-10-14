import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";
import classes from '../projectRouting/feedback.module.css';
import { useRef, useState } from 'react';
import { getSession } from 'next-auth/react'

function ChangePassword(props) {
    const oldPassword = useRef();
    const newPassword = useRef();
    const [passwordChanged, setPasswordChanged] = useState(null);

    async function onSubmitHandler(event) {
        event.preventDefault();
        const oldPasswordInputRef = oldPassword.current.value;
        const newPasswordInputRef = newPassword.current.value;

        const body = {
            oldPassword: oldPasswordInputRef,
            newPassword: newPasswordInputRef
        }

        const response = await fetch('/api/auth/changePassword', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            setPasswordChanged(true);
            console.log(response)
        } else {
            setPasswordChanged(false);
            console.log(response)
        }
    }

    return (
        <Fragment>
            <AuthNavigation />
            <div className={classes.outerFormDiv}>
                <form onSubmit={onSubmitHandler}>
                    <div className={classes.formGroup}>
                        <label className={classes.label}> Old Password</label>
                        <input className={classes.input} ref={oldPassword} type="text" />
                    </div>
                    <div className={classes.formGroup}>
                        <label className={classes.label}> New Password</label>
                        <input className={classes.input} ref={newPassword} type="text" />
                    </div>
                    <button className={classes.btnSubmit} onClick={props.onSubmit}>change Password</button>
                </form>
            </div>
            {passwordChanged &&
                <div className={classes.pswChangedSucceed}>
                    <h3> password change succeeded</h3>
                </div>
            }

            {passwordChanged===false &&
                <div className={classes.errorResponse}>
                    <h3> password change failed</h3>
                </div>
            }
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: '/authenticationProject/login'
            }
        }
    }
    else {
        return {
            props: {}
        }
    }
}

export default ChangePassword