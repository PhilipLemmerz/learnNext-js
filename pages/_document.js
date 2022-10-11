import Document, { Html, Head, Main, NextScript } from "next/document";
// In _document.js können wir eine eigene HTML Struktur definieren.
// hier haben wir zum beispiel das lang tag auf de gesetzt und ein <div> eigesetzt das außerhalb der eingebundenen app liegt (#externalDiv)

class MyDocument extends Document {
    render() {
        return (
            <Html lang="de">
                <Head />
                <body>
                    <div id="externalDiv"> </div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;