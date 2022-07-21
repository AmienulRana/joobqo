import Layout from '../components/layout/layout';
import Filter from '../components/organism/job/filter';
import { InputIcon } from '../components/element/input/input';
import { GoLocation, FaSearch, BsLinkedin, FaHeart } from '../components/Icons';
import Image from 'next/image';
import companyLogo from '../public/image/logo_ms.png';
import Button from '../components/element/button/button';
const classNameInput = "md:mr-4 px-4 border-2 py-2 focus:border-main-color rounded-md";
export default function Jobs(){
    return <Layout>
        <section className="border-bottom flex py-2 lg:px-16 px-4">
            <div className="w-full">
                <InputIcon classNameContainer="mb-4 md:mb-0 w-full bg-red-500" type="text" Icon={FaSearch} placeholder="Search by title, company, skills" classNameProps={`${classNameInput} w-full lg:w-72`}/>
                <InputIcon classNameContainer="mb-4 md:mb-0" type="text" Icon={GoLocation} placeholder="Location" classNameProps={`${classNameInput} w-full lg:w-40`}/>
            </div>
            {/* <Filter /> */}
        </section>
        <section className="flex lg:px-16 flex-wrap">
            <section className="md:w-1/3 w-full bg-white md:border-r-4 border-main-color custom-scrollbar p-4 overflow-y-scroll md:h-600">
                <div className="flex items-start border-bottom mb-8 pb-6">
                    <Image src={companyLogo} width={39} height={39} alt="company logo"/>
                    <section className="ml-4">
                        <h1 className="text-main-color text-xl font-bold">Frontend developer</h1>
                        <p className="text-disabled">Microsoft</p>
                        <p className="text-disabled">Jakarta, Indonesia(Hybrid)</p>
                        <p className="font-bold">Rp7.000.000 - 9.000.000</p>
                    </section>
                </div>
            </section>
            {/* <section className="p-6 md:w-2/3 w-full custom-scrollbar overflow-y-scroll md:h-600">
                <Image src={companyLogo} width={59} height={59} alt="company logo"/>
                <h1 className="text-3xl font-bold">Frontend developer</h1>
                <p className="text-disabled my-2">Microsoft, Jakarta Indonesia (Hybrid)</p>
                <p className="font-bold">Rp7.000.000 - 9.000.000</p>
                <div className="flex mt-4">
                    <Button background="gradient">Apply now</Button>
                    <Button classNameProps="bg-disabled font-normal mx-4"><FaHeart className="mr-2" />Save</Button>
                    <Button classNameProps="bg-disabled font-normal"><BsLinkedin className="mr-2"/>Apply in Linkedin</Button>
                </div>
                <section className="mt-8">
                    <p className="font-bold">Responsibility :</p>
                    <ul className="ml-8">
                        <li>Create New feature for web app</li>
                        <li>Create reusable code for future use</li>
                    </ul>
                </section>
                <section className="mt-8">
                    <p className="font-bold">Requirement :</p>
                    <ul className="ml-8">
                        <li>Familiarity with Agile development teams, processes and CI/CD environments and tooling.</li>
                        <li>Experience with JavaScript, CSS and jQuery and third partly libraries & APIs.</li>
                    </ul>
                </section>
                <section className="mt-8">
                    <p className="font-bold">About company :</p>
                    <p>We are continuously seeking mutually beneficial business
                    opportunities that create synergies, building alliances and 
                    strengthening our supporting businesses with and through our
                    subsidiaries, notably Mandiri Sekuritas in investment banking, 
                    AXA Mandiri Financial Services in insurance, Bank Syariah Mandiri 
                    in Sharia banking, Bank Sinar Harapan Bali in micro banking, and Mandiri
                    Tunas Finance in multi-finance. In 2011, Bank Mandiri acquired Mandiri AXA 
                    General Insurance (MAGI), a joint-venture between Bank Mandiri and AXA Societe
                    Anonyme, to strengthen Bank Mandiri's penetration into the general insurance business. With various subsidiaries that 
                    support our businesses, we have further strengthened our position as a prominent financial 
                    holdings institution in Indonesia.</p>
                </section>
            </section> */}
        </section>
    </Layout>
}