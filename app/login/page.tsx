import styles from './login.module.css';
import Image from 'next/image';
import tortuga from '@/public/tortuga-marina.jpeg';
export default function Page() {
    return (
    <div className={` flex flex-col md:flex-row  items-center`}>         
        <Image
            className={`${styles.imagen} md:w-1/2 hidden md:block`}
            alt='tortuga'
            src={tortuga}
        />

        <div className={`${styles.loginContainer} md:w-1/2`}>
        <div className={styles.loginBox}>
            <h1 className={styles.loginTitle}>Inicia Sesión</h1>
            <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
                <input type="email" placeholder="Correo/Usuario" className={styles.inputField} />
            </div>
            <div className={styles.inputGroup}>
                <input type="password" placeholder="Contraseña" className={styles.inputField} />
            </div>
            <div className={styles.checkboxGroup}>
                <input type="checkbox" id="rememberMe" className={styles.checkbox} />
                <label htmlFor="rememberMe" className={styles.checkboxLabel}>Recordarme</label>
            </div>
            <button type="submit" className={styles.loginButton}>Iniciar sesión</button>
            <a href="#" className={styles.forgotPassword}>Olvidé mi contraseña</a>
            </form>
        </div>
        </div>
    </div>
    );
}

