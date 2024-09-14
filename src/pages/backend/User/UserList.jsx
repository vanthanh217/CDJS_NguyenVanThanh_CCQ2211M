import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import UserService from '../../../services/UserService';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';
import { urlImage } from '../../../config';

const UserList = () => {
    const { pathname } = useLocation();
    const [users, setUsers] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const itemsPerPage = 7;
    const {
        records: newUsers,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(users, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await UserService.getList();
            setUsers(res.users);
            if (res.status === true)
                toast.success(res.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            else
                toast.error(res.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
        })();
    }, [isLoad]);
    const handleDeleteItem = async (id) => {
        const result = await UserService.destroy(id);
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
            <HeaderContent title={'User'} addBtn={true} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>User Info</th> {/*Image, name and phone */}
                        <th>Email</th>
                        <th>Username</th>
                        <th>Roles</th>
                        <th className="w-44 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newUsers &&
                        newUsers.length > 0 &&
                        newUsers.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <Input type="checkbox" className={'!p-0'} />
                                </td>
                                <td>{user.id}</td>
                                <td className="!pr-[50px]">
                                    <div className="flex items-center gap-x-3">
                                        {user.image && (
                                            <img
                                                src={`${urlImage}user/${user.image}`}
                                                alt={user.image}
                                                className="size-[85px] rounded-full object-cover"
                                            />
                                        )}
                                        <div className="flex flex-col flex-1">
                                            <span className="font-medium text-textPrimary">
                                                {user.name}
                                            </span>
                                            <span className="font-medium text-text2nd">
                                                {user.phone}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.roles}</td>
                                <td>
                                    <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                        <Button
                                            to={`${pathname}/show/${user.id}`}
                                            className="p-[10px] bg-teal-400"
                                        >
                                            <IconEye />
                                        </Button>
                                        <Button
                                            to={`${pathname}/edit/${user.id}`}
                                            className="p-[10px] bg-sky-400"
                                        >
                                            <IconEdit />
                                        </Button>
                                        <Button
                                            className="bg-textRed p-[10px]"
                                            onClick={() =>
                                                handleDeleteItem(user.id)
                                            }
                                        >
                                            <IconTrash />
                                        </Button>
                                        <ToggleSwitch
                                            object={UserService}
                                            status={user.status}
                                            id={user.id}
                                            isLoad={isLoad}
                                            setIsLoad={setIsLoad}
                                        />
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

export default UserList;
