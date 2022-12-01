import { IoClose, MdOutlineArrowDropDown } from '../../Icons';
import  styles from './dropdown.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
export default function Dropdown({ children, className, title, showDropdown, setShowDropdown = () => {}}){
    const dropdownRef = useRef();

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(e.target !== dropdownRef.current){
                setShowDropdown(false);
            }
        })
    }, [])
    return(
        <div className={[styles.dropdown, className].join(' ')}>
            <button className={styles.dropdown__header} ref={dropdownRef} onClick={() => setShowDropdown(!showDropdown)}>
                { title } <MdOutlineArrowDropDown className={showDropdown ? styles.active : ''} />
            </button>
            <div className={[styles.dropdown__body, showDropdown ? styles.dropdown__body_active : ''].join(' ')}>
                <IoClose onClick={() => setShowDropdown(false)}/>
                {children}
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    showDropdown: PropTypes.bool,
    setShowDropdown:PropTypes.func
}