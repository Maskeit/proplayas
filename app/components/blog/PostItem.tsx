import styles from '@/app/components/blog/blog.module.css';
import Image from 'next/image';
import avatar from '@/public/tortuga-marina.jpeg';

export const PostItem = ({ title, body }) => {
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
          <span className={styles.postDate}>14 Ago 2024</span>
        </div>
        <p>{body}</p>

        <div className='mt-2 flex'>
          <a href="#" className={styles.postContinue}>Seguir leyendo</a>
        </div>

      </div>
    </div>
  );
};