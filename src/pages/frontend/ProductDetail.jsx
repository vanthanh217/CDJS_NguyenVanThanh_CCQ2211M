import { Link, useNavigate, useParams } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { Button } from '../../components/button';
import ProductItem from './common/product/ProductItem';
import ProductWrap from './common/product/ProductWrap';
import { QuantityInput } from '../../components/quantity-input';
import { useEffect, useState } from 'react';
import { BrandService, ProductService } from '../../services';
import { urlImage } from '../../config';
import { useStore } from '../../stores/cart';

const ProductDetail = () => {
    const btnAction = 'py-3 font-semibold uppercase w-60';
    const navigate = useNavigate();
    const { slug } = useParams();
    const [brands, setBrands] = useState([]);
    const [productItem, setProductItem] = useState({});
    const [otherProduct, setOtherProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const brandName = brands.find(
        (item) => item.id === productItem.brand_id,
    )?.name;
    const { addToCart } = useStore((state) => state);
    const price =
        productItem?.pricesale > 0
            ? productItem?.pricesale
            : productItem?.price;

    useEffect(() => {
        (async () => {
            const { brands } = await BrandService.getAllBrand();
            const { product, productother } =
                await ProductService.getProductBySlug(slug, 5);
            setBrands(brands);
            setProductItem(product);
            setOtherProduct(productother);
        })();
    }, [slug]);
    const handleAddToCart = () => {
        addToCart({ productId: productItem.id, price, quantity });
    };
    const handlePurchase = () => {
        addToCart({ productId: productItem?.id, price, quantity: 1 });
        navigate('/thanh-toan');
    };

    const renderPrice = (item) => {
        if (item.pricesale > 0 && item.pricesale < item.price) {
            return (
                <>
                    <span className="text-2xl font-medium text-textRed">
                        {parseFloat(item.pricesale).toLocaleString('vi-VI')} VNĐ
                    </span>
                    <span className="text-xl text-text2nd">
                        <del>
                            {parseFloat(item.price).toLocaleString('vi-VI')} VNĐ
                        </del>
                    </span>
                </>
            );
        } else {
            return (
                <span className="text-2xl font-medium text-textRed">
                    {parseFloat(item.price).toLocaleString('vi-VI')} VNĐ
                </span>
            );
        }
    };

    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs title={productItem.name} />
            <section className="flex mb-10 gap-x-10">
                <div className="w-2/5 px-4">
                    <div className="w-full h-[480px] rounded-[10px] overflow-hidden">
                        <img
                            src={`${urlImage}product/${productItem.image}`}
                            alt={productItem.image}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="py-3 overflow-hidden">
                        <div className="w-[75px] h-[75px] rounded-[10px] overflow-hidden cursor-pointer thumb">
                            <img
                                src={`${urlImage}product/${productItem.image}`}
                                alt={productItem.image}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="mb-2 text-2xl font-semibold capitalize text-textPrimary">
                        {productItem.name}
                    </h1>
                    <p className="mb-4 text-text2nd">
                        Thương hiệu:{' '}
                        <span className="text-primary">{brandName}</span>
                    </p>
                    <div className="flex items-center mb-10 gap-x-7">
                        {renderPrice(productItem)}
                    </div>
                    <div className="mb-10 quantity-box">
                        <p className="mb-2 text-xl">Số lượng:</p>
                        <QuantityInput
                            className="w-32 h-10"
                            withoutUseStore={true}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    </div>
                    <div className="flex items-center action-btn gap-x-10">
                        <Button
                            kind="ghost"
                            className={btnAction}
                            onClick={handleAddToCart}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                        <Button className={btnAction} onClick={handlePurchase}>
                            Mua
                        </Button>
                    </div>
                </div>
            </section>
            <div className="mb-10 border-y py-7 border-lightStrock">
                <h4 className="mb-2 text-lg font-semibold">Mô tả sản phẩm</h4>
                <div
                    dangerouslySetInnerHTML={{ __html: productItem?.detail }}
                />
            </div>
            <section className="mb-10">
                <h1 className="mb-5 text-3xl font-medium text-center uppercase hover:text-primary">
                    <Link to="/">Sản phẩm liên quan</Link>
                </h1>
                <ProductWrap cols={5}>
                    {otherProduct.map((item, index) => (
                        <ProductItem key={index} item={item} />
                    ))}
                </ProductWrap>
            </section>
        </main>
    );
};

export default ProductDetail;
