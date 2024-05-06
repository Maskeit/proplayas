import Image from 'next/image';
import equipo from '@/public/home/equipo.png'
import cientificos from '@/public/home/cientificos.png'
import eventos from '@/public/home/eventos.png'
import proyectos from '@/public/home/proyectos.png'
import publicaciones from '@/public/home/publicaciones.png'
import styles from './homecontent.module.css'
import logo from '@/public/proplayas_logo.svg'  

import { lusitana, opens, quicksand, montserrat } from '@/app/ui/fonts';



export const HomeBanner = () => {
  return(
    <section className={styles.banner}>
    <Image
      src={logo}
      width={360}
      height={360}
      className={`hidden md:block ${styles.logo}`}
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

export const ProplayasInfo = () => {
  return (
    <section className={styles.presentation}>

      <article className={styles.elements}>

        <div>
            <h3 className={`text-3xl mb-5`}>ORGANIZACION EN RED</h3>
            <p className={`text-2xl`}>
            Somos una plataforma de intercambio colaborativo en gestión y
            certificación de playas, con espectro de acción en 17 países de
            América Latina y la Península Ibérica. Nos integramos por científicos,
            activistas y empresarios unidos para un objetivo común: la Gestión de
            Playas.
            </p>
        </div>

        <Image className={styles.imgf} src={equipo} alt='grupo de personas'/>

      </article>

    </section>
  );
};

export const Activities = () => {
  return (
    <section className={styles.activities}>

      <article className={styles.stripe}>

        <div>
            <p className={`text-3xl text-center`}>
            La Red PROPLAYAS abarca todas las actividades que puedan relacionarse 
            con mantener playas saludables y atractivas. Desde proyectos de investigación 
            y campañas de concientización ciudadana, hasta servicios de consultoría y 
            eventos académicos. Cualquier actividad que hace uno de nuestros Nodos Locales, 
            es automáticamente una actividad de la Red.
            </p>
        </div>

      </article>

    </section>
  );
};

export const ScientistNodes = () => {
  return (
    <section className={styles.bentoGrids}>

      <article className={styles.bento3x3}>

        <div className={`${styles.cardCentral}`}>
          <h1 className={`text-2xl font-semibold`}>NODOS CIENTÍFICOS</h1>
        </div>
        <div className={`${styles.cardHorizontal}`}>
          <Image className={styles.cardImg} src={cientificos} alt='grupo de personas'/>
          <div>
            <h3 className={`text-xl font-semibold mb-3`}>COMPOSICIÓN</h3>
            <p className={`text-lg`}>
            Integrado por grupos de profesores, estudiantes e investigadores 
            reunidos en espacios de trabajo científico. Su misión principal es la 
            de generar conocimiento en forma de conceptos, metodologías y casos de
            estudio, para innovar la gestión integrada de las playas de Iberoamérica.
            </p>
          </div>
        </div>
        <div className={`${styles.cardVertical}`}>
          <Image className={styles.cardImg} src={proyectos} alt='grupo de personas'/>
          <div>
            <h3 className={`text-xl font-semibold mb-3`}>PROYECTOS</h3>
            <p className={`text-lg`}>
            Se realizan proyectos que van desde el ámbito local
            de una playa hasta análisis simultáneos de playas en distintos países.
            Conozca cada uno de los proyectos terminados, en ejecución y en
            formulación que los científicos de la Red Proplayas están trabajando.
            </p>
          </div>
        </div>
        <div className={`${styles.cardVertical}`}>
          <Image className={styles.cardImg} src={publicaciones} alt='grupo de personas'/>
          <div>
            <h3 className={`text-xl font-semibold mb-3`}>PUBLICACIONES</h3>
            <p className={`text-lg`}>
            Artículos científicos y de divulgación, libros con los últimos avances
            en gestión de playas, trabajos universitarios y tesis de postgrado,
            memorias de congresos y seminarios académicos al alcance de cualquiera
            que quiera conocer más de las playas de Iberoamérica.
            </p>
          </div>
        </div>
        <div className={`${styles.cardHorizontal}`}>
          <Image className={styles.cardImg} src={eventos} alt='grupo de personas'/>
          <div>
            <h3 className={`text-xl font-semibold mb-3`}>EVENTOS</h3>
            <p className={`text-lg`}>
            Congresos, seminarios, cursos, talleres y demás eventos académicos y
            científicos en gestión de playas están organizadas para cada Nodo Local.
            Conoce los eventos que permiten el intercambio directo entre los científicos
            que lideran la investigación en gestión y certificación de playas.
            </p>
          </div>
        </div>

      </article>

    </section>
  );
};
