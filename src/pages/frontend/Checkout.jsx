import { useNavigate } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { FormGroup, Input, Label } from '../../components/form';
import MoMo from '../../assets/images/momo.png';
import ShipCOD from '../../assets/images/shipcod.png';
import ZaloPay from '../../assets/images/zalo-pay.png';
import CreditCard from '../../assets/images/credit-card.png';
import CartInfoRow from './common/cart/CartInfoRow';
import { Button } from '../../components/button';
import CheckoutProductItem from './common/cart/CheckoutProductItem';
import { useStore } from '../../stores/cart';
import { useEffect, useState } from 'react';
import usePagination from '../../hooks/usePagination';
import { Pagination } from '../../components/pagination';
import EmptyCart from '../../assets/images/empty_cart.png';
import { OrderService } from '../../services';
import { toast } from 'react-toastify';

const paymentMethods = [
    {
        id: 1,
        value: 'ShipCOD',
        title: 'Thanh toán sau khi nhận hàng',
        image: ShipCOD,
    },
    {
        id: 2,
        value: 'momo',
        title: 'Thanh toán bằng momo',
        image: MoMo,
    },
    {
        id: 3,
        value: 'ZaloPay',
        title: 'Thanh toán bằng ZaloPay',
        image: ZaloPay,
    },
    {
        id: 4,
        value: 'CreditCard',
        title: 'Thanh toán bằng thẻ ngân hàng',
        image: CreditCard,
    },
];

