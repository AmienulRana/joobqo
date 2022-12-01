import Input from "../input/input";
import styles from './autocomplete.module.scss';
export default function Autocomplete(){
    return(
        <div className={styles.autocomplete}>
            <Input placeholder="search profesi" />
            <div className={styles.__data}>
                <button type="button">Frontend Developer</button>
            </div>
        </div>
    )
}