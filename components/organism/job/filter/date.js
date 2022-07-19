import Dropdown from "../../../element/dropdown/dropdown";
import Button from '../../../element/button/button';
import InputFilter from './input';
import { useState } from "react";
export default function FilterDate(){
    const [showDropdown, setShowDropdown] = useState(false);
    return(
       <Dropdown title="Date Post" showDropdown={showDropdown} setShowDropdown={setShowDropdown}>
           <ul>
                <InputFilter label="Past Month" name="date"/>
                <InputFilter label="Past Week" name="date"/>
                <InputFilter label="Past 24 Hours" name="date"/>
           </ul>
           <div className="flex justify-end border-top mt-2 py-2">
               <Button classNameProps="bg-disabled mr-2">Reset</Button>
               <Button background="gradient">Apply Filter</Button>
           </div>
       </Dropdown>
    )
}