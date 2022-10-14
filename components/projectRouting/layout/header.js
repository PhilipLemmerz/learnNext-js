import Link from "next/link";
import classes from './header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div>
                <Link href="/projectRouting"><h4> Router-Project</h4></Link>
            </div>
            <nav className={classes.navigation}>
                <Link href="/projectRouting/events"><a className={classes.link}> All Events </a></Link>
                <Link href="/projectRouting/feedback"><a className={classes.link}> Feedback </a></Link>
                <Link href="/projectRouting/blog"><a className={classes.link}> Blog </a></Link>
                <Link href="/projectRouting/portal"><a className={classes.link}> Portal </a></Link>
            </nav>
        </header>
    )
}

export default Header;