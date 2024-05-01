import Image from 'next/image';
import persons from '@/public/tortuga-marina.jpeg'
import style from './homecontent.module.css'

export const HomeContent = () => {
  return (
    <section className={style.presentation}>

      <article className={style.elements}>

        <div>
            <h3 className={style.title3}>ORGANIZACION EN RED</h3>
            <p className={style.parrafo}>
            Somos una plataforma de intercambio colaborativo en gestión y
            certificación de playas, con espectro de acción en 17 países de
            América Latina y la Península Ibérica. Nos integramos por científicos,
            activistas y empresarios unidos para un objetivo común: la Gestión de
            Playas.
            </p>
        </div>

        <Image className={style.imgf} src={persons} alt='grupo de personas'/>

      </article>

    </section>
  );
};
