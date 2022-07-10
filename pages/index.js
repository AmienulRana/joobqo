import BannerImg from '../components/organism/home/bannerImg';
import Layout from '../components/layout/layout';
import styles from '../styles/Home.module.scss';
import Tagline from '../components/organism/home/tagline';
import { useState } from 'react';
import ImgSuccess from '../public/image/imgSucces.png';
import profile from '../public/image/profile.png';
import Image from 'next/image';
import Button from '../components/element/button/button';
import Modal from '../components/element/modal/modal';



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
      <Layout title="Home">
        <section className={styles.home}>
          <section className={styles.wrapperBanner}>
            <Tagline styles={styles} />
            <BannerImg styles={styles} />
          </section>
          <section className={styles.tutorial}>
            <div className='relative'>
              <section className={styles.profile}>
                <Image src={profile} />
                <h4>Amienul Rana</h4>
                <p>FE Dev</p>
                <Button onClick={() => setShowModal(true)} text="Hire me" width="100%" background="gradient" />
              </section>
              <Modal showModal={showModal} setShowModal={setShowModal} />
              <Image src={ImgSuccess} width={360} height={430} />
            </div>
          </section>
        </section>
      </Layout>
  )
}
