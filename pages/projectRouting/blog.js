import { Fragment } from "react"
import { getAllPosts } from "../../lib/getPosts";
import ReactMarkdown from 'react-markdown'
import Image from "next/image";

function Blog(props) {
    console.log(process.env.envVar1)
    
    console.log(props.data)
    // erstellt ein <Image /> anstelle eines <img> damit proftieren wir von lazyLoading etc trotz Markdown
    // steht alles in der Dokumentation von ReactMarkdown
    const customRenderer = {
        img(image) {
            return <Image width={300} height={200} alt={'test'} src={image.src} />
        }
    }
    return (
        <Fragment>
            {/* mit ReactMarkdown transformieren wir Markdown in jsx */}
            {/* damit wir das standart react <img> tag umwandeln können in ein <Image /> benötigen wir einen */}
            {/* renderer */}
            <ReactMarkdown components={customRenderer}>{props.data[0].content}</ReactMarkdown>        
            
        </Fragment>
    )
}


export async function getStaticProps() {
    // hier triggern wir auf Serverseite das Laden der Posts aus dem File System über unser lib function
    const posts = getAllPosts();
    return {
        props: {
            data: posts
        },
        revalidate: 1800 // wir können die Blogposts alle 1800 Sekunden (30min) updaten wenn wir wollen -> 
        // da wir aber bei einem neuen post die app mit der content speicherung im fs sowieso
        // neu bauen ist die nicht wirklich notwendig.
    }
}

export default Blog