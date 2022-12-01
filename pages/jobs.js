import Layout from '../components/layout/layout';
import Filter from '../components/organism/job/filter';
import { InputIcon } from '../components/element/input/input';
import { GoLocation, FaSearch, BsLinkedin, FaHeart } from '../components/Icons';
import Image from 'next/image';
import companyLogo from '../public/image/logo_ms.png';
import Button from '../components/element/button/button';
import styles from '../styles/jobs.module.scss';
import DetailJobs from '../components/organism/job/detailJobs/detailJobs';
import { useState } from 'react';
export default function Jobs(){
    const [detailJobs, setDetailJobs] = useState(false);
    return <Layout>
        <section className={styles.filteredJobs}>
            <div className={styles.searchJobs}>
                <InputIcon classNameContainer={styles.searchJobs__wrapperInput} Icon={FaSearch} placeholder="Search by title, company, skills"/>
                <InputIcon classNameContainer={styles.searchJobs__wrapperInput}  Icon={GoLocation} placeholder="Location" classNameProps={styles.searchJobs__location}/>
            </div>
            <Filter />
        </section>
        <section className={styles.wrapperJobs}>
            <section className={["custom-scrollbar", styles.wrapperJobs__allJobs].join(' ')}>
                <div className={styles.wrapperJobs__job} onClick={() => setDetailJobs(true)}>
                    <Image src={companyLogo} width={39} height={39} alt="company logo"/>
                    <section style={{marginLeft:"8px"}}>
                        <h3>Frontend developer</h3>
                        <p>Microsoft</p>
                        <p>Jakarta, Indonesia(Hybrid)</p>
                        <p className={styles.salary}>Rp7.000.000 - 9.000.000</p>
                    </section>
                </div>
            </section>
            <DetailJobs detailJobs={detailJobs} setDetailJobs={setDetailJobs} />
        </section>
    </Layout>
}