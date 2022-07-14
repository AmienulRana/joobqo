import PropTypes from 'prop-types';

export default function Input(props){
    const { classNameProps} = props;
    return(
            <input className={classNameProps} {...props} />
    )
}

export function InputIcon(props){
    const { Icon, type, onChange, placeholder, classNameProps, classNameIcon } = props;
    const classNameInput = ["h-full border-0 text-base pl-9", classNameProps].join(' ');
    const classIcon = ["absolute top-1/2 left-2 text-main-color font-xl -translate-y-1/2", classNameIcon].join(' ');
    return(
    <div className="relative">
       <Input type={type} placeholder={placeholder} classNameProps={classNameInput} />
       <Icon className={classIcon} />
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