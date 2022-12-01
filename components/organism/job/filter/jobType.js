import Dropdown from "../../../element/dropdown/dropdown";
import Button from '../../../element/button/button';
import { useState } from "react";
import InputFilter from './inputFilter';
export default function FilterJobType({ styles }){
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <Dropdown title="Job type" showDropdown={showDropdown} setShowDropdown={setShowDropdown}>
            <ul>
                <InputFilter label="Full time" name="jobtype" />
                <InputFilter label="Part time" name="jobtype" />
                <InputFilter label="Contaract" name="jobtype" />
                <InputFilter label="Internship" name="jobtype" />
           </ul>
           <div className={styles.wrapperButtonAction}>
               <Button classNameProps="bg-disabled mr-2">Reset</Button>
               <Button background="gradient">Apply Filter</Button>
           </div>
        </Dropdown>
    )
}