/* eslint-disable react-hooks/exhaustive-deps */
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useEffect, useState } from 'react'

function MyPortal() {
    // damit wir das Portal erst rendern beim zweiten request wo der DOM vorhanden ist 
    // da sonst Document undefiend ist
    const [rendered, setRendered] = useState(false)
    useEffect(() => setRendered(true))

    if(rendered) {
        return ReactDOM.createPortal(
            <Fragment>
                <div>
                <h3>React Portals</h3>
                <p> Wir binden ein DOM Element in _document.js ein und rendern dort Content ein den wir
                    jedoch irgendwo in der App schreiben
                </p>
                <p> Dieser Code wird im Div gerendert das wir als Selektor im 2 Argument angeben</p>
                <p> Dieses Div befindet sich in _document.js</p>
                </div>               
            </Fragment>,
            // wird in das div Portal reingerendert das in _document.js definiert ist.
            document.getElementById('portal')
        )
    }
}


export default MyPortal