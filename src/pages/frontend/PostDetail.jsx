import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/breadcrumb';
import { useLocation, useParams } from 'react-router-dom';
import { PostService } from '../../services';
import { urlImage } from '../../config';
import PostHeading from './common/post/PostHeading';
import PostItem from './common/post/PostItem';

const PostDetail = () => {
    const { pathname } = useLocation();
    const { slug } = useParams();
    const [post, setPost] = useState({});

    const [relatedPosts, setRelatedPosts] = useState([]);
    const createdAt = post?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;

    useEffect(() => {
        (async () => {
            const { post, postother } = await PostService.getPostDetail(
                slug,
                6,
            );
            setPost(post);
            setRelatedPosts(postother);
        })();
    }, [slug]);
    console.log(post);

    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            <section className="mb-10 w-[80%] mx-auto">
                <span className="inline-block mb-2 text-sm text-text2nd">
                    Kent • {newCreatedAt}
                </span>
                <h1 className="mb-4 text-3xl font-semibold text-textPrimary">
                    {post?.title}
                </h1>
                <div
                    dangerouslySetInnerHTML={{ __html: post?.detail }}
                    className="mb-4 text-text2nd"
                />
                <p className="mb-4">
                    <img
                        src={`${urlImage}post/${post?.image}`}
                        alt={post?.image}
                        className="mx-auto max-h-[400px] w-3/4 object-cover"
                    />
                </p>
                <p
                    dangerouslySetInnerHTML={{ __html: post?.description }}
                    className="mb-2 text-text2nd"
                />
            </section>
            <section className="mb-7">
                <PostHeading title="Related Posts" />
                <div className="grid grid-cols-3 gap-5">
                    {relatedPosts &&
                        relatedPosts.length > 0 &&
                        relatedPosts.map((item, index) => (
                            <PostItem key={index} item={item} />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default PostDetail;
