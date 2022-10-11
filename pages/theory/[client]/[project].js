import { useRouter } from "next/router";

// Demonstriert das wir dynamische Ordner mit ids erstellen können die dann wiederum dynamische Seiten enthalten
function ProjectOfClient() {
    const router = useRouter();
    const client = router.query.client;
    const project = router.query.project;

    return (
        <div>
            <h2> Page of Client:<em>{client}</em></h2>
            <p> The project is: <em> {project}</em></p>
        </div>
    )

}

export default ProjectOfClient