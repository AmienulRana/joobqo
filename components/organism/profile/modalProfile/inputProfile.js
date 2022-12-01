import styles from './modalProfile.module.scss';
import Input from '../../../element/input/input';
export default function InputProfile(props){
    const { label } = props;
    return(
        <div className={styles.wrapperInput}>
            <label>{label}</label>
            <Input type="text" {...props}/>
        </div>
    )
}