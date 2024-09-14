import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { urlImage } from '../../../config';
import { CategoryService } from '../../../services';

const CategoryShow = () => {
    const { id } = useParams();
    const [category, setCategory] = useState({});

    useEffect(() => {
        (async () => {
            const res = await CategoryService.getById(id);
            setCategory(res.category);
        })();
    }, [id]);

    const createdAt = category?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = category?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Detail category item'} />
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
                        <td>{category.id}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            {category.image ? (
                                <img
                                    src={`${urlImage}category/${category.image}`}
                                    alt=""
                                    className="object-cover h-60 rounded-xl"
                                />
                            ) : (
                                'No image'
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{category.name}</td>
                    </tr>
                    <tr>
                        <td>Slug</td>
                        <td>{category.slug}</td>
                    </tr>
                    <tr>
                        <td>Parent id</td>
                        <td>{category.parent_id}</td>
                    </tr>
                    <tr>
                        <td>Sort order</td>
                        <td>{category.sort_order}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{category.description}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{category.created_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{category.updated_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{category.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default CategoryShow;
