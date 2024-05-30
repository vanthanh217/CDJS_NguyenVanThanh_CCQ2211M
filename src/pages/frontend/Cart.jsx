import { Link, useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import { IconArrow, IconTrash } from '../../components/icons';
import { QuantityInput } from '../../components/quantity-input';
import CartInfoRow from '../../components/common/cart/CartInfoRow';
import { Button } from '../../components/button';

const Cart = () => {
    const { pathname } = useLocation();
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            <section className="flex gap-x-7">
                <div className="w-[70%] p-5 rounded-[10px] overflow-hidden bg-white shadow-outer">
                    {/* Cart-info__list */}
                    <div className="-mt-5">
                        <article className="flex border-b gap-x-4 py-7 border-graySoft">
                            <Link
                                to={'/san-pham/abc'}
                                className="w-[155px] h-[150px]"
                            >
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2hlcnJ5JTIwYmxvc3NvbXN8ZW58MHx8MHx8fDA%3D"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </Link>
                            <div className="flex flex-1">
                                {/* Left */}
                                <div className="flex-1">
                                    <h3 className="max-w-[400px] font-medium text-lg">
                                        <Link to={'/san/pham/abc'}>
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Nisi,
                                            dolores?
                                        </Link>
                                    </h3>
                                    <span className="block my-4 text-lg font-medium text-text2nd">
                                        20$
                                    </span>
                                    <QuantityInput />
                                </div>
                                {/* Right */}
                                <div className="flex flex-col">
                                    {/* Total price */}
                                    <span className="block text-3xl font-semibold text-right text-textRed">
                                        20$
                                    </span>
                                    <span className="flex items-center justify-end mt-auto gap-x-3 text-text2nd">
                                        <IconTrash />
                                        Remove
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
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
                                str="Subtotal:"
                                num={'$22'}
                                className="text-lg font-medium"
                            />
                            <CartInfoRow
                                str="Shipping:"
                                num={'$0.2'}
                                className="text-lg font-medium"
                            />
                            <div className="my-7 h-[1px] bg-lightGray"></div>
                            <CartInfoRow
                                str="Subtotal:"
                                num={'$22'}
                                className="text-xl font-semibold"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-5 rounded-[10px] bg-white shadow-outer h-max">
                    <CartInfoRow
                        str="Quantity:"
                        num={3}
                        className="text-lg font-medium"
                    />
                    <CartInfoRow
                        str="Subtotal:"
                        num={'$66'}
                        className="text-lg font-medium"
                    />
                    <CartInfoRow
                        str="Shipping:"
                        num={'$0.2'}
                        className="text-lg font-medium"
                    />
                    <div className="my-7 h-[1px] bg-lightGray"></div>
                    <CartInfoRow
                        str="Total Price:"
                        num={'$66.2'}
                        className="text-xl font-semibold"
                    />
                    <Button to={'/thanh-toan'} className={'w-full py-3 mt-10'}>
                        Payment
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Cart;
