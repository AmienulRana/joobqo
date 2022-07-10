import React, { useRef, useEffect } from  'react';
import styles from './modal.module.scss';
import { IoClose } from '../../Icons';
import PropTypes from 'prop-types';
import Button from '../button/button';
import { BsWhatsapp, BsLinkedin, BsGithub} from '../../Icons';
import Link from 'next/link';
export default function Modal({ showModal, setShowModal }){
    const modalRef = useRef();

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(e.target === modalRef.current){
                setShowModal(false);
            }
        })
    }, []);

    const classModal = [showModal && styles.active, styles.modal_background].join(' ');
    return (
        <section className={classModal} ref={modalRef}>
            <div className={[showModal && styles.modal_active, styles.modal].join(' ')}>
                <section className={styles.modal_header}>
                    <IoClose onClick={() =>  setShowModal(false)}/>
                </section>
                <section className={styles.modal_body}>
                    <div className={styles.profile}>
                        <div className={styles.img}></div>
                        <div className={styles.social_media_profile}>
                            <a href="https://wa.me/085260298204" target="_blank">
                                <BsWhatsapp />
                            </a>
                            <a href="/">
                                <BsLinkedin />
                            </a>
                            <a href="https://github.com/AmienulRana" target="_blank">
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                    <Button text="" background="gradient" width="80%">
                        <a href="../../../cv_amienul_rana.pdf" attributes-list download>Download CV</a>
                    </Button>
                </section>
                <section className={styles.modal_footer}>

                </section>
            </div>
        </section>)
    
}

Modal.propType = {
    showModal: PropTypes.bool,
    setShowModal:PropTypes.func,
}