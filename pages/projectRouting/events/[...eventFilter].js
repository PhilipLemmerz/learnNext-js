// bei einem Paramter wird die id route geladen (also events/param) und bei mehreren die filter Route (also events/2012/08)
import { getFilteredEvents } from '../../../dummy-events';
import { useRouter } from 'next/router';
import EventList from '../../../components/projectRouting/events/event-list';

function EventsFilterPage() {
    const router = useRouter();
    const queryData = router.query.eventFilter;

    // Achtung React spezifisch -> die Component wird 2 mal gerendert und beim erstenmal stehen die querys noch nicht zur Verfügung
    // deswegen abfangen und loading... anzeigen.
    if (!queryData) {
        return (
            <p> Loading...</p>
        )
    }

    const year = queryData[0];
    const month = queryData[1];
    const numYear = +year
    const numMonth = +month


    if (isNaN(numMonth) || isNaN(numYear)) {
        return <p> invalid filter Values</p>
    }

    const events = getFilteredEvents({ year: numYear, month: numMonth });

    if (events.length === 0) {
        return (
            <p> No Events found</p>
        )
    }

    return (
        <EventList items={events} />
    )
}

export default EventsFilterPage;