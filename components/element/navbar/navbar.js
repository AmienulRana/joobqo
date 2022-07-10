import styles from './navbar.module.scss';
import Link from 'next/link';
import Button from '../button/button';
export default function Navbar(){
    return(
        <nav className={styles.Navbar}>
            <h3 className={styles.Brand}>Job<span>Qoo</span></h3>
            <ul>
                <li className="active"><Link href="/">Home</Link></li>
                <li><Link href="/">Jobs</Link></li>
                <li><Link href="/">Company</Link></li>
            </ul>
            <div className={styles.Authentication}>
                <p><Link href="/">Login</Link></p>
                <Button text="Sign up"/>
            </div>
        </nav>
    )
}