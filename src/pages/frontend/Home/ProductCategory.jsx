import { useEffect, useState } from 'react';
import ProductWrap from '../common/product/ProductWrap';
import ProductItem from '../common/product/ProductItem';
import { Link } from 'react-router-dom';
import classNames from '../../../utils/classNames';
import { CategoryService, ProductService } from '../../../services';

const ProductCategory = () => {
    const [url, setUrl] = useState('');
    const [categories, setCategories] = useState([]);
    const [cateId, setCateId] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { categories } = await CategoryService.getAllByParentId(0);
            setCategories(categories);
            setCateId(categories[0]?.id);
            setUrl(categories[0]?.slug);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const { products } = await ProductService.getAllProductByCategory(
                cateId,
                10,
            );
            setProducts(products);
        })();
    }, [cateId]);
    const handleSetTab = (item) => {
        setCateId(item.id);
        setUrl(item.slug);
    };

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold text-center uppercase hover:text-primary">
                <Link to="/san-pham">Sản phẩm theo danh mục</Link>
            </h2>
            <nav className="py-4 border-y border-y-lightStrock my-9">
                <ul className="flex items-center justify-center font-medium uppercase gap-x-12">
                    {categories &&
                        categories.length > 0 &&
                        categories
                            .filter((item, index) => index < 7)
                            .map((item) => (
                                <li
                                    className={classNames(
                                        'cursor-pointer hover:text-primary',
                                        item.id === cateId
                                            ? 'text-primary'
                                            : '',
                                    )}
                                    key={item.id}
                                    onClick={() => handleSetTab(item)}
                                >
                                    {item.name}
                                </li>
                            ))}
                </ul>
            </nav>
            <ProductWrap cols={5}>
                {products &&
                    products.length > 0 &&
                    products.map((item, index) => (
                        <ProductItem key={index} item={item} />
                    ))}
            </ProductWrap>
            <div className="text-center">
                <Link
                    to={`/danh-muc/${url}`}
                    className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                >
                    Xem thêm
                </Link>
            </div>
        </section>
    );
};

export default ProductCategory;
