import React from 'react';
import { useState, useEffect } from 'react';
import { Posts } from '@/app/lib/definitions';
import { PostItem } from './PostItem';
import styles from "@/app/components/blog/blog.module.css"

export const PostList = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);

  return (
    <div className={styles.postLayout}>
      {posts.map((post) => (
        <div key={post.id}>
          <PostItem title={post.title} body={post.body} />
        </div>
      ))}
    </div>
  );
};
