import { Button } from '../../../components/button';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { useEffect, useState } from 'react';
import { TopicService } from '../../../services';
import { Slide, toast } from 'react-toastify';
import { Dropdown } from '../../../components/dropdown';
import { useNavigate, useParams } from 'react-router-dom';

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

const TopicEdit = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [topics, setTopics] = useState([]);
    const [name, setName] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);
    useEffect(() => {
        (async () => {
            const res = await TopicService.getList();
            setTopics(res.topics);
            if (res.status === true) {
                toast.success(res.message, {
                    transition: Slide,
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            }
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const data = await TopicService.getById(id);
            const topic = data.topic;
            setName(topic?.name);
            setDescription(topic?.description);
            setSortOrder(topic?.sort_order);
            setStatus(topic?.status);
        })();
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = {
            name,
            sort_order,
            description,
            status,
        };
        (async () => {
            TopicService.update(id, topic).then((result) => {
                if (result.status === true) {
                    toast.success(result.message);
                }
                navigator('/admin/topic', { replace: true });
            });
        })();
    };

    return (
        <>
            <HeaderContent title={'Edit Topic Item'} />
            <form onSubmit={handleSubmit}>
                <div className="flex p-4 gap-x-7">
                    <div className="flex-1">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id={'name'}
                                placeholder={'Enter your topic name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'desc'}>Description</Label>
                            <TextArea
                                id={'desc'}
                                placeholder={'Enter your description'}
                                className={'h-32'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <div className="flex-1">
                        <FormGroup>
                            <Label>Sort order</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        sort_order !== 1
                                            ? `Sau: ${
                                                  topics.find(
                                                      (item) =>
                                                          item.id + 1 ===
                                                          sort_order,
                                                  )?.name
                                              }`
                                            : 'Default'
                                    }
                                    className="!py-[10px]"
                                />
                                <Dropdown.List>
                                    {topics.map((item) => (
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
                        <FormGroup className={'!mb-10'}>
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

export default TopicEdit;
