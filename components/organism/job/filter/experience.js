import Dropdown from "../../../element/dropdown/dropdown";
import Button from '../../../element/button/button';
import { useState } from "react";
import InputFilter from './input';
export default function FilterExperience(){
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <Dropdown title="Experience" showDropdown={showDropdown} setShowDropdown={setShowDropdown}>
            <ul>
                <InputFilter label="Kurang dari 1 tahun" name="experience"/>
                <InputFilter label="1 - 3 tahun" name="experience" />
                <InputFilter label="3 - 6 tahun" name="experience" />
                <InputFilter label="6 - 9 tahun" name="experience" />
           </ul>
           <div className="flex justify-end border-top mt-2 py-2">
               <Button classNameProps="bg-disabled mr-2">Reset</Button>
               <Button background="gradient">Apply Filter</Button>
           </div>
        </Dropdown>
    )
}