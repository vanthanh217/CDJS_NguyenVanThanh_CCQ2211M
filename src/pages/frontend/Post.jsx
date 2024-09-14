import { Link, useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import PostHeading from './common/post/PostHeading';
import LatestPostItem from './common/post/LatestPostItem';
import PostItem from './common/post/PostItem';
import { Pagination } from '../../components/pagination';
import { useEffect, useState } from 'react';
import { PostService, TopicService } from '../../services';
import { urlImage } from '../../config';
import usePagination from '../../hooks/usePagination';

const Post = () => {
    const { pathname } = useLocation();
    const [largeLatestPost, setLargeLatestPost] = useState({});
    const [latestPosts, setLatestPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [topics, setTopics] = useState([]);
    const itemsPerPage = 9;
    const {
        records: newPosts,
        totalPage,
        currentPage,
        handlePageChange,
        prevPage,
        nextPage,
    } = usePagination(posts, itemsPerPage);

    useEffect(() => {
        // Latest posts
        (async () => {
            const { posts } = await PostService.getListLatestPosts('post', 4);
            if (posts?.length > 0) {
                setLargeLatestPost(posts[0]);
                setLatestPosts(posts.slice(1));
            }
        })();
        // All posts and topics
        (async () => {
            const { posts } = await PostService.getAllPost('post');
            const { topics } = await TopicService.getAllTopic();
            setPosts(posts);
            setTopics(topics);
        })();
    }, []);

    const createdAt = largeLatestPost?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;

    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            {/* Topic */}
            <section className="mb-10">
                <ul className="flex items-center justify-center gap-x-5">
                    {topics &&
                        topics.length > 0 &&
                        topics.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={`/chu-de/${item.slug}`}
                                    className="inline-block px-5 py-2 text-lg bg-white shadow-box rounded-xl hover:bg-primary hover:text-textDark"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </section>
            {/* Latest Posts */}
            <section className="mb-10">
                <PostHeading title="Tin tức mới nhất" />
                <div className="flex gap-x-5">
                    {/* Large Latest Post Item */}
                    <div className="w-1/2">
                        <Link
                            to={`/tin-tuc/${largeLatestPost.slug}`}
                            className="h-[400px] rounded-[10px] overflow-hidden block mb-3"
                        >
                            <img
                                src={`${urlImage}post/${largeLatestPost.image}`}
                                alt={largeLatestPost.image}
                                className="object-cover w-full h-full"
                            />
                        </Link>
                        <div>
                            <span className="inline-block text-sm text-text2nd">
                                Kent • {newCreatedAt}
                            </span>
                            <h2 className="mb-1 text-2xl font-semibold text-textPrimary hover:text-primary line-clamp-2">
                                <Link
                                    to={`/tin-tuc/${largeLatestPost.slug}`}
                                    className="block"
                                >
                                    {largeLatestPost.title}
                                </Link>
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: largeLatestPost.description,
                                }}
                                className="text-sm line-clamp-3"
                            />
                        </div>
                    </div>
                    {/* Latest Posts Item */}
                    <div className="flex flex-col flex-1 gap-y-5">
                        {latestPosts &&
                            latestPosts.length > 0 &&
                            latestPosts.map((item, index) => (
                                <LatestPostItem key={index} item={item} />
                            ))}
                    </div>
                </div>
            </section>
            <section className="mb-7">
                <PostHeading title="Tất cả bài viết" />
                <div className="grid grid-cols-3 gap-5">
                    {newPosts &&
                        newPosts.length > 0 &&
                        newPosts.map((item, index) => (
                            <PostItem key={index} item={item} />
                        ))}
                </div>
            </section>
            {totalPage > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    handlePageChange={handlePageChange}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            )}
        </main>
    );
};

export default Post;
