import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { IconArrow } from '../../components/icons';
import { Button } from '../../components/button';
import CartInfoRow from './common/cart/CartInfoRow';
import { useStore } from '../../stores/cart';
import CartProductItem from './common/cart/CartProductItem';
import EmptyCart from '../../assets/images/empty_cart.png';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { cart, removeCartItem, totalPrice } = useStore((state) => state);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const shippingFees = 0;

    useEffect(() => {
        let total = 0;
        [...cart].forEach((item) => (total += item.quantity));
        setTotalQuantity(total);
    }, [cart]);
    const renderCartContent = () => {
        if (cart && [...cart].length > 0) {
            return [...cart].map((item, index) => (
                <CartProductItem
                    key={index}
                    data={item}
                    onClick={() => removeCartItem(item.productId)}
                />
            ));
        } else {
            return (
                <div className="border-b pb-7 border-lightStrock">
                    <div className="w-1/2 mx-auto">
                        <div className="size-[250px] mb-3 mx-auto">
                            <img
                                src={EmptyCart}
                                alt="Empty Cart"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <p className="mb-3 text-lg text-center">
                            Giỏ hàng chưa có sản phẩm nào!
                        </p>
                        <Button
                            to={'/san-pham'}
                            kind={'default'}
                            className={
                                'border border-cyan-500 !text-cyan-500 py-2 uppercase font-medium w-52 mx-auto'
                            }
                        >
                            Tiếp tục mua hàng
                        </Button>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <ToastContainer />
            <main className="container mx-auto mb-10">
                <BreadCrumbs title={'Giỏ hàng'} />
                <section className="flex gap-x-7">
                    <div className="w-[70%] p-5 rounded-[10px] overflow-hidden bg-white shadow-box">
                        {/* Cart-info__list */}
                        <div className="-mt-5">{renderCartContent()}</div>
                        {/* Cart-info__bottom */}
                        <div className="flex justify-between mt-8">
                            <div className="w-2/3">
                                <div className="flex flex-col justify-end h-full">
                                    <Link
                                        to={'/san-pham'}
                                        className="flex items-center text-lg font-medium gap-x-3"
                                    >
                                        <IconArrow type="left" />
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1">
                                <CartInfoRow
                                    str="Tạm tính:"
                                    num={totalPrice}
                                    className="text-lg font-medium"
                                />
                                <CartInfoRow
                                    str="Phí vận chuyển:"
                                    num={0}
                                    className="text-lg font-medium"
                                />
                                <div className="my-7 h-[1px] bg-lightGray"></div>
                                <CartInfoRow
                                    str="Tổng tiền:"
                                    num={totalPrice + shippingFees}
                                    className="text-xl font-semibold"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-5 rounded-[10px] bg-white shadow-box h-max">
                        <CartInfoRow
                            str="Số lượng sản phẩm:"
                            num={totalQuantity}
                            quantity={true}
                            className="text-lg font-medium"
                        />
                        <CartInfoRow
                            str="Tạm tính:"
                            num={totalPrice}
                            className="text-lg font-medium"
                        />
                        <CartInfoRow
                            str="Phí vận chuyển:"
                            num={shippingFees}
                            className="text-lg font-medium"
                        />
                        <div className="my-7 h-[1px] bg-lightGray"></div>
                        <CartInfoRow
                            str="Tổng tiền:"
                            num={totalPrice + shippingFees}
                            className="text-xl font-semibold"
                        />
                        <Button
                            to={'/thanh-toan'}
                            className={'w-full py-3 mt-10'}
                        >
                            Thanh toán
                        </Button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Cart;
