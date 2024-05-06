import Image from 'next/image';
import persons from '@/public/tortuga-marina.jpeg'
import styles from './homecontent.module.css'
import logo from '@/public/proplayas_logo.svg'
import background from '@/public/portada-playa.jpg'
import { lusitana, opens, quicksand, montserrat } from '@/app/ui/fonts';
import { Titlesh1 } from '../components/titles';


export const HomeBanner = () => {
  return(
    <section className={styles.banner}>
      <Image 
        src={background} 
        className={`${styles.background}`}
        alt='Fondo de playa'
      />
      <Image
        src={logo}
        width={360}
        height={360}
        className={` ${styles.logo}`}
        alt="Screenshots"
      />

    <div className={`${styles.letter}`} >
      <p className={styles.titles}>Hola, somos</p>
      <section className={styles.animation}>
        <div className={styles.first}>
          <div>Ambiente</div>
        </div>
        <div className={styles.second}>
          <div>Sociales</div>
        </div>
        <div className={styles.third}>
          <div>Proplayas</div>
        </div>
      </section>
    </div>
    
  </section>
  )
}

export const HomeContent = () => {
  return (
    <section className={styles.presentation}>

      <article className={styles.elements}>

        <div>
            <h3 className={styles.title3}>ORGANIZACION EN RED</h3>
            <p className={styles.parrafo}>
            Somos una plataforma de intercambio colaborativo en gestión y
            certificación de playas, con espectro de acción en 17 países de
            América Latina y la Península Ibérica. Nos integramos por científicos,
            activistas y empresarios unidos para un objetivo común: la Gestión de
            Playas.
            </p>
        </div>

        <Image className={styles.imgf} src={persons} alt='grupo de personas'/>

      </article>

    </section>
  );
};
