import Layout from '../components/layout/layout';
import Image from 'next/image';
import ImgProfile from '../public/image/profile.png';
import styles from '../styles/myprofile.module.scss';
import Analytics from '../components/organism/profile/analytics';
import Experience from '../components/organism/profile/experience';
import Skills from '../components/organism/profile/skills';
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter, BsPencilSquare } from '../components/Icons';
import ModalProfile from '../components/organism/profile/modalProfile/modalProfile';
import { useState } from 'react';
export default function Profile(){
    const [showModal, setShowModal] = useState(false);
    return(
        <Layout>
            <section className={styles.myprofile}>
                <div className={styles.myprofile__header}>
                    <Image src={ImgProfile} alt="my_profile" width={150} height={150}  />
                    <div className={styles.header__information}>
                        <div className={styles.information__name}>
                            <h1>
                                Amienul Rana
                                <BsPencilSquare onClick={() => setShowModal(true)}/>
                            </h1>
                        </div>
                        <p className={styles.information__role}>Frontend Developer</p>
                        <p className={styles.information__city}>Medan Kota, North Sumatera, Indonesia</p>
                        <div className={styles.information__sosmed}>
                            <BsGithub />
                            <BsLinkedin />
                            <BsInstagram />
                            <BsTwitter />
                        </div>
                    </div>
                </div>
                <Analytics />
                <Experience />
                <Skills />
                {/* <div className={styles.mycv}>
                    <div className={styles.mycv__add}>
                        <section>
                            <h1>My Cv</h1>
                            <p>Your cv is private</p>
                        </section>
                        <Button background="gradient">Add Cv</Button>
                    </div>
                </div> */}
            </section>
            <ModalProfile showModal={showModal} setShowModal={setShowModal} />
        </Layout>
    )
}