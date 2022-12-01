import Modal from "../../../element/modal/modal";
import styles from "./experience.module.scss";
import Input from "../../../element/input/input";
import { useEffect, useState } from "react";
import getYears from "../../../../utils/getYear";
import Dropdown from "../../../element/dropdown/dropdown";


export default function ModalAddExperience({ showModal, setShowModal}){
    const [years, setYears] = useState([]);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    useEffect(() => {
        setYears(getYears());
    }, [])
    return(
        <Modal showModal={showModal} setShowModal={setShowModal} className={styles.modal}>
            <div className={styles.modal__content}>
                <form>
                    <div>
                        <label>Position*</label>
                        <Input placeholder="Ex. Software enginner" type="text" required />
                    </div>
                    <div>
                        <label>Company name*</label>
                        <Input placeholder="Ex. Microsoft" type="text" required />
                    </div>
                    <div>
                        <label>Location*</label>
                        <Input placeholder="Ex. Jakarta, Indonesia" type="text" required />
                    </div>
                    <label>Start date*</label>
                    <div className={styles.modal__start_date}>
                        <div>
                            <select>
                                <option value={false}>Select Year</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select>
                                <option value={false}>Select Month</option>
                                {months.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>I&apos;m still working here</label>
                    </div>
                </form>
            </div>
        </Modal>
    )
}