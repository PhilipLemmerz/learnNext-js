import { Fragment } from "react"
import { useRef } from 'react';
import classes from "./feedback.module.css";
import { getDummyFeedback } from '../api/feedback';
import { useState } from 'react'

function Feedback(props) {
    const [paramData, setParamData] = useState('');
    const mail = useRef();
    const feedback = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        const mailInputRef = mail.current.value;
        const feedbackInputRef = feedback.current.value;
        const body = {
            email: mailInputRef,
            feedback: feedbackInputRef
        }
        fetch('/api/feedback', {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    function sendParam(param) {
        fetch(`/api/${param}`, {
            method: "GET"
        }).then(res => res.json()).then(data => {
            setParamData(data)
        })
    }

    return (
        <Fragment>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.formGroup}>
                    <label className={classes.label}> E-Mail</label>
                    <input className={classes.input} ref={mail} type="text" />
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label}>  Feedback</label>
                    <textarea className={classes.input} ref={feedback} type="text" />
                </div>
                <button className={classes.btnSubmit} onClick={props.onSubmit}>senden</button>
            </form>

            <hr></hr>
            <h4> Our Dummy Feedback loaded form Server </h4>
            <div>
                <p> {props.data.email}</p>
                <p> {props.data.feedback}</p>
            </div>
            <hr></hr>
            <h4> Extract Param form dynamic api-url</h4>
            {/* mit bind Param können wir einen Parameter übergeben der aber erst dann übergeben wird wenn die Funktion executed wird */}
            <button onClick={sendParam.bind(this, 'test')}> get param</button>
            {paramData && <p> {paramData.id}</p>}
        </Fragment>
    )
}

export async function getStaticProps() {
    // Wir können in dieser Methode direkt auf unsere API zugreifen oder unsere API ansprechen denn dieser Code wird ja auch auf der Server Seite ausgeführt.
    // Die Imports oben vom API kommen nicht in das Client Code Bundle -> next.js erkennt auf welcher Seite (Server oder Client) der Code eingebaut wurde.
    const dummyFeedback = getDummyFeedback();
    return {
        props: {
            data: dummyFeedback
        }
    }
}

export default Feedback