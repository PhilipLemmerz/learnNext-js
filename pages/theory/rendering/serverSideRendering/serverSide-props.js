
function ServerSideRendering(props) {
    const { username } = props;
    return (
        <h4> Hello {username}</h4>
    )
}

export async function getServerSideProps(context) {
    // Diese Funktion läuft für jeden Request durch nicht einmalig beim ersten request wie StaticGeneration oder alle 10 Sekunden durch das Intervall sondern für jeden einzelnen 
    // Request -> dies ist nötig, wenn wir auf Cookies und Local Storage des Users zugreifen müssen z.B.
    // Diese Beispiel ist konstruiert da wir nicht auf cookies zugreifen etc.
    // mit Server Side Props brauchen wir keine getStaticPath() Method den es wird für jeden req auf ServerSide eine Seite generiert und zurückgeschickt. Es müssen also keine Seiten
    // vorgefertigt werden und getStaticPath() ist in getServerSideProps() sozusagen inkludiert

    const { params, req, res } = context;
    // hier können wir mit dem Requst arbeiten (Authentication) und auch Headers zur Res hinzufügen etc. (Wie in Node.js)

    return {
        props: {
            username: 'Max'
        }
    }
}

export default ServerSideRendering