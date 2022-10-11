// können wir natürlich auch mit function handler(req, res) {} schreiben 
const handler = (req, res) => {
    if(req.method === "POST") {
        console.log(req.body)
        // hier wird dann wie in node das Feedback in einer DB gespeichert oder das senden einer email getriggert.
        return res.status(200).json({
            message: 'feedback erfolgreich gespeichert'
        })
    }    
}

// Das ist eigentlich eine get Route die wir aber nicht über http Ansprechen mit einem Request
// Denn wenn wir unser Dummy Feedback brauchen in z.B. der Page feedback dann importieren wir die Funktion und führen Sie in getStaticProps (Serverseitig) aus 
// danach rendern wir die Seite mit den Daten 
export function getDummyFeedback() {
    return {
        email: 'test@mail.com',
        feedback: 'Our dummy Feedback'        
    }
}

export default handler