import Layout from '../../components/layout/layout';
import styles from '../../styles/login.module.scss';
import Input from '../../components/element/input/input';
import Link from 'next/link';
import Button from '../../components/element/button/button';
import { BsLinkedin, IoLogoGoogle, BsEyeSlashFill, BsEyeFill } from '../../components/Icons';
import { useState } from 'react';
export default function RegisterUser(){
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () =>  setShowPassword(showPassword ? false : true);
    return(
        <Layout title="Register User">
            <section className={styles.login}>
                <h1>Get's Started</h1>
                <p>Already have an account? <Link href="/login">Login</Link></p>
                <form>
                    <Input placeholder="Enter Your email addres" type="email" />
                    <Input placeholder="Enter Username" />
                    <div className={styles.login__password}>
                        {showPassword ? <BsEyeFill onClick={handleShowPassword}/> : <BsEyeSlashFill onClick={handleShowPassword}/>}
                        <Input placeholder="Enter Your password" type={showPassword ? "text" : "password"} required/>
                    </div>
                </form>
                <Button>Register</Button> 
                <div className={styles.login__option}>
                    <p>Or register with</p>
                    <div className={styles.login__option_auth}>
                        <Button><BsLinkedin /> Linkedin</Button>
                        <Button><IoLogoGoogle /> Goggle</Button>
                    </div>
                </div>  
            </section>
        </Layout>
    )
}