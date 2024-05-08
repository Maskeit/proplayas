'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/blog/blog.module.css';
import { Menu } from '../components/buttons';
import SideNav from '../components/sidenav';
import { Json } from '../lib/definitions';
import { Small_Button } from '../components/buttons';
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
      <div className={styles.menu}>
        <Menu toggleSidebar={toggleSidebar} isActive={isActive} />
      </div>
      <SideNav toggleSidebar={toggleSidebar} isActive={isActive} />
      <section className={styles.banner}>
        <h2 className={styles.titlesBanner}>Únete a la red de Proplayas</h2>
      </section>

      <section className={styles.content}>
        <article className={styles.lastPost}>
          {selectedPost ? (
            <div>
              <h3>
                <strong>{selectedPost.title}</strong>
              </h3>
              <p>{selectedPost.body}</p>
            </div>
          ) : (
            <p>Joder</p>
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
                ID: {post.id}, User ID: {post.userId}
              </p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
