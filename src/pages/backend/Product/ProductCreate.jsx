import { useEffect, useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { Button } from '../../../components/button';
import { ImageUpload } from '../../../components/image';
import BrandService from '../../../services/BrandService';
import CategoryService from '../../../services/CategoryService';
import ProductService from '../../../services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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

const ProductCreate = () => {
    const navigator = useNavigate();
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [brand_id, setBrandId] = useState(0);
    const [category_id, setCategoryId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [pricesale, setPriceSale] = useState(0);
    const [image, setImage] = useState('');
    const [qty, setQty] = useState(0);
    const [detail, setDetail] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    useEffect(() => {
        (async () => {
            const resBrand = await BrandService.getList();
            const resCate = await CategoryService.getList();
            setBrands(resBrand.brands);
            setCategories(resCate.categories);
        })();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        var product = new FormData();
        product.append('brand_id', brand_id);
        product.append('category_id', category_id);
        product.append('name', name);
        product.append('image', image);
        product.append('price', price);
        product.append('pricesale', pricesale);
        product.append('qty', qty);
        product.append('detail', detail);
        product.append('description', description);
        product.append('status', status);
        (async () => {
            const result = await ProductService.insert(product);
            if (result.status === true) toast.success(result.message);
            navigator('/admin/product', { replace: true });
        })();
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Create Product'} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="flex-1">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name product</Label>
                            <Input
                                id="name"
                                placeholder={'Enter your name product'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'detail'}>Detail</Label>
                            <TextArea
                                id="detail"
                                placeholder={'Enter your detail'}
                                className={'h-36'}
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'description'}>Description</Label>
                            <Input
                                id="description"
                                placeholder={'Enter your description'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Image</Label>
                            <ImageUpload
                                className="h-[250px]"
                                onChange={handleChangeImage}
                                image={image}
                                product={true}
                            />
                        </FormGroup>
                    </div>
                    <div className="w-[450px]">
                        <FormGroup>
                            <Label>Brand</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        brand_id !== 0
                                            ? brands.find(
                                                  (item) =>
                                                      item.id === brand_id,
                                              )?.name
                                            : 'Select brand'
                                    }
                                />
                                <Dropdown.List>
                                    {brands.map((item) => (
                                        <Dropdown.Option
                                            key={item.id}
                                            onClick={() => setBrandId(item.id)}
                                        >
                                            {item.name}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label>Category</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        category_id !== 0
                                            ? categories.find(
                                                  (item) =>
                                                      item.id === category_id,
                                              )?.name
                                            : 'Select category'
                                    }
                                />
                                <Dropdown.List>
                                    {categories.map((item) => (
                                        <Dropdown.Option
                                            key={item.id}
                                            onClick={() =>
                                                setCategoryId(item.id)
                                            }
                                        >
                                            {item.name}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'price'}>Price</Label>
                            <Input
                                id="price"
                                placeholder={'Enter the price'}
                                value={price}
                                onChange={(e) =>
                                    setPrice(parseInt(e.target.value))
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'pricesale'}>Price Sale</Label>
                            <Input
                                id="pricesale"
                                placeholder={'Enter the price sale'}
                                value={pricesale}
                                onChange={(e) =>
                                    setPriceSale(parseInt(e.target.value))
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'qty'}>Quantity</Label>
                            <Input
                                id="qty"
                                placeholder={'Enter the quantity'}
                                value={qty}
                                onChange={(e) =>
                                    setQty(parseInt(e.target.value))
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Status</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        status
                                            ? statusList.find(
                                                  (item) =>
                                                      item.value === status,
                                              ).label
                                            : 'Select the status'
                                    }
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
                        <Button
                            type={'submit'}
                            kind={'default'}
                            className={'bg-sky-400 py-3 w-40'}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProductCreate;
