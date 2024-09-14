import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { ImageUpload } from '../../../components/image';
import { useEffect, useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import BrandService from '../../../services/BrandService';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';
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

const BrandList = () => {
    const { pathname } = useLocation();
    const [brands, setBrands] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [status, setStatus] = useState(2);
    const [isLoad, setIsLoad] = useState(false);

    const itemsPerPage = 7;
    const {
        currentPage,
        totalPage,
        records: newBrands,
        prevPage,
        nextPage,
        handlePageChange,
    } = usePagination(brands, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await BrandService.getList();
            setBrands(res.brands);
            if (res.status === true) toast.success(res.message);
            else toast.error(res.message);
        })();
    }, [isLoad]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var brand = new FormData();
        brand.append('name', name);
        brand.append('image', image);
        brand.append('description', description);
        brand.append('sort_order', sort_order);
        brand.append('status', status);
        (async () => {
            const result = await BrandService.insert(brand);
            if (result.status === true)
                toast.success(result.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
            else
                toast.error(result.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
            setIsLoad(!isLoad);
        })();
        setName('');
        setImage('');
        setDescription('');
        setSortOrder(1);
        setStatus(2);
    };

    const handleDeleteItem = async (id) => {
        const result = await BrandService.destroy(id);
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
            <HeaderContent title="Brand" />
            <div className="flex gap-x-4 mb-7">
                <div className="w-[30%]">
                    <form onSubmit={handleSubmit}>
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your name brand'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'sort_order'}>Sort order</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        sort_order !== 1
                                            ? `After: ${
                                                  brands.find(
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
                                    {brands &&
                                        brands.length > 0 &&
                                        brands.map((item) => (
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
                                <th>Name</th> {/*  Name and image */}
                                <th>Slug</th>
                                <th className="w-44 !text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newBrands &&
                                newBrands.length > 0 &&
                                newBrands.map((brand) => (
                                    <tr key={brand.id}>
                                        <td>
                                            <Input
                                                type="checkbox"
                                                className={'!p-0'}
                                            />
                                        </td>
                                        <td>{brand.id}</td>
                                        <td className="!pr-[50px]">
                                            <div className="flex items-center gap-x-3">
                                                {brand.image && (
                                                    <img
                                                        src={`${urlImage}brand/${brand.image}`}
                                                        alt={brand.image}
                                                        className="w-[75px] h-[60px] rounded object-cover"
                                                    />
                                                )}
                                                <div className="flex flex-col flex-1 gap-y-2">
                                                    <h3 className="font-medium text-textPrimary">
                                                        {brand.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{brand.slug}</td>
                                        <td>
                                            <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                                <Button
                                                    to={`${pathname}/show/${brand.id}`}
                                                    kind={'default'}
                                                    className={
                                                        'p-[10px] bg-teal-400'
                                                    }
                                                >
                                                    <IconEye />
                                                </Button>
                                                <Button
                                                    to={`${pathname}/edit/${brand.id}`}
                                                    className="p-[10px] bg-sky-400"
                                                >
                                                    <IconEdit />
                                                </Button>
                                                <Button
                                                    className="bg-textRed p-[10px]"
                                                    onClick={() =>
                                                        handleDeleteItem(
                                                            brand.id,
                                                        )
                                                    }
                                                >
                                                    <IconTrash />
                                                </Button>
                                                <ToggleSwitch
                                                    object={BrandService}
                                                    status={brand.status}
                                                    id={brand.id}
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
                            handlePageChange={handlePageChange}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default BrandList;
