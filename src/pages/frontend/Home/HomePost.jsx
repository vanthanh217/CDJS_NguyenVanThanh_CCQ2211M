import { useEffect, useState } from 'react';
import PostItem from '../common/post/PostItem';
import { Link } from 'react-router-dom';
import { PostService } from '../../../services';

const HomePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const { posts } = await PostService.getListLatestPosts('post', 3);
            setPosts(posts);
        })();
    }, []);

    return (
        <section className="mb-10">
            <h2 className="mb-5 text-2xl font-semibold text-center uppercase">
                <Link to="/tin-tuc" className="hover:text-primary">
                    Bài viết mới nhất
                </Link>
            </h2>
            <div className="grid grid-cols-3 mb-10 gap-x-5">
                {/* Post item */}
                {posts &&
                    posts.length > 0 &&
                    posts.map((item) => <PostItem key={item.id} item={item} />)}
            </div>
            <div className="text-center">
                <Link
                    to="/tin-tuc"
                    className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                >
                    Xem thêm
                </Link>
            </div>
        </section>
    );
};

export default HomePost;
