import styles from './howToApply.module.scss';
export default function HowToApply(){
    return(
        <section className={styles.howToApply}>
            <p>How to Apply?</p>
            <h2>Easy Step to Find and Apply Your Dream Job</h2>
            <ul>
                <li>
                    <h3>Upload You CV and portofilo</h3>
                    <p>You can upload your Resume, CV, and portfolio directly to JobQoo</p>
                </li>
                <li>
                    <h3>You will notified with all the update</h3>
                    <p>Get notification about new job vacancy, scheduled interview and job requirement</p>
                </li>
                <li>
                    <h3>Apply Your Dream Job From Best Company</h3>
                    <p>We will provide your application to your selected company from all over the world</p>
                </li>
            </ul>
        </section>
    )
}