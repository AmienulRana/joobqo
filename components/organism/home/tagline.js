import React from 'react';
import Button from '../../element/button/button';
import { FiSearch, GoLocation } from '../../Icons';
import { InputIcon } from '../../element/input/input';

function Tagline() {
  return (
        <section>
            <h1 className='md:text-5xl text-2xl mt-70px font-bold mt-5'>Jobs Search for people Passionate about Startup</h1>
            <p className="text-disabled mt-4">Easily and quickly select thousand of jobs from around the world</p>
            <div className="flex flex-wrap lg:flex-no-wrap items-center mt-5 shadow bg-white py-2.5 px-5 rounded-lg lg:w-max lg:h-20 h-max">
                <InputIcon type="text" placeholder="job title" Icon={FiSearch} classNameContainer="mb-8 lg:mb-0 w-full lg:w-auto" />
                <InputIcon type="text" placeholder="location" Icon={GoLocation} classNameContainer="w-full mb-8 lg:mb-0 lg:w-auto" />
                <Button background="gradient" classNameProps="lg:w-20 lg:h-10 w-full">Search</Button>
            </div>
        </section>
   )
}

export default Tagline;
