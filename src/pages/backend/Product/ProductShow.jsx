import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { urlImage } from '../../../config';
import {
    BrandService,
    CategoryService,
    ProductService,
} from '../../../services';

const ProductShow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [brand, setBrand] = useState({});
    const [category, setCategory] = useState({});

    useEffect(() => {
        (async () => {
            const res = await ProductService.getById(id);
            setProduct(res.product);
        })();
    }, [id]);
    useEffect(() => {
        (async () => {
            const resBrand = await BrandService.getById(product.brand_id);
            const resCate = await CategoryService.getById(product.category_id);
            setBrand(resBrand.brand);
            setCategory(resCate.category);
        })();
    }, [product.brand_id, product.category_id]);

    const createdAt = product?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = product?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Detail product item'} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th className="w-4/5">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{product.id}</td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td>{brand?.name}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{category?.name}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            {product.image ? (
                                <img
                                    src={`${urlImage}product/${product.image}`}
                                    alt=""
                                    className="object-cover size-36 rounded-xl"
                                />
                            ) : (
                                'No image'
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <p className="text-wrap">{product.name}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Slug</td>
                        <td>{product.slug}</td>
                    </tr>
                    <tr>
                        <td>Detail</td>
                        <td>
                            <p className="text-wrap">{product.detail}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <p className="text-wrap">{product.description}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{product.price} VNĐ</td>
                    </tr>
                    <tr>
                        <td>Price sale</td>
                        <td>{product.pricesale} VNĐ</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>{product.qty}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{product.created_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{product.updated_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{product.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default ProductShow;
