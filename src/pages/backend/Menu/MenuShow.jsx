import { useEffect, useState } from 'react';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useParams } from 'react-router-dom';
import { MenuService } from '../../../services';

const MenuShow = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState({});
    useEffect(() => {
        (async () => {
            const result = await MenuService.getById(id);
            setMenu(result.menu);
        })();
    }, [id]);

    const createdAt = menu?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = menu?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Menu detail'} />
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
                        <td>{menu.id}</td>
                    </tr>
                    <tr>
                        <td>Table id</td>
                        <td>{menu.table_id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{menu.name}</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td>{menu.link}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{menu.type}</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>{menu.position}</td>
                    </tr>
                    <tr>
                        <td>Sort order</td>
                        <td>{menu.sort_order}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{menu.created_by}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{menu.updated_by}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{menu.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default MenuShow;
