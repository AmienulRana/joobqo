import Button from '../../../element/button/button';
import styles from './category.module.scss';
export default function CardCategory({Icon, category, totalJobs}){
    return(
        <div className={styles.category__cardCategory}>
            <div className={styles.category__icon}>
                <Icon className="md:text-4xl text-3xl text-white" />
            </div>
            <h3>{category}</h3>
            <p className="text-disabled text-center">Check out the {totalJobs}+ jobs available here</p>
            <Button background="gradient" classNameProps="mt-2">
                Apply Now
            </Button>
        </div>
    )
}