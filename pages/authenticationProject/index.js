import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";

function AuthHomePage() {
    return (
        <Fragment>
            <AuthNavigation />
            <h1>
                Our StartPage
            </h1>
        </Fragment>
    )
}

export default AuthHomePage