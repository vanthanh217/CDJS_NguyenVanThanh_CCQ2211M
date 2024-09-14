import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { urlImage } from '../../../config';
import { PostService, TopicService } from '../../../services';

const PostShow = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [topic, setTopic] = useState({});

    useEffect(() => {
        (async () => {
            const res = await PostService.getById(id);
            setPost(res.post);
        })();
    }, [id]);
    useEffect(() => {
        (async () => {
            const res = await TopicService.getById(post.topic_id);
            setTopic(res.topic);
        })();
    }, [post.topic_id]);

    const createdAt = post?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = post?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Detail post item'} />
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
                        <td>{post.id}</td>
                    </tr>
                    <tr>
                        <td>Topic</td>
                        <td>{post.topic_id ? topic?.name : 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            {post.image ? (
                                <img
                                    src={`${urlImage}post/${post.image}`}
                                    alt=""
                                    className="object-cover h-60 rounded-xl"
                                />
                            ) : (
                                'No image'
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>
                            <p className="text-wrap">{post.title}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Slug</td>
                        <td>{post.slug}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{post.type}</td>
                    </tr>
                    <tr>
                        <td>Detail</td>
                        <td>
                            <p className="text-wrap">{post.detail}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <p className="text-wrap">{post.description}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{post.created_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{post.updated_by || 'Null'}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{post.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default PostShow;
