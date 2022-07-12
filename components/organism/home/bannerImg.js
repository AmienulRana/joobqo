import React from 'react'
import Image from 'next/image';
import MsLogo from '../../../public/image/logo_ms.png';
import bannerImg from '../../../public/image/bannerImg.png';
import { MdWork } from '../../Icons';
export default function BannerImg() {
  return (
    <section className="relative">
      <Image src={bannerImg} alt="image banner" />
      <div className="flex justify-center items-center absolute top-8 left-0 flex-col rounded bg-white shadow w-100 h-110">
        <MdWork className="w-10 h-10 text-white bg-orange p-2 rounded-half" />
        <h4 className="font-bold mt-2">5,6k</h4>
        <p className="text-disabled">Job vacancy</p>
      </div>
      <div className="flex justify-between items-center absolute bottom-0 right-0 w-64 rounded py-3 px-4 bg-white shadow">
        <Image src={MsLogo} alt="microsoft logo" />
        <div>
          <h4 className="font-bold">Software Engineering</h4>
          <p className="text-disabled">1 Day ago</p>
        </div>
      </div>
    </section>
  )
}
 