import Link from 'next/link';
import Button from '../button/button';
import Logo from '../logo/logo';
export default function Navbar(){
    return(
        <nav className="px-70px py-5 flex justify-between items-center">
            <Logo />
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