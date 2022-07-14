import Button from '../../../element/button/button';
export default function CardCategory({Icon, category, totalJobs}){
    return(
        <div className="w-1/4 py-4 rounded flex flex-col items-center justify-center shadow">
            <div className="p-4 w-max bg-main-color rounded-half">
                <Icon className="text-4xl text-white" />
            </div>
            <h1 className="text-xl mt-2">{category}</h1>
            <p className="text-disabled">Check out the {totalJobs}+ jobs available here</p>
            <Button background="gradient" classNameProps="mt-2">
                Apply Now
            </Button>
        </div>
    )
}