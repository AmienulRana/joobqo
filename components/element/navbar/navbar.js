import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Button from '../button/button';
import Logo from '../logo/logo';
import styles from'./navbar.module.scss';
export default function Navbar(){
    const navbarRef = useRef();
    const [isMobile, setMobile] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        if(window.outerWidth < 768){
            setMobile(true);   
        }
        window.addEventListener('resize', (e) => {
            e.target.outerWidth < 768 ? setMobile(true) : setMobile(false)
        })
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
                <li className={styles.navbar__content__login}><Link href="/">Login</Link></li>
            </ul>
            <div className={styles.navbar__authentication}>
                <p className="mr-10 hidden md:block"><Link href="/">Login</Link></p>
                <Button background="gradient" width="90px">Sign up</Button>
            </div>
        </nav>
    )
}