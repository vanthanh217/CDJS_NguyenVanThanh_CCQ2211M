import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { Button } from '../../components/button';
import ProductItem from '../../components/common/product/ProductItem';
import ProductWrap from '../../components/common/product/ProductWrap';
import { QuantityInput } from '../../components/quantity-input';
import data from '../../data.json';

const ProductDetail = () => {
    const { products } = data;
    const btnAction = 'py-3 font-semibold uppercase w-60';
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs />
            <section className="flex mb-10 gap-x-10">
                <div className="w-2/5 px-4">
                    <div className="w-full h-[480px] rounded-[10px] overflow-hidden">
                        <img
                            src="https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_ba2462626af44d86acc19997e654a0c3.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="py-3 overflow-hidden">
                        <div className="w-[75px] h-[75px] rounded-[10px] overflow-hidden cursor-pointer thumb">
                            <img
                                src="https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_ba2462626af44d86acc19997e654a0c3.jpg"
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="mb-2 text-2xl font-semibold capitalize text-textPrimary">
                        CloudFee Hạnh Nhân Nướng
                    </h1>
                    <p className="mb-4 text-text2nd">
                        Thương hiệu:{' '}
                        <span className="text-primary">The Coffee House</span>
                    </p>
                    <div className="flex items-center mb-10 text-2xl gap-x-7">
                        <span className="font-semibold text-textRed">
                            49.000đ
                        </span>
                        <span className="text-text2nd">
                            <del>59.000đ</del>
                        </span>
                    </div>
                    <div className="mb-5 size-option">
                        <p className="mb-2 text-xl">Size:</p>
                        <div className="flex items-center gap-x-5">
                            <Button kind="normal" className="w-16 py-2">
                                M
                            </Button>
                            <Button kind="normal" className="w-16 py-2">
                                L
                            </Button>
                        </div>
                    </div>
                    <div className="mb-10 quantity-box">
                        <p className="mb-2 text-xl">Số lượng:</p>
                        <QuantityInput className="w-32 h-10" />
                    </div>
                    <div className="flex items-center action-btn gap-x-10">
                        <Button kind="ghost" className={btnAction}>
                            Thêm vào giỏ hàng
                        </Button>
                        <Button to="/gio-hang" className={btnAction}>
                            Mua
                        </Button>
                    </div>
                </div>
            </section>
            <div className="mb-10 border-y py-7 border-lightStrock">
                <h4 className="mb-2 text-lg font-semibold">Mô tả sản phẩm</h4>
                <p>
                    Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý,
                    lẫn chút ngọt ngào của kem sữa và lớp foam trứng cacao, nhấn
                    thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai
                    giòn mê ly. Tất cả cùng quyện hoà trong một thức uống làm vị
                    giác thức giấc, thơm ngon hết nấc.
                </p>
            </div>
            <section className="mb-10">
                <h1 className="mb-4 text-3xl font-medium text-center uppercase hover:text-primary">
                    <Link to="/">Sản phẩm liên quan</Link>
                </h1>
                <ProductWrap>
                    {products
                        .filter((item, index) => index < 5)
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
        </main>
    );
};

export default ProductDetail;
