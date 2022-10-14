import Link from 'next/link';
import classes from './header.module.css'
import { useSession, signOut } from 'next-auth/react'

function AuthNavigation() {
    const { data: session, status } = useSession();
    console.log(session, status)

    function logout() {
        signOut();
    }
    return (
        <header className={classes.headerAuth}>
            <nav className={classes.navigation}>
                <Link href="/authenticationProject"><a className={classes.link}> Start </a></Link>
                {session && <Link href="/authenticationProject/member"><a className={classes.link}> Member </a></Link>}
                {!session && <Link href="/authenticationProject/login"><a className={classes.link}> Login </a></Link>}
                <Link href="/authenticationProject/signUp"><a className={classes.link}> SignUp </a></Link>
                {session && <button onClick={logout}> logout </button>}
            </nav>
        </header>
    )
}

export default AuthNavigation;

