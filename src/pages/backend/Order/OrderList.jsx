import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import OrderService from '../../../services/OrderService';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';

const OrderList = () => {
    const { pathname } = useLocation();
    const [orders, setOrders] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const itemsPerPage = 7;
    const {
        records: newOrders,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(orders, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await OrderService.getList();
            setOrders(res.orders);
            if (res.status === true)
                toast.success(res.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
        })();
    }, [isLoad]);
    const handleDelete = async (id) => {
        const result = await OrderService.destroy(id);
        if (result.status === true) {
            toast.success(result.message, {
                autoClose: 750,
                pauseOnHover: false,
            });
            setIsLoad(!isLoad);
        }
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Order'} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Name</th>
                        <th>Email and phone</th>
                        <th>Address</th>
                        <th className="w-52 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newOrders &&
                        newOrders.length > 0 &&
                        newOrders
                            .sort((a, b) => (a.id > b.id ? 1 : -1))
                            .map((order) => (
                                <tr key={order.id}>
                                    <td>
                                        <Input
                                            type="checkbox"
                                            className={'!p-0'}
                                        />
                                    </td>
                                    <td>{order.id}</td>
                                    <td>{order.name}</td>
                                    <td>
                                        <p className="flex flex-col">
                                            <span>{order.email}</span>
                                            <span className="text-text2nd">
                                                {order.phone}
                                            </span>
                                        </p>
                                    </td>
                                    <td>{order.address}</td>
                                    <td>
                                        <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                            <ToggleSwitch
                                                status={order.status}
                                                object={OrderService}
                                                id={order.id}
                                                isLoad={isLoad}
                                                setIsLoad={setIsLoad}
                                            />
                                            <Button
                                                to={`${pathname}/show/${order.id}`}
                                                kind={'default'}
                                                className={
                                                    'bg-teal-400 p-[10px]'
                                                }
                                            >
                                                <IconEye />
                                            </Button>
                                            <Button
                                                className="bg-textRed p-[10px]"
                                                onClick={() =>
                                                    handleDelete(order.id)
                                                }
                                            >
                                                <IconTrash />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </Table>
            {totalPage > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    handlePageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default OrderList;
