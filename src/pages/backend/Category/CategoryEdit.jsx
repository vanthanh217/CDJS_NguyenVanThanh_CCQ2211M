import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { CategoryService } from '../../../services';
import { ToastContainer, toast } from 'react-toastify';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { Dropdown } from '../../../components/dropdown';
import { ImageUpload } from '../../../components/image';
import { Button } from '../../../components/button';
import { useNavigate, useParams } from 'react-router-dom';
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

const CategoryEdit = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(2);
    const [currentImage, setCurrentImage] = useState('');
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await CategoryService.getById(id);
            const cate = data.category;
            setName(cate?.name);
            if (cate?.image) {
                setImage(cate?.image);
                setCurrentImage(`${urlImage}category/${cate?.image}`);
            }
            setParentId(cate?.parent_id);
            setDescription(cate?.description);
            setSortOrder(cate?.sort_order);
            setStatus(cate?.status);
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            const res = await CategoryService.getList();
            setCategories(res.categories);
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
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setCurrentImage('');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        var category = new FormData();
        category.append('name', name);
        category.append('image', image);
        category.append('description', description);
        category.append('sort_order', sort_order);
        category.append('parent_id', parent_id);
        category.append('status', status);
        CategoryService.update(id, category).then((result) => {
            if (result.status === true) {
                toast.success(result.message);
            }
            navigator('/admin/category', { replace: true });
        });
        setIsLoad(!isLoad);
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Edit Category'} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="flex-1">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your name category'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'desc'}>Description</Label>
                            <TextArea
                                id={'desc'}
                                placeholder={'Enter your description'}
                                className={'h-[100px]'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'image'}>Image</Label>
                            <ImageUpload
                                id={'image'}
                                className="h-[200px]"
                                onChange={handleChangeImage}
                                image={image}
                                currentImage={currentImage}
                                product={true}
                            />
                        </FormGroup>
                    </div>
                    <div className="w-2/5">
                        <FormGroup>
                            <Label htmlFor={'sort_order'}>Sort order</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        sort_order !== 1
                                            ? `Sau: ${
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
                                    {categories.map((item) => (
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
                                    {categories.map((item) => (
                                        <Dropdown.Option
                                            key={item.id}
                                            onClick={() => setParentId(item.id)}
                                        >
                                            {item.name}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup className={'!mb-10'}>
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
                        <FormGroup className={'flex items-center justify-end'}>
                            <Button
                                type={'submit'}
                                kind={'default'}
                                className={'bg-emerald-400 w-2/5 py-3'}
                            >
                                Update
                            </Button>
                        </FormGroup>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CategoryEdit;
