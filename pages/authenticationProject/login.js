import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";
import { signIn } from "next-auth/react"
import classes from '../projectRouting/feedback.module.css';
import { useRef, useState } from 'react';
import router from 'next/router';
import { getSession } from 'next-auth/react'

function Login(props) {
    const email = useRef();
    const password = useRef();
    const [loggedIn, setLoggedIn] = useState(null);

    async function onSubmitHandler(event) {
        event.preventDefault();
        const mailInputRef = email.current.value;
        const passwordInputRef = password.current.value;
        // singIn ist eine eingebaute nextAuth Funktion die einen login request sendet 
        // redirect ausstellen -> sonst leiten wir im false fall auf eine  404 automatisch weiter !
        // als ergebnis bekommen wir ein Error Objekt im Fehlerfall zurück -> wenn also kein error auf result dann sind wir eingeloggt und können auf geschützte routen wie
        // /member weiterleiten
        const result = await signIn('credentials', {
            redirect: false,
            email: mailInputRef,
            password: passwordInputRef
        });
        if (!result.error) {
            router.replace('/authenticationProject/member');
        } else {
            setLoggedIn(false);
        }
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
                        <input className={classes.input} ref={password} type="password" />
                    </div>
                    <button className={classes.btnSubmit} onClick={props.onSubmit}>login</button>
                </form>
            </div>
            { loggedIn === false && 
                <div className={classes.errorResponseLogin}>
                    <h3>Login failed - please log in with the correct dummy data</h3>
                    <p> email: test@mail.com </p>
                    <p> passwort: tester </p>
                </div>
            }
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Seite soll nicht gerendert werden wenn nutzer eingeloggt ist !
    // in diesem Fall leiten wir direkt auf die Member page weiter
    const session = await getSession({ req: context.req });
    if (session) {
        return {
            redirect: {
                destination: '/authenticationProject/member'
            }
        }
    }
    else {
        return {
            props: {}
        }
    }
}

export default Login