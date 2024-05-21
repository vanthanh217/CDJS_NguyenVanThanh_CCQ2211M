import { Link } from 'react-router-dom';
import data from '../../data.json';
import Slider from '../../components/slide/Slider';
import ProductItem from '../../components/common/product/ProductItem';
import ProductWrap from '../../components/common/product/ProductWrap';
import PostItem from '../../components/common/post/PostItem';

const Home = () => {
    const { category, products, news } = data;
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
                                    url={item.url}
                                    title={item.title}
                                    price={item.price}
                                    salePrice={item.salePrice}
                                />
                            ))}
                    </ProductWrap>
                </section>
                {/* Main product */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-center uppercase hover:text-primary">
                        <Link to="#">Đồ uống ưa thích</Link>
                    </h2>
                    <nav className="py-4 border-y border-y-lightStrock my-9">
                        <ul className="flex items-center justify-center uppercase gap-x-12">
                            {category
                                .filter((item, index) => index < 6)
                                .map((item) => (
                                    <li
                                        className="cursor-pointer hover:text-primary"
                                        key={item.id}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                        </ul>
                    </nav>
                    <ProductWrap className="max-w-[1200px] mx-auto">
                        {products
                            .filter((item, index) => index < 8)
                            .map((item, index) => (
                                <ProductItem
                                    key={index}
                                    url={item.url}
                                    title={item.title}
                                    price={item.price}
                                    salePrice={item.salePrice}
                                />
                            ))}
                    </ProductWrap>
                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                        >
                            Xem thêm
                        </a>
                    </div>
                </section>
                {/* News */}
                <section className="mb-10">
                    <h2 className="mb-5 text-2xl font-semibold text-center uppercase">
                        <a href="#" className="hover:text-primary">
                            Tin tức
                        </a>
                    </h2>
                    <div className="grid grid-cols-3 mb-10 gap-x-5">
                        {/* Blog item */}
                        {news
                            .filter((item, index) => index < 3)
                            .map((item, index) => (
                                <PostItem
                                    key={index}
                                    url={item.url}
                                    title={item.title}
                                    author={item.author}
                                    date={item.date}
                                    desc={item.desc}
                                />
                            ))}
                    </div>
                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                        >
                            Xem thêm
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
