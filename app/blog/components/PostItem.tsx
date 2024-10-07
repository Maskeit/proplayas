//PostItem.tsx
import styles from '@/app/blog/components/blog.module.css';
import Image from 'next/image';
import avatar from '@/public/register/tortuga-marina.jpeg';

export const PostItem = ({ id, title, body, imageUrl }) => {


  return (
    <div className={styles.postItem} style={{ cursor: 'pointer' }}>
    <Image
      className={styles.postImage}
      src={avatar} // Aquí se utiliza la URL de la imagen
      width={200}
      height={200} // Define la altura para evitar layout shifts
      alt="Imagen de prueba"
    />
    <div className={styles.postContent}>
      <h2 className={styles.postTitle}>{title}</h2>
      <div className={styles.postDesc}>
        <span className={styles.postAutor}>Autor: Miguel Alejandre</span>
        <time className={styles.postDate}>14 Ago 2024</time>
      </div>
      <p>{body}</p>
    </div>
  </div>
  );
};
