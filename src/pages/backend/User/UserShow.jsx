import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { urlImage } from '../../../config';
import { UserService } from '../../../services';

const UserShow = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const res = await UserService.getById(id);
            setUser(res.user);
        })();
    }, [id]);

    const createdAt = user?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = user?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'User detail'} />
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
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            {user.image ? (
                                <img
                                    src={`${urlImage}user/${user.image}`}
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
                            <p className="text-wrap">{user.name}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>Đã che!!!</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{user.address}</td>
                    </tr>
                    <tr>
                        <td>Roles</td>
                        <td>{user.roles}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{user.created_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{user.updated_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{user.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default UserShow;
