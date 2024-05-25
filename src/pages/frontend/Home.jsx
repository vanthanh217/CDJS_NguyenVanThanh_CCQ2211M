import { Link } from 'react-router-dom';
import data from '../../data.json';
import Slider from '../../components/slide/Slider';
import ProductItem from '../../components/common/product/ProductItem';
import ProductWrap from '../../components/common/product/ProductWrap';
import PostItem from '../../components/common/post/PostItem';
import { useState } from 'react';
import strToSlug from '../../utils/strToSlug';
import classNames from '../../utils/classNames';

const Home = () => {
    const { category, products, post } = data;
    const [show, setShow] = useState('sinh-to');
    const [url, setUrl] = useState('');
    const handleSetTab = (cate, link) => {
        setShow(strToSlug(cate));
        setUrl(link);
    };

    return (
        <main>
            <Slider />
            <div className="container mx-auto my-10">
                {/* Sale product */}
                <section className="mb-10">
                    <h2 className="mb-3 text-2xl font-semibold text-center uppercase hover:text-primary">
                        <Link to="#">Đồ uống khuyến mãi</Link>
                    </h2>
                    <ProductWrap className="max-w-[1200px] mx-auto">
                        {products
                            .filter((item, index) => index < 4)
                            .map((item, index) => (
                                <ProductItem
                                    key={index}
                                    url={item.image}
                                    title={item.name}
                                    price={item.price}
                                    salePrice={item.pricesale}
                                />
                            ))}
                    </ProductWrap>
                </section>
                {/* Main product */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-center uppercase hover:text-primary">
                        <Link to="/san-pham">Đồ uống ưa thích</Link>
                    </h2>
                    <nav className="py-4 border-y border-y-lightStrock my-9">
                        <ul className="flex items-center justify-center uppercase gap-x-12">
                            {category
                                .filter((item, index) => index < 6)
                                .map((item) => (
                                    <li
                                        className={classNames(
                                            'cursor-pointer hover:text-primary',
                                            strToSlug(item.name) === show
                                                ? 'text-primary'
                                                : '',
                                        )}
                                        key={item.id}
                                        onClick={() =>
                                            handleSetTab(
                                                item.name,
                                                `/danh-muc/${item.slug}`,
                                            )
                                        }
                                    >
                                        {item.name}
                                    </li>
                                ))}
                        </ul>
                    </nav>
                    <ProductWrap className="max-w-[1200px] mx-auto">
                        {products
                            .filter(
                                (item, index) =>
                                    index < 8 &&
                                    strToSlug(item.category) === show,
                            )
                            .map((item, index) => (
                                <ProductItem
                                    key={index}
                                    url={item.image}
                                    title={item.name}
                                    price={item.price}
                                    salePrice={item.pricesale}
                                />
                            ))}
                    </ProductWrap>
                    <div className="text-center">
                        <Link
                            to={url}
                            className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                        >
                            Xem thêm
                        </Link>
                    </div>
                </section>
                {/* Post */}
                <section className="mb-10">
                    <h2 className="mb-5 text-2xl font-semibold text-center uppercase">
                        <Link to="#" className="hover:text-primary">
                            Tin tức
                        </Link>
                    </h2>
                    <div className="grid grid-cols-3 mb-10 gap-x-5">
                        {/* Blog item */}
                        {post
                            .filter((item, index) => index < 3)
                            .map((item) => (
                                <PostItem
                                    key={item.id}
                                    url={item.image}
                                    title={item.title}
                                    author={item.updated_by}
                                    date={item.date}
                                    desc={item.desc}
                                />
                            ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="#"
                            className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                        >
                            Xem thêm
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
