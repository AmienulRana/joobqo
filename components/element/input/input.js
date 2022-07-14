import styles from './input.module.scss';
import PropTypes from 'prop-types';
export function InputIcon(props){
    const { Icon, type, onChange, placeholder, classNameProps, classNameIcon } = props;
    const classNameInput = ["h-full border-0 text-base pl-9", classNameProps].join(' ');
    const classIcon = ["absolute top-1/2 left-2 text-main-color font-xl -translate-y-1/2", classNameIcon].join(' ');
    return(
    <div className="relative">
       <input type={type} placeholder={placeholder} className={classNameInput} />
       <Icon className={classIcon} />
    </div>)
}
export default function Input(props){
    const { type, placeholder } = props;
    return(
        <div className={styles.wrapperInput}>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}
Input.propType = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

InputIcon.propType = {
    Icon: PropTypes.func,
    type:PropTypes.string,
    onChange:PropTypes.func,
    placeholder:PropTypes.string
}