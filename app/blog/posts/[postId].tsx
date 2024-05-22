// pages/posts/[postId].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Json } from '@/app/lib/definitions';

const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  const [post, setPost] = useState<Json[]>([]);
  useEffect(() => {
    if (router.query.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.postId}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [router.query.postId]);
  
  return (
    <div>
      <h1>Detalle del Post {postId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque et vitae
        iure repudiandae aliquam culpa, autem deserunt. Amet tempore veritatis
        fuga officia sint voluptatum numquam temporibus id reprehenderit. Vel,
        ut!
      </p>
    </div>
  );
};

export default PostPage;
