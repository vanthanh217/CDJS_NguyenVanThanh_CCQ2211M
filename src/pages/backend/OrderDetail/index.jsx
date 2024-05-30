import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import db from '../../../data.json';
import { Pagination } from '../../../components/pagination';

const OrderDetail = () => {
    const { pathname } = useLocation();
    const { orderdetail } = db;
    return (
        <>
            <HeaderContent title={'Order Detail'} addBtn={false} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th className="w-[60px]">Order name</th>
                        <th className="w-[60px]">Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                        <th className="w-40 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orderdetail &&
                        orderdetail.length > 0 &&
                        orderdetail
                            .filter((item, index) => index < 5)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Input
                                            type="checkbox"
                                            className={'!p-0'}
                                        />
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.order_id}</td>
                                    <td>{item.product_id}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <div className="flex items-center justify-center text-iconText gap-x-4">
                                            <Button
                                                to={`${pathname}/edit/${item.id}`}
                                                className="p-[10px] bg-sky-400"
                                            >
                                                <IconEdit />
                                            </Button>
                                            <Button className="bg-textRed p-[10px]">
                                                <IconTrash />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </Table>
            <Pagination />
        </>
    );
};

export default OrderDetail;
