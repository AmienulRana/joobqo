import styles from './skills.module.scss';
import Button from '../../../element/button/button';
export default function Skills(){
    return(
        <div className={styles.skills}>
            <div className={styles.skills__add}>
                <h1>Skills</h1>
                <Button background="gradient">Add Skills</Button>
            </div>
            <div className={styles.skills__all}>
                <h1>Webpack</h1>
                <h1>React</h1>
                <h1>Javascript</h1>
                <h1>NodeJs</h1>
            </div>
        </div>
    )
}