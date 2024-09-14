import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import BrandService from '../../../services/BrandService';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { urlImage } from '../../../config';

const BrandShow = () => {
    const { id } = useParams();
    const [brand, setBrand] = useState({});

    useEffect(() => {
        (async () => {
            const res = await BrandService.getById(id);
            setBrand(res.brand);
        })();
    }, [id]);

    const createdAt = brand?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = brand?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;
    return (
        <>
            <HeaderContent title={'Detail Menu Item'} />
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
                        <td>{brand.id}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            {brand.image ? (
                                <img
                                    src={`${urlImage}brand/${brand.image}`}
                                    alt=""
                                    className="size-20 rounded-[10px] object-cover"
                                />
                            ) : (
                                'No image'
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{brand.name}</td>
                    </tr>
                    <tr>
                        <td>Slug</td>
                        <td>{brand.slug}</td>
                    </tr>
                    <tr>
                        <td>Sort order</td>
                        <td>{brand.sort_order}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{brand.description}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{brand.created_by}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{brand.updated_by}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{brand.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default BrandShow;
