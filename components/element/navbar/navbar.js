import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Button from '../button/button';
import Logo from '../logo/logo';
import { CgMenuRightAlt }  from '../../Icons';
export default function Navbar(){
    const navbarRef = useRef();
    const [isMobile, setMobile] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        if(window.innerWidth > 768){
            setMobile(false);   
        }
        window.addEventListener('resize', (e) => {
            e.target.innerWidth < 768 ? setMobile(true) : setMobile(false)
        })
        window.addEventListener('click', (e) => {
            if(e.target !== navbarRef.current){
                setShowNavbar(false);
            }
        })
    }, [])
    const styleMobile = ['absolute top-16 -left-full rounded-lg  h-48 py-4 w-11/12 bg-white shadow-lg flex-col items-center'].join(' ');
    return(
        <nav className="lg:px-70px px-4 py-5 flex justify-between items-center relative">
            <Logo />
            <ul className={["flex justify-between", isMobile && styleMobile].join(' ')} ref={navbarRef}>
                <li className="active md:mr-10 w-max"><Link href="/">Home</Link></li>
                <li className="md:mr-10 w-max"><Link href="/">Jobs</Link></li>
                <li className="md:mr-10 w-max"><Link href="/">Company</Link></li>
                <li className="md:hidden"><Link href="/">Login</Link></li>
            </ul>
            <div className="flex items-center">
                <p className="mr-10 hidden md:block"><Link href="/">Login</Link></p>
                <Button background="gradient" width="90px">Sign up</Button>
                {/* <CgMenuRightAlt className="text-main-color lg:hidden text-2xl ml-2" /> */}
            </div>
        </nav>
    )
}