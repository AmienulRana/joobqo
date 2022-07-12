import React from 'react';
import Button from '../../element/button/button';
import { FiSearch, GoLocation } from '../../Icons';
import { InputIcon } from '../../element/input/input';
import PropTypes from 'prop-types';

function Tagline() {
  return (
        <section>
            <h1 className='text-5xl mt-70px font-bold mt-5'>Jobs Search for people Passionate about Startup</h1>
            <p className="text-disabled mt-4">Easily and quickly select thousand of jobs from around the world</p>
            <div className="flex items-center mt-5 shadow bg-white py-2.5 px-5 rounded-lg w-max h-20">
                <InputIcon type="text" placeholder="job title" Icon={FiSearch} />
                <InputIcon type="text" placeholder="location" Icon={GoLocation} />
                <Button background="gradient" classNameProps="w-20 h-10">Search</Button>
            </div>
        </section>
   )
}

export default Tagline;
