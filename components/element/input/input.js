import PropTypes from 'prop-types';
import  styles from './input.module.scss';
export default function Input(props){
    const { className, type = "text" } = props;
    return(
        <input type={type} className={[styles.input, className].join(' ')} {...props} />
    )
}

export function InputIcon(props){
    const { Icon, onChange, placeholder, classNameProps = '', classNameIcon = '', classNameContainer = '' } = props;
    return(
    <div className={["relative", classNameContainer].join(' ')}>
       <Input placeholder={placeholder} classNameProps={classNameProps} onChange={onChange} />
       <Icon className={[styles.icon, classNameIcon].join(' ')} />
    </div>)
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