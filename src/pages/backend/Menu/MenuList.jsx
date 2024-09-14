import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import {
    IconArrow,
    IconEdit,
    IconEye,
    IconTrash,
} from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';
import classNames from '../../../utils/classNames';
import useClickOutSide from '../../../hooks/useClickOutSide';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../components/dropdown';
import {
    BrandService,
    CategoryService,
    MenuService,
    PostService,
    TopicService,
} from '../../../services';

const positionList = ['mainmenu', 'footermenu'];

const MenuList = () => {
    const { pathname } = useLocation();
    const [menus, setMenus] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [topics, setTopics] = useState([]);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [brandIdList, setBrandIdList] = useState([]);
    const [cateIdList, setCateIdList] = useState([]);
    const [pageIdList, setPageIdList] = useState([]);
    const [topicIdList, setTopicIdList] = useState([]);
    const pages = [];
    for (const postItem of posts) {
        if (postItem.type === 'page') {
            pages.push(postItem);
        }
    }

    const itemsPerPage = 7;
    const {
        records: newMenus,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(menus, itemsPerPage);
    function handleGetListValue(idName = '', setList) {
        let list = [];
        document
            .getElementById(`${idName}-btn`)
            ?.addEventListener('click', function () {
                const checkboxes = document.querySelectorAll(
                    `input[name="${idName}Id[]"]:checked`,
                );
                [...checkboxes].forEach((cb) => list.push(parseInt(cb.value)));
                setList(JSON.stringify(list));
            });
    }
    function resetCheckbox(name = '') {
        document
            .getElementById(`reset${name}-btn`)
            ?.addEventListener('click', function () {
                const checkboxes = document.querySelectorAll(
                    `input[name="${name}Id[]"]:checked`,
                );
                checkboxes.forEach((e) => (e.checked = false));
            });
    }
    handleGetListValue('brand', setBrandIdList);
    handleGetListValue('category', setCateIdList);
    handleGetListValue('page', setPageIdList);
    handleGetListValue('topic', setTopicIdList);
    useEffect(() => {
        (async () => {
            const resMenu = await MenuService.getList();
            const resBrand = await BrandService.getList();
            const resCategory = await CategoryService.getList();
            const resPost = await PostService.getList();
            const resTopic = await TopicService.getList();
            setMenus(resMenu.menus);
            setBrands(resBrand.brands);
            setCategories(resCategory.categories);
            setPosts(resPost.posts);
            setTopics(resTopic.topics);
        })();
    }, [isLoad]);
    const handleSubmit = (e) => {
        e.preventDefault();

        const menu = {
            name,
            link,
            position,
            brands: brandIdList,
            categories: cateIdList,
            pages: pageIdList,
            topics: topicIdList,
        };
        setName('');
        setLink('');
        setPosition('');
        (async () => {
            const result = await MenuService.insert(menu);
            console.log(result);
            if (result.status === true)
                toast.success(result.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            setIsLoad(!isLoad);
        })();
    };

    const handleDeleteItem = async (id) => {
        const result = await MenuService.destroy(id);
        if (result.status === true) {
            toast.success(result.message, {
                autoClose: 750,
                pauseOnHover: false,
            });
            setIsLoad(!isLoad);
        }
    };

    return (
        <>
            <HeaderContent title={'Menu'} />
            <ToastContainer />
            <div className="flex gap-x-4 mb-7">
                <div className="w-[30%]">
                    <form onSubmit={handleSubmit}>
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
                        <FormGroup
                            className={
                                'p-2 !mb-4 border border-lightStrock rounded-xl'
                            }
                        >
                            <Label>Custom</Label>
                            <Input
                                id="name"
                                placeholder={'Enter the name menu'}
                                value={name}
                                className={'mb-3'}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                id="link"
                                placeholder={'Enter the link menu'}
                                value={link}
                                className={'mb-3'}
                                onChange={(e) => setLink(e.target.value)}
                            />
                            <Button
                                type={'submit'}
                                kind={'default'}
                                className={'bg-emerald-400 w-32 ml-auto py-2'}
                            >
                                Add
                            </Button>
                        </FormGroup>
                        <Accordion
                            title="brand"
                            list={brands}
                            id={'brand-btn'}
                            reset={() => resetCheckbox('brand')}
                        />
                        <Accordion
                            title="category"
                            list={categories}
                            id={'category-btn'}
                            reset={() => resetCheckbox('category')}
                        />
                        <Accordion
                            title="page"
                            list={pages}
                            id={'page-btn'}
                            reset={() => resetCheckbox('page')}
                        />
                        <Accordion
                            title="topic"
                            list={topics}
                            id={'topic-btn'}
                            reset={() => resetCheckbox('topic')}
                        />
                    </form>
                </div>
                <div className="flex-1">
                    <Table className="mb-7">
                        <thead>
                            <tr>
                                <th className="w-[50px]"></th>
                                <th className="w-[60px]">Id</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Type</th>
                                <th>Position</th>
                                <th className="!text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newMenus &&
                                newMenus.length > 0 &&
                                newMenus
                                    .sort((a, b) => (a.id > b.id ? 1 : -1))
                                    .map((menu) => (
                                        <tr key={menu.id}>
                                            <td>
                                                <Input
                                                    type="checkbox"
                                                    className={'!p-0'}
                                                />
                                            </td>
                                            <td>{menu.id}</td>
                                            <td>
                                                <p className="text-wrap">
                                                    {menu.name}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="text-wrap">
                                                    {menu.link}
                                                </p>
                                            </td>
                                            <td>{menu.type}</td>
                                            <td>{menu.position}</td>
                                            <td className="w-44">
                                                <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                                    <Button
                                                        to={`${pathname}/show/${menu.id}`}
                                                        kind={'default'}
                                                        className={
                                                            'p-[10px] bg-teal-400'
                                                        }
                                                    >
                                                        <IconEye />
                                                    </Button>
                                                    <Button
                                                        to={`${pathname}/edit/${menu.id}`}
                                                        className="p-[10px] bg-sky-400"
                                                    >
                                                        <IconEdit />
                                                    </Button>
                                                    <Button
                                                        className="bg-textRed p-[10px]"
                                                        onClick={() =>
                                                            handleDeleteItem(
                                                                menu.id,
                                                            )
                                                        }
                                                    >
                                                        <IconTrash />
                                                    </Button>
                                                    <ToggleSwitch
                                                        object={MenuService}
                                                        status={menu.status}
                                                        id={menu.id}
                                                        isLoad={isLoad}
                                                        setIsLoad={setIsLoad}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </Table>
                    {totalPage > 1 && (
                        <Pagination
                            handlePageChange={handlePageChange}
                            currentPage={currentPage}
                            totalPage={totalPage}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default MenuList;

export const Accordion = (props) => {
    const { className = '', title = '', list = [], id = '', reset } = props;
    const [selected, setSelected] = useState(false);
    const domNode = useClickOutSide(() => {
        setSelected(false);
    });
    return (
        <div className={classNames('mb-4', className)} ref={domNode}>
            <div
                className="p-3 bg-white shadow-outer rounded-[10px] flex justify-between items-center cursor-pointer mb-3 select-none text-text2nd"
                onClick={() => setSelected(!selected)}
            >
                <span className="text-sm capitalize">{title}</span>
                <IconArrow type={selected ? 'up' : 'down'} className="size-5" />
            </div>
            <ul
                className={classNames(
                    'bg-white shadow-outer rounded-[10px] overflow-hidden max-h-[300px] overflow-y-auto scroll-custom',
                    selected ? 'block' : 'hidden',
                )}
            >
                {list &&
                    list.length > 0 &&
                    list.map((item, index) => (
                        <li
                            className="flex items-center px-3 py-2 text-sm capitalize gap-x-5"
                            key={index}
                        >
                            <Input
                                type={'checkbox'}
                                name={`${title}Id[]`}
                                value={item.id}
                                id={`${title}-id:${item.id}`}
                            />
                            <Label
                                htmlFor={`${title}-id:${item.id}`}
                                className={'flex-1 !line-clamp-2 !mb-0'}
                            >
                                {item.name || item.title}
                            </Label>
                        </li>
                    ))}
                <div className="flex items-center justify-center mt-2 mb-4 gap-x-10">
                    <Button
                        kind={'default'}
                        className={'bg-cyan-400 w-32 py-2'}
                        id={`reset${id}`}
                        onClick={reset}
                    >
                        Reset
                    </Button>
                    <Button
                        type={'submit'}
                        kind={'default'}
                        id={id}
                        className={'bg-emerald-400 w-32 py-2'}
                    >
                        Add
                    </Button>
                </div>
            </ul>
        </div>
    );
};

Accordion.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.array,
    id: PropTypes.string,
    reset: PropTypes.func,
};
