import Button from "../../../element/button";
import Input from "../../../element/input/input";
import Modal from "../../../element/modal/modal";
import InputProfile from "./inputProfile";
import styles from './modalProfile.module.scss';
export default function ModalProfile({ showModal, setShowModal }){
    return(
        <Modal showModal={showModal} setShowModal={setShowModal} className={styles.modal}>
            <form className={styles.form__profile}>
                <InputProfile label="Your full name*" />
                <InputProfile label="Additional name*" />
                <InputProfile label="Headline*" />
                <InputProfile label="Country/Religion*" />                
                <h1>Sosial Media</h1>
                <InputProfile label="Twitter" />                
                <InputProfile label="Linkedin" />                
                <InputProfile label="Instagram" />                
                <InputProfile label="Github" />  
                <div className={styles.form__action}>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>  
                    <Button background="gradient" onClick={() => setShowModal(false)}>Save</Button>    
                </div>              
            </form>

        </Modal>
    )
}