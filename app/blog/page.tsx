'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/blog/blog.module.css';
import { useRouter } from 'next/router';
import { Json } from '../lib/definitions';
import { Small_Button } from '../components/buttons';
import Image from 'next/image';
import portada from '@/public/blog/portada-playa.webp';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const [posts, setPosts] = useState<Json[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const start = (page - 1) * 5;
    // Realiza una petición a la API incluyendo el parámetro _limit para limitar la cantidad de posts a 5
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setPosts(data); // Almacena los posts limitados en el estado
        } else {
          setPosts((prevPosts) => [...prevPosts, ...data]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error)); // Manejo de errores
  }, [page]);

  const viewPost = (id) => {
    const router = useRouter();
    router.push(`/posts/${id}`);
  };

  return (
    <div className={styles.blog}>
      <section className={styles.banner}>
        <Image
          src={portada}
          alt="backgorund playa"
          className={styles.imgBanner}
        />
        <div className={styles.bannerContent}>
          <h2 className={styles.titlesBanner}>Únete a la red de Proplayas</h2>
          <Small_Button text="Unirse" />
        </div>
      </section>

      <section className={styles.content}>
        <article className={styles.recentNews}>
          <h2 className={styles.recentNewsTitle}>Noticias recientes</h2>
          <div>
            {posts.map((post) => (
              <div key={post.id} className={styles.postItem} onClick={() => viewPost(post.id)}>
                <a href={`/blog/posts/${post.id}`} target="_blank" rel="noopener noreferrer">
                  <h4>{post.title}</h4>
                  <p>Nodo: {post.id}, usuario: {post.userId}</p>
                </a>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
