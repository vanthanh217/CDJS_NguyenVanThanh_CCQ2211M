import { useEffect, useState } from 'react';
import { ProductService } from '../../../services';
import { Link } from 'react-router-dom';
import ProductWrap from '../common/product/ProductWrap';
import ProductItem from '../common/product/ProductItem';

const ProductFlashSale = () => {
    const [productsSale, setProductsSale] = useState([]);

    useEffect(() => {
        (async () => {
            const { products } = await ProductService.getListProductFlashSale(
                5,
            );
            setProductsSale(products);
        })();
    }, []);

    return (
        <section className="mb-10">
            <h2 className="mb-5 text-2xl font-semibold text-center uppercase hover:text-primary">
                <Link to="/san-pham">Sản phẩm khuyến mãi</Link>
            </h2>
            <ProductWrap cols={5}>
                {productsSale &&
                    productsSale.length > 0 &&
                    productsSale.map((item, index) => (
                        <ProductItem key={index} item={item} />
                    ))}
            </ProductWrap>
        </section>
    );
};

export default ProductFlashSale;
