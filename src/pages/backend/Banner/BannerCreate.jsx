import { useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label } from '../../../components/form';
import { Button } from '../../../components/button';
import { ImageUpload } from '../../../components/image';

const sortOrder = [
    {
        value: 1,
        label: 'Default',
    },
];

const statusList = [
    {
        value: 1,
        label: 'Xuất bản',
    },
    {
        value: 2,
        label: 'Chưa xuất bản',
    },
];

const BannerCreate = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [sort_order, setSortOrder] = useState(1);
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState(2);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const banner = {
            name,
            image,
            link,
            description,
            sort_order,
            position,
            status,
        };
        console.log(banner);
    };

    return (
        <>
            <HeaderContent title={'Create banner'} addBtn={false} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="grow">
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
                            <Label>Sort</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        sort_order
                                            ? sortOrder.find(
                                                  (item) =>
                                                      item.value === sort_order,
                                              ).label
                                            : 'Select the sort order'
                                    }
                                />
                                <Dropdown.List>
                                    {sortOrder.map((item) => (
                                        <Dropdown.Option
                                            key={item.value}
                                            onClick={() =>
                                                setSortOrder(item.value)
                                            }
                                        >
                                            {item.label}
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
