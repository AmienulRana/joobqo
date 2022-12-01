import BannerImg from '../components/organism/home/bannerImg/bannerImg';
import Category from '../components/organism/home/category';
import Layout from '../components/layout/layout';
import Tagline from '../components/organism/home/tagline/tagline';
import { useState } from 'react';
import Modal from '../components/element/modal/modal';
import HowToApply from '../components/organism/home/howToApply';
import SuccessHired from '../components/organism/home/successHired';
import Subscribe from '../components/organism/home/subscribe/subscribe';
import styles from '../styles/home.module.scss';
import Button from '../components/element/button';
import { BsWhatsapp, BsLinkedin, BsGithub} from '../components/Icons';



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
      <Layout title="Home">
        <section className={styles.banner}>
          <Tagline  />
          <BannerImg  />
        </section>
        <section className="mt-70">
          <Category />
        </section>
        <section className={styles.tutorial}>
          <SuccessHired setShowModal={setShowModal} />
          <HowToApply />
        </section>
        <section className={styles.subscribe}>
          <Subscribe />
        </section>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className={styles.profile}>
                <h2>Hire Me!</h2>
                <div className={styles.img}></div>
                <div className={styles.social_media_profile}>
                    <a href="https://wa.me/085260298204" target="_blank" rel="noreferrer">
                        <BsWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/amienul-rana-704681218/" rel="noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/AmienulRana" target="_blank" rel="noreferrer">
                        <BsGithub />
                    </a>
                </div>
          </div>
          <Button background="gradient" width="80%">
              <a href="../../../cv_amienul_rana.pdf" attributes-list download>Download CV</a>
          </Button>
        </Modal>
      </Layout>
  )
}
