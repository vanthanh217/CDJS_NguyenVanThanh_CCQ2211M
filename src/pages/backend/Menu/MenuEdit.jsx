import { useEffect, useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import { FormGroup, Input, Label } from '../../../components/form';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Button } from '../../../components/button';
import { useNavigate, useParams } from 'react-router-dom';
import { MenuService } from '../../../services';
import { toast } from 'react-toastify';

const positionList = ['mainmenu', 'footermenu'];
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

const MenuEdit = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [menus, setMenus] = useState([]);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [table_id, setTableId] = useState(0);
    const [type, setType] = useState('');
    const [position, setPosition] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(1);
    const [status, setStatus] = useState(2);
    const headerSort = [];
    const footerSort = [];
    for (let item of menus) {
        if (item.position === 'mainmenu') {
            headerSort.push(item);
        }
        if (item.position === 'footermenu') {
            footerSort.push(item);
        }
    }

    useEffect(() => {
        (async () => {
            const { menu } = await MenuService.getById(id);
            setLink(menu?.link);
            setName(menu?.name);
            setParentId(menu?.parent_id);
            setPosition(menu?.position);
            setSortOrder(menu?.sort_order);
            setTableId(menu?.table_id);
            setType(menu?.type);
            setStatus(menu?.status);
        })();
    }, [id]);
    useEffect(() => {
        (async () => {
            const res = await MenuService.getList();
            setMenus(res.menus);
        })();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const menu = {
            name,
            link,
            parent_id,
            position,
            sort_order,
            table_id,
            type,
            status,
        };
        (async () => {
            MenuService.update(id, menu).then((result) => {
                if (result.status === true) {
                    toast.success(result.message);
                }
                navigator('/admin/menu', { replace: true });
            });
        })();
    };

    return (
        <>
            <HeaderContent title={'Edit Menu'} />
            <form onSubmit={handleSubmit}>
                <div className="flex p-5 gap-x-10">
                    <div className="flex-1">
                        <FormGroup className={'!mb-5'}>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id="name"
                                placeholder={'Enter the name menu'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'!mb-5'}>
                            <Label htmlFor={'link'}>Link</Label>
                            <Input
                                id="link"
                                placeholder={'Enter the link menu'}
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className={'flex gap-x-5'}>
                            <div className="flex-1">
                                <Label htmlFor={'table_id'}>Table id</Label>
                                <Input
                                    id="table_id"
                                    placeholder={'Enter table id'}
                                    value={table_id}
                                    onChange={(e) => setTableId(e.target.value)}
                                />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor={'type'}>Type</Label>
                                <Input
                                    id="type"
                                    placeholder={'Enter the type menu'}
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                        </FormGroup>
                        <div className="flex gap-x-5">
                            <FormGroup className={'flex-1'}>
                                <Label>Sort order - Header</Label>
                                <Dropdown>
                                    <Dropdown.Select
                                        placeholder={
                                            sort_order !== 1
                                                ? `Sau: ${
                                                      headerSort.find(
                                                          (item) =>
                                                              item.id + 1 ===
                                                              sort_order,
                                                      )?.name
                                                  }`
                                                : 'Default'
                                        }
                                    />
                                    <Dropdown.List>
                                        {headerSort.map((item) => (
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
                            <FormGroup className={'flex-1'}>
                                <Label>Sort order - Footer</Label>
                                <Dropdown>
                                    <Dropdown.Select
                                        placeholder={
                                            sort_order !== 1
                                                ? `Sau: ${
                                                      footerSort.find(
                                                          (item) =>
                                                              item.id + 1 ===
                                                              sort_order,
                                                      )?.name
                                                  }`
                                                : 'Default'
                                        }
                                    />
                                    <Dropdown.List>
                                        {footerSort.map((item) => (
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
                        </div>
                    </div>
                    <div className="w-2/5">
                        <FormGroup>
                            <Label>Parent id</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        parent_id !== 0
                                            ? menus.find(
                                                  (item) =>
                                                      item.id === parent_id,
                                              )?.name
                                            : 'Default'
                                    }
                                />
                                <Dropdown.List>
                                    {menus &&
                                        menus.length > 0 &&
                                        menus.map((item) => (
                                            <Dropdown.Option
                                                key={item.id}
                                                onClick={() =>
                                                    setParentId(item.id)
                                                }
                                            >
                                                {item.name}
                                            </Dropdown.Option>
                                        ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label>Position</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        position
                                            ? position
                                            : 'Select the position'
                                    }
                                />
                                <Dropdown.List>
                                    {positionList.map((item, index) => (
                                        <Dropdown.Option
                                            key={index}
                                            onClick={() => setPosition(item)}
                                        >
                                            {item}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup className={'!mb-16'}>
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

export default MenuEdit;
