import Logo from '../logo/logo';
import Link from 'next/link';  
export default function Footer(){
    return(
        <footer className="py-5 px-16 mt-70px flex justify-between flex-wrap">
            <section className="w-1/5">
                <Logo />
                <p className="text-disabled mt-2">Jobqoo adalah sebuah website yang membantu anda mendapatkan pekerjaan impian Anda</p>
            </section>
            <section className="w-1/5">
                <h1 className="text-xl mb-2 font-bold">Job type</h1>
                <p className="text-disabled"><Link href="/jobs?type=full time">Full Time</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=part time">Part Time</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=contract">Contract</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=internship">Intership</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=other">Other</Link></p>
            </section>
            <section className="w-1/5">
                <h1 className="text-xl mb-2 font-bold">Products</h1>
                <p className="text-disabled"><Link href="/jobs?type=full time">Find Jobs</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=part time">Find Company</Link></p>
            </section>
            <section className="w-1/5">
                <h1 className="text-xl mb-2 font-bold">About us</h1>
                <p className="text-disabled"><Link href="/jobs?type=full time">What is Jobqo?</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=part time">Faq</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=contract">Help</Link></p>
                <p className="text-disabled"><Link href="/jobs?type=internship">Intership</Link></p>
            </section>
        </footer>
    )
}