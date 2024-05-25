import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import db from '../../../data.json';
import { Pagination } from '../../../components/pagination';

const Order = () => {
    const { pathname } = useLocation();
    const { order } = db;
    return (
        <>
            <HeaderContent title={'Order'} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th className="w-[60px]">User id</th>
                        <th>Name</th>
                        <th>Email and phone</th>
                        <th>Address</th>
                        <th className="w-40 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {order &&
                        order.length > 0 &&
                        order
                            .filter((item, index) => index < 5)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Input type="checkbox" />
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.name}</td>
                                    <td className="w-[380px]">
                                        <p className="flex flex-col">
                                            <span>{item.email}</span>
                                            <span>{item.phone}</span>
                                        </p>
                                    </td>
                                    <td>{item.address}</td>
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

export default Order;
