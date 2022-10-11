import { getFeaturedEvents } from '../../dummy-events';
import ListEvents from '../../components/projectRouting/events/event-list';

function ProjectRoutingHome() {
    return (
        <ListEvents items={getFeaturedEvents()} />
    )
}

export default ProjectRoutingHome;