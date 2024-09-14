import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import BannerService from '../../../services/BannerService';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { urlImage } from '../../../config';

const BannerShow = () => {
    const { id } = useParams();
    const [banner, setBanner] = useState({});

    useEffect(() => {
        (async () => {
            const res = await BannerService.getById(id);
            setBanner(res.banner);
        })();
    }, [id]);

    const createdAt = banner?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = banner?.created_at;
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
                        <td>{banner.id}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            {banner.image ? (
                                <img
                                    src={`${urlImage}banner/${banner.image}`}
                                    alt=""
                                    className="w-full h-[210px] rounded-[10px] object-cover"
                                />
                            ) : (
                                'No image'
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{banner.name}</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td>{banner.link}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{banner.description || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>{banner.position}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{banner.created_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{banner.updated_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{banner.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default BannerShow;
