import Button from '../../../element/button/button';
import styles from './experience.module.scss';
import Image from 'next/image';
import companyLogo from '../../../../public/image/logo_ms.png';
import ModalAddExperience from './modal';
import { useState } from 'react';
export default function Experience(){
    const [showModal, setShowModal] = useState(false);
    return(
        <div className={styles.experiences}>
            <div className={styles.experiences__add}>
                <h1 style={{marginBottom:'20px'}}>Experince</h1>
                <Button background="gradient" onClick={() => setShowModal(true)}>Add Experience</Button>
            </div>
            <div className={styles.experience}>
                <span className={styles.timeline}></span>
                <div className={styles.detail}>
                    <Image src={companyLogo} width={39} height={39} alt="company logo"/>
                    <h1>Microsoft <span>2019 - 2022 (3 years)</span></h1>
                    <p>Frontend developer</p>
                    <ul>
                        <li>Develop new feature</li>
                        <li>performance maximum speed</li>
                    </ul>
                </div>
            </div>  
        <ModalAddExperience showModal={showModal} setShowModal={setShowModal}/> 
        </div>
    )
}