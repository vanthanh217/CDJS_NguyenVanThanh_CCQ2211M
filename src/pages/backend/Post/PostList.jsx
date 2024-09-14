import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import { ToggleSwitch } from '../../../components/toogle-switch';
import usePagination from '../../../hooks/usePagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { urlImage } from '../../../config';
import { PostService } from '../../../services';

const PostList = () => {
    const { pathname } = useLocation();
    const [posts, setPosts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const itemsPerPage = 7;
    const {
        records: newPosts,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(posts, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await PostService.getList();
            setPosts(res.posts);
            if (res.status === true)
                toast.success(res.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
            else
                toast.error(res.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
        })();
    }, [isLoad]);

    const handleDeleteItem = async (id) => {
        const result = await PostService.destroy(id);
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
            <ToastContainer />
            <HeaderContent title="Post" addBtn={true} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Post</th> {/*Image, created_at and title */}
                        <th>Topic</th>
                        <th>Type</th>
                        <th className="w-44 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newPosts &&
                        newPosts.length > 0 &&
                        newPosts.map((post) => {
                            const createdAt = post?.created_at;
                            const date = new Date(createdAt);
                            const day = `0${date.getDate()}`.slice(-2);
                            const month = `0${date.getMonth() + 1}`.slice(-2);
                            const year = date.getFullYear();
                            const formatDate = `${day}/${month}/${year}`;
                            return (
                                <tr key={post.id}>
                                    <td>
                                        <Input
                                            type="checkbox"
                                            className={'!p-0'}
                                        />
                                    </td>
                                    <td>{post.id}</td>
                                    <td className="!pr-[50px] w-[500px]">
                                        <div className="flex items-center gap-x-3">
                                            {post.image && (
                                                <img
                                                    src={`${urlImage}post/${post.image}`}
                                                    alt={post.image}
                                                    className="w-[80px] h-[75px] rounded-lg object-cover"
                                                />
                                            )}
                                            <div className="flex flex-col flex-1">
                                                <span className="inline-block mb-1 text-sm text-text2nd">
                                                    {formatDate}
                                                </span>
                                                <h3 className="font-medium text-textPrimary w-[320px] text-wrap">
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{post.topic_name}</td>
                                    <td>{post.type}</td>
                                    <td>
                                        <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                            <Button
                                                to={`${pathname}/show/${post.id}`}
                                                kind={'default'}
                                                className={
                                                    'bg-teal-400 p-[10px]'
                                                }
                                            >
                                                <IconEye />
                                            </Button>
                                            <Button
                                                to={`${pathname}/edit/${post.id}`}
                                                className="p-[10px] bg-sky-400"
                                            >
                                                <IconEdit />
                                            </Button>
                                            <Button
                                                className="bg-textRed p-[10px]"
                                                onClick={() =>
                                                    handleDeleteItem(post.id)
                                                }
                                            >
                                                <IconTrash />
                                            </Button>
                                            <ToggleSwitch
                                                object={PostService}
                                                status={post.status}
                                                id={post.id}
                                                isLoad={isLoad}
                                                setIsLoad={setIsLoad}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
            {totalPage > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    handlePageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default PostList;
