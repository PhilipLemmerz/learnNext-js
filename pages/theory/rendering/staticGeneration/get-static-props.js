
function getStaticProperties(props) {
    return (
        <div>
            <p> Durch die Methode getStaticProps wird die Daten geladen bevor die Page gerendert wird und der Content ist im HTML enthalten</p>
            <p> Dieses Vorgehen ist Standard in next.js</p>
            <ul>
                {props.products.map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
        </div>

    )
}

export async function getStaticProps(context) {
    // All dieser Code wird ausgeführt bevor die Component gerendert wird.
    // diese Funktionen wird bevor die Seite zurückgeschickt wird an den Client ausgeführt
    // hier können wir daten laden umwandeln und sogar mit geheimen Credentials arbeiten, denn der Code dieser Funktion ist nie sichtbar auf Client Site
    // Sobald hier alles erledigt wurde wird die Page erstellt und ordnetlich mit den Daten gerendert und an den Client gesendet -> gut für SEO
    // wird ausgeführt wenn wir die Seite bauen also bei npm run build nicht wenn der Client beim Server anfragt.
    // wenn wir die revalidate Property setzen, dann wird die Seite nach dem eingestellten Zeitwert neu gerendert und aktualisiert.
    // die Funktion muss ein Object mit dem dem props Key returnen !!!
    // Gute Methode für Statische Seiten denn wir müssen die Seite rebuilden um die preloading Daten zu ändern
    return {
        props: {
            products: [{ id: 'p1', title: 'product 1' }, { id: 'p2', title: 'product 2' }]
        },
        // Diese Property gibt an in welchem Zeitabstand die initial zurückgegebene Seite neu gerendert werden soll -> Sinnvoll bei dynamischen Seiten die sich häufig ändern.
        // Dadurch haben wir eine prerendert Page die trotzdem immer up to date ist.
        revalidate: 50, //Sekunden
        // notFound: true -> durch diese Property können wir eine 404 zurückgeben, da z.B. keine Daten geladen werden konnten
        // redirect: { // -> können den User direkt weiterleiten
        // destination: '/targetPage'
        // }
    }
}


export default getStaticProperties;