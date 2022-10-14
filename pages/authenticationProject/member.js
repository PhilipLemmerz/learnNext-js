import { Fragment } from "react";
import AuthNavigation from "../../components/projectRouting/layout/navigationAuth";
import { useSession, getSession } from 'next-auth/react';
import router from 'next/router';

function MemberPage() {
    const { data: session, status } = useSession();

    function redirectPSWChange() {
        router.replace('/authenticationProject/changePassword')
    }

    return (
        <Fragment>
            <AuthNavigation />
            {/* wird angezeigt wenn Nutzervalidierung läuft */}
            {status === 'loading' &&
                <h1>
                    Loading---
                </h1>
            }
            {/* wird angezeigt wenn Nutzeranmeldung bestätigt ist */}
            {session && status !== 'loading' &&
                <div>
                    <h1> Our Member Page</h1>
                    <button onClick={redirectPSWChange}> Password ändern</button>
                </div>
            }
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Hier schützen wir die Route auf Serverside -> wenn keine valide Session redirecten wir zu login
    // Alternativ zum Approach oben wo wir den Inhalt der Seite nur anzeigen wenn Session aktuv ist
    // Dieser Approach mit ServerSideProps ist aber besser
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

export default MemberPage