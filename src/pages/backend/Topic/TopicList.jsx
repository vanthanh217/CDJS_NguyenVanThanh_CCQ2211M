import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';
import { TopicService } from '../../../services';

const statusList = [
    {
        value: 1,
        label: 'Publish',
    },
    {
        value: 2,
        label: 'Unpublished',
    },
];

const TopicList = () => {
    const { pathname } = useLocation();
    const [topics, setTopics] = useState([]);
    const [name, setName] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);
    const [isLoad, setIsLoad] = useState(false);
    // Phân trang
    const itemsPerPage = 7;
    const {
        records: newTopics,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(topics, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await TopicService.getList();
            setTopics(res.topics);
            if (res.status === true) {
                toast.success(res.message, {
                    transition: Slide,
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            }
        })();
    }, [isLoad]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = {
            name,
            sort_order,
            description,
            status,
        };
        (async () => {
            const result = await TopicService.insert(topic);
            if (result.status === true) toast.success(result.message);
            else toast.error(result.message);
            setIsLoad(!isLoad);
        })();
        setName('');
        setSortOrder(1);
        setDescription('');
        setStatus(2);
    };

    const handleDeleteItem = async (id) => {
        const result = await TopicService.destroy(id);
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
            <HeaderContent title={'Topic'} />
            <div className="flex gap-x-4">
                <div className="w-[30%]">
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your topic name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Sort order</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        sort_order !== 1
                                            ? `Sau: ${
                                                  topics.find(
                                                      (item) =>
                                                          item.id + 1 ===
                                                          sort_order,
                                                  )?.name
                                              }`
                                            : 'Default'
                                    }
                                    className="!py-[10px]"
                                />
                                <Dropdown.List>
                                    {topics.map((item) => (
                                        <Dropdown.Option
                                            key={item.id}
                                            onClick={() =>
                                                setSortOrder(item.id + 1)
                                            }
                                        >
                                            Sau: {item.name}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'status'}>Status</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        status
                                            ? statusList.find(
                                                  (item) =>
                                                      item.value === status,
                                              ).label
                                            : 'Select status'
                                    }
                                    className="!py-[10px]"
                                />
                                <Dropdown.List>
                                    {statusList.map((item) => (
                                        <Dropdown.Option
                                            key={item.value}
                                            onClick={() =>
                                                setStatus(item.value)
                                            }
                                        >
                                            {item.label}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'desc'}>Description</Label>
                            <TextArea
                                id={'desc'}
                                placeholder={'Enter your description'}
                                className={'h-[70px]'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'flex items-center justify-end'}>
                            <Button
                                type={'submit'}
                                kind={'default'}
                                className={'bg-emerald-400 w-2/5 py-3'}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </form>
                </div>
                <div className="flex-1">
                    <Table className="mb-7">
                        <thead>
                            <tr>
                                <th className="w-[50px]"></th>
                                <th className="w-[60px]">Id</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th className="w-[270px] !text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {newTopics &&
                                newTopics.length > 0 &&
                                newTopics.map((topic) => (
                                    <tr key={topic.id}>
                                        <td>
                                            <Input
                                                type="checkbox"
                                                className={'!p-0'}
                                            />
                                        </td>
                                        <td>{topic.id}</td>
                                        <td>{topic.name}</td>
                                        <td>{topic.slug}</td>
                                        <td>
                                            <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                                <ToggleSwitch
                                                    object={TopicService}
                                                    status={topic.status}
                                                    id={topic.id}
                                                    isLoad={isLoad}
                                                    setIsLoad={setIsLoad}
                                                />
                                                <Button
                                                    to={`${pathname}/show/${topic.id}`}
                                                    className="p-[10px] bg-teal-400"
                                                >
                                                    <IconEye />
                                                </Button>
                                                <Button
                                                    to={`${pathname}/edit/${topic.id}`}
                                                    className="p-[10px] bg-sky-400"
                                                >
                                                    <IconEdit />
                                                </Button>
                                                <Button
                                                    className="bg-textRed p-[10px]"
                                                    onClick={() =>
                                                        handleDeleteItem(
                                                            topic.id,
                                                        )
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
                </div>
            </div>
        </>
    );
};

export default TopicList;
