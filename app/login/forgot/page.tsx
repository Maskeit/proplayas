import React from 'react'
import styles from '@/app/login/forgot/page.module.css'
import { ArrowRightOnRectangleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { BackButton } from '../../components/buttons'
import { LockClosedIcon } from '@heroicons/react/20/solid'
export default function Page() {
  return (
    <div className={styles.page}>
        <div className={`${styles.backbtn}`}>
            <BackButton color='#138496' href='/login'/>
        </div>
        <div className={styles.item}>
          <LockClosedIcon fill='#188fa2' width='50px'/>
            <h1>¿Olvidaste tu contraseña?</h1>
            <p>Te enviaremos un correo para verificar y poder reestablecer tu contraseña</p>
            <form action="" className={styles.forgotForm}>
              <input type="email" id='email' name='email' placeholder="Correo electronico" className={styles.inputField} required />
              <button type="submit" className={styles.forgotButton}>
                  Enviar email
                  <PaperAirplaneIcon color='#fff' width='24px' />
              </button>
            </form>
        </div>
    </div>
  )
}
