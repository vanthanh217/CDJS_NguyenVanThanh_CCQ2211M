import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import db from '../../../data.json';
import { Pagination } from '../../../components/pagination';

const Menu = () => {
    const { pathname } = useLocation();
    const { menu } = db;
    return (
        <>
            <HeaderContent title={'Menu'} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Type</th>
                        <th>Position</th>
                        <th className="w-40 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menu &&
                        menu.length > 0 &&
                        menu
                            .filter((item, index) => index < 5)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Input
                                            type="checkbox"
                                            className={'!p-0'}
                                        />
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.link}</td>
                                    <td>{item.type}</td>
                                    <td>{item.position}</td>
                                    <td>
                                        <div className="flex items-center justify-center text-iconText gap-x-4">
                                            <Button
                                                to={`${pathname}/edit/${item.id}`}
                                                className="p-[10px] bg-sky-400"
                                            >
                                                <IconEdit />
                                            </Button>
                                            <Button className="bg-textRed p-[10px]">
                                                <IconTrash />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </Table>
            <Pagination />
        </>
    );
};

export default Menu;
