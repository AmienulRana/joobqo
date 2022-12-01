import React, { useRef, useEffect } from  'react';
import styles from './modal.module.scss';
import { IoClose } from '../../Icons';
import PropTypes from 'prop-types';

export default function Modal({ showModal, setShowModal, children, className}){
    const modalRef = useRef();

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(e.target === modalRef.current){
                setShowModal(false);
            }
        })
    }, []);

    const classBgModal = [showModal && styles.active, styles.modal_background].join(' ');
    const classModal = [showModal && styles.modal_active, styles.modal, className].join(' ');
    return (
        <section className={classBgModal} ref={modalRef}>
            <div className={classModal}>
                <section className={styles.modal_header}>
                    <IoClose onClick={() =>  setShowModal(false)}/>
                </section>
                <section className={styles.modal_body}>
                    { children }
                </section>
                <section className={styles.modal_footer}>

                </section>
            </div>
        </section>
    )
}

Modal.propType = {
    children:PropTypes.node,
    showModal: PropTypes.bool,
    setShowModal:PropTypes.func,
}