const Checkout = () => {
    const navigator = useNavigate();
    const { cart, removeCartItem, totalPrice, resetCart } = useStore(
        (state) => state,
    );
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [orderInfo, setOrderInfo] = useState({
        user_id: 1,
        name: '',
        email: '',
        phone: '',
        address: '',
        cartList: cart,
    });
    const shippingFees = 0;
    const itemsPerPage = 2;
    const {
        records: newCart,
        currentPage,
        totalPage,
        prevPage,
        nextPage,
    } = usePagination([...cart], itemsPerPage);

    useEffect(() => {
        let total = 0;
        [...cart].forEach((item) => (total += item.quantity));
        setTotalQuantity(total);
    }, [cart]);

    const labelFocus =
        'absolute left-0 !mb-0 top-1/2 -translate-y-1/2 cursor-text text-sm text-text2nd peer-focus:top-0 peer-focus:text-indigo-400 peer-focus:font-semibold transition-all ease-linear duration-200 peer-[:not]:placeholder-shown:opacity-0';

    const renderCheckoutContent = () => {
        if (newCart && newCart.length > 0) {
            return newCart.map((item, index) => (
                <CheckoutProductItem
                    key={index}
                    data={item}
                    onClick={() => removeCartItem(item.productId)}
                />
            ));
        } else {
            return (
                <li>
                    <div className="w-full">
                        <div className="mx-auto mb-3 size-24">
                            <img
                                src={EmptyCart}
                                alt="Empty Cart"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <p className="mb-3 text-lg text-center">
                            Danh sách sản phẩm trống!
                        </p>
                    </div>
                </li>
            );
        }
    };
    const handleChange = (e) => {
        setOrderInfo({
            ...orderInfo,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        (async () => {
            const response = await OrderService.insert(orderInfo);
            if (response.status === true) {
                toast.success(response.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
                resetCart();
            }
        })();
        navigator('/gio-hang', { replace: true });
    };

    return (
        <main className="container mx-auto mb-10 checkout-wrap">
            <BreadCrumbs title={'Thanh toán'} />
            <form onSubmit={handleSubmit}>
                <section className="flex gap-x-5">
                    <div className="flex-1">
                        {/* User information */}
                        <div className="p-5 bg-white mb-7 rounded-xl shadow-box">
                            <h3 className="pb-2 mb-5 text-xl font-medium border-b-2 border-lightStrock">
                                Thông tin giao hàng
                            </h3>
                            <div className="grid grid-cols-2 gap-[20px_16px]">
                                <FormGroup className={'relative'}>
                                    <Input
                                        kind={'border-bottom'}
                                        name={'name'}
                                        id="name"
                                        value={orderInfo.name}
                                        onChange={handleChange}
                                        className={
                                            'peer focus:border-indigo-400'
                                        }
                                    />
                                    <Label
                                        htmlFor={'name'}
                                        className={labelFocus}
                                    >
                                        Name
                                    </Label>
                                </FormGroup>
                                <FormGroup className={'relative'}>
                                    <Input
                                        kind={'border-bottom'}
                                        name={'email'}
                                        id="email"
                                        value={orderInfo.email}
                                        onChange={handleChange}
                                        className={
                                            'peer focus:border-indigo-400'
                                        }
                                    />
                                    <Label
                                        htmlFor={'email'}
                                        className={labelFocus}
                                    >
                                        Email
                                    </Label>
                                </FormGroup>
                                <FormGroup className={'relative'}>
                                    <Input
                                        kind={'border-bottom'}
                                        name={'phone'}
                                        id="phone"
                                        value={orderInfo.phone}
                                        onChange={handleChange}
                                        className={
                                            'peer focus:border-indigo-400'
                                        }
                                    />
                                    <Label
                                        htmlFor={'phone'}
                                        className={labelFocus}
                                    >
                                        Phone
                                    </Label>
                                </FormGroup>
                                <FormGroup className={'relative'}>
                                    <Input
                                        kind={'border-bottom'}
                                        name={'address'}
                                        id="address"
                                        value={orderInfo.address}
                                        onChange={handleChange}
                                        className={
                                            'peer focus:border-indigo-400'
                                        }
                                    />
                                    <Label
                                        htmlFor={'address'}
                                        className={labelFocus}
                                    >
                                        Address
                                    </Label>
                                </FormGroup>
                            </div>
                        </div>
                        {/* Payment Method and Discount Code */}
                        <div className="p-5 bg-white rounded-xl shadow-box">
                            <div className="mb-7">
                                <h3 className="pb-2 mb-5 text-xl font-medium border-b-2 border-lightStrock">
                                    Phương thức thanh toán
                                </h3>
                                {/* Wrapper */}
                                <div className="flex flex-col gap-y-3">
                                    {paymentMethods &&
                                        paymentMethods.length > 0 &&
                                        paymentMethods.map((item) => (
                                            <label
                                                className="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative :transition-transform select-none border-lightStrock [&_p]:has-[:checked]:translate-y-1/2 [&_p]:has-[:checked]:transition-transform [&_p]:has-[:checked]:duration-500 [&_p]:has-[:checked]:opacity-100"
                                                htmlFor={item.value}
                                                key={item.id}
                                            >
                                                <div className="relative z-10 flex items-center justify-between flex-1 gap-2">
                                                    <img
                                                        src={item.image}
                                                        alt={item.value}
                                                        className="object-contain size-14"
                                                    />
                                                    <p className="w-4/5 font-semibold absolute whitespace-nowrap translate-y-[110%] translate-x-[10%] top-1 left-4 transition-all duration-700 opacity-0 capitalize">
                                                        {item.title}
                                                    </p>
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        id={item.value}
                                                        className="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current peer"
                                                    />
                                                </div>
                                            </label>
                                        ))}
                                </div>
                            </div>
                            <div className="mb-5">
                                <h3 className="pb-2 mb-5 text-xl font-medium border-b-2 border-lightStrock">
                                    Mã giảm giá
                                </h3>
                                <Input
                                    placeholder={'Nhập mã giảm giá'}
                                    className={'focus:border-indigo-500'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 p-5 bg-white shadow-box rounded-xl h-max">
                        {/* Product item */}
                        <div>
                            <ul className="flex flex-col mb-5 gap-y-3">
                                {renderCheckoutContent()}
                            </ul>
                            {totalPage > 1 && (
                                <Pagination
                                    kind={'version02'}
                                    className={'justify-end'}
                                    currentPage={currentPage}
                                    totalPage={totalPage}
                                    prevPage={prevPage}
                                    nextPage={nextPage}
                                />
                            )}
                        </div>
                        {/* Payment details */}
                        <div className="py-3 my-5 border-y border-lightStrock">
                            <CartInfoRow
                                str={'Số lượng sản phẩm:'}
                                num={totalQuantity}
                                quantity={true}
                            />
                            <CartInfoRow
                                str={'Phí vận chuyển:'}
                                num={shippingFees}
                            />
                            <CartInfoRow str={'Tạm tính:'} num={totalPrice} />
                        </div>
                        {/* Action payment button */}
                        <div>
                            <CartInfoRow
                                str="Tổng tiền:"
                                num={totalPrice + shippingFees}
                                className="font-semibold"
                            />
                            <Button
                                type={'submit'}
                                kind={'default'}
                                className={
                                    'bg-indigo-400 w-full mt-7 py-[10px]'
                                }
                            >
                                Thanh toán
                            </Button>
                        </div>
                    </div>
                </section>
            </form>
        </main>
    );
};

export default Checkout;
