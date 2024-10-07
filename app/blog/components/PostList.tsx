// PostList.tsx
import React, { useState, useEffect } from 'react';
import { PostItem } from './PostItem';
import styles from '@/app/blog/components/blog.module.css';
import { Posts } from '@/app/lib/definitions';
import { Modal } from './Modal';

export const PostList = () => {
  // State para almacenar los posts
  const [posts, setPosts] = useState<Posts[]>([]);

  const [selectedPost, setSelectedPost] = useState<Posts | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/pages/posts');  // Llama al endpoint de la API
        const data = await response.json();
        setPosts(data);  // Guarda los posts en el estado
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();  // Ejecuta la función para traer los datos
  }, []);


  const handlePostClick = (post: Posts) => {
    setSelectedPost(post);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPost(null);
  };

  return (
    <div className={styles.postLayout}>
      {posts.map((post) => (
        <div key={post.id} onClick={() => handlePostClick(post)}>
        <PostItem 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          body={post.body} 
          imageUrl={post.imageUrl} // Pasa la URL de la imagen como prop
        />
        </div>
      ))}

      <Modal isVisible={isModalVisible} onClose={closeModal} post={selectedPost} />
    </div>
  );
};
