import Image from 'next/image';
import persons from '@/public/tortuga-marina.jpeg';
import style from './homecontent.module.css';

export const Banner = () => {
  return (
    <section className={style.banner}>
      <Image
        src="/proplayas_logo.svg"
        width={360}
        height={360}
        className={`hidden md:block ${style.logo}`}
        alt="Screenshots"
      />

      <div className={style.letter}>
        <p className={style.titles}>Hola, somos</p>
        <section className={style.animation}>
          <div className={style.first}>
            <div>Ambiente</div>
          </div>
          <div className={style.second}>
            <div>Sociales</div>
          </div>
          <div className={style.third}>
            <div>Proplayas</div>
          </div>
        </section>
      </div>
    </section>
  );
};

export const HomeContent = () => {
  return (
    <section className={style.presentation}>
      <article className={style.elements}>
        <div>
          <h3 className={style.title3}>ORGANIZACION EN RED</h3>
          <p className={style.parrafo}>
            Somos una plataforma de intercambio colaborativo en gestión y
            certificación de playas, con espectro de acción en 17 países de
            América Latina y la Península Ibérica. Nos integramos por
            científicos, activistas y empresarios unidos para un objetivo común:
            la Gestión de Playas.
          </p>
        </div>

        <Image className={style.imgf} src={persons} alt="grupo de personas" />
      </article>
    </section>
  );
};

export const Actividades = () => {
  return <h1>Hola Algo</h1>;
};

export const NodosCientificos = () => {
  return (
    <section className={style.scientistNodes}>
      <div className={style.bentoGrid}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </section>
  );
};
