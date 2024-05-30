import { useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { Pagination } from '../../components/pagination';
import PostHeading from '../../components/common/post/PostHeading';
import PostItem from '../../components/common/post/PostItem';

const PostDetail = () => {
    const { pathname } = useLocation();
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            <section className="mb-10 w-[80%] mx-auto">
                <span className="inline-block mb-2 text-sm text-text2nd">
                    Kent • 29/05/2024
                </span>
                <h1 className="mb-4 text-3xl font-semibold text-textPrimary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="mb-4 text-text2nd">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    culpa quod natus voluptas ab earum est dolor sit
                    consectetur? At ex dolore, earum nemo cupiditate quo! Ea
                    itaque repudiandae ratione necessitatibus odio a adipisci
                    animi beatae suscipit unde dolores voluptatibus quo
                    laboriosam consequatur iure consequuntur, debitis facilis
                    obcaecati sequi? Excepturi sint ratione nulla cupiditate?
                    Numquam quis aperiam, mollitia modi commodi nam sapiente
                    sunt nihil doloremque illum, eum incidunt voluptatem veniam
                    saepe! Quae dolorum ullam commodi molestias itaque maiores
                    est impedit praesentium, iure id perferendis ducimus
                    provident amet consequatur magnam natus molestiae atque
                    cupiditate blanditiis quos accusamus. Fugiat nobis
                    consequuntur inventore!
                </p>
                <p className="mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww"
                        alt=""
                        className="mx-auto"
                    />
                </p>
                <p className="mb-2 text-text2nd">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam ex laudantium dolores sit, neque soluta placeat
                    molestiae iusto nihil, libero perferendis eius enim quos at
                    odit illum? Sunt cumque non ducimus quae, qui unde
                    voluptates, magni alias aut aperiam sed nam, ab nisi
                    voluptas repudiandae dolores nihil officia vero? Assumenda
                    voluptates a ipsum quam fugit sunt in, quaerat eos hic sint!
                    Iusto vitae maxime harum ut, odit quas, voluptatum mollitia
                    magnam dicta, excepturi nesciunt ipsa? Iusto deleniti odit
                    illum repellat quo architecto, ad rem fugit quisquam
                    repudiandae nulla optio nisi modi exercitationem laborum
                    saepe hic voluptatum ab ipsum veniam soluta?
                </p>
            </section>
            <section className="mb-7">
                <PostHeading title="Related Posts" />
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
                </div>
            </section>
            <Pagination />
        </main>
    );
};

export default PostDetail;
