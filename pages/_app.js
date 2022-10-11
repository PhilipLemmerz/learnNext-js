import Layout from '../components/projectRouting/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout> <Component {...pageProps} /> </Layout>
  )
}

export default MyApp
