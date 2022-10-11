
function getStaticPropOnDynamicPages(props) {
    if (!props.products) { // Wenn fallback: true muss die seite erst generiert werden -> das dauert, sofern fallback: nicht 'blocking' (warten bis gebaut ist) muss
        return <p> Loading...</p> // die erste res abgefangen werden und z.B. loading gezeigt werden den props ist noch nicht vorhanden.
    }

    return (
        <div>
            <p> eine Seite die über einen Parameter gerendert wird muss mithilfe von getStaticPath geprerendert werden</p>
            <ul>
                {props.products.map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
        </div>

    )
}

export async function getStaticProps(context) {
    // Wenn wir dynmaische Params haben
    // diese können wir mit dem Kontext Argument extrahieren und dann z.B. bestimmte Daten anhand der Id laden und eine prerenderte Seite returnen
    const { params } = context
    const id = params.id
    // hier normalerweise mit der id produkte dynamisch aus der db laden
    // dann 404 zurückgeben wenn auf dem path keine produkte geladen werden konnten
    
    return {
        props: {
            products: [
                { id: { id }, title: `Title of ${id}` },
                { id: { id }, title: `Title of ${id}` }
            ]
        }
    }
}
// Wir sehen die Seite mit dem Param 2 wird richtig gerendert während der Param 6 als Loading gerendert wird (nicht gut für SEO) -> denn die Seite muss erst gebaut werden 
// da wir für 6 kein prerendering haben
// Bei dynamischen Pfaden müssen wir next.js konkret mitteilen welche Pfade diese Seite annehmen kann damit die Seiten vorgelanden werden können
// die dynamsichen id kann in diesem Fall 0,1,2 annehmen eine andere Alternative Produktid wäre hier nicht vorgehesen.
export async function getStaticPaths() {
    return {
        paths: [ // wird normalerweise durch for Schleifen aus DBs oder FS generiert
            { params: { id: '0' } },
            { params: { id: '1' } },
            { params: { id: '2' } }
        ],
        // durch Fallback erlauben wir next auch andere Params zuzulassen die dann beim besuch durch den unser generiert weden -> macht sinn für produkte oder blog artikel die 
        // seleten besucht werden -> denn prerendering kostet zeit und ressourcen und das ist verschwendung wenn die Seite nicht gut frequentiert ist.
        fallback: true // fallback: 'blocking' ist Alternative -> dann wartet nest bis alles grendert ist -> dafür dauert die Response etwas länger.
    }
}


export default getStaticPropOnDynamicPages;