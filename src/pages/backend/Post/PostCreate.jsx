import { useEffect, useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label, TextArea } from '../../../components/form';
import { Button } from '../../../components/button';
import { ImageUpload } from '../../../components/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostService, TopicService } from '../../../services';
import { useNavigate } from 'react-router-dom';

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

const PostCreate = () => {
    const navigator = useNavigate();
    const [topics, setTopics] = useState([]);
    const [topic_id, setTopicId] = useState(0);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);

    useEffect(() => {
        (async () => {
            const res = await TopicService.getList();
            setTopics(res.topics);
        })();
    }, []);
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var post = new FormData();
        post.append('topic_id', topic_id);
        post.append('title', title);
        post.append('detail', detail);
        post.append('image', image);
        post.append('type', type);
        post.append('description', description);
        post.append('status', status);
        PostService.insert(post).then((result) => {
            if (result.status === true) {
                toast.success(result.message);
            }
            navigator('/admin/post', { replace: true });
        });
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Create Post'} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="flex-1">
                        <FormGroup>
                            <Label htmlFor={'title'}>Title</Label>
                            <Input
                                id="title"
                                placeholder={'Enter your title'}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'detail'}>Detail</Label>
                            <TextArea
                                id="detail"
                                placeholder={'Enter your detail'}
                                className={'h-44'}
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'description'}>Description</Label>
                            <Input
                                id="description"
                                placeholder={'Enter your description'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Image</Label>
                            <ImageUpload
                                className="h-[250px]"
                                onChange={handleChangeImage}
                                image={image}
                            />
                        </FormGroup>
                    </div>
                    <div className="w-[450px]">
                        <FormGroup>
                            <Label>Topic</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        topic_id !== 0
                                            ? topics.find(
                                                  (item) =>
                                                      item.id === topic_id,
                                              ).name
                                            : 'Select the topic'
                                    }
                                />
                                <Dropdown.List>
                                    {topics.map((item) => (
                                        <Dropdown.Option
                                            key={item.id}
                                            onClick={() => setTopicId(item.id)}
                                        >
                                            {item.name}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label>Type</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        type ? type : 'Select the type'
                                    }
                                />
                                <Dropdown.List>
                                    <Dropdown.Option
                                        onClick={() => setType('Post')}
                                    >
                                        Post
                                    </Dropdown.Option>
                                    <Dropdown.Option
                                        onClick={() => setType('Page')}
                                    >
                                        Page
                                    </Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
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
                        <Button
                            type={'submit'}
                            kind={'default'}
                            className={'bg-sky-400 py-3 w-40'}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default PostCreate;
