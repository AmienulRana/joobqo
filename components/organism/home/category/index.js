import CardCategory from './cardCategory';
import Link from 'next/link';
import { RiComputerLine, IoConstruct, FaHotel } from '../../../Icons';
export default function Category(){
    return(
        <>
            <h1 className="text-3xl text-2xl mb-4 font-bold">Jobs Category</h1>
            <div className="flex md:justify-between  justify-center flex-wrap items-center">
              <CardCategory category="IT/Computer Sience" Icon={RiComputerLine} totalJobs="2500" />
              <CardCategory category="Building/Construction" Icon={IoConstruct} totalJobs="800" />
              <CardCategory category="Hotel/Restaurant" Icon={FaHotel} totalJobs="1200" />
            </div>
            <Link href="/jobs"><p className="m-auto mt-6 text-center text-main-color underline cursor-pointer">See more Jobs</p></Link>
        </>
    )
}