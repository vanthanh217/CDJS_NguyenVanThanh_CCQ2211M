import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { useEffect, useState } from 'react';
import { PostService } from '../../services';
import SidebarProduct from './common/product/SidebarProduct';

const Pages = () => {
    const { slug } = useParams();
    const [page, setPage] = useState({});
    const [policyList, setPolicyList] = useState([]);

    useEffect(() => {
        (async () => {
            const { post, postother } = await PostService.getPostDetail(
                slug,
                10,
            );
            setPage(post);
            setPolicyList(postother);
        })();
    }, [slug]);

    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs title={page?.title} />
            <section className="flex mb-7 gap-x-7">
                <aside className="w-[300px]">
                    <SidebarProduct
                        title={'Chính sách'}
                        link={'/pages'}
                        list={policyList}
                    />
                </aside>
                <div className="flex-1 p-5 bg-white shadow-box rounded-xl">
                    <h1 className="mb-4 text-3xl font-semibold">
                        {page?.title}
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: page?.detail }} />
                </div>
            </section>
        </main>
    );
};

export default Pages;
