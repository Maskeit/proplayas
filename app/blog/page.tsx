'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/blog/blog.module.css';
import { Menu } from '../components/buttons';
import SideNav from '../components/sidenav';
import { Json } from '../lib/definitions';
import { Small_Button } from '../components/buttons';
import Image from 'next/image';
import hero from '@/public/hero-desktop.png';
import portada from  '@/public/blog/portada-playa.webp';

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const [posts, setPosts] = useState<Json[]>([]);

  useEffect(() => {
    // Realiza una petición a la API incluyendo el parámetro _limit para limitar la cantidad de posts a 5
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Almacena los posts limitados en el estado
      })
      .catch((error) => console.error('Error fetching data:', error)); // Manejo de errores
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);

  const viewPost = (id) => {
    // Encuentra el post por ID y establece el estado selectedPost
    const post = posts.find((post) => post.id === id);
    setSelectedPost(post);
  };

  return (
    <div className={styles.blog}>
      <Menu toggleSidebar={toggleSidebar} isActive={isActive} />
      <SideNav toggleSidebar={toggleSidebar} isActive={isActive} />
      <section className={styles.banner}>
        <Image src={portada} alt='backgorund playa' className={styles.imgBanner}/>
        <div className={styles.bannerContent}>
          <h2 className={styles.titlesBanner}>Únete a la red de Proplayas</h2>
          <Small_Button text='unirse'/>
        </div>
      </section>

      <section className={styles.content}>
        <article className={styles.lastPost}>
          {selectedPost ? (
            
            
            <div className={styles.lastPostContainer}>
              <h2 className={styles.lastPostTitle}>{selectedPost.title}</h2>
              <Image src={portada} className={styles.thumbnail}  alt="blog img" />
              <p>{selectedPost.body}</p>
              <p>{selectedPost.body}</p>
              <p>{selectedPost.body}</p>
              <p>{selectedPost.body}</p>
              <p>{selectedPost.body}</p>
            </div>


          ) : (
            <div className={styles.lastPostContainer}>
              <h2 className={styles.lastPostTitle}>Titulo de publicacion</h2>
              <Image src={portada} className={styles.thumbnail} alt="blog img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure possimus rem ducimus, saepe mollitia impedit dolores rerum eum ad debitis porro nesciunt. Officia enim iusto consequuntur quia, debitis rem?</p>
            </div>
          )}
        </article>
        <article className={styles.recentNews}>
          <h2 className={styles.recentNewsTitle}>Noticias recientes</h2>
          {posts.map((post: Json) => (
            <div
              key={post.id}
              className={styles.postItem}
              onClick={() => viewPost(post.id)}
            >
              <h4>{post.title}</h4>
              <p>
                Nodo: {post.id}, usuario: {post.userId}
              </p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
