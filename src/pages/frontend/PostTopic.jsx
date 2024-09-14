import { BreadCrumbs } from '../../components/breadcrumb';
import PostHeading from './common/post/PostHeading';
import { useEffect, useState } from 'react';
import { PostService, TopicService } from '../../services';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/css/PostTopic.scss';
import { Pagination } from '../../components/pagination';
import { urlImage } from '../../config';
import usePagination from '../../hooks/usePagination';
import PostTopicSlide from './common/post/PostTopicSlide';
import LatestPostItem from './common/post/LatestPostItem';

const PostTopic = () => {
    const { slug } = useParams();
    const [latestPosts, setLatestPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [topic, setTopic] = useState({});
    const midPoint = Math.ceil(latestPosts.length / 2);
    const slideLatestPost = latestPosts.slice(0, midPoint);
    const itemsLatestPost = latestPosts.slice(midPoint);
    const itemsPerPage = 8;
    const {
        records: newPosts,
        totalPage,
        currentPage,
        handlePageChange,
        prevPage,
        nextPage,
    } = usePagination(posts, itemsPerPage);

    useEffect(() => {
        (async () => {
            const { topic } = await TopicService.getItemBySlug(slug);
            setTopic(topic);
        })();
    }, [slug]);
    useEffect(() => {
        // Latest Post
        (async () => {
            const { posts } = await PostService.getAllPostByTopic(topic?.id, 7);
            setLatestPosts(posts);
        })();
        // All Post
        (async () => {
            const { posts } = await PostService.getAllPostByTopic(
                topic?.id,
                12,
            );
            setPosts(posts);
        })();
    }, [topic?.id]);

    return (
        <main className="container mx-auto mb-10 post-wrapper">
            <BreadCrumbs title={topic?.name} />
            {/* Latest Post By Topic */}
            <section className="mb-10">
                <PostHeading title="Bài viết mới nhất" />
                <div className="flex gap-x-5">
                    {/* Slide */}
                    <div className="w-1/2">
                        <PostTopicSlide list={slideLatestPost} />
                    </div>
                    {/* Items */}
                    <div className="flex flex-col flex-1 gap-y-2">
                        {itemsLatestPost &&
                            itemsLatestPost.length > 0 &&
                            itemsLatestPost.map((item) => (
                                <LatestPostItem
                                    key={item.id}
                                    item={item}
                                    topic={topic?.name}
                                />
                            ))}
                    </div>
                </div>
            </section>
            {/* All Post By Topic */}
            <section className="mb-10">
                <PostHeading title="Tất cả bài viết" />
                <div className="grid grid-cols-4 gap-x-3 gap-y-4">
                    {newPosts &&
                        newPosts.length > 0 &&
                        newPosts.map((item, index) => {
                            const createdAt = item?.created_at;
                            let date = new Date(createdAt);
                            let day = `0${date.getDate()}`.slice(-2);
                            let month = `0${date.getMonth() + 1}`.slice(-2);
                            let year = date.getFullYear();
                            const newCreatedAt = `${day}/${month}/${year}`;

                            return (
                                <div key={index} className="w-full">
                                    <Link
                                        to={`/tin-tuc/${item.slug}`}
                                        className="block w-full h-[275px] rounded-xl overflow-hidden mb-3"
                                    >
                                        <img
                                            src={`${urlImage}post/${item.image}`}
                                            alt={item.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </Link>
                                    <div>
                                        <span className="inline-block text-sm text-text2nd">
                                            {topic?.name} • {newCreatedAt}
                                        </span>
                                        <h2 className="mb-1 text-xl font-semibold text-textPrimary hover:text-primary line-clamp-2">
                                            <Link
                                                to={`/tin-tuc/${item.slug}`}
                                                className="block"
                                            >
                                                {item.title}
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {totalPage > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPage={totalPage}
                        handlePageChange={handlePageChange}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                )}
            </section>
        </main>
    );
};

export default PostTopic;
