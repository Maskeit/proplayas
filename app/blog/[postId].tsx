// pages/blog/[postId].tsx
import BlogLayout from '../../components/blog/BlogLayout';
import { useRouter } from 'next/router';

const PostDetail = () => {
    const router = useRouter();
    const { postId } = router.query;

    return (
        <BlogLayout>
            <h2>Post Detail: {postId}</h2>
            <p>Content of the post here...</p>
        </BlogLayout>
    );
};

export default PostDetail;
