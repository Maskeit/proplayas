import Image from 'next/image';
import equipo from '@/public/home/equipo.png'
import cientificos from '@/public/home/cientificos.png'
import eventos from '@/public/home/eventos.png'
import proyectos from '@/public/home/proyectos.png'
import publicaciones from '@/public/home/publicaciones.png'
import placeholder from '@/public/home/placeholder.webp'
import styles from './homecontent.module.css'
import logo from '@/public/proplayas_logo.svg'
import background from '@/public/home/portada-playa.jpg'
import { lusitana, opens, quicksand, montserrat } from '@/app/ui/fonts';
import { Titlesh1 } from '../components/titles';
import { Card } from '../components/cards';


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

export const ProplayasInfo = () => {
  return (
    <section className={`p-10 pt-20 ${styles.presentation}`}>

      <article className={`grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:p-8 md:px-20 sm:p-4`}>


        <div className={`overflow-hidden flex items-center justify-center`}>
            <div className={`relative`}>
              <h3 className={`text-3xl mb-5`}>ORGANIZACION EN RED</h3>
              <p className={`text-2xl`}>
              Somos una plataforma de intercambio colaborativo en gestión y
              certificación de playas, con espectro de acción en 17 países de
              América Latina y la Península Ibérica. Nos integramos por científicos,
              activistas y empresarios unidos para un objetivo común: la Gestión de
              Playas.
              </p>
            </div>
        </div>

        <div className={``}>
          <div className={`relative`}>
            <Image className={`shadow-md rounded-tl-3xl rounded-br-3xl`} src={equipo} alt='grupo de personas'/>
          </div>
        </div>


      </article>

    </section>
  );
};

export const Activities = () => {
  return (
    <section className={styles.activities}>

      <article className={`p-20 ${styles.stripe}`}>

        <div>
            <p className={`text-2xl text-center`}>
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
    <section className={styles.sectionInfo}>
        <h1>NODOS CIENTÍFICOS</h1>
        
        <article className={`grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-8 md:px-20`}>
        
        <Card
          img={cientificos}
          altext='Imagen de los proyectos'
          title="COMPOSICIÓN"
          text="Integrado por grupos de profesores, estudiantes e investigadores 
          reunidos en espacios de trabajo científico. Su misión principal es la 
          de generar conocimiento en forma de conceptos, metodologías y casos de
          estudio, para innovar la gestión integrada de las playas de Iberoamérica."
        />

        <Card
          img={proyectos}
          altext='Imagen de los proyectos'
          title="PROYECTOS"
          text="Se realizan proyectos que van desde el ámbito local
                de una playa hasta análisis simultáneos de playas en distintos países.
                Conozca cada uno de los proyectos terminados, en ejecución y en
                formulación que los científicos de la Red Proplayas están trabajando."
        />

        <Card
          img={publicaciones}
          altext='Imagen de los proyectos'
          title="PUBLICACIONES"
          text="Artículos científicos y de divulgación, libros con los últimos avances
          en gestión de playas, trabajos universitarios y tesis de postgrado,
          memorias de congresos y seminarios académicos al alcance de cualquiera
          que quiera conocer más de las playas de Iberoamérica."
        />

        <Card
          img={eventos}
          altext='Imagen de los proyectos'
          title="EVENTOS"
          text=" Congresos, seminarios, cursos, talleres y demás eventos académicos y
          científicos en gestión de playas están organizadas para cada Nodo Local.
          Conoce los eventos que permiten el intercambio directo entre los científicos
          que lideran la investigación en gestión y certificación de playas."
        />
        
      </article>
    </section>
  );
};

export const SocialNodes = () => {
  return (
    <section className={styles.sectionInfo}>
        <h1 className={`text-center`}>NODOS SOCIALES Y ACTIVISTAS</h1>
        
        <article className={`grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 p-8 md:px-20`}>
        
        <Card
          img={placeholder}
          altext='Placeholder'
          title="CAMPAÑAS CIUDADANAS"
          text="Muchas veces los cambios requieren la movilización ciudadana, en especial 
          cuando el patrimonio natural y cultural está en riesgo. Las campañas ciudadanas 
          organizadas por los Nodos de la Sociedad Civil y Activistas son la demostración 
          del compromiso y poder que se ejerce desde la Red PROPLAYAS por una verdadera 
          gestión integrada."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="LIDERAZGO"
          text="Los Nodos de la Sociedad Civil y Activistas agrupan líderes ciudadanos 
          comprometidos con una verdadera gestión integrada de las playas, más allá del 
          simple lucro de ese valioso espacio. Asociaciones, fundaciones, corporaciones y 
          otros tipos de organizaciones no gubernamentales hacen parte de los Nodos de la 
          Sociedad Civil y Activistas."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="ACTIVIDADES"
          text="Visitas escolares a playas, presentaciones de proyectos, iniciativas 
          orientadas a la gestión integrada, rendiciones de cuentas y más actividades 
          con interés general, son realizadas por los Nodos de la Sociedad Civil y/o 
          Activistas, quienes salvaguardan las playas de cada país y del continente mismo. 
          Conozca aquí todas las actividades y acompañe su realización."
        />
        
      </article>
    </section>
  );
};

