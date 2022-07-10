import styles from './button.module.scss';
import PropTypes from 'prop-types';
export default function Button({children, width, background, onClick, children}){
    const newClass = [styles.button, styles[background]].join(' ')
    return <button onClick={onClick} className={newClass} style={{ width }}>{children}</button>
}

Button.propType = {
    text:PropTypes.string,
    width:PropTypes.string,
    background:PropTypes.string,
    onClick:PropTypes.func,
}