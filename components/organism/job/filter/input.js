import Radio from '../../../element/radio';
export default function InputFilter({label, name}){
    return(
        <li className="flex items-center mt-4">
            <Radio name={name}/>
            <label className="text-disabled">{label}</label>
        </li>
    )
}