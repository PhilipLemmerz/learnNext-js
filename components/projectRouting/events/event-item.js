/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classes from './event.module.css'
import Image from 'next/image';

function EventItem(props) {
  const readableDate = new Date(props.eventData.date).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <li className={classes.listItem}>
      <h2> {props.eventData.title}</h2>
      <p> {readableDate}</p>
      <p className={classes.description}> {props.eventData.description}</p>
      <p> {props.eventData.location}</p>
      <Image width={500} height={300} src={`/${props.eventData.image}`} alt={props.eventData.title} />
      {/* Achtung -> Multiple Children Error -> keine Leerzeichen zwischen Link und children des Links */}
      <Link href={`/projectRouting/events/${props.eventData.id}`}><a className={classes.exploreBTN}>explore</a></Link>
    </li>
  )
}


export default EventItem;