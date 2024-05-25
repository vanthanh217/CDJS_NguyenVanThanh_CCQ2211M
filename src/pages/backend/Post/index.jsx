import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import db from '../../../data.json';
import { Pagination } from '../../../components/pagination';

const Post = () => {
    const { pathname } = useLocation();
    const { post } = db;
    return (
        <>
            <HeaderContent title="Post" />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Type</th>
                        <th className="w-40 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {post &&
                        post.length > 0 &&
                        post
                            .filter((item, index) => index < 5)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Input type="checkbox" />
                                    </td>
                                    <td>{item.id}</td>
                                    <td className="!pr-[50px]">
                                        <div className="flex items-center gap-x-3">
                                            <img
                                                src={item.image}
                                                alt={item.image}
                                                className="w-[75px] h-[65px] rounded object-cover"
                                            />
                                            <div className="flex flex-col flex-1">
                                                <span className="inline-block mb-1 text-sm text-text2nd">
                                                    {item.date}
                                                </span>
                                                <h3 className="font-medium text-textPrimary w-[370px] text-wrap">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="inline-block w-[320px] text-wrap">
                                            {item.slug}
                                        </span>
                                    </td>
                                    <td>
                                        {item.topic_id === 0
                                            ? 'Tin tức'
                                            : 'ABC'}
                                    </td>
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

export default Post;
