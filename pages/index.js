import Link from "next/link"
import Head from "next/head"

function HomePage() {

    return (
        <div>
            {/* Header für SEO machen */}
            <Head>
                <title> Our Next.js App</title>
                <meta name="description" content="Our Description of our next.js App" />

            </Head>
            <h1> Sektionen in der Learning Next.js App </h1>
            <div className="projectsSelection">
                <div className="theorySection">
                    <h3><Link href="/theory"> Theory </Link> </h3>
                </div>
                <div className="routingProject">
                    <h3><Link href="/projectRouting"> Routing Project </Link> </h3>
                </div>
                <div className="authProject">
                    <h3><Link href="/authenticationProject"> Auth Project </Link> </h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage