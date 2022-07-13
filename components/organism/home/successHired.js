import ImgSuccess from '../../../public/image/imgSucces.png';
import profile from '../../../public/image/profile.png';
import Image from 'next/image';
import Button from '../../element/button/button';
export default function SuccessHired({ setShowModal }){
    return(
    <div className="relative">
        <section className="flex justify-between items-center flex-col h-40 py-5 px-2.5 rounded-lg z-10 bg-white absolute left-0 top-7 shadow">
            <Image src={profile} alt="my profile"/>
            <h4>Amienul Rana</h4>
            <p className="text-disabled">FE Dev</p>
            <Button onClick={() => setShowModal(true)} width="100%" background="gradient">
                Hire Me
            </Button>
        </section>
        <Image src={ImgSuccess} width={360} height={430} alt="profile work success"/>
    </div>
    )
}