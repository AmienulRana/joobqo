import React from 'react'
import Image from 'next/image';
import MsLogo from '../../../public/image/logo_ms.png';
import bannerImg from '../../../public/image/bannerImg.png';
import { MdWork } from '../../Icons';
import styles from './styles/bannerImg.module.scss';
export default function BannerImg() {
  return (
    <section className={styles.bannerImg}>
      <Image src={bannerImg} />
      <div className={styles.jobVacancy}>
        <MdWork />
        <h4>5,6k</h4>
        <p>Job vacancy</p>
      </div>
      <div className={styles.jobHiring}>
        <Image src={MsLogo} />
        <div>
          <h4>Software Engineering</h4>
          <p>1 Day ago</p>
        </div>
      </div>
    </section>
  )
}
 