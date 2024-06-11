//PostItem.tsx
import styles from '@/app/components/blog/blog.module.css';
import Image from 'next/image';
import avatar from '@/public/register/tortuga-marina.jpeg';
import Link from 'next/link'; // Importa Link para manejar la navegación de Next.js

export const PostItem = ({ title, body }) => { // Asegúrate de recibir el `id` del post
  return (
    <div className={styles.postItem}>
      <Image
        className={styles.postImage}
        src={avatar}
        width={200}
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
