import { Button } from '../../../components/button';
import { IconXMark } from '../../../components/icons';
import { Pagination } from '../../../components/pagination';
import classNames from '../../../utils/classNames';
import CartItem from './CartItem';
import { useStore } from '../../../stores/cart';
import usePagination from '../../../hooks/usePagination';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
    const navigator = useNavigate();
    const { cart, totalPrice, isOpenCartBar, toggleStatusCartBar } = useStore(
        (state) => state,
    );
    const itemsPerPage = 4;
    const {
        records: newCart,
        currentPage,
        totalPage,
        prevPage,
        nextPage,
    } = usePagination([...cart], itemsPerPage);

    const handleClickButton = (link) => {
        toggleStatusCartBar();
        navigator(link, { replace: true });
    };

    return (
        <div
            id="cart-sidebar"
            className={classNames(
                'fixed w-[375px] h-[98%] top-2 z-[1000] bg-white shadow-box transition-[right] ease-linear duration-300 rounded-lg',
                isOpenCartBar ? 'right-1' : 'right-[-375px]',
            )}
        >
            {/* Cart Header */}
            <div className="flex items-center justify-between p-5 mb-5 border-b border-lightStrock">
                <h3 className="text-xl font-semibold">Giỏ hàng</h3>
                <span
                    className="p-2 cursor-pointer"
                    onClick={toggleStatusCartBar}
                >
                    <IconXMark />
                </span>
            </div>
            {/* Cart Body */}
            <div className="flex flex-col px-5 mb-5 gap-y-2">
                {newCart &&
                    newCart.length > 0 &&
                    newCart.map((item) => (
                        <CartItem key={item.productId} data={item} />
                    ))}
            </div>
            {totalPage > 1 && (
                <Pagination
                    kind={'version02'}
                    className={'justify-end px-5'}
                    currentPage={currentPage}
                    totalPage={totalPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            )}

            {/* Cart Footer */}
            <div className="absolute w-full px-5 bottom-5">
                {/* Total Amount */}
                <div className="flex items-center justify-between p-[12px_15px] border-2 border-lightStrock rounded-xl mb-5">
                    <h5 className="text-lg font-semibold">Tổng tiền: </h5>
                    <span className="font-medium text-text2nd">
                        {parseFloat(totalPrice).toLocaleString('VI-vi')} VNĐ
                    </span>
                </div>
                <div className="flex items-center gap-x-5">
                    <Button
                        kind={'ghost'}
                        className={'flex-1 py-2'}
                        onClick={() => handleClickButton('/gio-hang')}
                    >
                        Chi tiết
                    </Button>
                    <Button
                        className={'flex-1 py-2'}
                        onClick={() => handleClickButton('/thanh-toan')}
                    >
                        Thanh toán
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
