import { getAllEvents } from "../../../dummy-events";
import EventList from "../../../components/projectRouting/events/event-list";
import EventSearch from "../../../components/projectRouting/events/event-search";
import { Fragment } from "react";
import { useRouter } from 'next/router'

function EventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function filterEventHandler(year, month) {
        router.push(`/projectRouting/events/${year}/${month}`);
    }

    return (
        <Fragment>
            <EventSearch onFilter={filterEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export default EventsPage;