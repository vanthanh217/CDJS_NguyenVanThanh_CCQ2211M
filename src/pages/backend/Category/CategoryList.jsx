import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import { ImageUpload } from '../../../components/image';
import { Dropdown } from '../../../components/dropdown';
import CategoryService from '../../../services/CategoryService';
import { ToggleSwitch } from '../../../components/toogle-switch';
import usePagination from '../../../hooks/usePagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { urlImage } from '../../../config';

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

const CategoryList = () => {
    const { pathname } = useLocation();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(2);
    const [isLoad, setIsLoad] = useState(false);
    // Phân trang
    const itemsPerPage = 7;
    const {
        currentPage,
        totalPage,
        records: newCategories,
        prevPage,
        nextPage,
        handlePageChange,
    } = usePagination(categories, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await CategoryService.getList();
            setCategories(res.categories);
            if (res.status === true)
                toast.success(res.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
        })();
    }, [isLoad]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var category = new FormData();
        category.append('name', name);
        category.append('image', image);
        category.append('description', description);
        category.append('sort_order', sort_order);
        category.append('parent_id', parent_id);
        category.append('status', status);
        (async () => {
            const result = await CategoryService.insert(category);
            if (result.status === true)
                toast.success(result.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            else
                toast.error(result.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            setIsLoad(!isLoad);
        })();
        setName('');
        setImage('');
        setDescription('');
        setParentId(0);
        setSortOrder(1);
        setStatus(2);
    };

    const handleDelete = async (id) => {
        const result = await CategoryService.destroy(id);
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
            <HeaderContent title="Category" />
            <div className="flex gap-x-4 mb-7">
                <div className="w-[30%]">
                    <form onSubmit={handleSubmit}>
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your name category'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'parent_id'}>Parent id</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        parent_id !== 0
                                            ? categories.find(
                                                  (item) =>
                                                      item.id === parent_id,
                                              )?.name
                                            : 'Default'
                                    }
                                    className="!py-[10px]"
                                />
                                <Dropdown.List>
                                    <Dropdown.Option
                                        onClick={() => setParentId(0)}
                                    >
                                        Default
                                    </Dropdown.Option>
                                    {categories &&
                                        categories.length > 0 &&
                                        categories.map((item) => (
                                            <Dropdown.Option
                                                key={item.id}
                                                onClick={() =>
                                                    setParentId(item.id)
                                                }
                                            >
                                                {item.name}
                                            </Dropdown.Option>
                                        ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'sort_order'}>Sort order</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        sort_order !== 1
                                            ? `After: ${
                                                  categories.find(
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
                                    <Dropdown.Option
                                        onClick={() => setSortOrder(1)}
                                    >
                                        Default
                                    </Dropdown.Option>
                                    {categories &&
                                        categories.length > 0 &&
                                        categories.map((item) => (
                                            <Dropdown.Option
                                                key={item.id}
                                                onClick={() =>
                                                    setSortOrder(item.id + 1)
                                                }
                                            >
                                                After: {item.name}
                                            </Dropdown.Option>
                                        ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup className={'!mb-2'}>
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
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'desc'}>Description</Label>
                            <TextArea
                                id={'desc'}
                                placeholder={'Enter your description'}
                                className={'h-[70px]'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Image</Label>
                            <ImageUpload
                                className="h-[180px]"
                                onChange={handleChangeImage}
                                image={image}
                                product={true}
                            />
                        </FormGroup>
                        <FormGroup className={'flex items-center justify-end'}>
                            <Button
                                type={'submit'}
                                kind={'default'}
                                className={'bg-emerald-400 w-2/5 py-2'}
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
                                <th>Name</th> {/* Name and image */}
                                <th>Slug</th>
                                <th className="w-44 !text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newCategories &&
                                newCategories.length > 0 &&
                                newCategories.map((category) => (
                                    <tr key={category.id}>
                                        <td>
                                            <Input
                                                type="checkbox"
                                                className={'!p-0'}
                                            />
                                        </td>
                                        <td>{category.id}</td>
                                        <td className="!pr-[50px]">
                                            <div className="flex items-center gap-x-3">
                                                {category.image && (
                                                    <img
                                                        src={`${urlImage}category/${category.image}`}
                                                        alt={category.image}
                                                        className="w-[75px] h-[60px] rounded-lg object-cover"
                                                    />
                                                )}
                                                <div className="flex flex-col flex-1 gap-y-2">
                                                    <h3 className="font-medium text-textPrimary">
                                                        {category.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{category.slug}</td>
                                        <td>
                                            <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                                <Button
                                                    to={`${pathname}/show/${category.id}`}
                                                    kind={'default'}
                                                    className={
                                                        'bg-teal-400 p-[10px]'
                                                    }
                                                >
                                                    <IconEye />
                                                </Button>
                                                <Button
                                                    to={`${pathname}/edit/${category.id}`}
                                                    className="p-[10px] bg-sky-400"
                                                >
                                                    <IconEdit />
                                                </Button>
                                                <Button
                                                    type={'button'}
                                                    className="bg-textRed p-[10px]"
                                                    onClick={() =>
                                                        handleDelete(
                                                            category.id,
                                                        )
                                                    }
                                                >
                                                    <IconTrash />
                                                </Button>
                                                <ToggleSwitch
                                                    status={category.status}
                                                    object={CategoryService}
                                                    id={category.id}
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
                </div>
            </div>
        </>
    );
};

export default CategoryList;
