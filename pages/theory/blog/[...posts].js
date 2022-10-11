import { useRouter } from "next/router";
// hier extrahieren wir nicht nur den letzten pfad sondern alle pfade bis zu dem in dem [...name] eingebunden ist also z.B. bei blog/2022/12/03 wäre das [2022, 12, 03].
// die querys werden in einem Array wie oben gespeichert.
function Posts2022() {
    const route = useRouter();
    const fullPath = route.query;
    console.log(fullPath);

    return (
        <h1> Der gesamte Pfad ist: <em> {fullPath.posts[0]} </em> / <em> {fullPath.posts[1]} </em> </h1>
    )
}

export default Posts2022