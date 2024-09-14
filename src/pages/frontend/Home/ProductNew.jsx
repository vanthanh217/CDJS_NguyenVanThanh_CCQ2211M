import ProductWrap from '../common/product/ProductWrap';
import ProductItem from '../common/product/ProductItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductService } from '../../../services';

const ProductNew = () => {
    const [productsNew, setProductsNew] = useState([]);

    useEffect(() => {
        (async () => {
            const { products } = await ProductService.getListProductNew();
            setProductsNew(products);
        })();
    }, []);

    return (
        <section className="mb-10">
            <h2 className="mb-5 text-2xl font-semibold text-center uppercase hover:text-primary">
                <Link to="/san-pham">Sản phẩm mới</Link>
            </h2>
            <ProductWrap cols={5}>
                {productsNew &&
                    productsNew.length > 0 &&
                    productsNew.map((item, index) => (
                        <ProductItem key={index} item={item} />
                    ))}
            </ProductWrap>
        </section>
    );
};

export default ProductNew;
