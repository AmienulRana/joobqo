import FilterDate from './date';
import FilterExperience from './experience';
import FilterJobType from './jobType';
import FilterWorkSystem from './system';


export default function Filter(){
    return(
        <>
            <FilterDate />
            <FilterExperience />
            <FilterJobType />
            <FilterWorkSystem />
        </>
    )
}