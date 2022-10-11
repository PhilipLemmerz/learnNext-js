import EventItem from "./event-item";
import classes from './event.module.css'

function EventList(props) {
    return (
        <ul className={classes.list}>
            {props.items.map((item) => <EventItem key={item.id} eventData={item} />)}
        </ul>
    )
}

export default EventList;