export const BusinessNodes = () => {
  return (
    <section className={styles.sectionInfo}>
        <h1>NODOS EMPRESARIALES</h1>
        
        <article className={`grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 p-8 md:px-20`}>
        
        <Card
          img={placeholder}
          altext='Placeholder'
          title="GESTIÓN"
          text="La gestión de playas requiere equipos de consultores expertos, que asesoren 
          a quienes toman las decisiones sobre ecosistemas costeros. Los Nodos Empresariales 
          son organizaciones que cuentan con el conocimiento y experiencia suficiente para 
          lograr un resultado óptimo en cualquier iniciativa pública o privada."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="ÁREAS DE CONSULTORÍA"
          text="Las áreas en que los Nodos Empresariales brindan asesoría son muy amplias, 
          pueden desarrollar desde estudios de capacidad de carga recreativa hasta llevar a 
          cabo el montaje de plataformas digitales de monitoreo. Conozca las temáticas y 
          tipos de estudios que pueden hacer que la playa de su interés vaya hacia el óptimo 
          nivel de gestión."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="CLIENTES"
          text="Administraciones públicas, condominios a pie de playa, cadenas hoteleras, 
          todos son clientes de los Nodos Empresariales de la Red PROPLAYAS, pues reconocen 
          que aquí se encuentra la experticia en gestión y certificación de playas. Sorpréndase 
          con la variedad de organizaciones que han creído en nosotros, conózcalas aquí."
        />
        
      </article>
    </section>
  );
};

export const Regulation = () => {
  return (
    <section className={styles.sectionInfo}>
        <h1>REGULACIÓN</h1>
        
        <article className={`grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-8 md:px-20`}>
        
        <Card
          img={placeholder}
          altext='Placeholder'
          title="LEYES"
          text="Una ley es una norma con poder jurídico que sirve para regular algún 
          aspecto de interés para una nación, en este sentido, para nosotros es importante 
          conocer y divulgar las leyes que se han venido gestando sobre el ámbito 
          marino-costero, desde cada uno de los países miembros de la Red PROPLAYAS."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="POLÍTICAS PÚBLICAS"
          text="Las políticas públicas son planes de acción que el Estado diseña y 
          ejecuta a través de una administración publica con el objetivo de resolver 
          problemas públicos específicos, en este sentido, para nosotros es importante 
          conocerlas y gestarlas desde cada país miembro de la Red.."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="POLÍTICAS SECTORIALES"
          text="Una política sectorial es un reglamento que surge de un ministerio o 
          consejería con relación a un tema específico, en este sentido, para nosotros 
          es importante conocer y divulgar las políticas gestadas sobre el ámbito 
          marino-costero, desde cada país miembro de la Red PROPLAYAS."
        />

        <Card
          img={placeholder}
          altext='Placeholder'
          title="CARTILLAS Y MANUALES"
          text="Derivado de la aplicación de políticas, leyes y demás normativas, 
          en algunos países de la Red PROPLAYAS han surgido documentos que, a manera 
          de cartillas, manuales, documentos técnicos y otros; brindan aspectos, 
          consideraciones y procedimientos para atender, solucionar y prevenir problemas 
          en relación al mar y la costa."
        />
        
      </article>
    </section>
  );
};

// sm: min-width 640px
// md: min-width 768px
// lg: min-width 1024px
// xl: min-width 1280x
// 2xl: min-width 1536x

export const JoinUs = () => {
  return (
    // Para toda la sección dentro de la página
    <section className={`p-10 flex h-full min-h-screen sm:p-4 md:p-6`}>
      {/* Para el contenido */}
        <article className={`p-2 flex justify-center items-center h-auto sm:p-1`}>
          {/* Recuadro verde contenedor de todo*/}
          <div className={`group flex flex-col justify-center items-start gap-2 w-3/5 h-3/5 duration-500 relative rounded-2xl p-10 bg-verde-200 hover:-translate-y-2 shadow-lg hover:shadow-2xl shadow-gray-400
                            sm:p-4 sm:w-full sm:h-auto
                            md:p-10 md:w-5/6 md:h-3/4
                            lg:p-20 lg:w-3/4 lg:h-2/3
                            xl:p-20 2xl:p-30
                          `}>
            
            {/* Recuadro > Imágen */}
            <div className={`absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-16 -right-10 w-2/5 h-2/5 rounded-3xl overflow-hidden
                            sm:w-1/2 sm:h-1/2 
                            md:w-3/5 md:h-2/5 
                            lg:w-3/5 lg:h-2/5 
                            xl:w-1/2 xl:h-1/2 xl:-bottom-24
                            `}>
              <Image className={`rounded-3xl object-cover w-full h-full`} src={placeholder} alt='placeholder'/>
            </div>

            {/* Contenido Textual */} 
            <div className={`mb-6`}>
              <h2 className={`text-2xl font-semibold mb-5 text-gray-950
                              lg:text-xl xl:text-2xl
                              2xl:text-4xl 2xl:mb-10`}>¡Únete a nosotros!</h2>
              <p className={`text-gray-800 text-lg font-medium
                              lg:text-base 2xl:text-xl`}>
                    La vinculación a la Red PROPLAYAS no tiene costo y parte de un principio colaborativo y de buena voluntad. 
                    Para pertenecer a esta se debe conformar un Nodo Local, con al menos un miembro, que será la unidad central de intercambio. 
                    Cada Nodo debe diligenciar y mantener actualizada su ficha de registro.
              </p>
            </div>

            {/* Botón */}
            <button className={`hover:bg-azul-600 bg-azul-500 text-white mt-2 rounded-xl px-6 py-3 
                                lg:text-base
                                2xl:text-xl 2xl:py-3 2xl:px-6 2xl:mt-2`}> 
              Contáctanos aquí 
            </button>

          </div>

        </article>
    </section>
  );
};