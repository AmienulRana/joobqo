import styles from './button.module.scss';
import PropTypes from 'prop-types';
export default function Button({ children, className, width, background, onClick }){
    const newClass = [styles.button, styles[background], className].join(' ');
    return <button onClick={onClick} className={newClass}>{children}</button>
}

Button.propType = {
    background:PropTypes.string,
    className:PropTypes.string,
    children:PropTypes.node,
    onClick:PropTypes.func,
    text:PropTypes.string,
    width:PropTypes.string,
}