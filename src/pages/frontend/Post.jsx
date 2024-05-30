import { Link, useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import PostHeading from '../../components/common/post/PostHeading';
import LatestPostItem from '../../components/common/post/LatestPostItem';
import PostItem from '../../components/common/post/PostItem';
import { Pagination } from '../../components/pagination';

const Post = () => {
    const { pathname } = useLocation();
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            {/* Latest Posts */}
            <section className="mb-10">
                <PostHeading title="Latest blog posts" />
                <div className="flex gap-x-5">
                    {/* Large Latest Posts Item */}
                    <div className="w-1/2">
                        <Link
                            to={'abc'}
                            className="h-[400px] rounded-[10px] overflow-hidden block mb-3"
                        >
                            <img
                                src="https://plus.unsplash.com/premium_photo-1664547606956-22749d0e0d77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww"
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </Link>
                        <div>
                            <span className="inline-block text-sm text-text2nd">
                                Kent • 29/05/2024
                            </span>
                            <h2 className="mb-1 text-2xl font-semibold text-textPrimary hover:text-primary">
                                <Link to={'abc'} className="block">
                                    latest posts
                                </Link>
                            </h2>
                            <p className="text-sm line-clamp-3">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Tempore aperiam reiciendis
                                eius suscipit, minus harum incidunt qui optio
                                voluptas magni iure beatae autem perferendis,
                                iste voluptatem, cupiditate sunt amet. Beatae.
                            </p>
                        </div>
                    </div>
                    {/* Latest Posts Item */}
                    <div className="flex flex-col w-1/2 gap-y-5">
                        <LatestPostItem
                            to={'abc'}
                            image={
                                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                            }
                            author={'Kent'}
                            date={'29/05/2024'}
                            title={
                                'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            }
                            desc={
                                ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                            }
                        />
                        <LatestPostItem
                            to={'abc'}
                            image={
                                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                            }
                            author={'Kent'}
                            date={'29/05/2024'}
                            title={
                                'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            }
                            desc={
                                ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                            }
                        />
                        <LatestPostItem
                            to={'abc'}
                            image={
                                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                            }
                            author={'Kent'}
                            date={'29/05/2024'}
                            title={
                                'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            }
                            desc={
                                ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                            }
                        />
                    </div>
                </div>
            </section>
            <section className="mb-7">
                <PostHeading title="All blog posts" />
                <div className="grid grid-cols-3 gap-5">
                    <PostItem
                        to={'abc'}
                        url={
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                        }
                        author={'Kent'}
                        date={'29/05/2024'}
                        title={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                        }
                        desc={
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                        }
                    />
                    <PostItem
                        to={'abc'}
                        url={
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                        }
                        author={'Kent'}
                        date={'29/05/2024'}
                        title={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                        }
                        desc={
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                        }
                    />
                    <PostItem
                        to={'abc'}
                        url={
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                        }
                        author={'Kent'}
                        date={'29/05/2024'}
                        title={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                        }
                        desc={
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                        }
                    />
                    <PostItem
                        to={'abc'}
                        url={
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                        }
                        author={'Kent'}
                        date={'29/05/2024'}
                        title={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                        }
                        desc={
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                        }
                    />
                    <PostItem
                        to={'abc'}
                        url={
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                        }
                        author={'Kent'}
                        date={'29/05/2024'}
                        title={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                        }
                        desc={
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                        }
                    />
                    <PostItem
                        to={'abc'}
                        url={
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww'
                        }
                        author={'Kent'}
                        date={'29/05/2024'}
                        title={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                        }
                        desc={
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem tempora voluptate sunt saepe expedita mollitia animi voluptatibus. Error fugiat sit nesciunt porro tenetur eveniet perferendis fuga neque rerum!'
                        }
                    />
                </div>
            </section>
            <Pagination />
        </main>
    );
};

export default Post;
