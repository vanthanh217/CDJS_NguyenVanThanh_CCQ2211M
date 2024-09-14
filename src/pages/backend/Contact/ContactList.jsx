import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';
import { ContactService } from '../../../services';

const ContactList = () => {
    const { pathname } = useLocation();
    const [contacts, setContacts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const itemsPerPage = 5;
    const {
        totalPage,
        records: newContacts,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(contacts, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await ContactService.getList();
            setContacts(res.contacts);
            if (res.status === true) toast.success(res.message);
            else toast.error(res.message);
        })();
    }, [isLoad]);
    const handleDelete = async (id) => {
        const result = await ContactService.destroy(id);
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
            <HeaderContent title={'Contact'} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Name</th>
                        <th className="w-[300px]">Email and phone</th>
                        <th>Title</th>
                        <th>Sent at</th>
                        <th className="w-48 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newContacts &&
                        newContacts.length > 0 &&
                        newContacts
                            .sort((a, b) => (a.id > b.id ? 1 : -1))
                            .map((contact) => {
                                const createdAt = contact.created_at;
                                const date = new Date(createdAt);
                                const day = `0${date.getDate()}`.slice(-2);
                                const month = `0${date.getMonth() + 1}`.slice(
                                    -2,
                                );
                                const year = date.getFullYear();
                                const formatDate = `${day}/${month}/${year}`;
                                return (
                                    <tr key={contact.id}>
                                        <td>
                                            <Input
                                                type="checkbox"
                                                className={'!p-0'}
                                            />
                                        </td>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>
                                            <p className="flex flex-col">
                                                <span className="text-textPrimary">
                                                    {contact.email}
                                                </span>
                                                <span className="text-text2nd">
                                                    {contact.phone}
                                                </span>
                                            </p>
                                        </td>
                                        <td>{contact.title}</td>
                                        <td>{formatDate}</td>
                                        <td>
                                            <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                                <ToggleSwitch
                                                    object={ContactService}
                                                    status={contact.status}
                                                    id={contact.id}
                                                    isLoad={isLoad}
                                                    setIsLoad={setIsLoad}
                                                />
                                                <Button
                                                    to={`${pathname}/show/${contact.id}`}
                                                    kind={'default'}
                                                    className={
                                                        'p-[10px] bg-teal-400'
                                                    }
                                                >
                                                    <IconEye />
                                                </Button>
                                                <Button
                                                    className="bg-textRed p-[10px]"
                                                    onClick={() =>
                                                        handleDelete(contact.id)
                                                    }
                                                >
                                                    <IconTrash />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
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

export default ContactList;
