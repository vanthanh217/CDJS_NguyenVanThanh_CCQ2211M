import { Button } from '../../../components/button';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { ImageUpload } from '../../../components/image';
import { Dropdown } from '../../../components/dropdown';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { BrandService } from '../../../services';
import { useNavigate, useParams } from 'react-router-dom';
import { urlImage } from '../../../config';
import { toast } from 'react-toastify';

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

const BrandEdit = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [brands, setBrands] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [status, setStatus] = useState(2);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        (async () => {
            const res = await BrandService.getList();
            setBrands(res.brands);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const data = await BrandService.getById(id);
            const brand = data.brand;
            setName(brand?.name);
            if (brand?.image) {
                setImage(brand?.image);
                setCurrentImage(`${urlImage}brand/${brand?.image}`);
            }
            setDescription(brand?.description);
            setSortOrder(brand?.sort_order);
            setStatus(brand?.status);
        })();
    }, [id]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setCurrentImage('');
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
            BrandService.update(id, brand).then((result) => {
                if (result.status === true) {
                    toast.success(result.message);
                }
                navigator('/admin/brand', { replace: true });
            });
        })();
    };

    return (
        <>
            <HeaderContent title={'Edit Brand Item'} />{' '}
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-5">
                    <div className="flex-1">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your name brand'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                        <FormGroup>
                            <Label>Image</Label>
                            <ImageUpload
                                className="h-[180px]"
                                onChange={handleChangeImage}
                                image={image}
                                product={true}
                                currentImage={currentImage}
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
                                    {brands.map((item) => (
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

export default BrandEdit;
