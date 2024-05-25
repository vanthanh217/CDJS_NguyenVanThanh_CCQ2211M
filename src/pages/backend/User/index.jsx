import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import db from '../../../data.json';
import { Pagination } from '../../../components/pagination';

const User = () => {
    const { pathname } = useLocation();
    const { user } = db;
    return (
        <>
            <HeaderContent title={'User'} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Information</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th className="w-40 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user &&
                        user.length > 0 &&
                        user
                            .filter((item, index) => index < 5)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Input type="checkbox" />
                                    </td>
                                    <td>{item.id}</td>
                                    <td className="!pr-[50px]">
                                        <div className="flex items-center gap-x-3">
                                            {item.image && (
                                                <img
                                                    src={item.image}
                                                    alt={item.image}
                                                    className="size-[60px] rounded-full object-cover"
                                                />
                                            )}
                                            <div className="flex flex-col flex-1">
                                                <span className="font-medium text-textPrimary">
                                                    {item.name}
                                                </span>
                                                <span className="font-medium text-text2nd">
                                                    {item.phone}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
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

export default User;
