import Layout from '../components/projectRouting/layout/layout'
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, session, pageProps }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
