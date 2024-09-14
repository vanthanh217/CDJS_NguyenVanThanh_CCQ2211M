import { Link } from 'react-router-dom';
import ProductWrap from '../common/product/ProductWrap';
import ProductItem from '../common/product/ProductItem';
import { useEffect, useState } from 'react';
import { BrandService, ProductService } from '../../../services';
import classNames from '../../../utils/classNames';

const ProductBrandHome = () => {
    const [url, setUrl] = useState('');
    const [brands, setBrands] = useState([]);
    const [brandId, setBrandId] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { brands } = await BrandService.getAllBrand();
            setBrands(brands);
            setBrandId(brands[0]?.id);
            setUrl(brands[0]?.slug);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const { products } = await ProductService.getAllProductByBrand(
                brandId,
                10,
            );
            setProducts(products);
        })();
    }, [brandId]);
    const handleSetTab = (item) => {
        setBrandId(item.id);
        setUrl(item.slug);
    };

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold text-center uppercase hover:text-primary">
                <Link to="/san-pham">Sản phẩm theo thương hiệu</Link>
            </h2>
            <nav className="py-4 border-y border-y-lightStrock my-9">
                <ul className="flex items-center justify-center font-medium uppercase gap-x-12">
                    {brands &&
                        brands.length > 0 &&
                        brands
                            .filter((item, index) => index < 7)
                            .map((item) => (
                                <li
                                    className={classNames(
                                        'cursor-pointer hover:text-primary',
                                        item.id === brandId
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
                    to={`/thuong-hieu/${url}`}
                    className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                >
                    Xem thêm
                </Link>
            </div>
        </section>
    );
};

export default ProductBrandHome;
