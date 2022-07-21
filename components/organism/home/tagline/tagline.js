import React from 'react';
import Button from '../../../element/button/button';
import { FiSearch, GoLocation } from '../../../Icons';
import { InputIcon } from '../../../element/input/input';
import styles from './tagline.module.scss';
function Tagline() {
  return (
        <section className={styles.tagline}>
            <h1>Jobs Search for people Passionate about Startup</h1>
            <p>Easily and quickly select thousand of jobs from around the world</p>
            <div className={styles.searchJob}>
                <InputIcon placeholder="job title" Icon={FiSearch} />
                <InputIcon placeholder="location" Icon={GoLocation} />
                <Button background="gradient" classNameProps={styles.button}>Search</Button>
            </div>
        </section>
   )
}

export default Tagline;
