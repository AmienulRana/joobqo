import CardCategory from './cardCategory';
import Link from 'next/link';
import { RiComputerLine, IoConstruct, FaHotel } from '../../../Icons';
import styles from './category.module.scss';
export default function Category(){
    return(
        <div className={styles.category}>
            <h2>Jobs Category</h2>
            <div className={styles.category__cardsCategory}>
              <CardCategory category="IT/Computer Sience" Icon={RiComputerLine} totalJobs="2500" />
              <CardCategory category="Building/Construction" Icon={IoConstruct} totalJobs="800" />
              <CardCategory category="Hotel/Restaurant" Icon={FaHotel} totalJobs="1200" />
            </div>
            <p style={{textAlign:'center', marginTop:'15px'}}><Link href="/jobs">See more Jobs</Link></p>
        </div>
    )
}