import styles from './analytics.module.scss';
import { HiOutlineUserGroup } from '../../../Icons';
export default function Analytics(){
    return(
        <div className={styles.analytics}>
            <h1>Analytics</h1>
            <div className={styles.total}>
                <HiOutlineUserGroup />
                <section>
                    <h1>2 Profile views</h1>
                    <p>See who visited your profile</p>
                </section>
            </div>
        </div>
    )
}