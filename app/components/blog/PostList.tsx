// PostList.tsx
import React, { useState, useEffect } from 'react';
import { PostItem } from './PostItem';
import { fetchPosts } from '@/app/lib/api';
import styles from '@/app/components/blog/blog.module.css';
import { Posts } from '@/app/lib/definitions';
import Link from 'next/link';
import { data } from 'autoprefixer';

export const PostList = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts(8);
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className={styles.postLayout}>
        {posts.map((post) => (
        <Link href={`/product/${post.id}`} target='_blank' key={post.id}>
        <PostItem
        title={post.title} 
        body={post.body} 
        />
        </Link>
      ))}
    </div>
  );
};
