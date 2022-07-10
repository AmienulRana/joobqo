import React from 'react';
import Button from '../../element/button/button';
import { FiSearch, GoLocation } from '../../Icons';
import PropTypes from 'prop-types';
import styles from './styles/tagline.module.scss';

function Tagline() {
  return (
        <section className={styles.tagline}>
            <h1>Jobs Search for people Passionate about Startup</h1>
            <p>Easily and quickly select thousand of jobs from around the world</p>
            <div className={styles.searchJob}>
            <div className={styles.wrapperInput}>
                <input type="text" placeholder="job title"/>
                <FiSearch />
            </div>
            <div className={styles.wrapperInput}>
                <input type="text" placeholder="location"/>
                <GoLocation />
            </div>
            <Button text="search"/>
            </div>
        </section>
   )
}

export default Tagline;
Tagline.propType = {
    styles: PropTypes.object,
}