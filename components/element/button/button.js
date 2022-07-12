import styles from './button.module.scss';
import PropTypes from 'prop-types';
export default function Button({ children, classNameProps, width, background, onClick }){
    const newClass = [styles.button, styles[background], classNameProps].join(' ');
    
    return <button onClick={onClick} className={newClass} style={{ width }}>{children}</button>
}

Button.propType = {
    text:PropTypes.string,
    width:PropTypes.string,
    background:PropTypes.string,
    onClick:PropTypes.func,
    classNameProps:PropTypes.string,
}