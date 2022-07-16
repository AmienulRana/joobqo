import Button from '../../../element/button/button';
export default function CardCategory({Icon, category, totalJobs}){
    return(
        <div className="md:w-1/4  w-11/12 flex-wrap mb-6 py-4 rounded flex flex-col items-center justify-center shadow">
            <div className="p-4 w-max bg-main-color rounded-half">
                <Icon className="md:text-4xl text-3xl text-white" />
            </div>
            <h1 className="text-xl mt-2">{category}</h1>
            <p className="text-disabled text-center">Check out the {totalJobs}+ jobs available here</p>
            <Button background="gradient" classNameProps="mt-2">
                Apply Now
            </Button>
        </div>
    )
}