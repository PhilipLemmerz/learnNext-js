import { Fragment } from "react";
import Header from "./header";
// Die Layout Componente wird in _app.js um die Component App gelegt und damit wird die app die wir haben dort wo wir props.children eingebunden haben eingebaut.
// Damit haben wir auf jeder Seite den Header und wenn wir ihn schreiben auch den Footer
function Layout(props) {
    return (
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    )
}

export default Layout;