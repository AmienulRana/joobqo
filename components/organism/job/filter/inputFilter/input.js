import Radio from '../../../../element/radio';
import styles from './inputFilter.module.scss';
export default function InputFilter({label, name}){
    return(
        <li className={styles.inputFilter}>
            <Radio name={name}/>
            <label className="text-disabled">{label}</label>
        </li>
    )
}