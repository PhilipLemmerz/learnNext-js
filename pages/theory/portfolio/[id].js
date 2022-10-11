import { useRouter } from 'next/router';

function PortfolioProject() {
    const router = useRouter();
    const id = router.query;
    // jetzt können wir zum Beispiel die Produktdaten mit der id aus der DB laden
    return (
        <h1> Das ist das Produkt mit der id: {id.id}</h1>
    )
}

export default PortfolioProject