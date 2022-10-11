import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../../dummy-events';
import EventSummary from '../../../components/projectRouting/events/event-detail/event-summary';
import EventLogistics from '../../../components/projectRouting/events/event-detail/event-logistics';
import EventContent from '../../../components/projectRouting/events/event-detail/event-content';
import Head from 'next/head';


function EventsDetailPage() {
    const router = useRouter()
    const id = router.query.eventId;

    const event = getEventById(id);
    console.log(event)

    if(!event) {
        return(
            <p> Kein Event gefunden</p>
        )
    }
    return (
        // Anstelle von Fragment ginge auch ein globales <DIV> als übergeordnetes Element
       <Fragment> 
        <Head>
            {/* Im Head können wir auch dynamische Werte setzen */}
            <title>{event.title}</title> 
        </Head>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent> <p>{event.description}</p> </EventContent> 
       </Fragment>
    )
}

export default EventsDetailPage;