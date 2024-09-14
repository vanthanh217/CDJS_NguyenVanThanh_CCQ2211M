import { useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label } from '../../../components/form';
import { Button } from '../../../components/button';
import { ImageUpload } from '../../../components/image';
import BannerService from '../../../services/BannerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const BannerCreate = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState(2);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
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
            const result = await BannerService.insert(banner);
            if (result.status === true) toast.success(result.message);
            else toast.error(result.message);
        })();
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Create banner'} />
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

export default BannerCreate;
