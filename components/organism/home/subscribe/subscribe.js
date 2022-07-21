import Input from '../../../element/input/input';
import Button from '../../../element/button/button';
import styles from './subscribe.module.scss';
export default function Subscribe(){
    return(
        <>
            <h1>Subscribe to Our Newsletter to Stay Updated</h1>
            <div className={styles.subscribe__form}>
                <Input placeholder="Enter Email Addres Here" />
                <Button background="gradient">
                    Subscribe
                </Button>
            </div>
        </>
    )
}