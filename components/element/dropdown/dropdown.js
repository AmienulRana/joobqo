import { IoClose, MdOutlineArrowDropDown } from '../../Icons';
export default function Dropdown({ children, title, showDropdown, setShowDropdown = () => {}}){
    return(
        <div className="relative mr-4">
            <div className="w-max px-4 border-2 rounded-full cursor-pointer" onClick={() => setShowDropdown(showDropdown ? false : true)}>
                <p className="text-disabled flex items-center">{ title } <MdOutlineArrowDropDown className="text-3xl" /></p>
            </div>
            <div className={["transition-opacity duration-300 absolute top-full left-0 bg-white shadow w-52 rounded-md py-2 px-4 h-max", showDropdown ? 'opacity-100 z-index-10' : 'opacity-0 -z-index'].join(' ')}>
                <IoClose className="text-2xl text-disabled absolute top-2 right-2 cursor-pointer" onClick={() => setShowDropdown(showDropdown ? false : true)}/>
                {children}
            </div>
        </div>
    )
}