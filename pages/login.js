import Layout from '../components/layout/layout';
import styles from '../styles/login.module.scss';
import Input from '../components/element/input/input';
import Link from 'next/link';
import Button from '../components/element/button/button';
import { BsLinkedin, IoLogoGoogle, BsEyeSlashFill, BsEyeFill } from '../components/Icons';
import { useState } from 'react';
export default function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () =>  setShowPassword(showPassword ? false : true);
    return(
        <Layout title="Login">
            <section className={styles.login}>
                <h1>Login</h1>
                <p>Hey, Enter your details to apply for your dream job </p>
                <form>
                    <Input placeholder="Enter Your email addres" type="email" />
                    <div className={styles.login__password}>
                        {showPassword ? <BsEyeFill onClick={handleShowPassword}/> : <BsEyeSlashFill onClick={handleShowPassword}/>}
                        <Input placeholder="Enter Your password" type={showPassword ? "text" : "password"} required/>
                    </div>
                </form>
                <Button>Login</Button>
                <Link href="/forgot">Forgot password?</Link>
                <div className={styles.login__option}>
                    <p>Or login with</p>
                    <div className={styles.login__option_auth}>
                        <Button><BsLinkedin /> Linkedin</Button>
                        <Button><IoLogoGoogle /> Goggle</Button>
                    </div>
                    <p>Don't have an account? <Link href="/register/user">Register</Link></p>
                </div>  
            </section>
        </Layout>
    )
}