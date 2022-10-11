import Link from 'next/link';
import { useRouter } from 'next/router';
// das ist wie wir in nexr verlinken -> es wird kein Http Request gesendet -> mit a href senden wir einen neuen httpReq aber dann wird die app neu geladen und der state
// geht verloren.
// Es gibt zahlreiche propertys auf LINK wie replace (dann können wir nicht zurücknavigieren usw.)

function TheoryPage() {

    const clients = [{ _id: 0, name: 'Peter' }, { _id: 1, name: 'Philip' }];
    const router = useRouter();

    function navigateAboutHandler() {
        // hier routen wir programmatisch -> mit router.replace können wir nicht zurück
        router.push('theory/about')
    }

    return (
        <div>
            <ul>
                <li>  <Link href="theory/about"> to about page</Link> </li>
                <li> <Link href="theory/blog/2012/08"> blog - Link that stores whole path  </Link></li>
                <li> <Link href="theory/portfolio/"> portfolio root Page  </Link></li>
                <li> <Link href="theory/portfolio/param"> blog - Link that stores param </Link></li>
            </ul>
            <h3> Client Navigation with Loops</h3>
            <ul>
                {/* Hier loopen wir durch ein Objekt und setzen die Links entsprechend */}
                {clients.map((client) => (
                    <li key={client._id}>
                        <Link href={`theory/client/${client.name}`}>{client.name}</Link>
                    </li>
                ))}
            </ul>
            <h3> Navigate programmaticly</h3>
            <button onClick={navigateAboutHandler}> zu about</button>

            <hr></hr>
            <h4> Static-Generation Rendering </h4>
            <Link href="/theory/rendering/staticGeneration/get-static-props"><button>getStaticProps()</button></Link>
            <Link href="/theory/rendering/staticGeneration/0"><button>getStaticPaths()</button></Link>
            <hr></hr>
            <h4> Server Side Rendering </h4>
            <Link href="/theory/rendering/serverSideRendering/serverSide-props"><button>getServerSideProps()</button></Link>
        </div>
    )
}

export default TheoryPage