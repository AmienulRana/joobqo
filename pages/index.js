import BannerImg from '../components/organism/home/bannerImg';
import Category from '../components/organism/home/category';
import Layout from '../components/layout/layout';
import Tagline from '../components/organism/home/tagline';
import { useState } from 'react';
import Modal from '../components/element/modal/modal';
import HowToApply from '../components/organism/home/howToApply';
import SuccessHired from '../components/organism/home/successHired';
import Subscribe from '../components/organism/home/subscribe';
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
      <Layout title="Home">
        <section className="flex items-center">
          <Tagline  />
          <BannerImg  />
        </section>
        <section className="mt-70px">
          <Category />
        </section>
        <section className="mt-70px flex items-center">
          <SuccessHired setShowModal={setShowModal}/>
          <HowToApply />
        </section>
        <section className="mt-70px md:h-52 bg-gradient w-full rounded-lg flex flex-col justify-center items-center">
          <Subscribe />
        </section>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Layout>
  )
}
