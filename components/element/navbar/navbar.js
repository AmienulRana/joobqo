import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Button from '../button/button';
import Logo from '../logo/logo';
import styles from'./navbar.module.scss';
import { FaUserCircle, IoNotifications } from '../../Icons';
export default function Navbar(){
    const navbarRef = useRef();
    const [showNavbar, setShowNavbar] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(e.target !== navbarRef.current){
                setShowNavbar(false);
            }
        })
    }, [])
    return(
        <nav className={styles.navbar}>
            <Logo />
            <ul className={[styles.navbar__content].join(' ')} ref={navbarRef}>
                <li className="active"><Link href="/">Home</Link></li>
                <li><Link href="/jobs">Jobs</Link></li>
                <li><Link href="/">Company</Link></li>
                <li className={styles.navbar__content__login}><Link href="/login">Login</Link></li>
            </ul>
            {isLogin ? 
                <div className={styles.navbar__authentication}>
                    <IoNotifications />
                    <Link href="/profile"><FaUserCircle className={styles.navbar__authentication_profile}/></Link>
                </div>
                : 
                <div className={styles.navbar__authentication}>
                    <p><Link href="/login">Login</Link></p>
                    <Button background="gradient" width="90px">Sign up</Button>
                </div>
            }
        </nav>
    )
}