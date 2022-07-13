import styles from './navbar.module.scss';
import Link from 'next/link';
import Button from '../button/button';
export default function Navbar(){
    return(
        <nav className="px-70px py-5 flex justify-between items-center">
            <h3 className="text-3xl font-bold">Job<span className="text-main-color">Qoo</span></h3>
            <ul className="flex justify-between">
                <li className="active mr-10"><Link href="/">Home</Link></li>
                <li className="mr-10"><Link href="/">Jobs</Link></li>
                <li className="mr-10"><Link href="/">Company</Link></li>
            </ul>
            <div className="flex items-center">
                <p className="mr-10"><Link href="/">Login</Link></p>
                <Button background="gradient" width="90px">Sign up</Button>
            </div>
        </nav>
    )
}