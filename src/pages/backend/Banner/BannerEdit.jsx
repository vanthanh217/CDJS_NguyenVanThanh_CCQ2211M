import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useEffect, useState } from 'react';
import { Button } from '../../../components/button';
import { Dropdown } from '../../../components/dropdown';
import { FormGroup, Input, Label } from '../../../components/form';
import { ImageUpload } from '../../../components/image';
import BannerService from '../../../services/BannerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { urlImage } from '../../../config';

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

const BannerEdit = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState(2);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        (async () => {
            const data = await BannerService.getById(id);
            const banner = data.banner;
            setName(banner?.name);
            if (banner?.image) {
                setImage(banner?.image);
                setCurrentImage(`${urlImage}banner/${banner?.image}`);
            }
            setLink(banner?.link);
            setDescription(banner?.description);
            setPosition(banner?.position);
            setStatus(banner?.status);
        })();
    }, [id]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setCurrentImage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var banner = new FormData();
        banner.append('name', name);
        banner.append('image', image);
        banner.append('link', link);
        banner.append('description', description);
        banner.append('position', position);
        banner.append('status', status);

        (async () => {
            BannerService.update(id, banner).then((result) => {
                if (result.status === true) {
                    toast.success(result.message);
                }
                navigator('/admin/banner', { replace: true });
            });
        })();
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Edit Banner Item'} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="flex-1">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id="name"
                                placeholder={'Enter your name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'link'}>Link</Label>
                            <Input
                                id="link"
                                placeholder={'Enter your link'}
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
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
                                className="h-[280px]"
                                currentImage={currentImage}
                                onChange={handleChangeImage}
                                image={image}
                            />
                        </FormGroup>
                    </div>
                    <div className="w-[450px]">
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
                                    <Dropdown.Option
                                        onClick={() => setPosition('slide')}
                                    >
                                        Slide
                                    </Dropdown.Option>
                                    <Dropdown.Option
                                        onClick={() => setPosition('slideshow')}
                                    >
                                        Slide show
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
                            Update
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BannerEdit;
