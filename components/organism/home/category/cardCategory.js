import Button from '../../../element/button/button';
import styles from './category.module.scss';
export default function CardCategory({Icon, category, totalJobs}){
    return(
        <div className={styles.category__cardCategory}>
            <div className={styles.category__icon}>
                <Icon />
            </div>
            <h3>{category}</h3>
            <p>Check out the {totalJobs}+ jobs available here</p>
            <Button background="gradient">
                Apply Now
            </Button>
        </div>
    )
}