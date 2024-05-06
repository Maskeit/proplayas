import React from 'react';
import Image from 'next/image';
import styles from '@/app/components/card.module.css';
export type CardVertical = {
  text: string;
  img: string;
  title: string;
};
export const CardVertical = ({ text, img, title }:CardVertical) => {
  return (
    <div className={`${styles.cardVertical}`}>
      <Image className={styles.cardImg} src={img} alt="verticla image" />
      <div>
        <h3 className={`mb-3 text-xl font-semibold`}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

{
  /* <div className={`${styles.cardVertical}`}>
<Image className={styles.cardImg} src={proyectos} alt='grupo de personas'/>
<div>
  <h3 className={`text-xl font-semibold mb-3`}>PROYECTOS</h3>
  <p className={styles.cardText}>
  Se realizan proyectos que van desde el ámbito local
  de una playa hasta análisis simultáneos de playas en distintos países.
  Conozca cada uno de los proyectos terminados, en ejecución y en
  formulación que los científicos de la Red Proplayas están trabajando.
  </p>
</div>
</div> */
}
