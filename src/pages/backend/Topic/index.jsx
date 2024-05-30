import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import db from '../../../data.json';
import { Pagination } from '../../../components/pagination';
import { useState } from 'react';
import { Dropdown } from '../../../components/dropdown';

const statusList = [
    {
        value: 1,
        label: 'Xuất bản',
    },
    {
        value: 2,
        label: 'Chưa xuất bản',
    },
];

const Topic = () => {
    const { pathname } = useLocation();
    const { topic } = db;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = {
            name,
            description,
            status,
        };
        console.log(topic);
    };

    return (
        <>
            <HeaderContent title={'Topic'} addBtn={false} />
            <div className="flex gap-x-4">
                <div className="w-[30%]">
                    <form onSubmit={handleSubmit}>
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your topic name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'!mb-2'}>
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
                        <FormGroup className={'!mb-2'}>
                            <Label htmlFor={'desc'}>Description</Label>
                            <TextArea
                                id={'desc'}
                                placeholder={'Enter your description'}
                                className={'h-[70px]'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'flex items-center justify-end'}>
                            <Button
                                type={'submit'}
                                kind={'default'}
                                className={'bg-emerald-400 w-2/5 py-2'}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </form>
                </div>
                <Table className="mb-7 grow">
                    <thead>
                        <tr>
                            <th className="w-[50px]"></th>
                            <th className="w-[60px]">Id</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Description</th>
                            <th className="w-40 !text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topic &&
                            topic.length > 0 &&
                            topic
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
                                        <td>{item.slug}</td>
                                        <td>{item.description}</td>
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
            </div>
            <Pagination />
        </>
    );
};

export default Topic;
