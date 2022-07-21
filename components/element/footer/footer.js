import Logo from '../logo/logo';
import Link from 'next/link';  
import styles from './footer.module.scss';
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <section>
                <Logo />
                <p>Jobqoo adalah sebuah website yang membantu anda mendapatkan pekerjaan impian Anda</p>
            </section>
            <section>
                <h3>Job type</h3>
                <p><Link href="/jobs?type=full time">Full Time</Link></p>
                <p><Link href="/jobs?type=part time">Part Time</Link></p>
                <p><Link href="/jobs?type=contract">Contract</Link></p>
                <p><Link href="/jobs?type=internship">Intership</Link></p>
                <p><Link href="/jobs?type=other">Other</Link></p>
            </section>
            <section>
                <h3>Products</h3>
                <p><Link href="/jobs?type=full time">Find Jobs</Link></p>
                <p><Link href="/jobs?type=part time">Find Company</Link></p>
            </section>
            <section>
                <h3>About us</h3>
                <p><Link href="/jobs?type=full time">What is JobQoo?</Link></p>
                <p><Link href="/jobs?type=part time">Faq</Link></p>
                <p><Link href="/jobs?type=contract">Help</Link></p>
                <p><Link href="/jobs?type=internship">Intership</Link></p>
            </section>
        </footer>
    )
}