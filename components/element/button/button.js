import styles from './button.module.scss';
import PropTypes from 'prop-types';
export default function Button({ children, classNameProps, width, background, onClick }){
    const newClass = ['outline-0 border-0 font-bold h-30px rounded-md text-white flex justify-center items-center cursor-pointer',
        styles[background], 
        classNameProps
    ].join(' ');
    
    return <button onClick={onClick} className={newClass} style={{ width }}>{children}</button>
}

Button.propType = {
    background:PropTypes.string,
    classNameProps:PropTypes.string,
    children:PropTypes.node,
    onClick:PropTypes.func,
    text:PropTypes.string,
    width:PropTypes.string,
}