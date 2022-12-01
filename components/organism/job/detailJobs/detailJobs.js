import styles from './detailJobs.module.scss';
import Image from 'next/image';
import Button from '../../../element/button/button';
import { FaHeart, BsLinkedin, RiArrowLeftSLine} from '../../../Icons';
import companyLogo from '../../../../public/image/logo_ms.png';
export default function DetailJobs({ detailJobs, setDetailJobs}){
    return(
        <section className={[styles.wrapperJobs__detailJobs, 'custom-scrollbar', detailJobs && styles.wrapperJobs__detailJobs_active].join(' ')}>
            <div className={styles.wrapperJobs__detailJobs_header}>
                <RiArrowLeftSLine onClick={() => setDetailJobs(false)}/>
                <p>Microsoft</p>
            </div>
            <Image src={companyLogo} width={59} height={59} alt="company logo"/>
            <h2>Frontend developer</h2>
            <p>Microsoft, Jakarta Indonesia (Hybrid)</p>
            <p className={styles.salary}>Rp7.000.000 - 9.000.000</p>
            <div className={styles.wrapperJobs__detailJobs__apply}>
                <Button background="gradient">Apply now</Button>
                <Button><FaHeart />Save</Button>
                <Button><BsLinkedin/>Apply in Linkedin</Button>
            </div>
            <section>
                <h4>Responsibility :</h4>
                <ul>
                    <li>Create New feature for web app</li>
                    <li>Create reusable code for future use</li>
                </ul>
            </section>
            <section>
                <h4>Requirement :</h4>
                <ul>
                    <li>Familiarity with Agile development teams, processes and CI/CD environments and tooling.</li>
                    <li>Experience with JavaScript, CSS and jQuery and third partly libraries & APIs.</li>
                </ul>
            </section>
            <section>
                <h4>About company :</h4>
                <article>
                    We are continuously seeking mutually beneficial business
                    opportunities that create synergies, building alliances and 
                    strengthening our supporting businesses with and through our
                    subsidiaries, notably Mandiri Sekuritas in investment banking, 
                    AXA Mandiri Financial Services in insurance, Bank Syariah Mandiri 
                    in Sharia banking, Bank Sinar Harapan Bali in micro banking, and Mandiri
                    Tunas Finance in multi-finance. In 2011, Bank Mandiri acquired Mandiri AXA 
                    General Insurance (MAGI), a joint-venture between Bank Mandiri and AXA Societe
                    Anonyme, to strengthen Bank Mandiri's penetration into the general insurance business. With various subsidiaries that 
                    support our businesses, we have further strengthened our position as a prominent financial 
                    holdings institution in Indonesia.
                </article>
            </section>
        </section>
    )
}