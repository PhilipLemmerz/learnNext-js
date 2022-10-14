import Link from 'next/link';
import classes from './header.module.css'

function AuthNavigation() {
    return (
        <header className={classes.headerAuth}>
            <nav className={classes.navigation}>
                <Link href="/authenticationProject"><a className={classes.link}> Start </a></Link>
                <Link href="/authenticationProject/login"><a className={classes.link}> Login </a></Link>
                <Link href="/authenticationProject/signUp"><a className={classes.link}> SignUp </a></Link>
            </nav>
        </header>
    )
}

export default AuthNavigation;

