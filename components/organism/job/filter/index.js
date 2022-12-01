import FilterDate from './date';
import FilterExperience from './experience';
import FilterJobType from './jobType';
import FilterWorkSystem from './system';
import styles from './filter.module.scss';

export default function Filter(){
    return(
        <>
            <FilterDate styles={styles} />
            <FilterExperience styles={styles} />
            <FilterJobType styles={styles} />
            <FilterWorkSystem styles={styles} />
        </>
    )
}