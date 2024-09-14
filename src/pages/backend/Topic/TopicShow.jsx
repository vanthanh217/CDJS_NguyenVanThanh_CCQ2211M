import { useEffect, useState } from 'react';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useParams } from 'react-router-dom';
import { Table } from '../../../components/table';
import { TopicService } from '../../../services';

const TopicShow = () => {
    const { id } = useParams();
    const [topic, setTopic] = useState({});

    useEffect(() => {
        (async () => {
            const res = await TopicService.getById(id);
            setTopic(res.topic);
        })();
    }, [id]);

    const createdAt = topic?.created_at;
    let date = new Date(createdAt);
    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();
    const newCreatedAt = `${day}/${month}/${year}`;
    const updatedAt = topic?.created_at;
    date = new Date(updatedAt);
    day = `0${date.getDate()}`.slice(-2);
    month = `0${date.getMonth() + 1}`.slice(-2);
    year = date.getFullYear();
    const newUpdateddAt = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Detail Topic Item'} />
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
                        <td>{topic.id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{topic.name}</td>
                    </tr>
                    <tr>
                        <td>Slug</td>
                        <td>{topic.slug}</td>
                    </tr>
                    <tr>
                        <td>Sort order</td>
                        <td>{topic.sort_order}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{topic.description}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{newCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Created by</td>
                        <td>{topic.created_by}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{newUpdateddAt}</td>
                    </tr>
                    <tr>
                        <td>Updated by</td>
                        <td>{topic.updated_by}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{topic.status}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default TopicShow;
