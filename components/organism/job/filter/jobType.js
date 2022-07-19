import Dropdown from "../../../element/dropdown/dropdown";
import Button from '../../../element/button/button';
import { useState } from "react";
import InputFilter from './input';
export default function FilterJobType(){
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <Dropdown title="Job type" showDropdown={showDropdown} setShowDropdown={setShowDropdown}>
            <ul>
                <InputFilter label="Full time" name="jobtype" />
                <InputFilter label="Part time" name="jobtype" />
                <InputFilter label="Contaract" name="jobtype" />
                <InputFilter label="Internship" name="jobtype" />
           </ul>
           <div className="flex justify-end border-top mt-2 py-2">
               <Button classNameProps="bg-disabled mr-2">Reset</Button>
               <Button background="gradient">Apply Filter</Button>
           </div>
        </Dropdown>
    )
}