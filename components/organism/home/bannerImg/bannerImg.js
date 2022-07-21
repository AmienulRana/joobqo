import React from 'react'
import Image from 'next/image';
import MsLogo from '../../../../public/image/logo_ms.png';
import bannerImg from '../../../../public/image/bannerImg.png';
import { MdWork } from '../../../Icons';
import styles from './bannerImg.module.scss';
export default function BannerImg() {
  return (
    <section className={styles.bannerImg}>
      <Image src={bannerImg} alt="image banner"/>
      <div className={styles.bannerImg__jobInfo}>
        <MdWork />
        <h4 className="font-bold mt-2">5,6k</h4>
        <p className="text-disabled">Job vacancy</p>
      </div>
      <div className={styles.bannerImg__jobHiring}>
        <Image src={MsLogo} alt="microsoft logo" />
        <div>
          <h4>Software Engineering</h4>
          <p>1 Day ago</p>
        </div>
      </div>
    </section>
  )
}
 