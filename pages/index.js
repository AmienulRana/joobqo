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
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Layout>
  )
}
