import ImgSuccess from '../../../../public/image/imgSucces.png';
import profile from '../../../../public/image/profile.png';
import Image from 'next/image';
import Button from '../../../element/button/button';
import styles from './successHire.module.scss';
export default function SuccessHired({ setShowModal }){
    return(
    <div className={styles.success}>
        <section className={styles.success__hire}>
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