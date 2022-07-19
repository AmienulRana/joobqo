import Dropdown from "../../../element/dropdown/dropdown";
import Button from '../../../element/button/button';
import InputFilter from './input';
import { useState } from "react";
export default function FilterWorkSystem(){
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <Dropdown title="Work System" showDropdown={showDropdown} setShowDropdown={setShowDropdown}>
            <ul>
                <InputFilter label="On-Site" name="system"/>
                <InputFilter label="Remote" name="system"/>
                <InputFilter label="Hybrid" name="system"/>
           </ul>
           <div className="flex justify-end border-top mt-2 py-2">
               <Button classNameProps="bg-disabled mr-2">Reset</Button>
               <Button background="gradient">Apply Filter</Button>
           </div>
        </Dropdown>
    )
}